import { benchmark, expect, test } from './lib/test.js';
import { init, Matrix4 } from '../dist/index.esm.js';
import { $ } from './lib/dom.js';
import * as GLM from '../node_modules/gl-matrix/esm/index.js';

const { glMatrixWasm: GLMWasm } = window;

await GLMWasm.init();
await init({ wasm: '../dist/matrix.wasm', simdWasm: '../dist/matrix.simd.wasm' });

//#region tests

// prettier-ignore
test('Matrix4.set', () => {
  const mat4A = new Matrix4();
  const mat4B = new Matrix4();
  mat4A.set(
    1, 0, 0, 1,
    0, 1, 0, 2,
    0, 0, 1, 3,
    0, 0, 0, 1);
  mat4B.set(
    1, 0, 0, 3,
    0, 1, 0, 2,
    0, 0, 1, 1,
    0, 0, 0, 1);
  expect(mat4A.elements).toBe([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    1, 2, 3, 1]);
  expect(mat4B.elements).toBe([
    1, 0, 0, 0,
    0, 1, 0, 0, 
    0, 0, 1, 0, 
    3, 2, 1, 1]);
});

test('Matrix4.multiply', () => {
  const mat4A = new Matrix4();
  const mat4B = new Matrix4();
  mat4A.set(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
  mat4B.set(59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131);
  mat4A.multiply(mat4B);

  expect(mat4A.elements).toBe([
    1585, 5318, 10514, 15894, 1655, 5562, 11006, 16634, 1787, 5980, 11840, 17888, 1861, 6246, 12378,
    18710,
  ]);

  // const mat4A_GLM = GLM.mat4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
  // const mat4B_GLM = GLM.mat4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);
  // const mat4A_GLMWasm = GLMWasm.Matrix4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
  // const mat4B_GLMWasm = GLMWasm.Matrix4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);

  // benchmark({
  //   'simd-wasm-matrix'() {
  //     mat4A.multiply(mat4B);
  //   },
  //   'gl-matrix'() {
  //     GLM.mat4.multiply(mat4A_GLM, mat4A_GLM, mat4B_GLM);
  //   },
  //   'gl-matrix-wasm'() {
  //     GLMWasm.Matrix4.multiply(mat4A_GLMWasm, mat4A_GLMWasm, mat4B_GLMWasm);
  //   },
  // });
});

test('Matrix4.premultiply', () => {
  const mat4A = new Matrix4();
  const mat4B = new Matrix4();
  mat4A.set(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53);
  mat4B.set(59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131);
  mat4B.premultiply(mat4A);

  expect(mat4B.elements).toBe([
    1585, 5318, 10514, 15894, 1655, 5562, 11006, 16634, 1787, 5980, 11840, 17888, 1861, 6246, 12378,
    18710,
  ]);
});

test('Matrix4.determinant', () => {
  const mat4A = new Matrix4();
  expect(mat4A.determinant()).toBe(1);

  mat4A.elements[0] = 2;
  expect(mat4A.determinant()).toBe(2);

  mat4A.elements[0] = 0;
  expect(mat4A.determinant()).toBe(0);

  mat4A.set(2, 3, 4, 5, -1, -21, -3, -4, 6, 7, 8, 10, -8, -9, -10, -12);
  expect(mat4A.determinant()).toBe(76);
});

test('Matrix4.transpose', () => {
  const mat4A = new Matrix4();
  const mat4B = new Matrix4();
  mat4A.transpose();
  expect(mat4A.elements).toBe(mat4B.elements);

  mat4A.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  mat4B.set(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
  mat4B.transpose();
  expect(mat4A.elements).notToBe(mat4B.elements);
  mat4B.transpose();
  expect(mat4A.elements).toBe(mat4B.elements);
});

test('Matrix4.invert', () => {
  const mat4A = new Matrix4();
  const mat4B = new Matrix4();
  mat4A.set(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
  mat4B.set(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);

  mat4A.invert();
  expect(mat4A.elements).toBe([
    0.062068965286016464, -0.07586206495761871, 0.25287356972694397, -0.08045977354049683,
    0.1310344785451889, 0.062068965286016464, -0.8735632300376892, 0.4597701132297516,
    -0.19310344755649567, 0.013793103396892548, 0.28735631704330444, -0.04597701132297516,
    0.16551724076271057, 0.1310344785451889, -0.10344827175140381, -0.10344827175140381,
  ]);

  mat4A.invert();
  expect(mat4A.elements).toBe(mat4B.elements);
});

//#endregion

const names = ['simd-wasm-matrix', 'gl-matrix-wasm', 'gl-matrix'];
const nodes = names.map(i => $(`log-${i}`));
let loopCount = 1000000;

// const GLMWasmRegister = new FinalizationRegistry(ptr => {
//   GLMWasm.freeMatrix4(ptr);
// });
const m00 = new Matrix4();
const m01 = new Matrix4();
const m02 = new Matrix4();
const m10 = GLMWasm.Matrix4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
const m11 = GLMWasm.Matrix4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);
const m12 = GLMWasm.Matrix4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
const m20 = GLM.mat4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
const m21 = GLM.mat4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);
const m22 = GLM.mat4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);

const benchmarks = {
  'instancing[10^5]': {
    [names[0]]() {
      const mat4 = new Matrix4();
      mat4.dispose();
    },
    [names[1]]() {
      const mat4 = GLMWasm.Matrix4.create();
      mat4.free();
      // GLMWasmRegister.register(mat4, mat4.ptr);
    },
    [names[2]]() {
      const mat4 = GLM.mat4.create();
    },
  },
  multiply: {
    [names[0]]() {
      m02.multiplyMatrices(m00, m01);
    },
    [names[1]]() {
      GLMWasm.Matrix4.multiply(m12, m10, m11);
    },
    [names[2]]() {
      GLM.mat4.multiply(m22, m20, m21);
    },
  },
  determinant: {
    [names[0]]() {
      m00.determinant();
    },
    [names[1]]() {
      GLMWasm.Matrix4.determinant(m10);
    },
    [names[2]]() {
      GLM.mat4.determinant(m20);
    },
  },
  invert: {
    [names[0]]() {
      m00.invert();
    },
    [names[1]]() {
      GLMWasm.Matrix4.invert(m10, m10);
    },
    [names[2]]() {
      GLM.mat4.invert(m20, m20);
    },
  },
  invertTransform: {
    [names[0]]() {
      m00.invertTransform();
    },
  },
  transpose: {
    [names[0]]() {
      m00.transpose();
    },
    [names[1]]() {
      GLMWasm.Matrix4.transpose(m10, m10);
    },
    [names[2]]() {
      GLM.mat4.transpose(m20, m20);
    },
  },
};

function bench() {
  const logs = {};
  // loopCount变更下次生效
  const currentLoopCount = loopCount;
  Object.keys(benchmarks).forEach(fnName => {
    const runCfg = benchmarks[fnName];
    const match = fnName.match(/\[10\^(\d)\]/);
    const loopCount = match ? Math.min(10 ** (match[1] | 0), currentLoopCount) : currentLoopCount;
    const result = benchmark(runCfg, loopCount, '', false);
    logs[fnName] = result;
  });

  // 更新UI
  Object.keys(logs).forEach((methodName, i) => {
    const result = logs[methodName];
    names.forEach((name, index) => {
      const $log = nodes[index];
      $log.children[i].innerText =
        result[name] !== undefined ? result[name].toFixed(2) + 'ms' : 'NaN';
    });
  });
}

function initUI() {
  const $btnCan = $('btn-can');
  const $logName = $('log-name');
  const btns = [...$btnCan.children];
  btns.forEach(btn => {
    btn.onclick = () => {
      loopCount = 10 ** parseInt(btn.innerText.replace('10^', ''), 10);
      $btnCan.getElementsByClassName('active')[0]?.classList.remove('active');
      btn.classList.add('active');
    };
  });

  Object.keys(benchmarks).forEach(name => {
    const $div = document.createElement('div');
    $div.innerText = name;
    $logName.appendChild($div);

    nodes.forEach($log => {
      const $div = document.createElement('div');
      $div.dataset.name = name;
      $log.appendChild($div);
    });
  });
}

initUI();
bench();
setInterval(bench, 2000);
