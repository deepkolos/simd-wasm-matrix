// @ts-nocheck
import type { Matrix4 } from 'three';
import { malloc, wasmExports, wasmRegistry, free, wasmMemoryBuffer } from './wasm';

export function convertTHREEMatrix4(Matrix4Ctor: new () => Matrix4): Matrix4 {
  class Matrix4Wasm extends Matrix4Ctor {
    public ptr: number;
    private _elements: Float32Array;
    private _disposed = false;

    constructor() {
      super();
      this.ptr = malloc(16 * 4);
      this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
      this.identity();
      wasmRegistry.register(this, this.ptr);
    }

    // --------- operation ---------

    multiply(mat: Matrix4Wasm): this {
      wasmExports.matrix4_multiply(this.ptr, mat.ptr, this.ptr);
      return this;
    }

    multiply(mat: Matrix4Wasm): this {
      wasmExports.matrix4_multiply(this.ptr, mat.ptr, this.ptr);
      return this;
    }
    premultiply(mat: Matrix4Wasm): this {
      wasmExports.matrix4_multiply(mat.ptr, this.ptr, this.ptr);
      return this;
    }
    multiplyMatrices(a: Matrix4Wasm, b: Matrix4Wasm): this {
      wasmExports.matrix4_multiply(a.ptr, b.ptr, this.ptr);
      return this;
    }
    multiplyScalar(s: number) {
      wasmExports.matrix4_multiply_scalar(this.ptr, s);
      return this;
    }

    determinant(): number {
      return wasmExports.matrix4_determinant(this.ptr);
    }
    transpose(): this {
      wasmExports.matrix4_transpose(this.ptr);
      return this;
    }
    invert(): this {
      wasmExports.matrix4_invert(this.ptr);
      return this;
    }
    invertTransform(): this {
      wasmExports.matrix4_invert_transform(this.ptr);
      return this;
    }

    // --------- getter setter ---------

    get elements(): Float32Array {
      if (!this._elements.length) {
        this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
      }
      return this._elements;
    }

    set elements(v: Array) {
      if (!this._elements) return;
      if (!this._elements.length) {
        this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
      }
      for (let len = Math.min(v.length, 16), i = 0; i < len; i++) {
        this._elements[i] = v[i];
      }
    }

    // 支持手动提前释放C++侧内存
    dispose() {
      if (!this._disposed) {
        wasmRegistry.unregister(this);
        free(this.ptr);
        this._disposed = true;
      }
    }
  }
  return Matrix4Wasm as Matrix4;
}
