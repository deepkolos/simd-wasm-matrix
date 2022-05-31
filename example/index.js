import { expect, test } from './test.js';
import { init, Matrix4 } from '../dist/index.esm.js';

await init({ wasm: '../dist/matrix.wasm', simdWasm: '../dist/matrix.simd.wasm' });

// prettier-ignore
test('Matrix4', () => {
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

  mat4A.multiply(mat4B);
  expect(mat4A.elements).toBe([
    1, 0, 0, 0,
    0, 1, 0, 0, 
    0, 0, 1, 0, 
    4, 4, 4, 1]);
});
