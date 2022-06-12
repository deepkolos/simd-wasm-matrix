import { Vector3 } from './Vector3';
import { malloc, wasmExports, wasmRegistry, free, wasmMemoryBuffer } from './wasm';

export class Matrix4 {
  public isMatrix4 = true;
  public ptr: number;
  private _elements: Float32Array;
  private _disposed = false;

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

  scale(v: Vector3) {
    wasmExports.matrix4_scale(this.ptr, v.ptr);
    return this;
  }

  lookAt(eye: Vector3, target: Vector3, up: Vector3) {
    // const te = this.elements;
    // _z.subVectors(eye, target);
    // if (_z.lengthSq() === 0) {
    //   // eye and target are in the same position
    //   _z.z = 1;
    // }
    // _z.normalize();
    // _x.crossVectors(up, _z);
    // if (_x.lengthSq() === 0) {
    //   // up and z are parallel
    //   if (Math.abs(up.z) === 1) {
    //     _z.x += 0.0001;
    //   } else {
    //     _z.z += 0.0001;
    //   }
    //   _z.normalize();
    //   _x.crossVectors(up, _z);
    // }
    // _x.normalize();
    // _y.crossVectors(_z, _x);
    // te[0] = _x.x;
    // te[4] = _y.x;
    // te[8] = _z.x;
    // te[1] = _x.y;
    // te[5] = _y.y;
    // te[9] = _z.y;
    // te[2] = _x.z;
    // te[6] = _y.z;
    // te[10] = _z.z;
    // return this;
  }

  equals(matrix) {
    const te = this.elements;
    const me = matrix.elements;

    for (let i = 0; i < 16; i++) if (te[i] !== me[i]) return false;

    return true;
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
  setFromMatrix3(m) {
    const me = m.elements;
    // prettier-ignore
    this.set(
			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1
		);
    return this;
  }
  setPosition(x: number, y: number, z: number) {
    const te = this.elements;

    te[12] = x;
    te[13] = y;
    te[14] = z;
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
  toArray(array = [], offset = 0) {
    const te = this.elements;

    array[offset] = te[0];
    array[offset + 1] = te[1];
    array[offset + 2] = te[2];
    array[offset + 3] = te[3];

    array[offset + 4] = te[4];
    array[offset + 5] = te[5];
    array[offset + 6] = te[6];
    array[offset + 7] = te[7];

    array[offset + 8] = te[8];
    array[offset + 9] = te[9];
    array[offset + 10] = te[10];
    array[offset + 11] = te[11];

    array[offset + 12] = te[12];
    array[offset + 13] = te[13];
    array[offset + 14] = te[14];
    array[offset + 15] = te[15];

    return array;
  }

  getMaxScaleOnAxis() {
    const te = this.elements;
    const scaleXSq = te[0] * te[0] + te[1] * te[1] + te[2] * te[2];
    const scaleYSq = te[4] * te[4] + te[5] * te[5] + te[6] * te[6];
    const scaleZSq = te[8] * te[8] + te[9] * te[9] + te[10] * te[10];
    return Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
  }
  extractBasis(xAxis, yAxis, zAxis) {
    xAxis.setFromMatrixColumn(this, 0);
    yAxis.setFromMatrixColumn(this, 1);
    zAxis.setFromMatrixColumn(this, 2);
    return this;
  }
  makeBasis(xAxis, yAxis, zAxis) {
    // prettier-ignore
    this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);
    return this;
  }
  makeRotationFromEuler(euler) {
    if (!(euler && euler.isEuler)) {
      console.error(
        'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.',
      );
    }

    const te = this.elements;

    const x = euler.x,
      y = euler.y,
      z = euler.z;
    const a = Math.cos(x),
      b = Math.sin(x);
    const c = Math.cos(y),
      d = Math.sin(y);
    const e = Math.cos(z),
      f = Math.sin(z);

    if (euler.order === 'XYZ') {
      const ae = a * e,
        af = a * f,
        be = b * e,
        bf = b * f;

      te[0] = c * e;
      te[4] = -c * f;
      te[8] = d;

      te[1] = af + be * d;
      te[5] = ae - bf * d;
      te[9] = -b * c;

      te[2] = bf - ae * d;
      te[6] = be + af * d;
      te[10] = a * c;
    } else if (euler.order === 'YXZ') {
      const ce = c * e,
        cf = c * f,
        de = d * e,
        df = d * f;

      te[0] = ce + df * b;
      te[4] = de * b - cf;
      te[8] = a * d;

      te[1] = a * f;
      te[5] = a * e;
      te[9] = -b;

      te[2] = cf * b - de;
      te[6] = df + ce * b;
      te[10] = a * c;
    } else if (euler.order === 'ZXY') {
      const ce = c * e,
        cf = c * f,
        de = d * e,
        df = d * f;

      te[0] = ce - df * b;
      te[4] = -a * f;
      te[8] = de + cf * b;

      te[1] = cf + de * b;
      te[5] = a * e;
      te[9] = df - ce * b;

      te[2] = -a * d;
      te[6] = b;
      te[10] = a * c;
    } else if (euler.order === 'ZYX') {
      const ae = a * e,
        af = a * f,
        be = b * e,
        bf = b * f;

      te[0] = c * e;
      te[4] = be * d - af;
      te[8] = ae * d + bf;

      te[1] = c * f;
      te[5] = bf * d + ae;
      te[9] = af * d - be;

      te[2] = -d;
      te[6] = b * c;
      te[10] = a * c;
    } else if (euler.order === 'YZX') {
      const ac = a * c,
        ad = a * d,
        bc = b * c,
        bd = b * d;

      te[0] = c * e;
      te[4] = bd - ac * f;
      te[8] = bc * f + ad;

      te[1] = f;
      te[5] = a * e;
      te[9] = -b * e;

      te[2] = -d * e;
      te[6] = ad * f + bc;
      te[10] = ac - bd * f;
    } else if (euler.order === 'XZY') {
      const ac = a * c,
        ad = a * d,
        bc = b * c,
        bd = b * d;

      te[0] = c * e;
      te[4] = -f;
      te[8] = d * e;

      te[1] = ac * f + bd;
      te[5] = a * e;
      te[9] = ad * f - bc;

      te[2] = bc * f - ad;
      te[6] = b * e;
      te[10] = bd * f + ac;
    }

    // bottom row
    te[3] = 0;
    te[7] = 0;
    te[11] = 0;

    // last column
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;

    return this;
  }
  makeRotationFromQuaternion(q) {
    // return this.compose(_zero, q, _one);
  }
  makeTranslation(x: number, y: number, z: number) {
    this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1);
    return this;
  }
  makeRotationX(theta: number) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationY(theta: number) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationZ(theta: number) {
    const c = Math.cos(theta),
      s = Math.sin(theta);
    this.set(c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  makeRotationAxis(axis, angle) {
    // Based on http://www.gamedev.net/reference/articles/article1199.asp

    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const t = 1 - c;
    const x = axis.x,
      y = axis.y,
      z = axis.z;
    const tx = t * x,
      ty = t * y;

    this.set(
      tx * x + c,
      tx * y - s * z,
      tx * z + s * y,
      0,
      tx * y + s * z,
      ty * y + c,
      ty * z - s * x,
      0,
      tx * z - s * y,
      ty * z + s * x,
      t * z * z + c,
      0,
      0,
      0,
      0,
      1,
    );
    return this;
  }
  makeScale(x: number, y: number, z: number) {
    this.set(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
    return this;
  }
  makeShear(xy: number, xz: number, yx: number, yz: number, zx: number, zy: number) {
    this.set(1, yx, zx, 0, xy, 1, zy, 0, xz, yz, 1, 0, 0, 0, 0, 1);
    return this;
  }
  // prettier-ignore
  makePerspective( left: number, right: number, top: number, bottom: number, near: number, far: number ) {
		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );
		const c = - ( far + near ) / ( far - near );
		const d = - 2 * far * near / ( far - near );

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;
		return this;
	}
  // prettier-ignore
  makeOrthographic( left, right: number, top: number, bottom: number, near: number, far: number ) {
		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;
		const z = ( far + near ) * p;
		te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
		te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;
		return this;
	}

  compose(position, quaternion, scale) {
    const te = this.elements;

    const x = quaternion._x,
      y = quaternion._y,
      z = quaternion._z,
      w = quaternion._w;
    const x2 = x + x,
      y2 = y + y,
      z2 = z + z;
    const xx = x * x2,
      xy = x * y2,
      xz = x * z2;
    const yy = y * y2,
      yz = y * z2,
      zz = z * z2;
    const wx = w * x2,
      wy = w * y2,
      wz = w * z2;

    const sx = scale.x,
      sy = scale.y,
      sz = scale.z;

    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;

    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;

    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;

    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;

    return this;
  }
  decompose(position, quaternion, scale) {
    // const te = this.elements;

    // let sx = _v1.set(te[0], te[1], te[2]).length();
    // const sy = _v1.set(te[4], te[5], te[6]).length();
    // const sz = _v1.set(te[8], te[9], te[10]).length();

    // // if determine is negative, we need to invert one scale
    // const det = this.determinant();
    // if (det < 0) sx = -sx;

    // position.x = te[12];
    // position.y = te[13];
    // position.z = te[14];

    // // scale the rotation part
    // _m1.copy(this);

    // const invSX = 1 / sx;
    // const invSY = 1 / sy;
    // const invSZ = 1 / sz;

    // _m1.elements[0] *= invSX;
    // _m1.elements[1] *= invSX;
    // _m1.elements[2] *= invSX;

    // _m1.elements[4] *= invSY;
    // _m1.elements[5] *= invSY;
    // _m1.elements[6] *= invSY;

    // _m1.elements[8] *= invSZ;
    // _m1.elements[9] *= invSZ;
    // _m1.elements[10] *= invSZ;

    // quaternion.setFromRotationMatrix(_m1);

    // scale.x = sx;
    // scale.y = sy;
    // scale.z = sz;

    return this;
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
