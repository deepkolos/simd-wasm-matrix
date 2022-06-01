import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// const prod = !process.env.ROLLUP_WATCH;

const plugins = [resolve(), sucrase({ transforms: ['typescript'] })];

export default [
  {
    input: './src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/index.esm.js',
    },
    plugins,
  },
  {
    input: './src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/index.esm.min.js',
    },
    plugins: [...plugins, terser()],
  },
];
