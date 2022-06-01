import { malloc, wasmExports, wasmRegistry, free, wasmMemoryBuffer } from './wasm';

export class Matrix4 {
  private ptr: number;
  private _elements: Float32Array;

  constructor() {
    this.ptr = malloc(16 * 4);
    this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
    this.identity();
    wasmRegistry.register(this, this.ptr);
  }

  // --------- operation ---------

  multiply(mat: Matrix4): this {
    wasmExports.matrix4_multiply(this.ptr, mat.ptr, this.ptr);
    return this;
  }
  premultiply(mat: Matrix4): this {
    wasmExports.matrix4_multiply(mat.ptr, this.ptr, this.ptr);
    return this;
  }
  multiplyMatrices(a: Matrix4, b: Matrix4): this {
    wasmExports.matrix4_multiply(a.ptr, b.ptr, this.ptr);
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

  // prettier-ignore
  set(
    n11: number, n12: number, n13: number, n14: number, 
    n21: number, n22: number, n23: number, n24: number, 
    n31: number, n32: number, n33: number, n34: number, 
    n41: number, n42: number, n43: number, n44: number,
  ): this {
    const te = this.elements;
    te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14; 
    te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24; 
    te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34; 
    te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
    return this;
  }
  identity(): this {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone(): Matrix4 {
    return new Matrix4().fromArray(this.elements);
  }
  // prettier-ignore
  copy(m: Matrix4) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0]; te[1] = me[1]; te[2] = me[2]; te[3] = me[3]; 
    te[4] = me[4]; te[5] = me[5]; te[6] = me[6]; te[7] = me[7]; 
    te[8] = me[8]; te[9] = me[9]; te[10] = me[10]; te[11] = me[11]; 
    te[12] = me[12]; te[13] = me[13]; te[14] = me[14]; te[15] = me[15];
    return this;
  }
  copyPosition(m: Matrix4) {
    const te = this.elements,
      me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  fromArray(array: ArrayLike<number>, offset = 0) {
    const te = this.elements;
    for (let i = 0; i < 16; i++) te[i] = array[i + offset];
    return this;
  }

  // 支持手动提前释放
  dispose() {
    wasmRegistry.unregister(this);
    free(this.ptr);
  }
}
