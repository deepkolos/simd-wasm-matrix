import { benchmark, expect, test } from './lib/test.js';
import { init, Matrix4 } from '../dist/index.esm.js';
import * as GLM from '../node_modules/gl-matrix/esm/index.js';

const { glMatrixWasm: GLMWasm } = window;

await GLMWasm.init();
await init({ wasm: '../dist/matrix.wasm', simdWasm: '../dist/matrix.simd.wasm' });

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

  const mat4A_GLM = GLM.mat4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
  const mat4B_GLM = GLM.mat4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);
  const mat4A_GLMWasm = GLMWasm.Matrix4.fromValues(7, 3, 6, 9, 2, 3, 2, 5, 1, 9, 5, 8, 3, 7, 2, 2);
  const mat4B_GLMWasm = GLMWasm.Matrix4.fromValues(2, 5, 7, 8, 4, 8, 3, 9, 2, 5, 4, 9, 5, 6, 3, 1);
  
  benchmark({
    'simd-wasm-matrix'() {
      mat4A.multiply(mat4B);
    },
    'gl-matrix'() {
      GLM.mat4.multiply(mat4A_GLM, mat4A_GLM, mat4B_GLM);
    },
    'gl-matrix-wasm'() {
      GLMWasm.Matrix4.multiply(mat4A_GLMWasm, mat4A_GLMWasm, mat4B_GLMWasm);
    },
  });
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
    0.04736842215061188, 0.03684210777282715, 0.24561403691768646, -0.11403509229421616,
    0.10000000149011612, 0.07894737273454666, -1.1052632331848145, 0.7894737124443054,
    -0.1473684310913086, -0.11578947305679321, 0.44736844301223755, -0.15789474546909332,
    0.12631578743457794, 0.14210526645183563, -0.1315789520740509, 0.05263157933950424,
  ]);

  mat4A.invert();
  expect(mat4A.elements).toBe(mat4B.elements);
});
