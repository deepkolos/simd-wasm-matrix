#include <wasm_simd128.h>

// -------------- Matrix4 --------------

#ifdef __SIMD__

static __inline__ v128_t wasm_f32x4_dot_xyzw(v128_t a, v128_t b) {
  v128_t xyzw = wasm_f32x4_mul(a, b);
  v128_t zwxy = wasm_i32x4_shuffle(xyzw, xyzw, 2, 3, 4, 5);
  v128_t abab = wasm_f32x4_add(xyzw, zwxy);
  v128_t baba = wasm_i32x4_shuffle(abab, abab, 1, 0, 5, 4);
  v128_t cccc = wasm_f32x4_add(abab, baba);
  return cccc;
}

static __inline__ v128_t wasm_f32x4_dot_xy__(v128_t a, v128_t b) {
  v128_t xyxy = wasm_f32x4_mul(a, b);
  v128_t yxyx = wasm_i32x4_shuffle(xyxy, xyxy, 1, 0, 5, 4);
  v128_t aaaa = wasm_f32x4_add(xyxy, yxyx);
  return aaaa;
}

void matrix4_multiply(float const a[16], float const b[16], float out[16]) {
  v128_t a_col_0 = wasm_v128_load(a);
  v128_t a_col_1 = wasm_v128_load(a + 4);
  v128_t a_col_2 = wasm_v128_load(a + 8);
  v128_t a_col_3 = wasm_v128_load(a + 12);

  v128_t o_col_0 = wasm_f32x4_add(
      wasm_f32x4_add(
          wasm_f32x4_add(wasm_f32x4_mul(wasm_f32x4_splat(b[0]), a_col_0),
                         wasm_f32x4_mul(wasm_f32x4_splat(b[1]), a_col_1)),
          wasm_f32x4_mul(wasm_f32x4_splat(b[2]), a_col_2)),
      wasm_f32x4_mul(wasm_f32x4_splat(b[3]), a_col_3));
  v128_t o_col_1 = wasm_f32x4_add(
      wasm_f32x4_add(
          wasm_f32x4_add(wasm_f32x4_mul(wasm_f32x4_splat(b[4]), a_col_0),
                         wasm_f32x4_mul(wasm_f32x4_splat(b[5]), a_col_1)),
          wasm_f32x4_mul(wasm_f32x4_splat(b[6]), a_col_2)),
      wasm_f32x4_mul(wasm_f32x4_splat(b[7]), a_col_3));
  v128_t o_col_2 = wasm_f32x4_add(
      wasm_f32x4_add(
          wasm_f32x4_add(wasm_f32x4_mul(wasm_f32x4_splat(b[8]), a_col_0),
                         wasm_f32x4_mul(wasm_f32x4_splat(b[9]), a_col_1)),
          wasm_f32x4_mul(wasm_f32x4_splat(b[10]), a_col_2)),
      wasm_f32x4_mul(wasm_f32x4_splat(b[11]), a_col_3));
  v128_t o_col_3 = wasm_f32x4_add(
      wasm_f32x4_add(
          wasm_f32x4_add(wasm_f32x4_mul(wasm_f32x4_splat(b[12]), a_col_0),
                         wasm_f32x4_mul(wasm_f32x4_splat(b[13]), a_col_1)),
          wasm_f32x4_mul(wasm_f32x4_splat(b[14]), a_col_2)),
      wasm_f32x4_mul(wasm_f32x4_splat(b[15]), a_col_3));

  wasm_v128_store(out, o_col_0);
  wasm_v128_store(out + 4, o_col_1);
  wasm_v128_store(out + 8, o_col_2);
  wasm_v128_store(out + 12, o_col_3);
}

float matrix4_determinant(v128_t const a_[4]) {
  // float a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  // float a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  // float a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  // float a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  v128_t a0_ = a_[0];
  v128_t a1_ = a_[1];
  v128_t a2_ = a_[2];
  v128_t a3_ = a_[3];

  // v128_t a0_ = wasm_v128_load(a);
  // v128_t a1_ = wasm_v128_load(a + 4);
  // v128_t a2_ = wasm_v128_load(a + 8);
  // v128_t a3_ = wasm_v128_load(a + 12);

  // 出奇的有规律的一般都是好算法...
  v128_t l0, l1, l2, r0, r1, r2, r;

  l0 = wasm_i32x4_shuffle(a0_, a0_, 0, 0, 0, 1);
  l1 = wasm_i32x4_shuffle(a0_, a0_, 1, 2, 3, 2);
  r0 = wasm_i32x4_shuffle(a1_, a1_, 1, 2, 3, 2);
  r1 = wasm_i32x4_shuffle(a1_, a1_, 0, 0, 0, 1);
  v128_t s0 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s0       l0    r0    l1    r1
  // float b00 = a00 * a11 - a01 * a10;
  // float b01 = a00 * a12 - a02 * a10;
  // float b02 = a00 * a13 - a03 * a10;
  // float b03 = a01 * a12 - a02 * a11;

  l0 = wasm_i32x4_shuffle(a0_, a2_, 1, 2, 4, 4);
  l1 = wasm_i32x4_shuffle(a0_, a2_, 3, 3, 5, 6);
  r0 = wasm_i32x4_shuffle(a1_, a3_, 3, 3, 5, 6);
  r1 = wasm_i32x4_shuffle(a1_, a3_, 1, 2, 4, 4);
  v128_t s1 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s1       l0    r0    l1    r1
  // float b04 = a01 * a13 - a03 * a11;
  // float b05 = a02 * a13 - a03 * a12;
  // float b06 = a20 * a31 - a21 * a30;
  // float b07 = a20 * a32 - a22 * a30;

  l0 = wasm_i32x4_shuffle(a2_, a2_, 0, 1, 1, 2);
  l1 = wasm_i32x4_shuffle(a2_, a2_, 3, 2, 3, 3);
  r0 = wasm_i32x4_shuffle(a3_, a3_, 3, 2, 3, 3);
  r1 = wasm_i32x4_shuffle(a3_, a3_, 0, 1, 1, 2);
  v128_t s2 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s2       l0    r0    l1    r1
  // float b08 = a20 * a33 - a23 * a30;
  // float b09 = a21 * a32 - a22 * a31;
  // float b10 = a21 * a33 - a23 * a31;
  // float b11 = a22 * a33 - a23 * a32;

  v128_t d0l = wasm_i32x4_shuffle(s0, s1, 0, 5, 2, 3);
  v128_t d0r = wasm_i32x4_shuffle(s2, s1, 3, 6, 1, 0);
  v128_t d1l = wasm_i32x4_shuffle(s0, s1, 4, 1, 4, 1);
  v128_t d1r = wasm_i32x4_shuffle(s1, s2, 3, 6, 3, 6);
  v128_t d0 = wasm_f32x4_dot_xyzw(d0l, d0r);
  v128_t d1 = wasm_f32x4_dot_xy__(d1l, d1r);
  v128_t v_det = wasm_f32x4_sub(d0, d1);

  return wasm_f32x4_extract_lane(v_det, 0);
}

void matrix4_invert(v128_t a_[4]) {
  // float a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  // float a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  // float a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  // float a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // v128_t a0_ = wasm_v128_load(a);
  // v128_t a1_ = wasm_v128_load(a + 4);
  // v128_t a2_ = wasm_v128_load(a + 8);
  // v128_t a3_ = wasm_v128_load(a + 12);
  v128_t a0_ = a_[0];
  v128_t a1_ = a_[1];
  v128_t a2_ = a_[2];
  v128_t a3_ = a_[3];

  // 出奇的有规律的一般都是好算法...
  v128_t l0, l1, l2, r0, r1, r2, r;

  l0 = wasm_i32x4_shuffle(a0_, a0_, 0, 0, 0, 1);
  l1 = wasm_i32x4_shuffle(a0_, a0_, 1, 2, 3, 2);
  r0 = wasm_i32x4_shuffle(a1_, a1_, 1, 2, 3, 2);
  r1 = wasm_i32x4_shuffle(a1_, a1_, 0, 0, 0, 1);
  v128_t s0 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s0       l0    r0    l1    r1
  // float b00 = a00 * a11 - a01 * a10;
  // float b01 = a00 * a12 - a02 * a10;
  // float b02 = a00 * a13 - a03 * a10;
  // float b03 = a01 * a12 - a02 * a11;

  l0 = wasm_i32x4_shuffle(a0_, a2_, 1, 2, 4, 4);
  l1 = wasm_i32x4_shuffle(a0_, a2_, 3, 3, 5, 6);
  r0 = wasm_i32x4_shuffle(a1_, a3_, 3, 3, 5, 6);
  r1 = wasm_i32x4_shuffle(a1_, a3_, 1, 2, 4, 4);
  v128_t s1 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s1       l0    r0    l1    r1
  // float b04 = a01 * a13 - a03 * a11;
  // float b05 = a02 * a13 - a03 * a12;
  // float b06 = a20 * a31 - a21 * a30;
  // float b07 = a20 * a32 - a22 * a30;

  l0 = wasm_i32x4_shuffle(a2_, a2_, 0, 1, 1, 2);
  l1 = wasm_i32x4_shuffle(a2_, a2_, 3, 2, 3, 3);
  r0 = wasm_i32x4_shuffle(a3_, a3_, 3, 2, 3, 3);
  r1 = wasm_i32x4_shuffle(a3_, a3_, 0, 1, 1, 2);
  v128_t s2 = wasm_f32x4_sub(wasm_f32x4_mul(l0, r0), wasm_f32x4_mul(l1, r1));

  // // s2       l0    r0    l1    r1
  // float b08 = a20 * a33 - a23 * a30;
  // float b09 = a21 * a32 - a22 * a31;
  // float b10 = a21 * a33 - a23 * a31;
  // float b11 = a22 * a33 - a23 * a32;

  v128_t d0l = wasm_i32x4_shuffle(s0, s1, 0, 5, 2, 3);
  v128_t d0r = wasm_i32x4_shuffle(s2, s1, 3, 6, 1, 0);
  v128_t d1l = wasm_i32x4_shuffle(s0, s1, 4, 1, 4, 1);
  v128_t d1r = wasm_i32x4_shuffle(s1, s2, 3, 6, 3, 6);
  v128_t d0 = wasm_f32x4_dot_xyzw(d0l, d0r);
  v128_t d1 = wasm_f32x4_dot_xy__(d1l, d1r);
  v128_t v_det = wasm_f32x4_sub(d0, d1);

  float det = wasm_f32x4_extract_lane(v_det, 0);

  // clang-format off
  // det = b00 * b11 // d0
  //     + b05 * b06
  //     + b02 * b09 
  //     + b03 * b08 // d1
  //     - b04 * b07 
  //     - b01 * b10;
  // clang-format on

  if (!det)
    return;

  v128_t v1_1_ = wasm_f32x4_const(1, -1, 1, -1);
  v128_t v_1_1 = wasm_f32x4_const(-1, 1, -1, 1);
  v128_t v_det_invert = wasm_f32x4_div(wasm_f32x4_const(1, 1, 1, 1), v_det);

  // det = 1.0 / det;

  l0 = wasm_i32x4_shuffle(a1_, a1_, 1, 2, 0, 1);
  l1 = wasm_i32x4_shuffle(a1_, a1_, 2, 0, 1, 0);
  l2 = wasm_i32x4_shuffle(a1_, a1_, 3, 3, 3, 2);
  r0 = wasm_i32x4_shuffle(s2, s1, 3, 0, 2, 7);
  r1 = wasm_i32x4_shuffle(s2, s2, 2, 3, 0, 1);
  r2 = wasm_i32x4_shuffle(s2, s1, 1, 7, 6, 6);
  v128_t s3 =
      wasm_f32x4_mul(wasm_f32x4_add(wasm_f32x4_sub(wasm_f32x4_mul(l0, r0),
                                                   wasm_f32x4_mul(l1, r1)),
                                    wasm_f32x4_mul(wasm_f32x4_mul(l2, r2), v1_1_)),
                     v_det_invert);

  // s3      l0    r0    l1    r1    l2    r2
  // a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  // a[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  // a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  // a[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;

  l0 = wasm_i32x4_shuffle(a0_, a0_, 2, 0, 1, 0);
  l1 = wasm_i32x4_shuffle(a0_, a0_, 1, 2, 0, 1);
  l2 = wasm_i32x4_shuffle(a0_, a0_, 3, 3, 3, 2);
  v128_t s4 =
      wasm_f32x4_mul(wasm_f32x4_add(wasm_f32x4_sub(wasm_f32x4_mul(l0, r1),
                                                   wasm_f32x4_mul(l1, r0)),
                                    wasm_f32x4_mul(wasm_f32x4_mul(l2, r2), v_1_1)),
                     v_det_invert);

  // s4      l0    r0    l1    r1    l2    r2
  // a[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  // a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  // a[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  // a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;

  l0 = wasm_i32x4_shuffle(a3_, a3_, 1, 2, 0, 1);
  l1 = wasm_i32x4_shuffle(a3_, a3_, 2, 0, 1, 0);
  l2 = wasm_i32x4_shuffle(a3_, a3_, 3, 3, 3, 2);
  r0 = wasm_i32x4_shuffle(s1, s0, 1, 6, 0, 5);
  r1 = wasm_i32x4_shuffle(s1, s0, 0, 1, 6, 7);
  r2 = wasm_i32x4_shuffle(s0, s0, 3, 1, 0, 0);
  v128_t s5 =
      wasm_f32x4_mul(wasm_f32x4_add(wasm_f32x4_sub(wasm_f32x4_mul(l0, r0),
                                                   wasm_f32x4_mul(l1, r1)),
                                    wasm_f32x4_mul(wasm_f32x4_mul(l2, r2), v1_1_)),
                     v_det_invert);

  // s5      l0    r0    l1    r1    l2    r2
  // a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  // a[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  // a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  // a[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;

  l0 = wasm_i32x4_shuffle(a2_, a2_, 2, 0, 1, 0);
  l1 = wasm_i32x4_shuffle(a2_, a2_, 1, 2, 0, 1);
  l2 = wasm_i32x4_shuffle(a2_, a2_, 3, 3, 3, 2);
  v128_t s6 =
      wasm_f32x4_mul(wasm_f32x4_add(wasm_f32x4_sub(wasm_f32x4_mul(l0, r1),
                                                   wasm_f32x4_mul(l1, r0)),
                                    wasm_f32x4_mul(wasm_f32x4_mul(l2, r2), v_1_1)),
                     v_det_invert);

  // s6      l0    r0    l1    r1    l2    r2
  // a[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  // a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  // a[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  // a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  v128_t n_1 = s3;
  v128_t n_2 = s4;
  v128_t n_3 = s5;
  v128_t n_4 = s6;
  v128_t tmp0 = wasm_i32x4_shuffle(n_1, n_2, 0, 4, 1, 5);
  v128_t tmp2 = wasm_i32x4_shuffle(n_1, n_2, 2, 6, 3, 7);
  v128_t tmp1 = wasm_i32x4_shuffle(n_3, n_4, 0, 4, 1, 5);
  v128_t tmp3 = wasm_i32x4_shuffle(n_3, n_4, 2, 6, 3, 7);

  v128_t n1_ = wasm_i32x4_shuffle(tmp0, tmp1, 0, 1, 4, 5);
  v128_t n2_ = wasm_i32x4_shuffle(tmp0, tmp1, 2, 3, 6, 7);
  v128_t n3_ = wasm_i32x4_shuffle(tmp2, tmp3, 0, 1, 4, 5);
  v128_t n4_ = wasm_i32x4_shuffle(tmp2, tmp3, 2, 3, 6, 7);

  // wasm_v128_store(a, n1_);
  // wasm_v128_store(a + 4, n2_);
  // wasm_v128_store(a + 8, n3_);
  // wasm_v128_store(a + 12, n4_);
  a_[0] = n1_;
  a_[1] = n2_;
  a_[2] = n3_;
  a_[3] = n4_;
}

void matrix4_transpose(v128_t a[4]) {
  v128_t tmp0 = wasm_i32x4_shuffle(a[0], a[1], 0, 4, 1, 5);
  v128_t tmp2 = wasm_i32x4_shuffle(a[0], a[1], 2, 6, 3, 7);
  v128_t tmp1 = wasm_i32x4_shuffle(a[2], a[3], 0, 4, 1, 5);
  v128_t tmp3 = wasm_i32x4_shuffle(a[2], a[3], 2, 6, 3, 7);
  a[0] = wasm_i32x4_shuffle(tmp0, tmp1, 0, 1, 4, 5);
  a[1] = wasm_i32x4_shuffle(tmp0, tmp1, 2, 3, 6, 7);
  a[2] = wasm_i32x4_shuffle(tmp2, tmp3, 0, 1, 4, 5);
  a[3] = wasm_i32x4_shuffle(tmp2, tmp3, 2, 3, 6, 7);
}

void matrix4_invert_transform(v128_t a[4]) {
  // 5,7,11 均为0

  // 旋转3x3矩阵转置
  v128_t t0 = wasm_i32x4_shuffle(a[0], a[1], 0, 1, 4, 5);
  v128_t t1 = wasm_i32x4_shuffle(a[0], a[1], 2, 3, 6, 7);

  a[0] = wasm_i32x4_shuffle(t0, a[2], 0, 2, 4, 7);
  a[1] = wasm_i32x4_shuffle(t0, a[2], 1, 3, 5, 7);
  a[2] = wasm_i32x4_shuffle(t1, a[2], 0, 2, 6, 7);

  // scale转置
  v128_t one = wasm_f32x4_splat(1);
  v128_t squareSize = wasm_f32x4_mul(a[0], a[0]);
  squareSize = wasm_f32x4_add(squareSize, wasm_f32x4_mul(a[1], a[1]));
  squareSize = wasm_f32x4_add(squareSize, wasm_f32x4_mul(a[2], a[2]));
  squareSize = wasm_v128_bitselect(
      one, squareSize, wasm_f32x4_lt(squareSize, wasm_f32x4_splat(1.e-8f)));
  v128_t rSquareSize = wasm_f32x4_div(one, squareSize);

  a[0] = wasm_f32x4_mul(a[0], rSquareSize);
  a[1] = wasm_f32x4_mul(a[1], rSquareSize);
  a[2] = wasm_f32x4_mul(a[2], rSquareSize);

  // position转置
  v128_t Tx = wasm_f32x4_splat(wasm_f32x4_extract_lane(a[3], 0));
  v128_t Ty = wasm_f32x4_splat(wasm_f32x4_extract_lane(a[3], 1));
  v128_t Tz = wasm_f32x4_splat(wasm_f32x4_extract_lane(a[3], 2));

  a[3] = wasm_f32x4_mul(a[0], Tx);
  a[3] = wasm_f32x4_add(a[3], wasm_f32x4_mul(a[1], Ty));
  a[3] = wasm_f32x4_add(a[3], wasm_f32x4_mul(a[2], Tz));
  a[3] = wasm_f32x4_sub(wasm_f32x4_make(0, 0, 0, 1), a[3]);
}

void matrix4_multiply_scalar(v128_t a[4], float const b) {
  v128_t vB = wasm_f32x4_splat(b);
  a[0] = wasm_f32x4_mul(a[0], vB);
  a[1] = wasm_f32x4_mul(a[1], vB);
  a[2] = wasm_f32x4_mul(a[2], vB);
  a[3] = wasm_f32x4_mul(a[3], vB);
}

#else

// -------------- Matrix4 --------------

void matrix4_multiply(float const a[16], float const b[16], float out[16]) {
  float b11 = b[0], b12 = b[4], b13 = b[8], b14 = b[12];
  float b21 = b[1], b22 = b[5], b23 = b[9], b24 = b[13];
  float b31 = b[2], b32 = b[6], b33 = b[10], b34 = b[14];
  float b41 = b[3], b42 = b[7], b43 = b[11], b44 = b[15];

  float a1 = a[0], a2 = a[4], a3 = a[8], a4 = a[12];

  out[0] = a1 * b11 + a2 * b21 + a3 * b31 + a4 * b41;
  out[4] = a1 * b12 + a2 * b22 + a3 * b32 + a4 * b42;
  out[8] = a1 * b13 + a2 * b23 + a3 * b33 + a4 * b43;
  out[12] = a1 * b14 + a2 * b24 + a3 * b34 + a4 * b44;

  a1 = a[1], a2 = a[5], a3 = a[9], a4 = a[13];

  out[1] = a1 * b11 + a2 * b21 + a3 * b31 + a4 * b41;
  out[5] = a1 * b12 + a2 * b22 + a3 * b32 + a4 * b42;
  out[9] = a1 * b13 + a2 * b23 + a3 * b33 + a4 * b43;
  out[13] = a1 * b14 + a2 * b24 + a3 * b34 + a4 * b44;

  a1 = a[2], a2 = a[6], a3 = a[10], a4 = a[14];

  out[2] = a1 * b11 + a2 * b21 + a3 * b31 + a4 * b41;
  out[6] = a1 * b12 + a2 * b22 + a3 * b32 + a4 * b42;
  out[10] = a1 * b13 + a2 * b23 + a3 * b33 + a4 * b43;
  out[14] = a1 * b14 + a2 * b24 + a3 * b34 + a4 * b44;

  a1 = a[3], a2 = a[7], a3 = a[11], a4 = a[15];

  out[3] = a1 * b11 + a2 * b21 + a3 * b31 + a4 * b41;
  out[7] = a1 * b12 + a2 * b22 + a3 * b32 + a4 * b42;
  out[11] = a1 * b13 + a2 * b23 + a3 * b33 + a4 * b43;
  out[15] = a1 * b14 + a2 * b24 + a3 * b34 + a4 * b44;
}

float matrix4_determinant(float const te[16]) {
  float n11 = te[0], n12 = te[4], n13 = te[8], n14 = te[12];
  float n21 = te[1], n22 = te[5], n23 = te[9], n24 = te[13];
  float n31 = te[2], n32 = te[6], n33 = te[10], n34 = te[14];
  float n41 = te[3], n42 = te[7], n43 = te[11], n44 = te[15];

  // s0
  float n14n23n13n24 = n14 * n23 - n13 * n24;
  float n12n24n14n22 = n12 * n24 - n14 * n22;
  float n13n22n12n23 = n13 * n22 - n12 * n23;
  float n11n23n13n21 = n11 * n23 - n13 * n21;
  // s1
  float n14n21n11n24 = n14 * n21 - n11 * n24;
  float n12n21n11n22 = n12 * n21 - n11 * n22;
  // m4
  float n14n23n13n24n32 = n14n23n13n24 * n32;
  float n12n24n14n22n33 = n12n24n14n22 * n33;
  float n13n22n12n23n34 = n13n22n12n23 * n34;
  float n11n23n13n21n34 = n11n23n13n21 * n34;
  // m5
  float n14n23n13n24n31 = n14n23n13n24 * n31;
  float n12n24n14n22n31 = n12n24n14n22 * n31;
  float n13n22n12n23n31 = n13n22n12n23 * n31;
  float n11n23n13n21n32 = n11n23n13n21 * n32;
  // m6
  float n14n21n11n24n33 = n14n21n11n24 * n33;
  float n12n21n11n22n34 = n12n21n11n22 * n34;
  // m7
  float n14n21n11n24n32 = n14n21n11n24 * n32;
  float n12n21n11n22n33 = n12n21n11n22 * n33;

  return (n41 * (n14n23n13n24n32 + n12n24n14n22n33 + n13n22n12n23n34) +
          n42 * (n11n23n13n21n34 + n14n21n11n24n33 - n14n23n13n24n31) +
          n43 * (-n14n21n11n24n32 + n12n21n11n22n34 - n12n24n14n22n31) +
          n44 * (-n13n22n12n23n31 - n11n23n13n21n32 - n12n21n11n22n33));
}

void matrix4_invert(float a[16]) {
  float a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  float a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  float a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  float a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  float b00 = a00 * a11 - a01 * a10;
  float b01 = a00 * a12 - a02 * a10;
  float b02 = a00 * a13 - a03 * a10;
  float b03 = a01 * a12 - a02 * a11;
  float b04 = a01 * a13 - a03 * a11;
  float b05 = a02 * a13 - a03 * a12;
  float b06 = a20 * a31 - a21 * a30;
  float b07 = a20 * a32 - a22 * a30;
  float b08 = a20 * a33 - a23 * a30;
  float b09 = a21 * a32 - a22 * a31;
  float b10 = a21 * a33 - a23 * a31;
  float b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  float det =
      b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return;
  }
  det = 1.0 / det;

  a[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  a[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  a[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  a[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  a[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  a[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  a[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  a[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  a[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  a[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  a[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  a[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  a[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  a[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  a[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  a[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
}

void matrix4_invert_transform(float a[16]) {
  // 旋转3x3矩阵转置
  float tmp;
  // clang-format off
  tmp = a[1]; a[1] = a[4]; a[4] = tmp;
  tmp = a[2]; a[2] = a[8]; a[8] = tmp;
  tmp = a[6]; a[6] = a[9]; a[9] = tmp;

  // scale转置
  float squareSize[3] = {a[0] * a[0] + a[4] * a[4] + a[8]  * a[8],
                         a[1] * a[1] + a[5] * a[5] + a[9]  * a[9],
                         a[2] * a[2] + a[6] * a[6] + a[10] * a[10]};
  float rSquareSize[3] = {squareSize[0] == 0 ? 1 : 1 / squareSize[0], 
                          squareSize[1] == 0 ? 1 : 1 / squareSize[1],
                          squareSize[2] == 0 ? 1 : 1 / squareSize[2]};
  // clang-format on
  a[0] *= rSquareSize[0];
  a[1] *= rSquareSize[1];
  a[2] *= rSquareSize[2];

  a[4] *= rSquareSize[0];
  a[5] *= rSquareSize[1];
  a[6] *= rSquareSize[2];

  a[8] *= rSquareSize[0];
  a[9] *= rSquareSize[1];
  a[10] *= rSquareSize[2];

  float Tx = a[12];
  float Ty = a[13];
  float Tz = a[14];

  a[12] = -(a[0] * Tx + a[4] * Ty + a[8] * Tz);
  a[13] = -(a[1] * Tx + a[5] * Ty + a[9] * Tz);
  a[14] = -(a[2] * Tx + a[6] * Ty + a[10] * Tz);
}

void matrix4_transpose(float a[16]) {
  float tmp;
  // clang-format off
  tmp = a[1];  a[1]  = a[4];  a[4]  = tmp; 
  tmp = a[2];  a[2]  = a[8];  a[8]  = tmp; 
  tmp = a[6];  a[6]  = a[9];  a[9]  = tmp; 
  tmp = a[3];  a[3]  = a[12]; a[12] = tmp; 
  tmp = a[7];  a[7]  = a[13]; a[13] = tmp; 
  tmp = a[11]; a[11] = a[14]; a[14] = tmp;
  // clang-format on
}

void matrix4_multiply_scalar(float a[16], float const b) {
  a[0] *= b;
  a[1] *= b;
  a[2] *= b;
  a[3] *= b;
  a[4] *= b;
  a[5] *= b;
  a[6] *= b;
  a[7] *= b;
  a[8] *= b;
  a[9] *= b;
  a[10] *= b;
  a[11] *= b;
  a[12] *= b;
  a[13] *= b;
  a[14] *= b;
  a[15] *= b;
}

#endif