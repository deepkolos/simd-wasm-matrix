import { free, malloc, wasmMemoryBuffer, wasmRegistry } from './wasm';

export class Vector3 {
  public ptr: number;
  public isVector3 = true;
  private _elements: Float32Array;

  constructor(x = 0, y = 0, z = 0) {
    this.ptr = malloc(3 * 4);
    this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    wasmRegistry.register(this, this.ptr);
    this._elements[0] = x;
    this._elements[1] = y;
    this._elements[2] = z;
  }

  // --------- getter setter ---------

  get x() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    return this._elements[0];
  }
  get y() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    return this._elements[1];
  }
  get z() {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    return this._elements[2];
  }
  set x(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    this._elements[0] = v;
  }
  set y(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    this._elements[1] = v;
  }
  set z(v: number) {
    if (!this._elements.length) this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 3);
    this._elements[2] = v;
  }

  dispose() {
    wasmRegistry.unregister(this);
    free(this.ptr);
  }
}
