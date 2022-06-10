#!/usr/bin/env zx
import { argv, path, fs } from 'zx';
import chokidar from 'chokidar';

const basename = 'matrix';
const srcPath = path.resolve(__dirname, '../src');
const sources = fs.readdirSync(srcPath).filter(i => i.endsWith('.c'));
const sourcesPath = sources.map(i => `src/${i}`);
const watchMode = argv.w;
const prodMode = argv.p;

const flags = [
  watchMode ? '-g' : '',
  `--target=wasm32`,
  '-nostdlib',
  prodMode ? '-O3' : '',
  '-flto',
  '-DNDEBUG',
  '-Wl,--lto-O3',
  '-Wl,--no-entry',
  '-Wl,--export-all',
];

async function compile() {
  $.verbose = true;
  await $`clang ${flags} -o ${`dist/${basename}.wasm`} ${sourcesPath} `;
  $.verbose = false;
  await $`wasm-opt dist/${basename}.wasm --print -S -o dist/${basename}.wat`;
}

async function compileSIMD() {
  $.verbose = true;
  await $`clang ${flags} -msimd128 -D__SIMD__=1 -o ${`dist/${basename}.simd.wasm`} ${sourcesPath} `;
  $.verbose = false;
  await $`wasm-opt dist/${basename}.simd.wasm --print -S -o dist/${basename}.simd.wat`;
}

async function build() {
  try {
    const startBuildTime = performance.now();
    await Promise.all([compile(), compileSIMD()]);
    console.log(`build cost: ${(performance.now() - startBuildTime).toFixed(2)}ms`);
  } catch (error) {
    console.log(`build fail`);
  }
}

await build();

if (watchMode) {
  const watcher = chokidar.watch(srcPath, { ignored: /^\.ts/ });
  watcher.on('change', build);
}

/** 生成 compile_commands.json 给cpp插件用 */

const compile_commands = sources.map(file => {
  return {
    directory: path.resolve(__dirname, `../src/`),
    command: `clang -msimd128 -D__SIMD__=1 ${flags.join(' ')}`,
    file,
  };
});

fs.writeFile(
  path.resolve(__dirname, '../compile_commands.json'),
  JSON.stringify(compile_commands, null, 2),
  { encoding: 'utf8' },
);
