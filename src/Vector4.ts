import { free, malloc, wasmMemoryBuffer, wasmRegistry } from './wasm';

export class Vector4 {
  public ptr: number;
  public isVector3 = true;
  private _elements: Float32Array;

  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.ptr = malloc(4 * 4);
    this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    wasmRegistry.register(this, this.ptr);
    this._elements[0] = x;
    this._elements[1] = y;
    this._elements[2] = z;
    this._elements[3] = z;
  }

  // --------- getter setter ---------

  get x() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    return this._elements[0];
  }
  get y() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    return this._elements[1];
  }
  get z() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    return this._elements[2];
  }
  get w() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    return this._elements[3];
  }

  set x(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    this._elements[0] = v;
  }
  set y(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    this._elements[1] = v;
  }
  set z(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    this._elements[2] = v;
  }
  set w(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 4);
    this._elements[3] = v;
  }

  dispose() {
    wasmRegistry.unregister(this);
    free(this.ptr);
  }
}
