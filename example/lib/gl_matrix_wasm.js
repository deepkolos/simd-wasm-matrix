/**
 * @license gl-matrix-wasm v0.8.0
 * Copyright (c) 2018-present Tianyu Dai (dtysky)<dtysky@Outlook.com>.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } else {
        factory(null, (window.glMatrixWasm = {}))
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var __exports = {};
    var wasm;
    var cachegetFloat32Memory = null;
    function getFloat32Memory() {
        if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== wasm.memory.buffer) {
            cachegetFloat32Memory = new Float32Array(wasm.memory.buffer);
        }
        return cachegetFloat32Memory;
    }
    function getArrayF32FromWasm(ptr, len) {
        return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
    }
    var cachedGlobalArgumentPtr = null;
    function globalArgumentPtr() {
        if (cachedGlobalArgumentPtr === null) {
            cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
        }
        return cachedGlobalArgumentPtr;
    }
    var cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
            cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachegetUint32Memory;
    }
    function isLikeNone(x) {
        return x === undefined || x === null;
    }
    function __wbg_random_b57732cc51ad52fd() {
        return Math.random();
    }
    __exports.__wbg_random_b57732cc51ad52fd = __wbg_random_b57732cc51ad52fd;
    var cachedTextDecoder = new TextDecoder('utf-8');
    var cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }
    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }
    function __wbindgen_throw(ptr, len) {
        throw new Error(getStringFromWasm(ptr, len));
    }
    __exports.__wbindgen_throw = __wbindgen_throw;
    function freeMatrix2(ptr) {
        wasm.__wbg_matrix2_free(ptr);
    }
    /**
    */
    var Matrix2 = /** @class */ (function () {
        function Matrix2() {
        }
        Matrix2.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 4);
            return obj;
        };
        Matrix2.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeMatrix2(ptr);
        };
        Object.defineProperty(Matrix2.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Matrix2}
        */
        Matrix2.create = function () {
            return Matrix2.__wrap(wasm.matrix2_create());
        };
        /**
        * @param {Matrix2} a
        * @returns {Matrix2}
        */
        Matrix2.clone = function (a) {
            return Matrix2.__wrap(wasm.matrix2_clone(a.ptr));
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @returns {Matrix2}
        */
        Matrix2.copy = function (out, a) {
            wasm.matrix2_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @returns {Matrix2}
        */
        Matrix2.identity = function (out) {
            wasm.matrix2_identity(out.ptr);
            return out;
        };
        /**
        * @param {number} m00
        * @param {number} m01
        * @param {number} m10
        * @param {number} m11
        * @returns {Matrix2}
        */
        Matrix2.fromValues = function (m00, m01, m10, m11) {
            return Matrix2.__wrap(wasm.matrix2_fromValues(m00, m01, m10, m11));
        };
        /**
        * @param {Matrix2} out
        * @param {number} m00
        * @param {number} m01
        * @param {number} m10
        * @param {number} m11
        * @returns {Matrix2}
        */
        Matrix2.set = function (out, m00, m01, m10, m11) {
            wasm.matrix2_set(out.ptr, m00, m01, m10, m11);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @returns {Matrix2}
        */
        Matrix2.transpose = function (out, a) {
            wasm.matrix2_transpose(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @returns {Matrix2}
        */
        Matrix2.invert = function (out, a) {
            wasm.matrix2_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @returns {Matrix2}
        */
        Matrix2.adjoint = function (out, a) {
            wasm.matrix2_adjoint(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2} a
        * @returns {number}
        */
        Matrix2.determinant = function (a) {
            return wasm.matrix2_determinant(a.ptr);
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {Matrix2}
        */
        Matrix2.multiply = function (out, a, b) {
            wasm.matrix2_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {number} rad
        * @returns {Matrix2}
        */
        Matrix2.rotate = function (out, a, rad) {
            wasm.matrix2_rotate(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Vector2} v
        * @returns {Matrix2}
        */
        Matrix2.scale = function (out, a, v) {
            wasm.matrix2_scale(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {number} rad
        * @returns {Matrix2}
        */
        Matrix2.fromRotation = function (out, rad) {
            wasm.matrix2_fromRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Vector2} v
        * @returns {Matrix2}
        */
        Matrix2.fromScaling = function (out, v) {
            wasm.matrix2_fromScaling(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2} a
        * @returns {number}
        */
        Matrix2.frob = function (a) {
            return wasm.matrix2_frob(a.ptr);
        };
        /**
        * @param {Matrix2} L
        * @param {Matrix2} D
        * @param {Matrix2} U
        * @param {Matrix2} a
        * @returns {void}
        */
        Matrix2.LDU = function (L, D, U, a) {
            return wasm.matrix2_LDU(L.ptr, D.ptr, U.ptr, a.ptr);
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {Matrix2}
        */
        Matrix2.add = function (out, a, b) {
            wasm.matrix2_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {Matrix2}
        */
        Matrix2.subtract = function (out, a, b) {
            wasm.matrix2_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {boolean}
        */
        Matrix2.exactEquals = function (a, b) {
            return (wasm.matrix2_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {boolean}
        */
        Matrix2.equals = function (a, b) {
            return (wasm.matrix2_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {number} b
        * @returns {Matrix2}
        */
        Matrix2.multiplyScalar = function (out, a, b) {
            wasm.matrix2_multiplyScalar(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @param {number} scale
        * @returns {Matrix2}
        */
        Matrix2.multiplyScalarAndAdd = function (out, a, b, scale) {
            wasm.matrix2_multiplyScalarAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {Matrix2}
        */
        Matrix2.mul = function (out, a, b) {
            wasm.matrix2_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2} out
        * @param {Matrix2} a
        * @param {Matrix2} b
        * @returns {Matrix2}
        */
        Matrix2.sub = function (out, a, b) {
            wasm.matrix2_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        return Matrix2;
    }());
    exports.Matrix2 = Matrix2;
    function freeMatrix2d(ptr) {
        wasm.__wbg_matrix2d_free(ptr);
    }
    /**
    */
    var Matrix2d = /** @class */ (function () {
        function Matrix2d() {
        }
        Matrix2d.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 6);
            return obj;
        };
        Matrix2d.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeMatrix2d(ptr);
        };
        Object.defineProperty(Matrix2d.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Matrix2d}
        */
        Matrix2d.create = function () {
            return Matrix2d.__wrap(wasm.matrix2d_create());
        };
        /**
        * @param {Matrix2d} a
        * @returns {Matrix2d}
        */
        Matrix2d.clone = function (a) {
            return Matrix2d.__wrap(wasm.matrix2d_clone(a.ptr));
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @returns {Matrix2d}
        */
        Matrix2d.copy = function (out, a) {
            wasm.matrix2d_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @returns {Matrix2d}
        */
        Matrix2d.identity = function (out) {
            wasm.matrix2d_identity(out.ptr);
            return out;
        };
        /**
        * @param {number} a
        * @param {number} b
        * @param {number} c
        * @param {number} d
        * @param {number} tx
        * @param {number} ty
        * @returns {Matrix2d}
        */
        Matrix2d.fromValues = function (a, b, c, d, tx, ty) {
            return Matrix2d.__wrap(wasm.matrix2d_fromValues(a, b, c, d, tx, ty));
        };
        /**
        * @param {Matrix2d} out
        * @param {number} a
        * @param {number} b
        * @param {number} c
        * @param {number} d
        * @param {number} tx
        * @param {number} ty
        * @returns {Matrix2d}
        */
        Matrix2d.set = function (out, a, b, c, d, tx, ty) {
            wasm.matrix2d_set(out.ptr, a, b, c, d, tx, ty);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @returns {Matrix2d}
        */
        Matrix2d.invert = function (out, a) {
            wasm.matrix2d_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} a
        * @returns {number}
        */
        Matrix2d.determinant = function (a) {
            return wasm.matrix2d_determinant(a.ptr);
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {Matrix2d}
        */
        Matrix2d.multiply = function (out, a, b) {
            wasm.matrix2d_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {number} rad
        * @returns {Matrix2d}
        */
        Matrix2d.rotate = function (out, a, rad) {
            wasm.matrix2d_rotate(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Vector2} v
        * @returns {Matrix2d}
        */
        Matrix2d.scale = function (out, a, v) {
            wasm.matrix2d_scale(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Vector2} v
        * @returns {Matrix2d}
        */
        Matrix2d.translate = function (out, a, v) {
            wasm.matrix2d_translate(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {number} rad
        * @returns {Matrix2d}
        */
        Matrix2d.fromRotation = function (out, rad) {
            wasm.matrix2d_fromRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Vector2} v
        * @returns {Matrix2d}
        */
        Matrix2d.fromScaling = function (out, v) {
            wasm.matrix2d_fromScaling(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Vector2} v
        * @returns {Matrix2d}
        */
        Matrix2d.fromTranslation = function (out, v) {
            wasm.matrix2d_fromTranslation(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} a
        * @returns {number}
        */
        Matrix2d.frob = function (a) {
            return wasm.matrix2d_frob(a.ptr);
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {Matrix2d}
        */
        Matrix2d.add = function (out, a, b) {
            wasm.matrix2d_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {Matrix2d}
        */
        Matrix2d.subtract = function (out, a, b) {
            wasm.matrix2d_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {number} b
        * @returns {Matrix2d}
        */
        Matrix2d.multiplyScalar = function (out, a, b) {
            wasm.matrix2d_multiplyScalar(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @param {number} scale
        * @returns {Matrix2d}
        */
        Matrix2d.multiplyScalarAndAdd = function (out, a, b, scale) {
            wasm.matrix2d_multiplyScalarAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {boolean}
        */
        Matrix2d.exactEquals = function (a, b) {
            return (wasm.matrix2d_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {boolean}
        */
        Matrix2d.equals = function (a, b) {
            return (wasm.matrix2d_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {Matrix2d}
        */
        Matrix2d.mul = function (out, a, b) {
            wasm.matrix2d_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix2d} out
        * @param {Matrix2d} a
        * @param {Matrix2d} b
        * @returns {Matrix2d}
        */
        Matrix2d.sub = function (out, a, b) {
            wasm.matrix2d_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        return Matrix2d;
    }());
    exports.Matrix2d = Matrix2d;
    function freeMatrix3(ptr) {
        wasm.__wbg_matrix3_free(ptr);
    }
    /**
    */
    var Matrix3 = /** @class */ (function () {
        function Matrix3() {
        }
        Matrix3.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 9);
            return obj;
        };
        Matrix3.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeMatrix3(ptr);
        };
        Object.defineProperty(Matrix3.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Matrix3}
        */
        Matrix3.create = function () {
            return Matrix3.__wrap(wasm.matrix3_create());
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix4} a
        * @returns {Matrix3}
        */
        Matrix3.fromMat4 = function (out, a) {
            wasm.matrix3_fromMat4(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} a
        * @returns {Matrix3}
        */
        Matrix3.clone = function (a) {
            return Matrix3.__wrap(wasm.matrix3_clone(a.ptr));
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @returns {Matrix3}
        */
        Matrix3.copy = function (out, a) {
            wasm.matrix3_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {number} m00
        * @param {number} m01
        * @param {number} m02
        * @param {number} m10
        * @param {number} m11
        * @param {number} m12
        * @param {number} m20
        * @param {number} m21
        * @param {number} m22
        * @returns {Matrix3}
        */
        Matrix3.fromValues = function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            return Matrix3.__wrap(wasm.matrix3_fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22));
        };
        /**
        * @param {Matrix3} out
        * @param {number} m00
        * @param {number} m01
        * @param {number} m02
        * @param {number} m10
        * @param {number} m11
        * @param {number} m12
        * @param {number} m20
        * @param {number} m21
        * @param {number} m22
        * @returns {Matrix3}
        */
        Matrix3.set = function (out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            wasm.matrix3_set(out.ptr, m00, m01, m02, m10, m11, m12, m20, m21, m22);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @returns {Matrix3}
        */
        Matrix3.identity = function (out) {
            wasm.matrix3_identity(out.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @returns {Matrix3}
        */
        Matrix3.transpose = function (out, a) {
            wasm.matrix3_transpose(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @returns {Matrix3}
        */
        Matrix3.invert = function (out, a) {
            wasm.matrix3_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @returns {Matrix3}
        */
        Matrix3.adjoint = function (out, a) {
            wasm.matrix3_adjoint(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} a
        * @returns {number}
        */
        Matrix3.determinant = function (a) {
            return wasm.matrix3_determinant(a.ptr);
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {Matrix3}
        */
        Matrix3.multiply = function (out, a, b) {
            wasm.matrix3_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Vector2} v
        * @returns {Matrix3}
        */
        Matrix3.translate = function (out, a, v) {
            wasm.matrix3_translate(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {number} rad
        * @returns {Matrix3}
        */
        Matrix3.rotate = function (out, a, rad) {
            wasm.matrix3_rotate(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Vector2} v
        * @returns {Matrix3}
        */
        Matrix3.scale = function (out, a, v) {
            wasm.matrix3_scale(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Vector2} v
        * @returns {Matrix3}
        */
        Matrix3.fromTranslation = function (out, v) {
            wasm.matrix3_fromTranslation(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {number} rad
        * @returns {Matrix3}
        */
        Matrix3.fromRotation = function (out, rad) {
            wasm.matrix3_fromRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Vector2} v
        * @returns {Matrix3}
        */
        Matrix3.fromScaling = function (out, v) {
            wasm.matrix3_fromScaling(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix2d} a
        * @returns {Matrix3}
        */
        Matrix3.fromMat2d = function (out, a) {
            wasm.matrix3_fromMat2d(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Quaternion} q
        * @returns {Matrix3}
        */
        Matrix3.fromQuat = function (out, q) {
            wasm.matrix3_fromQuat(out.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix4} a
        * @returns {Matrix3}
        */
        Matrix3.normalFromMat4 = function (out, a) {
            wasm.matrix3_normalFromMat4(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {number} width
        * @param {number} height
        * @returns {Matrix3}
        */
        Matrix3.projection = function (out, width, height) {
            wasm.matrix3_projection(out.ptr, width, height);
            return out;
        };
        /**
        * @param {Matrix3} a
        * @returns {number}
        */
        Matrix3.frob = function (a) {
            return wasm.matrix3_frob(a.ptr);
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {Matrix3}
        */
        Matrix3.add = function (out, a, b) {
            wasm.matrix3_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {Matrix3}
        */
        Matrix3.subtract = function (out, a, b) {
            wasm.matrix3_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {number} b
        * @returns {Matrix3}
        */
        Matrix3.multiplyScalar = function (out, a, b) {
            wasm.matrix3_multiplyScalar(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @param {number} scale
        * @returns {Matrix3}
        */
        Matrix3.multiplyScalarAndAdd = function (out, a, b, scale) {
            wasm.matrix3_multiplyScalarAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {boolean}
        */
        Matrix3.exactEquals = function (a, b) {
            return (wasm.matrix3_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {boolean}
        */
        Matrix3.equals = function (a, b) {
            return (wasm.matrix3_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {Matrix3}
        */
        Matrix3.mul = function (out, a, b) {
            wasm.matrix3_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix3} out
        * @param {Matrix3} a
        * @param {Matrix3} b
        * @returns {Matrix3}
        */
        Matrix3.sub = function (out, a, b) {
            wasm.matrix3_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        return Matrix3;
    }());
    exports.Matrix3 = Matrix3;
    function freeMatrix4(ptr) {
        wasm.__wbg_matrix4_free(ptr);
    }
    /**
    */
    var Matrix4 = /** @class */ (function () {
        function Matrix4() {
        }
        Matrix4.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 16);
            return obj;
        };
        Matrix4.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeMatrix4(ptr);
        };
        Object.defineProperty(Matrix4.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Matrix4}
        */
        Matrix4.create = function () {
            return Matrix4.__wrap(wasm.matrix4_create());
        };
        /**
        * @param {Matrix4} a
        * @returns {Matrix4}
        */
        Matrix4.clone = function (a) {
            return Matrix4.__wrap(wasm.matrix4_clone(a.ptr));
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @returns {Matrix4}
        */
        Matrix4.copy = function (out, a) {
            wasm.matrix4_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {number} m00
        * @param {number} m01
        * @param {number} m02
        * @param {number} m03
        * @param {number} m10
        * @param {number} m11
        * @param {number} m12
        * @param {number} m13
        * @param {number} m20
        * @param {number} m21
        * @param {number} m22
        * @param {number} m23
        * @param {number} m30
        * @param {number} m31
        * @param {number} m32
        * @param {number} m33
        * @returns {Matrix4}
        */
        Matrix4.fromValues = function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            return Matrix4.__wrap(wasm.matrix4_fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33));
        };
        /**
        * @param {Matrix4} out
        * @param {number} m00
        * @param {number} m01
        * @param {number} m02
        * @param {number} m03
        * @param {number} m10
        * @param {number} m11
        * @param {number} m12
        * @param {number} m13
        * @param {number} m20
        * @param {number} m21
        * @param {number} m22
        * @param {number} m23
        * @param {number} m30
        * @param {number} m31
        * @param {number} m32
        * @param {number} m33
        * @returns {Matrix4}
        */
        Matrix4.set = function (out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            wasm.matrix4_set(out.ptr, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @returns {Matrix4}
        */
        Matrix4.identity = function (out) {
            wasm.matrix4_identity(out.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @returns {Matrix4}
        */
        Matrix4.transpose = function (out, a) {
            wasm.matrix4_transpose(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @returns {Matrix4}
        */
        Matrix4.invert = function (out, a) {
            wasm.matrix4_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @returns {Matrix4}
        */
        Matrix4.adjoint = function (out, a) {
            wasm.matrix4_adjoint(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Matrix4} a
        * @returns {number}
        */
        Matrix4.determinant = function (a) {
            return wasm.matrix4_determinant(a.ptr);
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {Matrix4}
        */
        Matrix4.multiply = function (out, a, b) {
            wasm.matrix4_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Vector3} v
        * @returns {Matrix4}
        */
        Matrix4.translate = function (out, a, v) {
            wasm.matrix4_translate(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Vector3} v
        * @returns {Matrix4}
        */
        Matrix4.scale = function (out, a, v) {
            wasm.matrix4_scale(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {number} rad
        * @param {Vector3} axis
        * @returns {Matrix4}
        */
        Matrix4.rotate = function (out, a, rad, axis) {
            wasm.matrix4_rotate(out.ptr, a.ptr, rad, axis.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.rotateX = function (out, a, rad) {
            wasm.matrix4_rotateX(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.rotateY = function (out, a, rad) {
            wasm.matrix4_rotateY(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.rotateZ = function (out, a, rad) {
            wasm.matrix4_rotateZ(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Vector3} v
        * @returns {Matrix4}
        */
        Matrix4.fromTranslation = function (out, v) {
            wasm.matrix4_fromTranslation(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Vector3} v
        * @returns {Matrix4}
        */
        Matrix4.fromScaling = function (out, v) {
            wasm.matrix4_fromScaling(out.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} rad
        * @param {Vector3} axis
        * @returns {Matrix4}
        */
        Matrix4.fromRotation = function (out, rad, axis) {
            wasm.matrix4_fromRotation(out.ptr, rad, axis.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.fromXRotation = function (out, rad) {
            wasm.matrix4_fromXRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.fromYRotation = function (out, rad) {
            wasm.matrix4_fromYRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} rad
        * @returns {Matrix4}
        */
        Matrix4.fromZRotation = function (out, rad) {
            wasm.matrix4_fromZRotation(out.ptr, rad);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Quaternion} q
        * @param {Vector3} v
        * @returns {Matrix4}
        */
        Matrix4.fromRotationTranslation = function (out, q, v) {
            wasm.matrix4_fromRotationTranslation(out.ptr, q.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Quaternion2} a
        * @returns {Matrix4}
        */
        Matrix4.fromQuat2 = function (out, a) {
            wasm.matrix4_fromQuat2(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Matrix4} mat
        * @returns {Vector3}
        */
        Matrix4.getTranslation = function (out, mat) {
            wasm.matrix4_getTranslation(out.ptr, mat.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Matrix4} mat
        * @returns {Vector3}
        */
        Matrix4.getScaling = function (out, mat) {
            wasm.matrix4_getScaling(out.ptr, mat.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Matrix4} mat
        * @returns {Quaternion}
        */
        Matrix4.getRotation = function (out, mat) {
            wasm.matrix4_getRotation(out.ptr, mat.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Quaternion} q
        * @param {Vector3} v
        * @param {Vector3} s
        * @returns {Matrix4}
        */
        Matrix4.fromRotationTranslationScale = function (out, q, v, s) {
            wasm.matrix4_fromRotationTranslationScale(out.ptr, q.ptr, v.ptr, s.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Quaternion} q
        * @param {Vector3} v
        * @param {Vector3} s
        * @param {Vector3} o
        * @returns {Matrix4}
        */
        Matrix4.fromRotationTranslationScaleOrigin = function (out, q, v, s, o) {
            wasm.matrix4_fromRotationTranslationScaleOrigin(out.ptr, q.ptr, v.ptr, s.ptr, o.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Quaternion} q
        * @returns {Matrix4}
        */
        Matrix4.fromQuat = function (out, q) {
            wasm.matrix4_fromQuat(out.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} left
        * @param {number} right
        * @param {number} bottom
        * @param {number} top
        * @param {number} near
        * @param {number} far
        * @returns {Matrix4}
        */
        Matrix4.frustum = function (out, left, right, bottom, top, near, far) {
            wasm.matrix4_frustum(out.ptr, left, right, bottom, top, near, far);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} fovy
        * @param {number} aspect
        * @param {number} near
        * @param {number | undefined} far
        * @returns {Matrix4}
        */
        Matrix4.perspective = function (out, fovy, aspect, near, far) {
            wasm.matrix4_perspective(out.ptr, fovy, aspect, near, !isLikeNone(far), isLikeNone(far) ? 0 : far);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {number} left
        * @param {number} right
        * @param {number} bottom
        * @param {number} top
        * @param {number} near
        * @param {number} far
        * @returns {Matrix4}
        */
        Matrix4.ortho = function (out, left, right, bottom, top, near, far) {
            wasm.matrix4_ortho(out.ptr, left, right, bottom, top, near, far);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Vector3} eye
        * @param {Vector3} center
        * @param {Vector3} up
        * @returns {Matrix4}
        */
        Matrix4.lookAt = function (out, eye, center, up) {
            wasm.matrix4_lookAt(out.ptr, eye.ptr, center.ptr, up.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Vector3} eye
        * @param {Vector3} target
        * @param {Vector3} up
        * @returns {Matrix4}
        */
        Matrix4.targetTo = function (out, eye, target, up) {
            wasm.matrix4_targetTo(out.ptr, eye.ptr, target.ptr, up.ptr);
            return out;
        };
        /**
        * @param {Matrix4} a
        * @returns {number}
        */
        Matrix4.frob = function (a) {
            return wasm.matrix4_frob(a.ptr);
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {Matrix4}
        */
        Matrix4.add = function (out, a, b) {
            wasm.matrix4_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {Matrix4}
        */
        Matrix4.subtract = function (out, a, b) {
            wasm.matrix4_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {number} b
        * @returns {Matrix4}
        */
        Matrix4.multiplyScalar = function (out, a, b) {
            wasm.matrix4_multiplyScalar(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @param {number} scale
        * @returns {Matrix4}
        */
        Matrix4.multiplyScalarAndAdd = function (out, a, b, scale) {
            wasm.matrix4_multiplyScalarAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {boolean}
        */
        Matrix4.exactEquals = function (a, b) {
            return (wasm.matrix4_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {boolean}
        */
        Matrix4.equals = function (a, b) {
            return (wasm.matrix4_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {Matrix4}
        */
        Matrix4.mul = function (out, a, b) {
            wasm.matrix4_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Matrix4} out
        * @param {Matrix4} a
        * @param {Matrix4} b
        * @returns {Matrix4}
        */
        Matrix4.sub = function (out, a, b) {
            wasm.matrix4_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        return Matrix4;
    }());
    exports.Matrix4 = Matrix4;
    function freeQuaternion(ptr) {
        wasm.__wbg_quaternion_free(ptr);
    }
    /**
    */
    var Quaternion = /** @class */ (function () {
        function Quaternion() {
        }
        Quaternion.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 4);
            return obj;
        };
        Quaternion.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeQuaternion(ptr);
        };
        Object.defineProperty(Quaternion.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Quaternion}
        */
        Quaternion.create = function () {
            return Quaternion.__wrap(wasm.quaternion_create());
        };
        /**
        * @param {Quaternion} out
        * @returns {Quaternion}
        */
        Quaternion.identity = function (out) {
            wasm.quaternion_identity(out.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Vector3} axis
        * @param {number} rad
        * @returns {Quaternion}
        */
        Quaternion.setAxisAngle = function (out, axis, rad) {
            wasm.quaternion_setAxisAngle(out.ptr, axis.ptr, rad);
            return out;
        };
        /**
        * @param {Vector3} out_axis
        * @param {Quaternion} q
        * @returns {number}
        */
        Quaternion.getAxisAngle = function (out_axis, q) {
            return wasm.quaternion_getAxisAngle(out_axis.ptr, q.ptr);
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {Vector3}
        */
        Quaternion.multiply = function (out, a, b) {
            wasm.quaternion_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {number} rad
        * @returns {Quaternion}
        */
        Quaternion.rotateX = function (out, a, rad) {
            wasm.quaternion_rotateX(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {number} rad
        * @returns {Quaternion}
        */
        Quaternion.rotateY = function (out, a, rad) {
            wasm.quaternion_rotateY(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {number} rad
        * @returns {Quaternion}
        */
        Quaternion.rotateZ = function (out, a, rad) {
            wasm.quaternion_rotateZ(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.calculateW = function (out, a) {
            wasm.quaternion_calculateW(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @param {number} t
        * @returns {Quaternion}
        */
        Quaternion.slerp = function (out, a, b, t) {
            wasm.quaternion_slerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @returns {Quaternion}
        */
        Quaternion.random = function (out) {
            wasm.quaternion_random(out.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.invert = function (out, a) {
            wasm.quaternion_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.conjugate = function (out, a) {
            wasm.quaternion_conjugate(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Matrix3} m
        * @returns {Quaternion}
        */
        Quaternion.fromMat3 = function (out, m) {
            wasm.quaternion_fromMat3(out.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @returns {Quaternion}
        */
        Quaternion.fromEuler = function (out, x, y, z) {
            wasm.quaternion_fromEuler(out.ptr, x, y, z);
            return out;
        };
        /**
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.clone = function (a) {
            return Quaternion.__wrap(wasm.quaternion_clone(a.ptr));
        };
        /**
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @param {number} w
        * @returns {Quaternion}
        */
        Quaternion.fromValues = function (x, y, z, w) {
            return Quaternion.__wrap(wasm.quaternion_fromValues(x, y, z, w));
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.copy = function (out, a) {
            wasm.quaternion_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @param {number} w
        * @returns {Quaternion}
        */
        Quaternion.set = function (out, x, y, z, w) {
            wasm.quaternion_set(out.ptr, x, y, z, w);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {Quaternion}
        */
        Quaternion.add = function (out, a, b) {
            wasm.quaternion_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {Quaternion}
        */
        Quaternion.mul = function (out, a, b) {
            wasm.quaternion_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {number} b
        * @returns {Quaternion}
        */
        Quaternion.scale = function (out, a, b) {
            wasm.quaternion_scale(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {number}
        */
        Quaternion.dot = function (a, b) {
            return wasm.quaternion_dot(a.ptr, b.ptr);
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @param {number} t
        * @returns {Quaternion}
        */
        Quaternion.lerp = function (out, a, b, t) {
            wasm.quaternion_lerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Quaternion} a
        * @returns {number}
        */
        Quaternion.len = function (a) {
            return wasm.quaternion_len(a.ptr);
        };
        /**
        * @param {Quaternion} a
        * @returns {number}
        */
        Quaternion.squaredLength = function (a) {
            return wasm.quaternion_squaredLength(a.ptr);
        };
        /**
        * @param {Quaternion} a
        * @returns {number}
        */
        Quaternion.sqrLen = function (a) {
            return wasm.quaternion_sqrLen(a.ptr);
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @returns {Quaternion}
        */
        Quaternion.normalize = function (out, a) {
            wasm.quaternion_normalize(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {boolean}
        */
        Quaternion.exactEquals = function (a, b) {
            return (wasm.quaternion_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @returns {boolean}
        */
        Quaternion.equals = function (a, b) {
            return (wasm.quaternion_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Quaternion} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Quaternion}
        */
        Quaternion.rotationTo = function (out, a, b) {
            wasm.quaternion_rotationTo(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion} a
        * @param {Quaternion} b
        * @param {Quaternion} c
        * @param {Quaternion} d
        * @param {number} t
        * @returns {Quaternion}
        */
        Quaternion.sqlerp = function (out, a, b, c, d, t) {
            wasm.quaternion_sqlerp(out.ptr, a.ptr, b.ptr, c.ptr, d.ptr, t);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Vector3} view
        * @param {Vector3} right
        * @param {Vector3} up
        * @returns {Quaternion}
        */
        Quaternion.setAxes = function (out, view, right, up) {
            wasm.quaternion_setAxes(out.ptr, view.ptr, right.ptr, up.ptr);
            return out;
        };
        return Quaternion;
    }());
    exports.Quaternion = Quaternion;
    function freeQuaternion2(ptr) {
        wasm.__wbg_quaternion2_free(ptr);
    }
    /**
    */
    var Quaternion2 = /** @class */ (function () {
        function Quaternion2() {
        }
        Quaternion2.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 8);
            return obj;
        };
        Quaternion2.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeQuaternion2(ptr);
        };
        Object.defineProperty(Quaternion2.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Quaternion2}
        */
        Quaternion2.create = function () {
            return Quaternion2.__wrap(wasm.quaternion2_create());
        };
        /**
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.clone = function (a) {
            return Quaternion2.__wrap(wasm.quaternion2_clone(a.ptr));
        };
        /**
        * @param {number} x1
        * @param {number} y1
        * @param {number} z1
        * @param {number} w1
        * @param {number} x2
        * @param {number} y2
        * @param {number} z2
        * @param {number} w2
        * @returns {Quaternion2}
        */
        Quaternion2.fromValues = function (x1, y1, z1, w1, x2, y2, z2, w2) {
            return Quaternion2.__wrap(wasm.quaternion2_fromValues(x1, y1, z1, w1, x2, y2, z2, w2));
        };
        /**
        * @param {number} x1
        * @param {number} y1
        * @param {number} z1
        * @param {number} w1
        * @param {number} x2
        * @param {number} y2
        * @param {number} z2
        * @returns {Quaternion2}
        */
        Quaternion2.fromRotationTranslationValues = function (x1, y1, z1, w1, x2, y2, z2) {
            return Quaternion2.__wrap(wasm.quaternion2_fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2));
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion} q
        * @param {Vector3} t
        * @returns {Quaternion2}
        */
        Quaternion2.fromRotationTranslation = function (out, q, t) {
            wasm.quaternion2_fromRotationTranslation(out.ptr, q.ptr, t.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Vector3} t
        * @returns {Quaternion2}
        */
        Quaternion2.fromTranslation = function (out, t) {
            wasm.quaternion2_fromTranslation(out.ptr, t.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion} q
        * @returns {Quaternion2}
        */
        Quaternion2.fromRotation = function (out, q) {
            wasm.quaternion2_fromRotation(out.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Matrix4} a
        * @returns {Quaternion2}
        */
        Quaternion2.fromMat4 = function (out, a) {
            wasm.quaternion2_fromMat4(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.copy = function (out, a) {
            wasm.quaternion2_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @returns {Quaternion2}
        */
        Quaternion2.identity = function (out) {
            wasm.quaternion2_identity(out.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {number} x1
        * @param {number} y1
        * @param {number} z1
        * @param {number} w1
        * @param {number} x2
        * @param {number} y2
        * @param {number} z2
        * @param {number} w2
        * @returns {Quaternion2}
        */
        Quaternion2.set = function (out, x1, y1, z1, w1, x2, y2, z2, w2) {
            wasm.quaternion2_set(out.ptr, x1, y1, z1, w1, x2, y2, z2, w2);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion2} a
        * @returns {Quaternion}
        */
        Quaternion2.getReal = function (out, a) {
            wasm.quaternion2_getReal(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion} out
        * @param {Quaternion2} a
        * @returns {Quaternion}
        */
        Quaternion2.getDual = function (out, a) {
            wasm.quaternion2_getDual(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion} a
        * @returns {Quaternion2}
        */
        Quaternion2.setReal = function (out, a) {
            wasm.quaternion2_setReal(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion} q
        * @returns {Quaternion2}
        */
        Quaternion2.setDual = function (out, q) {
            wasm.quaternion2_setDual(out.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Quaternion2} a
        * @returns {Vector3}
        */
        Quaternion2.getTranslation = function (out, a) {
            wasm.quaternion2_getTranslation(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Vector3} v
        * @returns {Quaternion2}
        */
        Quaternion2.translate = function (out, a, v) {
            wasm.quaternion2_translate(out.ptr, a.ptr, v.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {number} rad
        * @returns {Quaternion2}
        */
        Quaternion2.rotateX = function (out, a, rad) {
            wasm.quaternion2_rotateX(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {number} rad
        * @returns {Quaternion2}
        */
        Quaternion2.rotateY = function (out, a, rad) {
            wasm.quaternion2_rotateY(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {number} rad
        * @returns {Quaternion2}
        */
        Quaternion2.rotateZ = function (out, a, rad) {
            wasm.quaternion2_rotateZ(out.ptr, a.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Quaternion} q
        * @returns {Quaternion2}
        */
        Quaternion2.rotateByQuatAppend = function (out, a, q) {
            wasm.quaternion2_rotateByQuatAppend(out.ptr, a.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion} q
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.rotateByQuatPrepend = function (out, q, a) {
            wasm.quaternion2_rotateByQuatPrepend(out.ptr, q.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Vector3} axis
        * @param {number} rad
        * @returns {Quaternion2}
        */
        Quaternion2.rotateAroundAxis = function (out, a, axis, rad) {
            wasm.quaternion2_rotateAroundAxis(out.ptr, a.ptr, axis.ptr, rad);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {Quaternion2}
        */
        Quaternion2.add = function (out, a, b) {
            wasm.quaternion2_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {Quaternion2}
        */
        Quaternion2.multiply = function (out, a, b) {
            wasm.quaternion2_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {Quaternion2}
        */
        Quaternion2.mul = function (out, a, b) {
            wasm.quaternion2_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {number} b
        * @returns {Quaternion2}
        */
        Quaternion2.scale = function (out, a, b) {
            wasm.quaternion2_scale(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {number}
        */
        Quaternion2.dot = function (a, b) {
            return wasm.quaternion2_dot(a.ptr, b.ptr);
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @param {number} t
        * @returns {Quaternion2}
        */
        Quaternion2.lerp = function (out, a, b, t) {
            wasm.quaternion2_lerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.invert = function (out, a) {
            wasm.quaternion2_invert(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.conjugate = function (out, a) {
            wasm.quaternion2_conjugate(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} a
        * @returns {number}
        */
        Quaternion2.len = function (a) {
            return wasm.quaternion2_len(a.ptr);
        };
        /**
        * @param {Quaternion2} a
        * @returns {number}
        */
        Quaternion2.squaredLength = function (a) {
            return wasm.quaternion2_squaredLength(a.ptr);
        };
        /**
        * @param {Quaternion2} a
        * @returns {number}
        */
        Quaternion2.sqrLen = function (a) {
            return wasm.quaternion2_sqrLen(a.ptr);
        };
        /**
        * @param {Quaternion2} out
        * @param {Quaternion2} a
        * @returns {Quaternion2}
        */
        Quaternion2.normalize = function (out, a) {
            wasm.quaternion2_normalize(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {boolean}
        */
        Quaternion2.exactEquals = function (a, b) {
            return (wasm.quaternion2_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Quaternion2} a
        * @param {Quaternion2} b
        * @returns {boolean}
        */
        Quaternion2.equals = function (a, b) {
            return (wasm.quaternion2_equals(a.ptr, b.ptr)) !== 0;
        };
        return Quaternion2;
    }());
    exports.Quaternion2 = Quaternion2;
    function freeVector2(ptr) {
        wasm.__wbg_vector2_free(ptr);
    }
    /**
    */
    var Vector2 = /** @class */ (function () {
        function Vector2() {
        }
        Vector2.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 2);
            return obj;
        };
        Vector2.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeVector2(ptr);
        };
        Object.defineProperty(Vector2.prototype, "elements", {
            /**
    * @returns {Float32Array}
    */
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Vector2}
        */
        Vector2.create = function () {
            return Vector2.__wrap(wasm.vector2_create());
        };
        /**
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.clone = function (a) {
            return Vector2.__wrap(wasm.vector2_clone(a.ptr));
        };
        /**
        * @param {number} x
        * @param {number} y
        * @returns {Vector2}
        */
        Vector2.fromValues = function (x, y) {
            return Vector2.__wrap(wasm.vector2_fromValues(x, y));
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.copy = function (out, a) {
            wasm.vector2_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {number} x
        * @param {number} y
        * @returns {Vector2}
        */
        Vector2.set = function (out, x, y) {
            wasm.vector2_set(out.ptr, x, y);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.add = function (out, a, b) {
            wasm.vector2_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.subtract = function (out, a, b) {
            wasm.vector2_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.multiply = function (out, a, b) {
            wasm.vector2_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.divide = function (out, a, b) {
            wasm.vector2_divide(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.ceil = function (out, a) {
            wasm.vector2_ceil(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.floor = function (out, a) {
            wasm.vector2_floor(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.min = function (out, a, b) {
            wasm.vector2_min(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.max = function (out, a, b) {
            wasm.vector2_max(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.round = function (out, a) {
            wasm.vector2_round(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {number} b
        * @returns {Vector2}
        */
        Vector2.scale = function (out, a, b) {
            wasm.vector2_scale(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @param {number} scale
        * @returns {Vector2}
        */
        Vector2.scaleAndAdd = function (out, a, b, scale) {
            wasm.vector2_scaleAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.distance = function (a, b) {
            return wasm.vector2_distance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.squaredDistance = function (a, b) {
            return wasm.vector2_squaredDistance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector2} a
        * @returns {number}
        */
        Vector2.len = function (a) {
            return wasm.vector2_len(a.ptr);
        };
        /**
        * @param {Vector2} a
        * @returns {number}
        */
        Vector2.squaredLength = function (a) {
            return wasm.vector2_squaredLength(a.ptr);
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.negate = function (out, a) {
            wasm.vector2_negate(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.inverse = function (out, a) {
            wasm.vector2_inverse(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @returns {Vector2}
        */
        Vector2.normalize = function (out, a) {
            wasm.vector2_normalize(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.dot = function (a, b) {
            return wasm.vector2_dot(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector3}
        */
        Vector2.cross = function (out, a, b) {
            wasm.vector2_cross(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @param {number} t
        * @returns {Vector2}
        */
        Vector2.lerp = function (out, a, b, t) {
            wasm.vector2_lerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {number | undefined} scale
        * @returns {Vector2}
        */
        Vector2.random = function (out, scale) {
            wasm.vector2_random(out.ptr, !isLikeNone(scale), isLikeNone(scale) ? 0 : scale);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Matrix2} m
        * @returns {Vector2}
        */
        Vector2.transformMat2 = function (out, a, m) {
            wasm.vector2_transformMat2(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Matrix2d} m
        * @returns {Vector2}
        */
        Vector2.transformMat2d = function (out, a, m) {
            wasm.vector2_transformMat2d(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Matrix3} m
        * @returns {Vector2}
        */
        Vector2.transformMat3 = function (out, a, m) {
            wasm.vector2_transformMat3(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Matrix4} m
        * @returns {Vector2}
        */
        Vector2.transformMat4 = function (out, a, m) {
            wasm.vector2_transformMat4(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @param {number} c
        * @returns {Vector2}
        */
        Vector2.rotate = function (out, a, b, c) {
            wasm.vector2_rotate(out.ptr, a.ptr, b.ptr, c);
            return out;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.angle = function (a, b) {
            return wasm.vector2_angle(a.ptr, b.ptr);
        };
        /**
        * @param {Vector2} out
        * @returns {Vector2}
        */
        Vector2.zero = function (out) {
            wasm.vector2_zero(out.ptr);
            return out;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {boolean}
        */
        Vector2.exactEquals = function (a, b) {
            return (wasm.vector2_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {boolean}
        */
        Vector2.equals = function (a, b) {
            return (wasm.vector2_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.sub = function (out, a, b) {
            wasm.vector2_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.mul = function (out, a, b) {
            wasm.vector2_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} out
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {Vector2}
        */
        Vector2.div = function (out, a, b) {
            wasm.vector2_div(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.dist = function (a, b) {
            return wasm.vector2_dist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector2} a
        * @param {Vector2} b
        * @returns {number}
        */
        Vector2.sqrDist = function (a, b) {
            return wasm.vector2_sqrDist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector2} a
        * @returns {number}
        */
        Vector2.sqrLen = function (a) {
            return wasm.vector2_sqrLen(a.ptr);
        };
        return Vector2;
    }());
    exports.Vector2 = Vector2;
    function freeVector3(ptr) {
        wasm.__wbg_vector3_free(ptr);
    }
    /**
    */
    var Vector3 = /** @class */ (function () {
        function Vector3() {
        }
        Vector3.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 3);
            return obj;
        };
        Vector3.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeVector3(ptr);
        };
        Object.defineProperty(Vector3.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Vector3}
        */
        Vector3.create = function () {
            return Vector3.__wrap(wasm.vector3_create());
        };
        /**
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.clone = function (a) {
            return Vector3.__wrap(wasm.vector3_clone(a.ptr));
        };
        /**
        * @param {Vector3} a
        * @returns {number}
        */
        Vector3.len = function (a) {
            return wasm.vector3_len(a.ptr);
        };
        /**
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @returns {Vector3}
        */
        Vector3.fromValues = function (x, y, z) {
            return Vector3.__wrap(wasm.vector3_fromValues(x, y, z));
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.copy = function (out, a) {
            wasm.vector3_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @returns {Vector3}
        */
        Vector3.set = function (out, x, y, z) {
            wasm.vector3_set(out.ptr, x, y, z);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.add = function (out, a, b) {
            wasm.vector3_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.subtract = function (out, a, b) {
            wasm.vector3_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.multiply = function (out, a, b) {
            wasm.vector3_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.divide = function (out, a, b) {
            wasm.vector3_divide(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.ceil = function (out, a) {
            wasm.vector3_ceil(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.floor = function (out, a) {
            wasm.vector3_floor(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.min = function (out, a, b) {
            wasm.vector3_min(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.max = function (out, a, b) {
            wasm.vector3_max(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.round = function (out, a) {
            wasm.vector3_round(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {number} b
        * @returns {Vector3}
        */
        Vector3.scale = function (out, a, b) {
            wasm.vector3_scale(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {number} scale
        * @returns {Vector3}
        */
        Vector3.scaleAndAdd = function (out, a, b, scale) {
            wasm.vector3_scaleAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {number}
        */
        Vector3.distance = function (a, b) {
            return wasm.vector3_distance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {number}
        */
        Vector3.squaredDistance = function (a, b) {
            return wasm.vector3_squaredDistance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} a
        * @returns {number}
        */
        Vector3.squaredLength = function (a) {
            return wasm.vector3_squaredLength(a.ptr);
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.negate = function (out, a) {
            wasm.vector3_negate(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.inverse = function (out, a) {
            wasm.vector3_inverse(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @returns {Vector3}
        */
        Vector3.normalize = function (out, a) {
            wasm.vector3_normalize(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {number}
        */
        Vector3.dot = function (a, b) {
            return wasm.vector3_dot(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.cross = function (out, a, b) {
            wasm.vector3_cross(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {number} t
        * @returns {Vector3}
        */
        Vector3.lerp = function (out, a, b, t) {
            wasm.vector3_lerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {Vector3} c
        * @param {Vector3} d
        * @param {number} t
        * @returns {Vector3}
        */
        Vector3.hermite = function (out, a, b, c, d, t) {
            wasm.vector3_hermite(out.ptr, a.ptr, b.ptr, c.ptr, d.ptr, t);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {Vector3} c
        * @param {Vector3} d
        * @param {number} t
        * @returns {Vector3}
        */
        Vector3.bezier = function (out, a, b, c, d, t) {
            wasm.vector3_bezier(out.ptr, a.ptr, b.ptr, c.ptr, d.ptr, t);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {number | undefined} scale
        * @returns {Vector3}
        */
        Vector3.random = function (out, scale) {
            wasm.vector3_random(out.ptr, !isLikeNone(scale), isLikeNone(scale) ? 0 : scale);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Matrix4} m
        * @returns {Vector3}
        */
        Vector3.transformMat4 = function (out, a, m) {
            wasm.vector3_transformMat4(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Matrix3} m
        * @returns {Vector3}
        */
        Vector3.transformMat3 = function (out, a, m) {
            wasm.vector3_transformMat3(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Quaternion} q
        * @returns {Vector3}
        */
        Vector3.transformQuat = function (out, a, q) {
            wasm.vector3_transformQuat(out.ptr, a.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {number} c
        * @returns {Vector3}
        */
        Vector3.rotateX = function (out, a, b, c) {
            wasm.vector3_rotateX(out.ptr, a.ptr, b.ptr, c);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {number} c
        * @returns {Vector3}
        */
        Vector3.rotateY = function (out, a, b, c) {
            wasm.vector3_rotateY(out.ptr, a.ptr, b.ptr, c);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @param {number} c
        * @returns {Vector3}
        */
        Vector3.rotateZ = function (out, a, b, c) {
            wasm.vector3_rotateZ(out.ptr, a.ptr, b.ptr, c);
            return out;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {number}
        */
        Vector3.angle = function (a, b) {
            return wasm.vector3_angle(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} out
        * @returns {Vector3}
        */
        Vector3.zero = function (out) {
            wasm.vector3_zero(out.ptr);
            return out;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {boolean}
        */
        Vector3.exactEquals = function (a, b) {
            return (wasm.vector3_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {boolean}
        */
        Vector3.equals = function (a, b) {
            return (wasm.vector3_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.sub = function (out, a, b) {
            wasm.vector3_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.mul = function (out, a, b) {
            wasm.vector3_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} out
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {Vector3}
        */
        Vector3.div = function (out, a, b) {
            wasm.vector3_div(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {void}
        */
        Vector3.dist = function (a, b) {
            return wasm.vector3_dist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} a
        * @param {Vector3} b
        * @returns {void}
        */
        Vector3.sqrDist = function (a, b) {
            return wasm.vector3_sqrDist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector3} a
        * @returns {number}
        */
        Vector3.sqrLen = function (a) {
            return wasm.vector3_sqrLen(a.ptr);
        };
        return Vector3;
    }());
    exports.Vector3 = Vector3;
    function freeVector4(ptr) {
        wasm.__wbg_vector4_free(ptr);
    }
    /**
    */
    var Vector4 = /** @class */ (function () {
        function Vector4() {
        }
        Vector4.__wrap = function (ptr) {
            var obj = Object.create(Matrix4.prototype);
            obj.ptr = ptr;
            var realPtr = ptr / 4 + 1;
            this._elements = new Float32Array(wasm.memory.buffer).subarray(realPtr, realPtr + 4);
            return obj;
        };
        Vector4.prototype.free = function () {
            var ptr = this.ptr;
            this.ptr = 0;
            freeVector4(ptr);
        };
        Object.defineProperty(Vector4.prototype, "elements", {
            /**
* @returns {Float32Array}
*/
            get: function () {
                return this._elements;
            },
            enumerable: true,
            configurable: true
        });
        /**
        * @returns {Vector4}
        */
        Vector4.create = function () {
            return Vector4.__wrap(wasm.vector4_create());
        };
        /**
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.clone = function (a) {
            return Vector4.__wrap(wasm.vector4_clone(a.ptr));
        };
        /**
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @param {number} w
        * @returns {Vector4}
        */
        Vector4.fromValues = function (x, y, z, w) {
            return Vector4.__wrap(wasm.vector4_fromValues(x, y, z, w));
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.copy = function (out, a) {
            wasm.vector4_copy(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {number} x
        * @param {number} y
        * @param {number} z
        * @param {number} w
        * @returns {Vector4}
        */
        Vector4.set = function (out, x, y, z, w) {
            wasm.vector4_set(out.ptr, x, y, z, w);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.add = function (out, a, b) {
            wasm.vector4_add(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.subtract = function (out, a, b) {
            wasm.vector4_subtract(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.multiply = function (out, a, b) {
            wasm.vector4_multiply(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.divide = function (out, a, b) {
            wasm.vector4_divide(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.ceil = function (out, a) {
            wasm.vector4_ceil(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.floor = function (out, a) {
            wasm.vector4_floor(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.min = function (out, a, b) {
            wasm.vector4_min(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.max = function (out, a, b) {
            wasm.vector4_max(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.round = function (out, a) {
            wasm.vector4_round(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {number} b
        * @returns {Vector4}
        */
        Vector4.scale = function (out, a, b) {
            wasm.vector4_scale(out.ptr, a.ptr, b);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @param {number} scale
        * @returns {Vector4}
        */
        Vector4.scaleAndAdd = function (out, a, b, scale) {
            wasm.vector4_scaleAndAdd(out.ptr, a.ptr, b.ptr, scale);
            return out;
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {number}
        */
        Vector4.distance = function (a, b) {
            return wasm.vector4_distance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {number}
        */
        Vector4.squaredDistance = function (a, b) {
            return wasm.vector4_squaredDistance(a.ptr, b.ptr);
        };
        /**
        * @param {Vector4} a
        * @returns {number}
        */
        Vector4.len = function (a) {
            return wasm.vector4_len(a.ptr);
        };
        /**
        * @param {Vector4} a
        * @returns {number}
        */
        Vector4.squaredLength = function (a) {
            return wasm.vector4_squaredLength(a.ptr);
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.negate = function (out, a) {
            wasm.vector4_negate(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.inverse = function (out, a) {
            wasm.vector4_inverse(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @returns {Vector4}
        */
        Vector4.normalize = function (out, a) {
            wasm.vector4_normalize(out.ptr, a.ptr);
            return out;
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {number}
        */
        Vector4.dot = function (a, b) {
            return wasm.vector4_dot(a.ptr, b.ptr);
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} u
        * @param {Vector4} v
        * @param {Vector4} w
        * @returns {Vector4}
        */
        Vector4.cross = function (out, u, v, w) {
            wasm.vector4_cross(out.ptr, u.ptr, v.ptr, w.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @param {number} t
        * @returns {Vector4}
        */
        Vector4.lerp = function (out, a, b, t) {
            wasm.vector4_lerp(out.ptr, a.ptr, b.ptr, t);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {number | undefined} scale
        * @returns {Vector4}
        */
        Vector4.random = function (out, scale) {
            wasm.vector4_random(out.ptr, !isLikeNone(scale), isLikeNone(scale) ? 0 : scale);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Matrix4} m
        * @returns {Vector4}
        */
        Vector4.transformMat4 = function (out, a, m) {
            wasm.vector4_transformMat4(out.ptr, a.ptr, m.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Quaternion} q
        * @returns {Vector4}
        */
        Vector4.transformQuat = function (out, a, q) {
            wasm.vector4_transformQuat(out.ptr, a.ptr, q.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @returns {Vector4}
        */
        Vector4.zero = function (out) {
            wasm.vector4_zero(out.ptr);
            return out;
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {boolean}
        */
        Vector4.exactEquals = function (a, b) {
            return (wasm.vector4_exactEquals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {boolean}
        */
        Vector4.equals = function (a, b) {
            return (wasm.vector4_equals(a.ptr, b.ptr)) !== 0;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.sub = function (out, a, b) {
            wasm.vector4_sub(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.mul = function (out, a, b) {
            wasm.vector4_mul(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} out
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {Vector4}
        */
        Vector4.div = function (out, a, b) {
            wasm.vector4_div(out.ptr, a.ptr, b.ptr);
            return out;
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {number}
        */
        Vector4.dist = function (a, b) {
            return wasm.vector4_dist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector4} a
        * @param {Vector4} b
        * @returns {number}
        */
        Vector4.sqrDist = function (a, b) {
            return wasm.vector4_sqrDist(a.ptr, b.ptr);
        };
        /**
        * @param {Vector4} a
        * @returns {number}
        */
        Vector4.sqrLen = function (a) {
            return wasm.vector4_sqrLen(a.ptr);
        };
        return Vector4;
    }());
    exports.Vector4 = Vector4;
    function initModule(module) {
        var result;
        var imports = { './gl_matrix_wasm': __exports };
        if (module instanceof URL || typeof module === 'string' || module instanceof Request) {
            var response_1 = fetch(module);
            if (typeof WebAssembly.instantiateStreaming === 'function') {
                result = WebAssembly.instantiateStreaming(response_1, imports)
                    .catch(function (e) {
                    console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                    return response_1
                        .then(function (r) { return r.arrayBuffer(); })
                        .then(function (bytes) { return WebAssembly.instantiate(bytes, imports); });
                });
            }
            else {
                result = response_1
                    .then(function (r) { return r.arrayBuffer(); })
                    .then(function (bytes) { return WebAssembly.instantiate(bytes, imports); });
            }
        }
        else {
            result = WebAssembly.instantiate(module, imports)
                .then(function (result) {
                if (result instanceof WebAssembly.Instance) {
                    return { instance: result, module: module };
                }
                else {
                    return result;
                }
            });
        }
        return result.then(function (_a) {
            var instance = _a.instance, module = _a.module;
            wasm = instance.exports;
            init.__wbindgen_wasm_module = module;
            return wasm;
        });
    }
    function init() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, initModule(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 175, 2, 39, 96, 1, 127, 0, 96, 2, 127, 127, 0, 96, 1, 127, 1, 127, 96, 0, 1, 125, 96, 0, 0, 96, 2, 127, 127, 1, 127, 96, 1, 127, 1, 125, 96, 2, 127, 125, 0, 96, 0, 1, 127, 96, 16, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 1, 127, 96, 17, 127, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 0, 96, 3, 127, 127, 127, 0, 96, 4, 127, 127, 125, 127, 0, 96, 3, 127, 127, 125, 0, 96, 3, 127, 125, 127, 0, 96, 4, 127, 127, 127, 127, 0, 96, 5, 127, 127, 127, 127, 127, 0, 96, 7, 127, 125, 125, 125, 125, 125, 125, 0, 96, 6, 127, 125, 125, 125, 127, 125, 0, 96, 4, 127, 127, 127, 125, 0, 96, 3, 127, 127, 127, 1, 127, 96, 8, 125, 125, 125, 125, 125, 125, 125, 125, 1, 127, 96, 7, 125, 125, 125, 125, 125, 125, 125, 1, 127, 96, 9, 127, 125, 125, 125, 125, 125, 125, 125, 125, 0, 96, 2, 127, 127, 1, 125, 96, 9, 125, 125, 125, 125, 125, 125, 125, 125, 125, 1, 127, 96, 10, 127, 125, 125, 125, 125, 125, 125, 125, 125, 125, 0, 96, 3, 127, 125, 125, 0, 96, 4, 127, 125, 125, 125, 0, 96, 4, 125, 125, 125, 125, 1, 127, 96, 5, 127, 125, 125, 125, 125, 0, 96, 6, 127, 127, 127, 127, 127, 125, 0, 96, 6, 125, 125, 125, 125, 125, 125, 1, 127, 96, 3, 125, 125, 125, 1, 127, 96, 2, 125, 125, 1, 127, 96, 1, 125, 1, 125, 96, 2, 125, 125, 1, 125, 96, 2, 127, 127, 0, 96, 0, 1, 125, 2, 86, 2, 16, 46, 47, 103, 108, 95, 109, 97, 116, 114, 105, 120, 95, 119, 97, 115, 109, 16, 95, 95, 119, 98, 105, 110, 100, 103, 101, 110, 95, 116, 104, 114, 111, 119, 0, 37, 16, 46, 47, 103, 108, 95, 109, 97, 116, 114, 105, 120, 95, 119, 97, 115, 109, 29, 95, 95, 119, 98, 103, 95, 114, 97, 110, 100, 111, 109, 95, 98, 53, 55, 55, 51, 50, 99, 99, 53, 49, 97, 100, 53, 50, 102, 100, 0, 38, 3, 181, 2, 179, 2, 20, 2, 5, 35, 35, 1, 1, 15, 35, 0, 12, 5, 11, 16, 5, 11, 1, 19, 15, 11, 15, 19, 5, 1, 13, 13, 13, 1, 11, 15, 11, 11, 1, 11, 1, 19, 31, 1, 31, 14, 13, 13, 13, 11, 5, 5, 13, 11, 11, 19, 1, 1, 6, 11, 1, 11, 11, 15, 11, 11, 24, 11, 1, 11, 5, 1, 0, 35, 1, 31, 13, 11, 11, 19, 6, 1, 11, 11, 1, 5, 1, 11, 1, 18, 19, 11, 19, 19, 19, 24, 19, 11, 13, 5, 11, 11, 13, 13, 13, 5, 13, 19, 11, 17, 11, 11, 13, 19, 19, 24, 1, 11, 11, 11, 11, 24, 13, 1, 17, 1, 1, 5, 11, 11, 13, 15, 1, 24, 19, 1, 11, 11, 11, 11, 36, 24, 13, 28, 11, 11, 11, 11, 11, 10, 1, 24, 1, 2, 24, 1, 6, 19, 22, 5, 35, 11, 11, 1, 24, 19, 11, 1, 11, 7, 6, 11, 11, 11, 11, 1, 13, 1, 13, 1, 1, 5, 1, 2, 7, 1, 1, 24, 1, 1, 1, 1, 1, 7, 2, 19, 11, 11, 11, 11, 1, 11, 11, 11, 11, 11, 11, 11, 11, 1, 0, 6, 13, 1, 24, 13, 5, 1, 2, 1, 1, 1, 1, 24, 11, 1, 9, 0, 1, 1, 2, 26, 1, 1, 1, 1, 1, 13, 1, 23, 7, 2, 1, 1, 1, 1, 1, 1, 1, 11, 8, 6, 6, 27, 1, 1, 1, 1, 2, 2, 1, 2, 17, 7, 2, 13, 25, 11, 6, 6, 7, 2, 21, 0, 0, 6, 6, 1, 2, 30, 32, 6, 6, 0, 8, 1, 28, 8, 0, 2, 0, 0, 29, 20, 8, 27, 33, 0, 0, 8, 2, 8, 8, 34, 8, 0, 1, 4, 4, 1, 8, 34, 8, 5, 3, 1, 0, 17, 6, 9, 1, 127, 1, 65, 128, 128, 192, 0, 11, 7, 187, 52, 204, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 18, 95, 95, 119, 98, 103, 95, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 101, 101, 0, 173, 2, 14, 109, 97, 116, 114, 105, 120, 52, 95, 99, 114, 101, 97, 116, 101, 0, 246, 1, 13, 109, 97, 116, 114, 105, 120, 52, 95, 99, 108, 111, 110, 101, 0, 149, 1, 12, 109, 97, 116, 114, 105, 120, 52, 95, 99, 111, 112, 121, 0, 84, 18, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 222, 1, 11, 109, 97, 116, 114, 105, 120, 52, 95, 115, 101, 116, 0, 145, 1, 16, 109, 97, 116, 114, 105, 120, 52, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 223, 1, 17, 109, 97, 116, 114, 105, 120, 52, 95, 116, 114, 97, 110, 115, 112, 111, 115, 101, 0, 29, 14, 109, 97, 116, 114, 105, 120, 52, 95, 105, 110, 118, 101, 114, 116, 0, 7, 15, 109, 97, 116, 114, 105, 120, 52, 95, 97, 100, 106, 111, 105, 110, 116, 0, 8, 19, 109, 97, 116, 114, 105, 120, 52, 95, 100, 101, 116, 101, 114, 109, 105, 110, 97, 110, 116, 0, 54, 16, 109, 97, 116, 114, 105, 120, 52, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 192, 1, 17, 109, 97, 116, 114, 105, 120, 52, 95, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0, 14, 13, 109, 97, 116, 114, 105, 120, 52, 95, 115, 99, 97, 108, 101, 0, 45, 14, 109, 97, 116, 114, 105, 120, 52, 95, 114, 111, 116, 97, 116, 101, 0, 12, 15, 109, 97, 116, 114, 105, 120, 52, 95, 114, 111, 116, 97, 116, 101, 88, 0, 42, 15, 109, 97, 116, 114, 105, 120, 52, 95, 114, 111, 116, 97, 116, 101, 89, 0, 43, 15, 109, 97, 116, 114, 105, 120, 52, 95, 114, 111, 116, 97, 116, 101, 90, 0, 44, 23, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 146, 1, 19, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 83, 99, 97, 108, 105, 110, 103, 0, 128, 1, 20, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 0, 41, 21, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 88, 82, 111, 116, 97, 116, 105, 111, 110, 0, 189, 1, 21, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 89, 82, 111, 116, 97, 116, 105, 111, 110, 0, 165, 1, 21, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 90, 82, 111, 116, 97, 116, 105, 111, 110, 0, 180, 1, 31, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 193, 1, 17, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 81, 117, 97, 116, 50, 0, 34, 22, 109, 97, 116, 114, 105, 120, 52, 95, 103, 101, 116, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 229, 1, 18, 109, 97, 116, 114, 105, 120, 52, 95, 103, 101, 116, 83, 99, 97, 108, 105, 110, 103, 0, 251, 1, 19, 109, 97, 116, 114, 105, 120, 52, 95, 103, 101, 116, 82, 111, 116, 97, 116, 105, 111, 110, 0, 252, 1, 36, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 83, 99, 97, 108, 101, 0, 31, 42, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 83, 99, 97, 108, 101, 79, 114, 105, 103, 105, 110, 0, 15, 16, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 109, 81, 117, 97, 116, 0, 53, 15, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 117, 115, 116, 117, 109, 0, 105, 19, 109, 97, 116, 114, 105, 120, 52, 95, 112, 101, 114, 115, 112, 101, 99, 116, 105, 118, 101, 0, 85, 13, 109, 97, 116, 114, 105, 120, 52, 95, 111, 114, 116, 104, 111, 0, 120, 14, 109, 97, 116, 114, 105, 120, 52, 95, 108, 111, 111, 107, 65, 116, 0, 9, 16, 109, 97, 116, 114, 105, 120, 52, 95, 116, 97, 114, 103, 101, 116, 84, 111, 0, 22, 12, 109, 97, 116, 114, 105, 120, 52, 95, 102, 114, 111, 98, 0, 76, 11, 109, 97, 116, 114, 105, 120, 52, 95, 97, 100, 100, 0, 30, 16, 109, 97, 116, 114, 105, 120, 52, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 194, 1, 22, 109, 97, 116, 114, 105, 120, 52, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 0, 48, 28, 109, 97, 116, 114, 105, 120, 52, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 65, 110, 100, 65, 100, 100, 0, 23, 19, 109, 97, 116, 114, 105, 120, 52, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 46, 14, 109, 97, 116, 114, 105, 120, 52, 95, 101, 113, 117, 97, 108, 115, 0, 4, 11, 109, 97, 116, 114, 105, 120, 52, 95, 109, 117, 108, 0, 192, 1, 11, 109, 97, 116, 114, 105, 120, 52, 95, 115, 117, 98, 0, 194, 1, 30, 95, 95, 119, 98, 105, 110, 100, 103, 101, 110, 95, 103, 108, 111, 98, 97, 108, 95, 97, 114, 103, 117, 109, 101, 110, 116, 95, 112, 116, 114, 0, 180, 2, 15, 95, 95, 119, 98, 105, 110, 100, 103, 101, 110, 95, 102, 114, 101, 101, 0, 174, 2, 22, 95, 95, 119, 98, 103, 95, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 101, 101, 0, 173, 2, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 99, 114, 101, 97, 116, 101, 0, 155, 2, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 99, 108, 111, 110, 101, 0, 226, 1, 22, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 140, 2, 41, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 86, 97, 108, 117, 101, 115, 0, 154, 1, 35, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 195, 1, 27, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 163, 1, 24, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 0, 205, 1, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 102, 114, 111, 109, 77, 97, 116, 52, 0, 181, 1, 16, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 99, 111, 112, 121, 0, 196, 1, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 141, 2, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 101, 116, 0, 235, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 103, 101, 116, 82, 101, 97, 108, 0, 238, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 103, 101, 116, 68, 117, 97, 108, 0, 230, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 101, 116, 82, 101, 97, 108, 0, 238, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 101, 116, 68, 117, 97, 108, 0, 239, 1, 26, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 103, 101, 116, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 82, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0, 50, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 88, 0, 26, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 89, 0, 27, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 90, 0, 28, 30, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 66, 121, 81, 117, 97, 116, 65, 112, 112, 101, 110, 100, 0, 32, 31, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 66, 121, 81, 117, 97, 116, 80, 114, 101, 112, 101, 110, 100, 0, 33, 28, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 114, 111, 116, 97, 116, 101, 65, 114, 111, 117, 110, 100, 65, 120, 105, 115, 0, 19, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 97, 100, 100, 0, 65, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 197, 1, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 109, 117, 108, 0, 197, 1, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 99, 97, 108, 101, 0, 102, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 100, 111, 116, 0, 137, 1, 16, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 108, 101, 114, 112, 0, 37, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 105, 110, 118, 101, 114, 116, 0, 77, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 99, 111, 110, 106, 117, 103, 97, 116, 101, 0, 121, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 108, 101, 110, 0, 247, 1, 25, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 113, 117, 97, 114, 101, 100, 76, 101, 110, 103, 116, 104, 0, 248, 1, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 115, 113, 114, 76, 101, 110, 0, 248, 1, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 0, 52, 23, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 95, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 50, 95, 101, 113, 117, 97, 108, 115, 0, 16, 18, 95, 95, 119, 98, 103, 95, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 101, 101, 0, 173, 2, 14, 109, 97, 116, 114, 105, 120, 51, 95, 99, 114, 101, 97, 116, 101, 0, 152, 2, 16, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 77, 97, 116, 52, 0, 171, 1, 13, 109, 97, 116, 114, 105, 120, 51, 95, 99, 108, 111, 110, 101, 0, 190, 1, 12, 109, 97, 116, 114, 105, 120, 51, 95, 99, 111, 112, 121, 0, 173, 1, 18, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 134, 2, 11, 109, 97, 116, 114, 105, 120, 51, 95, 115, 101, 116, 0, 227, 1, 16, 109, 97, 116, 114, 105, 120, 51, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 142, 2, 17, 109, 97, 116, 114, 105, 120, 51, 95, 116, 114, 97, 110, 115, 112, 111, 115, 101, 0, 64, 14, 109, 97, 116, 114, 105, 120, 51, 95, 105, 110, 118, 101, 114, 116, 0, 39, 15, 109, 97, 116, 114, 105, 120, 51, 95, 97, 100, 106, 111, 105, 110, 116, 0, 56, 19, 109, 97, 116, 114, 105, 120, 51, 95, 100, 101, 116, 101, 114, 109, 105, 110, 97, 110, 116, 0, 166, 1, 16, 109, 97, 116, 114, 105, 120, 51, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 198, 1, 17, 109, 97, 116, 114, 105, 120, 51, 95, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0, 60, 14, 109, 97, 116, 114, 105, 120, 51, 95, 114, 111, 116, 97, 116, 101, 0, 72, 13, 109, 97, 116, 114, 105, 120, 51, 95, 115, 99, 97, 108, 101, 0, 78, 23, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 213, 1, 20, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 0, 236, 1, 19, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 83, 99, 97, 108, 105, 110, 103, 0, 182, 1, 17, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 77, 97, 116, 50, 100, 0, 176, 1, 16, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 109, 81, 117, 97, 116, 0, 70, 22, 109, 97, 116, 114, 105, 120, 51, 95, 110, 111, 114, 109, 97, 108, 70, 114, 111, 109, 77, 97, 116, 52, 0, 18, 18, 109, 97, 116, 114, 105, 120, 51, 95, 112, 114, 111, 106, 101, 99, 116, 105, 111, 110, 0, 249, 1, 12, 109, 97, 116, 114, 105, 120, 51, 95, 102, 114, 111, 98, 0, 152, 1, 11, 109, 97, 116, 114, 105, 120, 51, 95, 97, 100, 100, 0, 55, 16, 109, 97, 116, 114, 105, 120, 51, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 199, 1, 22, 109, 97, 116, 114, 105, 120, 51, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 0, 94, 28, 109, 97, 116, 114, 105, 120, 51, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 65, 110, 100, 65, 100, 100, 0, 51, 19, 109, 97, 116, 114, 105, 120, 51, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 81, 14, 109, 97, 116, 114, 105, 120, 51, 95, 101, 113, 117, 97, 108, 115, 0, 13, 11, 109, 97, 116, 114, 105, 120, 51, 95, 109, 117, 108, 0, 198, 1, 11, 109, 97, 116, 114, 105, 120, 51, 95, 115, 117, 98, 0, 199, 1, 21, 95, 95, 119, 98, 103, 95, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 102, 114, 101, 101, 0, 173, 2, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 99, 114, 101, 97, 116, 101, 0, 169, 2, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 156, 2, 23, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 101, 116, 65, 120, 105, 115, 65, 110, 103, 108, 101, 0, 172, 1, 23, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 103, 101, 116, 65, 120, 105, 115, 65, 110, 103, 108, 101, 0, 129, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 200, 1, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 114, 111, 116, 97, 116, 101, 88, 0, 98, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 114, 111, 116, 97, 116, 101, 89, 0, 99, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 114, 111, 116, 97, 116, 101, 90, 0, 100, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 99, 97, 108, 99, 117, 108, 97, 116, 101, 87, 0, 159, 1, 16, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 108, 101, 114, 112, 0, 191, 1, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 114, 97, 110, 100, 111, 109, 0, 206, 1, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 105, 110, 118, 101, 114, 116, 0, 122, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 99, 111, 110, 106, 117, 103, 97, 116, 101, 0, 188, 1, 19, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 102, 114, 111, 109, 77, 97, 116, 51, 0, 250, 1, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 102, 114, 111, 109, 69, 117, 108, 101, 114, 0, 139, 1, 16, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 99, 108, 111, 110, 101, 0, 129, 2, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 160, 2, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 99, 111, 112, 121, 0, 238, 1, 14, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 101, 116, 0, 147, 2, 14, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 97, 100, 100, 0, 113, 14, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 109, 117, 108, 0, 200, 1, 16, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 99, 97, 108, 101, 0, 174, 1, 14, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 100, 111, 116, 0, 137, 1, 15, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 108, 101, 114, 112, 0, 92, 14, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 108, 101, 110, 0, 247, 1, 24, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 113, 117, 97, 114, 101, 100, 76, 101, 110, 103, 116, 104, 0, 248, 1, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 113, 114, 76, 101, 110, 0, 248, 1, 20, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 0, 253, 1, 22, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 155, 1, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 101, 113, 117, 97, 108, 115, 0, 47, 21, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 114, 111, 116, 97, 116, 105, 111, 110, 84, 111, 0, 21, 17, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 113, 108, 101, 114, 112, 0, 71, 18, 113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 95, 115, 101, 116, 65, 120, 101, 115, 0, 59, 19, 95, 95, 119, 98, 103, 95, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 101, 101, 0, 173, 2, 15, 109, 97, 116, 114, 105, 120, 50, 100, 95, 99, 114, 101, 97, 116, 101, 0, 162, 2, 14, 109, 97, 116, 114, 105, 120, 50, 100, 95, 99, 108, 111, 110, 101, 0, 237, 1, 13, 109, 97, 116, 114, 105, 120, 50, 100, 95, 99, 111, 112, 121, 0, 224, 1, 17, 109, 97, 116, 114, 105, 120, 50, 100, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 151, 2, 19, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 148, 2, 12, 109, 97, 116, 114, 105, 120, 50, 100, 95, 115, 101, 116, 0, 130, 2, 15, 109, 97, 116, 114, 105, 120, 50, 100, 95, 105, 110, 118, 101, 114, 116, 0, 80, 20, 109, 97, 116, 114, 105, 120, 50, 100, 95, 100, 101, 116, 101, 114, 109, 105, 110, 97, 110, 116, 0, 143, 2, 17, 109, 97, 116, 114, 105, 120, 50, 100, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 201, 1, 15, 109, 97, 116, 114, 105, 120, 50, 100, 95, 114, 111, 116, 97, 116, 101, 0, 108, 14, 109, 97, 116, 114, 105, 120, 50, 100, 95, 115, 99, 97, 108, 101, 0, 106, 18, 109, 97, 116, 114, 105, 120, 50, 100, 95, 116, 114, 97, 110, 115, 108, 97, 116, 101, 0, 87, 21, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 0, 131, 2, 20, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 111, 109, 83, 99, 97, 108, 105, 110, 103, 0, 221, 1, 24, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 111, 109, 84, 114, 97, 110, 115, 108, 97, 116, 105, 111, 110, 0, 232, 1, 13, 109, 97, 116, 114, 105, 120, 50, 100, 95, 102, 114, 111, 98, 0, 207, 1, 12, 109, 97, 116, 114, 105, 120, 50, 100, 95, 97, 100, 100, 0, 83, 17, 109, 97, 116, 114, 105, 120, 50, 100, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 202, 1, 23, 109, 97, 116, 114, 105, 120, 50, 100, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 0, 138, 1, 29, 109, 97, 116, 114, 105, 120, 50, 100, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 65, 110, 100, 65, 100, 100, 0, 75, 20, 109, 97, 116, 114, 105, 120, 50, 100, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 123, 15, 109, 97, 116, 114, 105, 120, 50, 100, 95, 101, 113, 117, 97, 108, 115, 0, 24, 12, 109, 97, 116, 114, 105, 120, 50, 100, 95, 109, 117, 108, 0, 201, 1, 12, 109, 97, 116, 114, 105, 120, 50, 100, 95, 115, 117, 98, 0, 202, 1, 18, 95, 95, 119, 98, 103, 95, 118, 101, 99, 116, 111, 114, 51, 95, 102, 114, 101, 101, 0, 173, 2, 14, 118, 101, 99, 116, 111, 114, 51, 95, 99, 114, 101, 97, 116, 101, 0, 170, 2, 13, 118, 101, 99, 116, 111, 114, 51, 95, 99, 108, 111, 110, 101, 0, 132, 2, 11, 118, 101, 99, 116, 111, 114, 51, 95, 108, 101, 110, 0, 136, 2, 18, 118, 101, 99, 116, 111, 114, 51, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 164, 2, 12, 118, 101, 99, 116, 111, 114, 51, 95, 99, 111, 112, 121, 0, 240, 1, 11, 118, 101, 99, 116, 111, 114, 51, 95, 115, 101, 116, 0, 154, 2, 11, 118, 101, 99, 116, 111, 114, 51, 95, 97, 100, 100, 0, 140, 1, 16, 118, 101, 99, 116, 111, 114, 51, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 141, 1, 16, 118, 101, 99, 116, 111, 114, 51, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 142, 1, 14, 118, 101, 99, 116, 111, 114, 51, 95, 100, 105, 118, 105, 100, 101, 0, 143, 1, 12, 118, 101, 99, 116, 111, 114, 51, 95, 99, 101, 105, 108, 0, 215, 1, 13, 118, 101, 99, 116, 111, 114, 51, 95, 102, 108, 111, 111, 114, 0, 216, 1, 11, 118, 101, 99, 116, 111, 114, 51, 95, 109, 105, 110, 0, 96, 11, 118, 101, 99, 116, 111, 114, 51, 95, 109, 97, 120, 0, 97, 13, 118, 101, 99, 116, 111, 114, 51, 95, 114, 111, 117, 110, 100, 0, 217, 1, 13, 118, 101, 99, 116, 111, 114, 51, 95, 115, 99, 97, 108, 101, 0, 208, 1, 19, 118, 101, 99, 116, 111, 114, 51, 95, 115, 99, 97, 108, 101, 65, 110, 100, 65, 100, 100, 0, 130, 1, 16, 118, 101, 99, 116, 111, 114, 51, 95, 100, 105, 115, 116, 97, 110, 99, 101, 0, 147, 1, 23, 118, 101, 99, 116, 111, 114, 51, 95, 115, 113, 117, 97, 114, 101, 100, 68, 105, 115, 116, 97, 110, 99, 101, 0, 150, 1, 21, 118, 101, 99, 116, 111, 114, 51, 95, 115, 113, 117, 97, 114, 101, 100, 76, 101, 110, 103, 116, 104, 0, 137, 2, 14, 118, 101, 99, 116, 111, 114, 51, 95, 110, 101, 103, 97, 116, 101, 0, 218, 1, 15, 118, 101, 99, 116, 111, 114, 51, 95, 105, 110, 118, 101, 114, 115, 101, 0, 209, 1, 17, 118, 101, 99, 116, 111, 114, 51, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 0, 148, 1, 11, 118, 101, 99, 116, 111, 114, 51, 95, 100, 111, 116, 0, 160, 1, 13, 118, 101, 99, 116, 111, 114, 51, 95, 99, 114, 111, 115, 115, 0, 203, 1, 12, 118, 101, 99, 116, 111, 114, 51, 95, 108, 101, 114, 112, 0, 109, 15, 118, 101, 99, 116, 111, 114, 51, 95, 104, 101, 114, 109, 105, 116, 101, 0, 38, 14, 118, 101, 99, 116, 111, 114, 51, 95, 98, 101, 122, 105, 101, 114, 0, 40, 14, 118, 101, 99, 116, 111, 114, 51, 95, 114, 97, 110, 100, 111, 109, 0, 211, 1, 21, 118, 101, 99, 116, 111, 114, 51, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 52, 0, 61, 21, 118, 101, 99, 116, 111, 114, 51, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 51, 0, 93, 21, 118, 101, 99, 116, 111, 114, 51, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 81, 117, 97, 116, 0, 58, 15, 118, 101, 99, 116, 111, 114, 51, 95, 114, 111, 116, 97, 116, 101, 88, 0, 88, 15, 118, 101, 99, 116, 111, 114, 51, 95, 114, 111, 116, 97, 116, 101, 89, 0, 89, 15, 118, 101, 99, 116, 111, 114, 51, 95, 114, 111, 116, 97, 116, 101, 90, 0, 90, 13, 118, 101, 99, 116, 111, 114, 51, 95, 97, 110, 103, 108, 101, 0, 62, 12, 118, 101, 99, 116, 111, 114, 51, 95, 122, 101, 114, 111, 0, 165, 2, 19, 118, 101, 99, 116, 111, 114, 51, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 177, 1, 14, 118, 101, 99, 116, 111, 114, 51, 95, 101, 113, 117, 97, 108, 115, 0, 66, 11, 118, 101, 99, 116, 111, 114, 51, 95, 115, 117, 98, 0, 141, 1, 11, 118, 101, 99, 116, 111, 114, 51, 95, 109, 117, 108, 0, 142, 1, 11, 118, 101, 99, 116, 111, 114, 51, 95, 100, 105, 118, 0, 143, 1, 12, 118, 101, 99, 116, 111, 114, 51, 95, 100, 105, 115, 116, 0, 145, 2, 15, 118, 101, 99, 116, 111, 114, 51, 95, 115, 113, 114, 68, 105, 115, 116, 0, 145, 2, 14, 118, 101, 99, 116, 111, 114, 51, 95, 115, 113, 114, 76, 101, 110, 0, 137, 2, 18, 95, 95, 119, 98, 103, 95, 118, 101, 99, 116, 111, 114, 50, 95, 102, 114, 101, 101, 0, 173, 2, 14, 118, 101, 99, 116, 111, 114, 50, 95, 99, 114, 101, 97, 116, 101, 0, 178, 2, 13, 118, 101, 99, 116, 111, 114, 50, 95, 99, 108, 111, 110, 101, 0, 157, 2, 18, 118, 101, 99, 116, 111, 114, 50, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 179, 2, 12, 118, 101, 99, 116, 111, 114, 50, 95, 99, 111, 112, 121, 0, 128, 2, 11, 118, 101, 99, 116, 111, 114, 50, 95, 115, 101, 116, 0, 163, 2, 11, 118, 101, 99, 116, 111, 114, 50, 95, 97, 100, 100, 0, 167, 1, 16, 118, 101, 99, 116, 111, 114, 50, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 168, 1, 16, 118, 101, 99, 116, 111, 114, 50, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 169, 1, 14, 118, 101, 99, 116, 111, 114, 50, 95, 100, 105, 118, 105, 100, 101, 0, 170, 1, 12, 118, 101, 99, 116, 111, 114, 50, 95, 99, 101, 105, 108, 0, 241, 1, 13, 118, 101, 99, 116, 111, 114, 50, 95, 102, 108, 111, 111, 114, 0, 242, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 109, 105, 110, 0, 134, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 109, 97, 120, 0, 135, 1, 13, 118, 101, 99, 116, 111, 114, 50, 95, 114, 111, 117, 110, 100, 0, 243, 1, 13, 118, 101, 99, 116, 111, 114, 50, 95, 115, 99, 97, 108, 101, 0, 233, 1, 19, 118, 101, 99, 116, 111, 114, 50, 95, 115, 99, 97, 108, 101, 65, 110, 100, 65, 100, 100, 0, 161, 1, 16, 118, 101, 99, 116, 111, 114, 50, 95, 100, 105, 115, 116, 97, 110, 99, 101, 0, 219, 1, 23, 118, 101, 99, 116, 111, 114, 50, 95, 115, 113, 117, 97, 114, 101, 100, 68, 105, 115, 116, 97, 110, 99, 101, 0, 183, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 108, 101, 110, 0, 144, 2, 21, 118, 101, 99, 116, 111, 114, 50, 95, 115, 113, 117, 97, 114, 101, 100, 76, 101, 110, 103, 116, 104, 0, 150, 2, 14, 118, 101, 99, 116, 111, 114, 50, 95, 110, 101, 103, 97, 116, 101, 0, 244, 1, 15, 118, 101, 99, 116, 111, 114, 50, 95, 105, 110, 118, 101, 114, 115, 101, 0, 234, 1, 17, 118, 101, 99, 116, 111, 114, 50, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 0, 178, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 100, 111, 116, 0, 210, 1, 13, 118, 101, 99, 116, 111, 114, 50, 95, 99, 114, 111, 115, 115, 0, 162, 1, 12, 118, 101, 99, 116, 111, 114, 50, 95, 108, 101, 114, 112, 0, 153, 1, 14, 118, 101, 99, 116, 111, 114, 50, 95, 114, 97, 110, 100, 111, 109, 0, 133, 2, 21, 118, 101, 99, 116, 111, 114, 50, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 50, 0, 144, 1, 22, 118, 101, 99, 116, 111, 114, 50, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 50, 100, 0, 124, 21, 118, 101, 99, 116, 111, 114, 50, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 51, 0, 132, 1, 21, 118, 101, 99, 116, 111, 114, 50, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 52, 0, 133, 1, 14, 118, 101, 99, 116, 111, 114, 50, 95, 114, 111, 116, 97, 116, 101, 0, 110, 13, 118, 101, 99, 116, 111, 114, 50, 95, 97, 110, 103, 108, 101, 0, 91, 12, 118, 101, 99, 116, 111, 114, 50, 95, 122, 101, 114, 111, 0, 166, 2, 19, 118, 101, 99, 116, 111, 114, 50, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 212, 1, 14, 118, 101, 99, 116, 111, 114, 50, 95, 101, 113, 117, 97, 108, 115, 0, 101, 11, 118, 101, 99, 116, 111, 114, 50, 95, 115, 117, 98, 0, 168, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 109, 117, 108, 0, 169, 1, 11, 118, 101, 99, 116, 111, 114, 50, 95, 100, 105, 118, 0, 170, 1, 12, 118, 101, 99, 116, 111, 114, 50, 95, 100, 105, 115, 116, 0, 219, 1, 15, 118, 101, 99, 116, 111, 114, 50, 95, 115, 113, 114, 68, 105, 115, 116, 0, 183, 1, 14, 118, 101, 99, 116, 111, 114, 50, 95, 115, 113, 114, 76, 101, 110, 0, 150, 2, 18, 95, 95, 119, 98, 103, 95, 118, 101, 99, 116, 111, 114, 52, 95, 102, 114, 101, 101, 0, 173, 2, 14, 118, 101, 99, 116, 111, 114, 52, 95, 99, 114, 101, 97, 116, 101, 0, 167, 2, 13, 118, 101, 99, 116, 111, 114, 52, 95, 99, 108, 111, 110, 101, 0, 129, 2, 18, 118, 101, 99, 116, 111, 114, 52, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 160, 2, 12, 118, 101, 99, 116, 111, 114, 52, 95, 99, 111, 112, 121, 0, 238, 1, 11, 118, 101, 99, 116, 111, 114, 52, 95, 115, 101, 116, 0, 147, 2, 11, 118, 101, 99, 116, 111, 114, 52, 95, 97, 100, 100, 0, 113, 16, 118, 101, 99, 116, 111, 114, 52, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 114, 16, 118, 101, 99, 116, 111, 114, 52, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 115, 14, 118, 101, 99, 116, 111, 114, 52, 95, 100, 105, 118, 105, 100, 101, 0, 116, 12, 118, 101, 99, 116, 111, 114, 52, 95, 99, 101, 105, 108, 0, 184, 1, 13, 118, 101, 99, 116, 111, 114, 52, 95, 102, 108, 111, 111, 114, 0, 185, 1, 11, 118, 101, 99, 116, 111, 114, 52, 95, 109, 105, 110, 0, 73, 11, 118, 101, 99, 116, 111, 114, 52, 95, 109, 97, 120, 0, 74, 13, 118, 101, 99, 116, 111, 114, 52, 95, 114, 111, 117, 110, 100, 0, 186, 1, 13, 118, 101, 99, 116, 111, 114, 52, 95, 115, 99, 97, 108, 101, 0, 174, 1, 19, 118, 101, 99, 116, 111, 114, 52, 95, 115, 99, 97, 108, 101, 65, 110, 100, 65, 100, 100, 0, 103, 16, 118, 101, 99, 116, 111, 114, 52, 95, 100, 105, 115, 116, 97, 110, 99, 101, 0, 111, 23, 118, 101, 99, 116, 111, 114, 52, 95, 115, 113, 117, 97, 114, 101, 100, 68, 105, 115, 116, 97, 110, 99, 101, 0, 117, 11, 118, 101, 99, 116, 111, 114, 52, 95, 108, 101, 110, 0, 247, 1, 21, 118, 101, 99, 116, 111, 114, 52, 95, 115, 113, 117, 97, 114, 101, 100, 76, 101, 110, 103, 116, 104, 0, 248, 1, 14, 118, 101, 99, 116, 111, 114, 52, 95, 110, 101, 103, 97, 116, 101, 0, 187, 1, 15, 118, 101, 99, 116, 111, 114, 52, 95, 105, 110, 118, 101, 114, 115, 101, 0, 175, 1, 17, 118, 101, 99, 116, 111, 114, 52, 95, 110, 111, 114, 109, 97, 108, 105, 122, 101, 0, 119, 11, 118, 101, 99, 116, 111, 114, 52, 95, 100, 111, 116, 0, 137, 1, 13, 118, 101, 99, 116, 111, 114, 52, 95, 99, 114, 111, 115, 115, 0, 20, 12, 118, 101, 99, 116, 111, 114, 52, 95, 108, 101, 114, 112, 0, 92, 14, 118, 101, 99, 116, 111, 114, 52, 95, 114, 97, 110, 100, 111, 109, 0, 118, 21, 118, 101, 99, 116, 111, 114, 52, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 77, 97, 116, 52, 0, 57, 21, 118, 101, 99, 116, 111, 114, 52, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 81, 117, 97, 116, 0, 49, 12, 118, 101, 99, 116, 111, 114, 52, 95, 122, 101, 114, 111, 0, 158, 2, 19, 118, 101, 99, 116, 111, 114, 52, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 155, 1, 14, 118, 101, 99, 116, 111, 114, 52, 95, 101, 113, 117, 97, 108, 115, 0, 47, 11, 118, 101, 99, 116, 111, 114, 52, 95, 115, 117, 98, 0, 114, 11, 118, 101, 99, 116, 111, 114, 52, 95, 109, 117, 108, 0, 115, 11, 118, 101, 99, 116, 111, 114, 52, 95, 100, 105, 118, 0, 116, 12, 118, 101, 99, 116, 111, 114, 52, 95, 100, 105, 115, 116, 0, 111, 15, 118, 101, 99, 116, 111, 114, 52, 95, 115, 113, 114, 68, 105, 115, 116, 0, 117, 14, 118, 101, 99, 116, 111, 114, 52, 95, 115, 113, 114, 76, 101, 110, 0, 248, 1, 18, 95, 95, 119, 98, 103, 95, 109, 97, 116, 114, 105, 120, 50, 95, 102, 114, 101, 101, 0, 173, 2, 14, 109, 97, 116, 114, 105, 120, 50, 95, 99, 114, 101, 97, 116, 101, 0, 172, 2, 13, 109, 97, 116, 114, 105, 120, 50, 95, 99, 108, 111, 110, 101, 0, 129, 2, 12, 109, 97, 116, 114, 105, 120, 50, 95, 99, 111, 112, 121, 0, 238, 1, 16, 109, 97, 116, 114, 105, 120, 50, 95, 105, 100, 101, 110, 116, 105, 116, 121, 0, 159, 2, 18, 109, 97, 116, 114, 105, 120, 50, 95, 102, 114, 111, 109, 86, 97, 108, 117, 101, 115, 0, 160, 2, 11, 109, 97, 116, 114, 105, 120, 50, 95, 115, 101, 116, 0, 147, 2, 17, 109, 97, 116, 114, 105, 120, 50, 95, 116, 114, 97, 110, 115, 112, 111, 115, 101, 0, 151, 1, 14, 109, 97, 116, 114, 105, 120, 50, 95, 105, 110, 118, 101, 114, 116, 0, 131, 1, 15, 109, 97, 116, 114, 105, 120, 50, 95, 97, 100, 106, 111, 105, 110, 116, 0, 112, 19, 109, 97, 116, 114, 105, 120, 50, 95, 100, 101, 116, 101, 114, 109, 105, 110, 97, 110, 116, 0, 149, 2, 16, 109, 97, 116, 114, 105, 120, 50, 95, 109, 117, 108, 116, 105, 112, 108, 121, 0, 204, 1, 14, 109, 97, 116, 114, 105, 120, 50, 95, 114, 111, 116, 97, 116, 101, 0, 126, 13, 109, 97, 116, 114, 105, 120, 50, 95, 115, 99, 97, 108, 101, 0, 125, 20, 109, 97, 116, 114, 105, 120, 50, 95, 102, 114, 111, 109, 82, 111, 116, 97, 116, 105, 111, 110, 0, 138, 2, 19, 109, 97, 116, 114, 105, 120, 50, 95, 102, 114, 111, 109, 83, 99, 97, 108, 105, 110, 103, 0, 228, 1, 12, 109, 97, 116, 114, 105, 120, 50, 95, 102, 114, 111, 98, 0, 247, 1, 11, 109, 97, 116, 114, 105, 120, 50, 95, 76, 68, 85, 0, 127, 11, 109, 97, 116, 114, 105, 120, 50, 95, 97, 100, 100, 0, 113, 16, 109, 97, 116, 114, 105, 120, 50, 95, 115, 117, 98, 116, 114, 97, 99, 116, 0, 114, 19, 109, 97, 116, 114, 105, 120, 50, 95, 101, 120, 97, 99, 116, 69, 113, 117, 97, 108, 115, 0, 155, 1, 14, 109, 97, 116, 114, 105, 120, 50, 95, 101, 113, 117, 97, 108, 115, 0, 47, 22, 109, 97, 116, 114, 105, 120, 50, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 0, 174, 1, 28, 109, 97, 116, 114, 105, 120, 50, 95, 109, 117, 108, 116, 105, 112, 108, 121, 83, 99, 97, 108, 97, 114, 65, 110, 100, 65, 100, 100, 0, 103, 11, 109, 97, 116, 114, 105, 120, 50, 95, 109, 117, 108, 0, 204, 1, 11, 109, 97, 116, 114, 105, 120, 50, 95, 115, 117, 98, 0, 114, 10, 223, 201, 4, 179, 2, 168, 24, 3, 52, 127, 1, 126, 11, 124, 35, 0, 65, 176, 4, 107, 34, 4, 36, 0, 32, 4, 66, 0, 55, 3, 152, 1, 32, 4, 66, 0, 55, 3, 144, 1, 32, 4, 66, 0, 55, 3, 136, 1, 32, 4, 66, 0, 55, 3, 128, 1, 32, 4, 66, 0, 55, 3, 120, 32, 4, 66, 0, 55, 3, 112, 32, 4, 66, 0, 55, 3, 104, 32, 4, 66, 0, 55, 3, 96, 32, 4, 66, 0, 55, 3, 88, 32, 4, 66, 0, 55, 3, 80, 32, 4, 66, 0, 55, 3, 72, 32, 4, 66, 0, 55, 3, 64, 32, 4, 66, 0, 55, 3, 56, 32, 4, 66, 0, 55, 3, 48, 32, 4, 66, 0, 55, 3, 40, 32, 4, 66, 0, 55, 3, 32, 32, 4, 66, 0, 55, 3, 24, 32, 4, 66, 0, 55, 3, 16, 32, 4, 66, 0, 55, 3, 8, 32, 4, 66, 0, 55, 3, 0, 32, 4, 66, 0, 55, 3, 184, 2, 32, 4, 66, 0, 55, 3, 176, 2, 32, 4, 66, 0, 55, 3, 168, 2, 32, 4, 66, 0, 55, 3, 160, 2, 32, 4, 66, 0, 55, 3, 152, 2, 32, 4, 66, 0, 55, 3, 144, 2, 32, 4, 66, 0, 55, 3, 136, 2, 32, 4, 66, 0, 55, 3, 128, 2, 32, 4, 66, 0, 55, 3, 248, 1, 32, 4, 66, 0, 55, 3, 240, 1, 32, 4, 66, 0, 55, 3, 232, 1, 32, 4, 66, 0, 55, 3, 224, 1, 32, 4, 66, 0, 55, 3, 216, 1, 32, 4, 66, 0, 55, 3, 208, 1, 32, 4, 66, 0, 55, 3, 200, 1, 32, 4, 66, 0, 55, 3, 192, 1, 32, 4, 66, 0, 55, 3, 184, 1, 32, 4, 66, 0, 55, 3, 176, 1, 32, 4, 66, 0, 55, 3, 168, 1, 32, 4, 66, 0, 55, 3, 160, 1, 32, 4, 66, 0, 55, 3, 216, 3, 32, 4, 66, 0, 55, 3, 208, 3, 32, 4, 66, 0, 55, 3, 200, 3, 32, 4, 66, 0, 55, 3, 192, 3, 32, 4, 66, 0, 55, 3, 184, 3, 32, 4, 66, 0, 55, 3, 176, 3, 32, 4, 66, 0, 55, 3, 168, 3, 32, 4, 66, 0, 55, 3, 160, 3, 32, 4, 66, 0, 55, 3, 152, 3, 32, 4, 66, 0, 55, 3, 144, 3, 32, 4, 66, 0, 55, 3, 136, 3, 32, 4, 66, 0, 55, 3, 128, 3, 32, 4, 66, 0, 55, 3, 248, 2, 32, 4, 66, 0, 55, 3, 240, 2, 32, 4, 66, 0, 55, 3, 232, 2, 32, 4, 66, 0, 55, 3, 224, 2, 32, 4, 66, 0, 55, 3, 216, 2, 32, 4, 66, 0, 55, 3, 208, 2, 32, 4, 66, 0, 55, 3, 200, 2, 32, 4, 66, 0, 55, 3, 192, 2, 32, 4, 65, 224, 3, 106, 16, 168, 2, 26, 65, 236, 128, 192, 0, 40, 2, 0, 34, 15, 33, 9, 32, 2, 65, 125, 106, 65, 24, 109, 34, 3, 65, 0, 32, 3, 65, 0, 74, 27, 34, 20, 33, 8, 32, 20, 65, 2, 116, 65, 252, 128, 192, 0, 106, 33, 7, 32, 2, 65, 104, 106, 33, 13, 32, 4, 33, 5, 65, 0, 33, 3, 3, 64, 32, 5, 2, 124, 32, 3, 32, 8, 106, 65, 0, 78, 4, 64, 32, 7, 40, 2, 0, 183, 12, 1, 11, 68, 0, 0, 0, 0, 0, 0, 0, 0, 11, 57, 3, 0, 32, 5, 65, 8, 106, 33, 5, 32, 7, 65, 4, 106, 33, 7, 32, 3, 32, 9, 73, 33, 10, 32, 3, 65, 1, 106, 33, 3, 32, 10, 13, 0, 11, 32, 13, 32, 20, 65, 104, 108, 34, 33, 106, 33, 6, 32, 4, 33, 21, 65, 0, 33, 3, 3, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 3, 14, 2, 0, 1, 2, 11, 32, 22, 32, 15, 73, 33, 9, 68, 0, 0, 0, 0, 0, 0, 0, 0, 33, 56, 32, 0, 33, 3, 65, 0, 33, 5, 32, 21, 33, 7, 3, 64, 32, 56, 32, 3, 43, 3, 0, 32, 7, 43, 3, 0, 162, 160, 33, 56, 32, 5, 65, 0, 73, 33, 10, 32, 3, 65, 8, 106, 33, 3, 32, 5, 65, 1, 106, 33, 5, 32, 7, 65, 120, 106, 33, 7, 32, 10, 13, 0, 11, 32, 4, 65, 192, 2, 106, 32, 22, 65, 3, 116, 106, 32, 56, 57, 3, 0, 32, 21, 65, 8, 106, 33, 21, 32, 9, 32, 22, 106, 33, 22, 32, 9, 13, 2, 65, 255, 7, 33, 34, 65, 129, 120, 33, 35, 66, 52, 33, 55, 68, 0, 0, 0, 0, 0, 0, 96, 3, 33, 58, 68, 0, 0, 0, 0, 0, 0, 240, 63, 33, 60, 68, 0, 0, 0, 0, 0, 0, 224, 127, 33, 59, 68, 0, 0, 0, 0, 0, 0, 240, 127, 68, 0, 0, 0, 0, 0, 0, 224, 127, 32, 6, 65, 129, 120, 106, 34, 3, 65, 255, 7, 74, 34, 26, 27, 68, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 96, 3, 32, 6, 65, 201, 7, 106, 34, 5, 65, 130, 120, 72, 34, 27, 27, 68, 0, 0, 0, 0, 0, 0, 240, 63, 32, 6, 65, 130, 120, 72, 34, 7, 27, 32, 6, 65, 255, 7, 74, 34, 10, 27, 32, 6, 65, 130, 112, 106, 34, 12, 65, 255, 7, 32, 12, 65, 255, 7, 72, 27, 32, 3, 32, 26, 27, 34, 36, 32, 6, 65, 146, 15, 106, 34, 3, 65, 130, 120, 32, 3, 65, 130, 120, 74, 27, 32, 5, 32, 27, 27, 34, 37, 32, 6, 32, 7, 27, 32, 10, 27, 65, 255, 7, 106, 173, 66, 52, 134, 191, 162, 33, 61, 65, 23, 33, 38, 65, 23, 32, 6, 107, 65, 31, 113, 33, 39, 65, 24, 32, 6, 107, 65, 31, 113, 33, 28, 65, 2, 33, 14, 65, 124, 33, 16, 32, 15, 65, 2, 116, 32, 4, 106, 65, 220, 3, 106, 33, 40, 32, 4, 65, 220, 3, 106, 33, 41, 65, 120, 33, 29, 32, 4, 65, 184, 2, 106, 33, 42, 65, 3, 33, 19, 32, 6, 65, 128, 8, 72, 33, 43, 68, 0, 0, 0, 0, 0, 0, 192, 63, 33, 62, 68, 0, 0, 0, 0, 0, 0, 32, 192, 33, 63, 65, 1, 33, 12, 32, 6, 65, 1, 72, 33, 44, 32, 6, 65, 0, 74, 33, 45, 65, 255, 255, 255, 1, 33, 46, 65, 255, 255, 255, 3, 33, 47, 65, 4, 33, 30, 65, 127, 33, 23, 65, 252, 128, 192, 0, 33, 48, 65, 8, 33, 31, 68, 0, 0, 0, 0, 0, 0, 224, 63, 33, 64, 68, 0, 0, 0, 0, 0, 0, 112, 62, 33, 65, 68, 0, 0, 0, 0, 0, 0, 112, 193, 33, 66, 32, 15, 33, 17, 12, 3, 11, 32, 17, 34, 8, 32, 19, 116, 34, 3, 32, 4, 65, 192, 2, 106, 106, 43, 3, 0, 33, 56, 32, 8, 4, 64, 32, 3, 32, 42, 106, 33, 3, 32, 4, 65, 224, 3, 106, 33, 5, 32, 8, 33, 7, 3, 64, 32, 5, 2, 127, 65, 128, 128, 128, 128, 120, 32, 56, 2, 127, 65, 128, 128, 128, 128, 120, 32, 56, 32, 65, 162, 34, 57, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 69, 13, 0, 26, 32, 57, 170, 11, 183, 34, 57, 32, 66, 162, 160, 34, 56, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 69, 13, 0, 26, 32, 56, 170, 11, 54, 2, 0, 32, 5, 32, 30, 106, 33, 5, 32, 3, 43, 3, 0, 32, 57, 160, 33, 56, 32, 7, 32, 12, 75, 33, 10, 32, 7, 32, 23, 106, 33, 7, 32, 3, 32, 29, 106, 33, 3, 32, 10, 13, 0, 11, 11, 2, 127, 32, 43, 69, 4, 64, 32, 56, 32, 59, 162, 34, 56, 32, 59, 162, 32, 56, 32, 26, 27, 33, 56, 32, 36, 12, 1, 11, 32, 6, 32, 35, 76, 4, 64, 32, 56, 32, 58, 162, 34, 56, 32, 58, 162, 32, 56, 32, 27, 27, 33, 56, 32, 37, 12, 1, 11, 32, 6, 11, 33, 3, 2, 127, 65, 128, 128, 128, 128, 120, 32, 56, 32, 3, 32, 34, 106, 173, 32, 55, 134, 191, 162, 34, 56, 32, 56, 32, 62, 162, 156, 32, 63, 162, 160, 34, 56, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 69, 13, 0, 26, 32, 56, 170, 11, 33, 18, 32, 56, 32, 18, 183, 161, 33, 56, 2, 64, 2, 127, 2, 64, 2, 127, 2, 64, 2, 64, 2, 64, 2, 64, 32, 44, 69, 4, 64, 32, 4, 65, 224, 3, 106, 32, 8, 32, 14, 116, 106, 32, 16, 106, 34, 3, 32, 3, 40, 2, 0, 34, 3, 32, 3, 32, 28, 117, 34, 3, 32, 28, 116, 107, 34, 5, 54, 2, 0, 32, 3, 32, 18, 106, 33, 18, 32, 5, 32, 39, 117, 34, 13, 32, 12, 78, 13, 1, 12, 2, 11, 32, 6, 4, 64, 65, 2, 33, 13, 65, 0, 33, 24, 32, 56, 32, 64, 102, 32, 12, 115, 69, 13, 1, 12, 4, 11, 32, 4, 65, 224, 3, 106, 32, 8, 32, 14, 116, 106, 32, 16, 106, 40, 2, 0, 32, 38, 117, 34, 13, 32, 12, 72, 13, 1, 11, 65, 0, 33, 9, 32, 8, 4, 64, 32, 4, 65, 224, 3, 106, 33, 3, 32, 8, 33, 10, 3, 64, 32, 3, 40, 2, 0, 33, 5, 2, 64, 32, 3, 32, 9, 4, 127, 65, 255, 255, 255, 7, 5, 32, 5, 69, 4, 64, 65, 0, 33, 9, 12, 2, 11, 65, 1, 33, 9, 65, 128, 128, 128, 8, 11, 32, 5, 107, 54, 2, 0, 11, 32, 3, 32, 30, 106, 33, 3, 32, 10, 32, 23, 106, 34, 10, 13, 0, 11, 11, 2, 64, 32, 45, 69, 13, 0, 32, 6, 32, 14, 71, 4, 64, 32, 6, 32, 12, 71, 13, 1, 32, 4, 65, 224, 3, 106, 32, 8, 32, 14, 116, 106, 32, 16, 106, 34, 3, 32, 3, 40, 2, 0, 32, 47, 113, 54, 2, 0, 12, 1, 11, 32, 4, 65, 224, 3, 106, 32, 8, 32, 14, 116, 106, 32, 16, 106, 34, 3, 32, 3, 40, 2, 0, 32, 46, 113, 54, 2, 0, 11, 32, 12, 32, 18, 106, 33, 18, 32, 13, 32, 14, 70, 13, 1, 11, 32, 13, 33, 24, 12, 1, 11, 32, 60, 32, 56, 161, 34, 56, 32, 61, 161, 32, 56, 32, 9, 27, 33, 56, 65, 2, 33, 24, 11, 2, 64, 2, 64, 32, 56, 68, 0, 0, 0, 0, 0, 0, 0, 0, 97, 4, 64, 32, 15, 32, 8, 32, 23, 106, 34, 3, 77, 4, 64, 32, 41, 32, 8, 32, 14, 116, 106, 33, 5, 65, 0, 33, 7, 3, 64, 32, 5, 40, 2, 0, 32, 7, 114, 33, 7, 32, 3, 32, 15, 32, 3, 73, 34, 10, 107, 33, 3, 32, 5, 32, 16, 106, 33, 5, 32, 10, 13, 0, 11, 32, 7, 13, 2, 11, 32, 40, 33, 3, 32, 8, 33, 17, 3, 64, 32, 12, 32, 17, 106, 33, 17, 32, 3, 40, 2, 0, 33, 5, 32, 3, 32, 16, 106, 33, 3, 32, 5, 69, 13, 0, 11, 32, 8, 32, 12, 106, 34, 9, 32, 17, 75, 13, 10, 32, 4, 32, 8, 65, 1, 106, 32, 19, 116, 106, 33, 8, 3, 64, 32, 4, 32, 9, 32, 19, 116, 106, 32, 9, 32, 20, 106, 32, 14, 116, 32, 48, 106, 40, 2, 0, 183, 57, 3, 0, 32, 9, 32, 17, 73, 33, 13, 68, 0, 0, 0, 0, 0, 0, 0, 0, 33, 56, 65, 0, 33, 3, 32, 8, 33, 5, 32, 0, 33, 7, 3, 64, 32, 56, 32, 7, 43, 3, 0, 32, 5, 43, 3, 0, 162, 160, 33, 56, 32, 3, 65, 0, 73, 33, 10, 32, 5, 32, 29, 106, 33, 5, 32, 7, 32, 31, 106, 33, 7, 32, 3, 32, 12, 106, 33, 3, 32, 10, 13, 0, 11, 32, 4, 65, 192, 2, 106, 32, 9, 32, 19, 116, 106, 32, 56, 57, 3, 0, 32, 8, 32, 31, 106, 33, 8, 32, 9, 32, 13, 106, 33, 9, 32, 13, 13, 0, 11, 65, 1, 33, 3, 12, 12, 11, 2, 64, 65, 0, 32, 6, 107, 34, 3, 65, 128, 8, 78, 4, 64, 32, 56, 68, 0, 0, 0, 0, 0, 0, 224, 127, 162, 33, 56, 65, 129, 120, 32, 6, 107, 34, 3, 65, 255, 7, 76, 13, 1, 65, 130, 112, 32, 6, 107, 34, 3, 65, 255, 7, 32, 3, 65, 255, 7, 72, 27, 33, 3, 32, 56, 68, 0, 0, 0, 0, 0, 0, 224, 127, 162, 33, 56, 12, 1, 11, 32, 3, 65, 130, 120, 78, 13, 0, 32, 56, 68, 0, 0, 0, 0, 0, 0, 96, 3, 162, 33, 56, 65, 201, 7, 32, 6, 107, 34, 3, 65, 129, 120, 74, 13, 0, 65, 146, 15, 32, 6, 107, 34, 3, 65, 130, 120, 32, 3, 65, 130, 120, 74, 27, 33, 3, 32, 56, 68, 0, 0, 0, 0, 0, 0, 96, 3, 162, 33, 56, 11, 32, 56, 32, 3, 65, 255, 7, 106, 173, 66, 52, 134, 191, 162, 34, 56, 68, 0, 0, 0, 0, 0, 0, 112, 65, 102, 65, 1, 115, 4, 64, 32, 4, 65, 224, 3, 106, 32, 8, 65, 2, 116, 106, 33, 3, 32, 56, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 13, 2, 65, 128, 128, 128, 128, 120, 12, 3, 11, 32, 56, 68, 0, 0, 0, 0, 0, 0, 112, 62, 162, 34, 57, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 13, 3, 65, 128, 128, 128, 128, 120, 12, 4, 11, 32, 8, 65, 2, 116, 32, 4, 106, 65, 220, 3, 106, 33, 3, 32, 8, 33, 11, 3, 64, 32, 11, 65, 127, 106, 33, 11, 32, 6, 65, 104, 106, 33, 6, 32, 3, 40, 2, 0, 33, 5, 32, 3, 65, 124, 106, 33, 3, 32, 5, 69, 13, 0, 11, 12, 4, 11, 32, 56, 170, 11, 33, 5, 32, 3, 32, 5, 54, 2, 0, 32, 8, 33, 11, 12, 2, 11, 32, 57, 170, 11, 33, 3, 32, 4, 65, 224, 3, 106, 32, 8, 65, 1, 106, 34, 11, 65, 2, 116, 106, 32, 3, 54, 2, 0, 32, 4, 65, 224, 3, 106, 32, 8, 65, 2, 116, 106, 2, 127, 65, 128, 128, 128, 128, 120, 32, 56, 32, 3, 183, 68, 0, 0, 0, 0, 0, 0, 112, 193, 162, 160, 34, 56, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 69, 13, 0, 26, 32, 56, 170, 11, 54, 2, 0, 32, 2, 32, 33, 106, 33, 6, 11, 2, 64, 32, 6, 65, 128, 8, 78, 4, 64, 68, 0, 0, 0, 0, 0, 0, 224, 127, 33, 56, 32, 6, 65, 129, 120, 106, 34, 3, 65, 255, 7, 76, 13, 1, 32, 6, 65, 130, 112, 106, 34, 3, 65, 255, 7, 32, 3, 65, 255, 7, 72, 27, 33, 3, 68, 0, 0, 0, 0, 0, 0, 240, 127, 33, 56, 12, 1, 11, 68, 0, 0, 0, 0, 0, 0, 240, 63, 33, 56, 32, 6, 65, 130, 120, 72, 4, 64, 68, 0, 0, 0, 0, 0, 0, 96, 3, 33, 56, 32, 6, 65, 201, 7, 106, 34, 3, 65, 129, 120, 74, 13, 1, 32, 6, 65, 146, 15, 106, 34, 3, 65, 130, 120, 32, 3, 65, 130, 120, 74, 27, 33, 3, 68, 0, 0, 0, 0, 0, 0, 0, 0, 33, 56, 12, 1, 11, 32, 6, 33, 3, 11, 32, 56, 32, 3, 65, 255, 7, 106, 173, 66, 52, 134, 191, 162, 33, 56, 32, 4, 65, 192, 2, 106, 32, 11, 65, 3, 116, 106, 33, 3, 32, 4, 65, 224, 3, 106, 32, 11, 65, 2, 116, 106, 33, 5, 65, 127, 33, 7, 3, 64, 32, 3, 32, 56, 32, 5, 40, 2, 0, 183, 162, 57, 3, 0, 32, 3, 65, 120, 106, 33, 3, 32, 5, 65, 124, 106, 33, 5, 32, 56, 68, 0, 0, 0, 0, 0, 0, 112, 62, 162, 33, 56, 32, 11, 32, 7, 65, 1, 106, 34, 7, 71, 13, 0, 11, 65, 3, 33, 49, 32, 4, 65, 192, 2, 106, 32, 11, 65, 3, 116, 106, 33, 25, 65, 127, 33, 50, 65, 136, 131, 192, 0, 33, 51, 65, 8, 33, 52, 65, 1, 33, 53, 65, 120, 33, 54, 32, 11, 33, 32, 65, 2, 33, 3, 12, 5, 11, 32, 11, 32, 32, 34, 9, 107, 33, 10, 32, 9, 32, 50, 106, 33, 32, 68, 0, 0, 0, 0, 0, 0, 0, 0, 33, 56, 65, 0, 33, 3, 65, 1, 33, 5, 3, 64, 2, 64, 32, 56, 32, 3, 32, 51, 106, 43, 3, 0, 32, 3, 32, 25, 106, 43, 3, 0, 162, 160, 33, 56, 32, 5, 32, 10, 75, 13, 0, 32, 3, 32, 52, 106, 33, 3, 32, 5, 32, 15, 77, 33, 7, 32, 5, 32, 53, 106, 33, 5, 32, 7, 13, 1, 11, 11, 32, 4, 65, 160, 1, 106, 32, 10, 32, 49, 116, 106, 32, 56, 57, 3, 0, 32, 25, 32, 54, 106, 33, 25, 32, 9, 13, 3, 32, 11, 65, 127, 115, 33, 5, 32, 4, 65, 160, 1, 106, 32, 11, 65, 3, 116, 106, 33, 3, 68, 0, 0, 0, 0, 0, 0, 0, 0, 33, 56, 3, 64, 32, 56, 32, 3, 43, 3, 0, 160, 33, 56, 32, 3, 65, 120, 106, 33, 3, 32, 5, 65, 1, 106, 34, 5, 13, 0, 11, 32, 1, 32, 56, 154, 32, 56, 32, 24, 27, 57, 3, 0, 32, 4, 65, 176, 4, 106, 36, 0, 32, 18, 65, 7, 113, 15, 11, 65, 0, 33, 3, 12, 3, 11, 65, 1, 33, 3, 12, 2, 11, 65, 1, 33, 3, 12, 1, 11, 65, 2, 33, 3, 12, 0, 0, 11, 0, 11, 189, 25, 2, 8, 127, 1, 126, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 127, 2, 64, 2, 64, 2, 127, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 127, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 65, 244, 1, 77, 4, 64, 65, 156, 132, 192, 0, 40, 2, 0, 34, 5, 65, 16, 32, 0, 65, 11, 106, 65, 120, 113, 32, 0, 65, 11, 73, 27, 34, 2, 65, 3, 118, 34, 1, 65, 31, 113, 34, 3, 118, 34, 0, 65, 3, 113, 69, 13, 1, 32, 0, 65, 127, 115, 65, 1, 113, 32, 1, 106, 34, 2, 65, 3, 116, 34, 3, 65, 172, 132, 192, 0, 106, 40, 2, 0, 34, 0, 65, 8, 106, 33, 4, 32, 0, 40, 2, 8, 34, 1, 32, 3, 65, 164, 132, 192, 0, 106, 34, 3, 70, 13, 2, 32, 1, 32, 3, 54, 2, 12, 32, 3, 65, 8, 106, 32, 1, 54, 2, 0, 12, 3, 11, 32, 0, 65, 205, 255, 123, 79, 13, 28, 32, 0, 65, 11, 106, 34, 0, 65, 120, 113, 33, 2, 65, 160, 132, 192, 0, 40, 2, 0, 34, 8, 69, 13, 9, 65, 0, 32, 2, 107, 33, 1, 2, 127, 65, 0, 32, 0, 65, 8, 118, 34, 0, 69, 13, 0, 26, 65, 31, 32, 2, 65, 255, 255, 255, 7, 75, 13, 0, 26, 32, 2, 65, 38, 32, 0, 103, 34, 0, 107, 65, 31, 113, 118, 65, 1, 113, 65, 31, 32, 0, 107, 65, 1, 116, 114, 11, 34, 7, 65, 2, 116, 65, 172, 134, 192, 0, 106, 40, 2, 0, 34, 0, 69, 13, 6, 32, 2, 65, 0, 65, 25, 32, 7, 65, 1, 118, 107, 65, 31, 113, 32, 7, 65, 31, 70, 27, 116, 33, 5, 3, 64, 2, 64, 32, 0, 40, 2, 4, 65, 120, 113, 34, 6, 32, 2, 73, 13, 0, 32, 6, 32, 2, 107, 34, 6, 32, 1, 79, 13, 0, 32, 0, 33, 4, 32, 6, 34, 1, 69, 13, 6, 11, 32, 0, 65, 20, 106, 40, 2, 0, 34, 6, 32, 3, 32, 6, 32, 0, 32, 5, 65, 29, 118, 65, 4, 113, 106, 65, 16, 106, 40, 2, 0, 34, 0, 71, 27, 32, 3, 32, 6, 27, 33, 3, 32, 5, 65, 1, 116, 33, 5, 32, 0, 13, 0, 11, 32, 3, 69, 13, 5, 32, 3, 33, 0, 12, 7, 11, 32, 2, 65, 172, 135, 192, 0, 40, 2, 0, 77, 13, 8, 32, 0, 69, 13, 2, 32, 0, 32, 3, 116, 65, 2, 32, 3, 116, 34, 0, 65, 0, 32, 0, 107, 114, 113, 34, 0, 65, 0, 32, 0, 107, 113, 104, 34, 1, 65, 3, 116, 34, 4, 65, 172, 132, 192, 0, 106, 40, 2, 0, 34, 0, 40, 2, 8, 34, 3, 32, 4, 65, 164, 132, 192, 0, 106, 34, 4, 70, 13, 10, 32, 3, 32, 4, 54, 2, 12, 32, 4, 65, 8, 106, 32, 3, 54, 2, 0, 12, 11, 11, 65, 156, 132, 192, 0, 32, 5, 65, 126, 32, 2, 119, 113, 54, 2, 0, 11, 32, 0, 32, 2, 65, 3, 116, 34, 2, 65, 3, 114, 54, 2, 4, 32, 0, 32, 2, 106, 34, 0, 32, 0, 40, 2, 4, 65, 1, 114, 54, 2, 4, 32, 4, 15, 11, 65, 160, 132, 192, 0, 40, 2, 0, 34, 0, 69, 13, 5, 32, 0, 65, 0, 32, 0, 107, 113, 104, 65, 2, 116, 65, 172, 134, 192, 0, 106, 40, 2, 0, 34, 4, 40, 2, 4, 65, 120, 113, 32, 2, 107, 33, 3, 32, 4, 34, 5, 40, 2, 16, 34, 0, 69, 13, 20, 65, 1, 12, 21, 11, 65, 0, 33, 1, 12, 2, 11, 32, 4, 13, 2, 11, 65, 0, 33, 4, 65, 2, 32, 7, 65, 31, 113, 116, 34, 0, 65, 0, 32, 0, 107, 114, 32, 8, 113, 34, 0, 69, 13, 2, 32, 0, 65, 0, 32, 0, 107, 113, 104, 65, 2, 116, 65, 172, 134, 192, 0, 106, 40, 2, 0, 34, 0, 69, 13, 2, 11, 3, 64, 32, 0, 32, 4, 32, 0, 40, 2, 4, 65, 120, 113, 34, 3, 32, 2, 79, 32, 3, 32, 2, 107, 34, 6, 32, 1, 73, 113, 34, 5, 27, 33, 4, 32, 6, 32, 1, 32, 5, 27, 33, 1, 32, 0, 40, 2, 16, 34, 3, 4, 127, 32, 3, 5, 32, 0, 65, 20, 106, 40, 2, 0, 11, 34, 0, 13, 0, 11, 32, 4, 69, 13, 1, 11, 65, 172, 135, 192, 0, 40, 2, 0, 34, 0, 32, 2, 73, 32, 1, 32, 0, 32, 2, 107, 73, 114, 13, 1, 11, 2, 64, 2, 64, 2, 64, 65, 172, 135, 192, 0, 40, 2, 0, 34, 1, 32, 2, 73, 4, 64, 65, 176, 135, 192, 0, 40, 2, 0, 34, 0, 32, 2, 77, 13, 1, 12, 30, 11, 65, 180, 135, 192, 0, 40, 2, 0, 33, 0, 32, 1, 32, 2, 107, 34, 3, 65, 16, 79, 13, 1, 65, 180, 135, 192, 0, 65, 0, 54, 2, 0, 65, 172, 135, 192, 0, 65, 0, 54, 2, 0, 32, 0, 32, 1, 65, 3, 114, 54, 2, 4, 32, 0, 32, 1, 106, 34, 1, 65, 4, 106, 33, 2, 32, 1, 40, 2, 4, 65, 1, 114, 33, 1, 12, 2, 11, 65, 0, 33, 1, 32, 2, 65, 175, 128, 4, 106, 34, 3, 65, 16, 118, 64, 0, 34, 0, 65, 127, 70, 13, 20, 32, 0, 65, 16, 116, 34, 5, 69, 13, 20, 65, 188, 135, 192, 0, 32, 3, 65, 128, 128, 124, 113, 34, 6, 65, 188, 135, 192, 0, 40, 2, 0, 106, 34, 0, 54, 2, 0, 65, 192, 135, 192, 0, 65, 192, 135, 192, 0, 40, 2, 0, 34, 1, 32, 0, 32, 0, 32, 1, 73, 27, 54, 2, 0, 65, 184, 135, 192, 0, 40, 2, 0, 34, 1, 69, 13, 9, 65, 196, 135, 192, 0, 33, 0, 3, 64, 32, 0, 40, 2, 0, 34, 3, 32, 0, 40, 2, 4, 34, 4, 106, 32, 5, 70, 13, 11, 32, 0, 40, 2, 8, 34, 0, 13, 0, 11, 12, 18, 11, 65, 172, 135, 192, 0, 32, 3, 54, 2, 0, 65, 180, 135, 192, 0, 32, 0, 32, 2, 106, 34, 5, 54, 2, 0, 32, 5, 32, 3, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 3, 54, 2, 0, 32, 2, 65, 3, 114, 33, 1, 32, 0, 65, 4, 106, 33, 2, 11, 32, 2, 32, 1, 54, 2, 0, 32, 0, 65, 8, 106, 15, 11, 32, 4, 16, 68, 32, 1, 65, 15, 75, 13, 2, 32, 4, 32, 1, 32, 2, 106, 34, 0, 65, 3, 114, 54, 2, 4, 32, 0, 32, 4, 106, 34, 0, 32, 0, 40, 2, 4, 65, 1, 114, 54, 2, 4, 12, 12, 11, 65, 156, 132, 192, 0, 32, 5, 65, 126, 32, 1, 119, 113, 54, 2, 0, 11, 32, 0, 65, 8, 106, 33, 3, 32, 0, 32, 2, 65, 3, 114, 54, 2, 4, 32, 0, 32, 2, 106, 34, 5, 32, 1, 65, 3, 116, 34, 1, 32, 2, 107, 34, 2, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 2, 54, 2, 0, 65, 172, 135, 192, 0, 40, 2, 0, 34, 0, 69, 13, 3, 32, 0, 65, 3, 118, 34, 4, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 1, 65, 180, 135, 192, 0, 40, 2, 0, 33, 0, 65, 156, 132, 192, 0, 40, 2, 0, 34, 6, 65, 1, 32, 4, 65, 31, 113, 116, 34, 4, 113, 69, 13, 1, 32, 1, 40, 2, 8, 12, 2, 11, 32, 4, 32, 2, 65, 3, 114, 54, 2, 4, 32, 2, 32, 4, 106, 34, 0, 32, 1, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 1, 54, 2, 0, 32, 1, 65, 255, 1, 75, 13, 5, 32, 1, 65, 3, 118, 34, 1, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 2, 65, 156, 132, 192, 0, 40, 2, 0, 34, 3, 65, 1, 32, 1, 65, 31, 113, 116, 34, 1, 113, 69, 13, 7, 32, 2, 40, 2, 8, 12, 8, 11, 65, 156, 132, 192, 0, 32, 4, 32, 6, 114, 54, 2, 0, 32, 1, 11, 33, 4, 32, 1, 32, 0, 54, 2, 8, 32, 4, 32, 0, 54, 2, 12, 32, 0, 32, 1, 54, 2, 12, 32, 0, 32, 4, 54, 2, 8, 11, 65, 180, 135, 192, 0, 32, 5, 54, 2, 0, 65, 172, 135, 192, 0, 32, 2, 54, 2, 0, 32, 3, 15, 11, 2, 64, 65, 216, 135, 192, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 32, 5, 77, 13, 1, 11, 65, 216, 135, 192, 0, 32, 5, 54, 2, 0, 11, 65, 0, 33, 0, 65, 220, 135, 192, 0, 65, 255, 31, 54, 2, 0, 65, 200, 135, 192, 0, 32, 6, 54, 2, 0, 65, 196, 135, 192, 0, 32, 5, 54, 2, 0, 65, 208, 135, 192, 0, 65, 0, 54, 2, 0, 3, 64, 32, 0, 65, 172, 132, 192, 0, 106, 32, 0, 65, 164, 132, 192, 0, 106, 34, 1, 54, 2, 0, 32, 0, 65, 176, 132, 192, 0, 106, 32, 1, 54, 2, 0, 32, 0, 65, 8, 106, 34, 0, 65, 128, 2, 71, 13, 0, 11, 65, 184, 135, 192, 0, 32, 5, 54, 2, 0, 65, 176, 135, 192, 0, 32, 6, 65, 88, 106, 34, 0, 54, 2, 0, 32, 5, 32, 0, 65, 1, 114, 54, 2, 4, 32, 0, 32, 5, 106, 65, 40, 54, 2, 4, 65, 212, 135, 192, 0, 65, 128, 128, 128, 1, 54, 2, 0, 12, 9, 11, 32, 0, 40, 2, 12, 69, 13, 1, 12, 7, 11, 32, 0, 32, 1, 16, 67, 12, 3, 11, 32, 5, 32, 1, 77, 32, 3, 32, 1, 75, 114, 13, 5, 32, 0, 65, 4, 106, 32, 4, 32, 6, 106, 54, 2, 0, 65, 184, 135, 192, 0, 65, 184, 135, 192, 0, 40, 2, 0, 34, 0, 65, 15, 106, 65, 120, 113, 34, 1, 65, 120, 106, 34, 3, 54, 2, 0, 65, 176, 135, 192, 0, 65, 176, 135, 192, 0, 40, 2, 0, 32, 6, 106, 34, 5, 32, 0, 65, 8, 106, 32, 1, 107, 106, 34, 1, 54, 2, 0, 32, 3, 32, 1, 65, 1, 114, 54, 2, 4, 32, 0, 32, 5, 106, 65, 40, 54, 2, 4, 65, 212, 135, 192, 0, 65, 128, 128, 128, 1, 54, 2, 0, 12, 6, 11, 65, 156, 132, 192, 0, 32, 1, 32, 3, 114, 54, 2, 0, 32, 2, 11, 33, 1, 32, 2, 32, 0, 54, 2, 8, 32, 1, 32, 0, 54, 2, 12, 32, 0, 32, 2, 54, 2, 12, 32, 0, 32, 1, 54, 2, 8, 11, 32, 4, 65, 8, 106, 33, 1, 12, 4, 11, 65, 0, 11, 33, 1, 3, 64, 2, 64, 2, 64, 32, 1, 4, 64, 32, 0, 40, 2, 4, 65, 120, 113, 32, 2, 107, 34, 1, 32, 3, 32, 1, 32, 3, 73, 34, 1, 27, 33, 3, 32, 0, 32, 5, 32, 1, 27, 33, 5, 32, 0, 34, 4, 40, 2, 16, 34, 0, 13, 1, 65, 0, 33, 1, 12, 3, 11, 32, 4, 65, 20, 106, 40, 2, 0, 34, 0, 13, 1, 32, 5, 16, 68, 2, 64, 32, 3, 65, 16, 73, 4, 64, 32, 5, 32, 2, 32, 3, 106, 34, 0, 65, 3, 114, 54, 2, 4, 32, 0, 32, 5, 106, 34, 0, 32, 0, 40, 2, 4, 65, 1, 114, 54, 2, 4, 12, 1, 11, 32, 5, 32, 2, 65, 3, 114, 54, 2, 4, 32, 2, 32, 5, 106, 34, 2, 32, 3, 65, 1, 114, 54, 2, 4, 32, 2, 32, 3, 106, 32, 3, 54, 2, 0, 65, 172, 135, 192, 0, 40, 2, 0, 34, 0, 4, 64, 32, 0, 65, 3, 118, 34, 4, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 1, 65, 180, 135, 192, 0, 40, 2, 0, 33, 0, 2, 127, 65, 156, 132, 192, 0, 40, 2, 0, 34, 6, 65, 1, 32, 4, 65, 31, 113, 116, 34, 4, 113, 4, 64, 32, 1, 40, 2, 8, 12, 1, 11, 65, 156, 132, 192, 0, 32, 4, 32, 6, 114, 54, 2, 0, 32, 1, 11, 33, 4, 32, 1, 32, 0, 54, 2, 8, 32, 4, 32, 0, 54, 2, 12, 32, 0, 32, 1, 54, 2, 12, 32, 0, 32, 4, 54, 2, 8, 11, 65, 180, 135, 192, 0, 32, 2, 54, 2, 0, 65, 172, 135, 192, 0, 32, 3, 54, 2, 0, 11, 32, 5, 65, 8, 106, 15, 11, 65, 1, 33, 1, 12, 1, 11, 65, 1, 33, 1, 12, 0, 0, 11, 0, 11, 65, 216, 135, 192, 0, 65, 216, 135, 192, 0, 40, 2, 0, 34, 0, 32, 5, 32, 0, 32, 5, 73, 27, 54, 2, 0, 32, 5, 32, 6, 106, 33, 3, 65, 196, 135, 192, 0, 33, 0, 2, 127, 2, 64, 2, 64, 2, 64, 3, 64, 32, 3, 32, 0, 40, 2, 0, 71, 4, 64, 32, 0, 40, 2, 8, 34, 0, 13, 1, 12, 2, 11, 11, 32, 0, 40, 2, 12, 69, 13, 1, 11, 65, 196, 135, 192, 0, 33, 0, 3, 64, 2, 64, 32, 0, 40, 2, 0, 34, 3, 32, 1, 77, 4, 64, 32, 3, 32, 0, 40, 2, 4, 106, 34, 3, 32, 1, 75, 13, 1, 11, 32, 0, 40, 2, 8, 33, 0, 12, 1, 11, 11, 65, 184, 135, 192, 0, 32, 5, 54, 2, 0, 65, 176, 135, 192, 0, 32, 6, 65, 88, 106, 34, 0, 54, 2, 0, 32, 5, 32, 0, 65, 1, 114, 54, 2, 4, 32, 0, 32, 5, 106, 65, 40, 54, 2, 4, 65, 212, 135, 192, 0, 65, 128, 128, 128, 1, 54, 2, 0, 32, 1, 32, 3, 65, 96, 106, 65, 120, 113, 65, 120, 106, 34, 0, 32, 0, 32, 1, 65, 16, 106, 73, 27, 34, 4, 65, 27, 54, 2, 4, 65, 196, 135, 192, 0, 41, 2, 0, 33, 9, 32, 4, 65, 16, 106, 65, 204, 135, 192, 0, 41, 2, 0, 55, 2, 0, 32, 4, 32, 9, 55, 2, 8, 65, 200, 135, 192, 0, 32, 6, 54, 2, 0, 65, 196, 135, 192, 0, 32, 5, 54, 2, 0, 65, 204, 135, 192, 0, 32, 4, 65, 8, 106, 54, 2, 0, 65, 208, 135, 192, 0, 65, 0, 54, 2, 0, 32, 4, 65, 28, 106, 33, 0, 3, 64, 32, 0, 65, 7, 54, 2, 0, 32, 3, 32, 0, 65, 4, 106, 34, 0, 75, 13, 0, 11, 32, 1, 32, 4, 70, 13, 3, 32, 4, 32, 4, 40, 2, 4, 65, 126, 113, 54, 2, 4, 32, 1, 32, 4, 32, 1, 107, 34, 0, 65, 1, 114, 54, 2, 4, 32, 4, 32, 0, 54, 2, 0, 32, 0, 65, 255, 1, 77, 4, 64, 32, 0, 65, 3, 118, 34, 3, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 0, 65, 156, 132, 192, 0, 40, 2, 0, 34, 5, 65, 1, 32, 3, 65, 31, 113, 116, 34, 3, 113, 69, 13, 2, 32, 0, 40, 2, 8, 12, 3, 11, 32, 1, 32, 0, 16, 67, 12, 3, 11, 32, 0, 32, 5, 54, 2, 0, 32, 0, 32, 0, 40, 2, 4, 32, 6, 106, 54, 2, 4, 32, 5, 32, 2, 65, 3, 114, 54, 2, 4, 32, 2, 32, 5, 106, 33, 0, 32, 3, 32, 5, 107, 32, 2, 107, 33, 2, 65, 184, 135, 192, 0, 40, 2, 0, 32, 3, 70, 13, 4, 65, 180, 135, 192, 0, 40, 2, 0, 32, 3, 70, 13, 5, 32, 3, 40, 2, 4, 34, 1, 65, 3, 113, 65, 1, 71, 13, 9, 32, 1, 65, 120, 113, 34, 4, 65, 255, 1, 75, 13, 6, 32, 3, 40, 2, 12, 34, 6, 32, 3, 40, 2, 8, 34, 7, 70, 13, 7, 32, 7, 32, 6, 54, 2, 12, 32, 6, 32, 7, 54, 2, 8, 12, 8, 11, 65, 156, 132, 192, 0, 32, 3, 32, 5, 114, 54, 2, 0, 32, 0, 11, 33, 3, 32, 0, 32, 1, 54, 2, 8, 32, 3, 32, 1, 54, 2, 12, 32, 1, 32, 0, 54, 2, 12, 32, 1, 32, 3, 54, 2, 8, 11, 65, 0, 33, 1, 65, 176, 135, 192, 0, 40, 2, 0, 34, 0, 32, 2, 77, 13, 0, 12, 8, 11, 32, 1, 15, 11, 65, 184, 135, 192, 0, 32, 0, 54, 2, 0, 65, 176, 135, 192, 0, 65, 176, 135, 192, 0, 40, 2, 0, 32, 2, 106, 34, 2, 54, 2, 0, 32, 0, 32, 2, 65, 1, 114, 54, 2, 4, 12, 5, 11, 65, 180, 135, 192, 0, 32, 0, 54, 2, 0, 65, 172, 135, 192, 0, 65, 172, 135, 192, 0, 40, 2, 0, 32, 2, 106, 34, 2, 54, 2, 0, 32, 0, 32, 2, 65, 1, 114, 54, 2, 4, 32, 0, 32, 2, 106, 32, 2, 54, 2, 0, 12, 4, 11, 32, 3, 16, 68, 12, 1, 11, 65, 156, 132, 192, 0, 65, 156, 132, 192, 0, 40, 2, 0, 65, 126, 32, 1, 65, 3, 118, 119, 113, 54, 2, 0, 11, 32, 2, 32, 4, 106, 33, 2, 32, 3, 32, 4, 106, 33, 3, 11, 32, 3, 32, 3, 40, 2, 4, 65, 126, 113, 54, 2, 4, 32, 0, 32, 2, 65, 1, 114, 54, 2, 4, 32, 0, 32, 2, 106, 32, 2, 54, 2, 0, 2, 127, 2, 64, 32, 2, 65, 255, 1, 77, 4, 64, 32, 2, 65, 3, 118, 34, 1, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 2, 65, 156, 132, 192, 0, 40, 2, 0, 34, 3, 65, 1, 32, 1, 65, 31, 113, 116, 34, 1, 113, 69, 13, 1, 32, 2, 40, 2, 8, 12, 2, 11, 32, 0, 32, 2, 16, 67, 12, 2, 11, 65, 156, 132, 192, 0, 32, 1, 32, 3, 114, 54, 2, 0, 32, 2, 11, 33, 1, 32, 2, 32, 0, 54, 2, 8, 32, 1, 32, 0, 54, 2, 12, 32, 0, 32, 2, 54, 2, 12, 32, 0, 32, 1, 54, 2, 8, 11, 32, 5, 65, 8, 106, 15, 11, 65, 176, 135, 192, 0, 32, 0, 32, 2, 107, 34, 1, 54, 2, 0, 65, 184, 135, 192, 0, 65, 184, 135, 192, 0, 40, 2, 0, 34, 0, 32, 2, 106, 34, 3, 54, 2, 0, 32, 3, 32, 1, 65, 1, 114, 54, 2, 4, 32, 0, 32, 2, 65, 3, 114, 54, 2, 4, 32, 0, 65, 8, 106, 11, 240, 9, 2, 1, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 65, 0, 33, 2, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 3, 32, 1, 42, 2, 4, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 3, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 3, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 3, 32, 1, 65, 16, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 34, 3, 32, 1, 65, 20, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 34, 3, 32, 1, 65, 24, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 34, 3, 32, 1, 65, 28, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 34, 3, 32, 1, 65, 32, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 36, 106, 42, 2, 0, 34, 3, 32, 1, 65, 36, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 40, 106, 42, 2, 0, 34, 3, 32, 1, 65, 40, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 44, 106, 42, 2, 0, 34, 3, 32, 1, 65, 44, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 48, 106, 42, 2, 0, 34, 3, 32, 1, 65, 48, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 52, 106, 42, 2, 0, 34, 3, 32, 1, 65, 52, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 56, 106, 42, 2, 0, 34, 3, 32, 1, 65, 56, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 60, 106, 42, 2, 0, 34, 3, 32, 1, 65, 60, 106, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 64, 107, 42, 2, 0, 34, 3, 32, 1, 65, 64, 107, 42, 2, 0, 34, 4, 147, 139, 32, 4, 139, 34, 4, 32, 4, 32, 3, 139, 34, 5, 32, 5, 32, 4, 93, 27, 32, 3, 32, 3, 92, 27, 34, 3, 67, 0, 0, 128, 63, 32, 3, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 2, 11, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 238, 10, 2, 3, 127, 3, 124, 35, 0, 65, 16, 107, 34, 2, 36, 0, 32, 0, 187, 33, 4, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 188, 34, 3, 65, 255, 255, 255, 255, 7, 113, 34, 1, 65, 218, 159, 164, 250, 3, 77, 4, 64, 32, 1, 65, 128, 128, 128, 204, 3, 79, 13, 1, 32, 2, 32, 0, 67, 0, 0, 128, 3, 148, 32, 0, 67, 0, 0, 128, 123, 146, 32, 1, 65, 128, 128, 128, 4, 73, 27, 56, 2, 8, 32, 2, 42, 2, 8, 26, 12, 13, 11, 32, 1, 65, 210, 167, 237, 131, 4, 79, 13, 1, 32, 1, 65, 228, 151, 219, 128, 4, 79, 13, 2, 32, 3, 65, 0, 72, 13, 6, 32, 4, 68, 24, 45, 68, 84, 251, 33, 249, 191, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 33, 0, 12, 12, 11, 32, 4, 32, 4, 162, 34, 5, 32, 4, 162, 34, 6, 32, 5, 32, 5, 162, 162, 32, 5, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 6, 32, 5, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 32, 4, 160, 160, 182, 33, 0, 12, 11, 11, 32, 1, 65, 214, 227, 136, 135, 4, 79, 13, 1, 32, 1, 65, 224, 219, 191, 133, 4, 79, 13, 2, 32, 3, 65, 0, 72, 13, 6, 32, 4, 68, 210, 33, 51, 127, 124, 217, 18, 192, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 140, 33, 0, 12, 10, 11, 68, 24, 45, 68, 84, 251, 33, 9, 64, 68, 24, 45, 68, 84, 251, 33, 9, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 162, 34, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 32, 5, 32, 4, 162, 34, 6, 154, 162, 32, 5, 161, 32, 4, 32, 4, 162, 32, 6, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 161, 182, 33, 0, 12, 9, 11, 32, 1, 65, 255, 255, 255, 251, 7, 77, 13, 1, 32, 0, 32, 0, 147, 33, 0, 12, 8, 11, 68, 24, 45, 68, 84, 251, 33, 25, 64, 68, 24, 45, 68, 84, 251, 33, 25, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 32, 4, 162, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 5, 32, 6, 32, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 33, 0, 12, 7, 11, 32, 2, 66, 0, 55, 3, 0, 32, 2, 66, 0, 55, 3, 8, 32, 1, 65, 218, 159, 164, 238, 4, 75, 13, 1, 32, 4, 32, 4, 68, 131, 200, 201, 109, 48, 95, 228, 63, 162, 68, 0, 0, 0, 0, 0, 0, 56, 67, 160, 68, 0, 0, 0, 0, 0, 0, 56, 195, 160, 34, 5, 68, 0, 0, 0, 80, 251, 33, 249, 191, 162, 160, 32, 5, 68, 99, 98, 26, 97, 180, 16, 81, 190, 162, 160, 33, 4, 32, 5, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 13, 3, 65, 128, 128, 128, 128, 120, 33, 1, 12, 5, 11, 32, 4, 68, 24, 45, 68, 84, 251, 33, 249, 63, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 140, 33, 0, 12, 5, 11, 32, 2, 32, 1, 32, 1, 65, 23, 118, 65, 234, 126, 106, 34, 1, 65, 23, 116, 107, 190, 187, 57, 3, 0, 32, 2, 32, 2, 65, 8, 106, 32, 1, 16, 2, 33, 1, 32, 3, 65, 127, 76, 13, 2, 32, 2, 43, 3, 8, 33, 4, 12, 3, 11, 32, 4, 68, 210, 33, 51, 127, 124, 217, 18, 64, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 33, 0, 12, 3, 11, 32, 5, 170, 33, 1, 12, 1, 11, 65, 0, 32, 1, 107, 33, 1, 32, 2, 43, 3, 8, 154, 33, 4, 11, 2, 64, 2, 64, 32, 1, 65, 3, 113, 34, 1, 65, 2, 71, 4, 64, 32, 1, 65, 1, 70, 13, 1, 32, 1, 13, 2, 32, 4, 32, 4, 32, 4, 162, 34, 5, 162, 34, 6, 32, 5, 32, 5, 162, 162, 32, 5, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 4, 32, 6, 32, 5, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 33, 0, 12, 3, 11, 32, 4, 32, 4, 162, 34, 5, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 32, 4, 32, 5, 162, 34, 6, 154, 162, 32, 4, 161, 32, 5, 32, 5, 162, 32, 6, 162, 32, 5, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 161, 182, 33, 0, 12, 2, 11, 32, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 33, 0, 12, 1, 11, 32, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 140, 33, 0, 11, 32, 2, 65, 16, 106, 36, 0, 32, 0, 11, 198, 10, 2, 3, 127, 3, 124, 35, 0, 65, 16, 107, 34, 2, 36, 0, 32, 0, 187, 33, 4, 2, 125, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 188, 34, 3, 65, 255, 255, 255, 255, 7, 113, 34, 1, 65, 218, 159, 164, 250, 3, 77, 4, 64, 32, 1, 65, 128, 128, 128, 204, 3, 79, 13, 1, 32, 2, 32, 0, 67, 0, 0, 128, 123, 146, 56, 2, 8, 32, 2, 42, 2, 8, 26, 67, 0, 0, 128, 63, 12, 13, 11, 32, 1, 65, 210, 167, 237, 131, 4, 79, 13, 1, 32, 1, 65, 227, 151, 219, 128, 4, 77, 13, 2, 68, 24, 45, 68, 84, 251, 33, 9, 64, 68, 24, 45, 68, 84, 251, 33, 9, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 140, 12, 12, 11, 32, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 12, 11, 11, 32, 1, 65, 214, 227, 136, 135, 4, 79, 13, 1, 32, 1, 65, 223, 219, 191, 133, 4, 77, 13, 2, 68, 24, 45, 68, 84, 251, 33, 25, 64, 68, 24, 45, 68, 84, 251, 33, 25, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 12, 10, 11, 32, 3, 65, 127, 76, 13, 3, 68, 24, 45, 68, 84, 251, 33, 249, 63, 32, 4, 161, 34, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 32, 4, 162, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 5, 32, 6, 32, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 12, 9, 11, 32, 1, 65, 255, 255, 255, 251, 7, 77, 13, 1, 32, 0, 32, 0, 147, 12, 8, 11, 32, 3, 65, 127, 76, 13, 3, 32, 4, 68, 210, 33, 51, 127, 124, 217, 18, 192, 160, 34, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 32, 4, 162, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 5, 32, 6, 32, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 12, 7, 11, 32, 2, 66, 0, 55, 3, 0, 32, 2, 66, 0, 55, 3, 8, 32, 1, 65, 218, 159, 164, 238, 4, 75, 13, 1, 32, 4, 32, 4, 68, 131, 200, 201, 109, 48, 95, 228, 63, 162, 68, 0, 0, 0, 0, 0, 0, 56, 67, 160, 68, 0, 0, 0, 0, 0, 0, 56, 195, 160, 34, 5, 68, 0, 0, 0, 80, 251, 33, 249, 191, 162, 160, 32, 5, 68, 99, 98, 26, 97, 180, 16, 81, 190, 162, 160, 33, 4, 32, 5, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 13, 3, 65, 128, 128, 128, 128, 120, 33, 1, 12, 5, 11, 32, 4, 68, 24, 45, 68, 84, 251, 33, 249, 63, 160, 34, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 32, 4, 162, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 5, 32, 6, 32, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 12, 5, 11, 32, 2, 32, 1, 32, 1, 65, 23, 118, 65, 234, 126, 106, 34, 1, 65, 23, 116, 107, 190, 187, 57, 3, 0, 32, 2, 32, 2, 65, 8, 106, 32, 1, 16, 2, 33, 1, 32, 3, 65, 127, 76, 13, 2, 32, 2, 43, 3, 8, 33, 4, 12, 3, 11, 68, 210, 33, 51, 127, 124, 217, 18, 192, 32, 4, 161, 34, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 32, 4, 162, 162, 32, 4, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 5, 32, 6, 32, 4, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 12, 3, 11, 32, 5, 170, 33, 1, 12, 1, 11, 65, 0, 32, 1, 107, 33, 1, 32, 2, 43, 3, 8, 154, 33, 4, 11, 2, 64, 2, 64, 32, 1, 65, 3, 113, 34, 1, 65, 2, 71, 4, 64, 32, 1, 65, 1, 70, 13, 1, 32, 1, 13, 2, 32, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 12, 3, 11, 32, 4, 32, 4, 162, 34, 4, 68, 129, 94, 12, 253, 255, 255, 223, 191, 162, 68, 0, 0, 0, 0, 0, 0, 240, 63, 160, 32, 4, 32, 4, 162, 34, 5, 68, 66, 58, 5, 225, 83, 85, 165, 63, 162, 160, 32, 4, 32, 5, 162, 32, 4, 68, 105, 80, 238, 224, 66, 147, 249, 62, 162, 68, 39, 30, 15, 232, 135, 192, 86, 191, 160, 162, 160, 182, 140, 12, 2, 11, 32, 4, 32, 4, 162, 34, 5, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 32, 4, 32, 5, 162, 34, 6, 154, 162, 32, 4, 161, 32, 5, 32, 5, 162, 32, 6, 162, 32, 5, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 161, 182, 12, 1, 11, 32, 4, 32, 4, 32, 4, 162, 34, 5, 162, 34, 6, 32, 5, 32, 5, 162, 162, 32, 5, 68, 167, 70, 59, 140, 135, 205, 198, 62, 162, 68, 116, 231, 202, 226, 249, 0, 42, 191, 160, 162, 32, 4, 32, 6, 32, 5, 68, 178, 251, 110, 137, 16, 17, 129, 63, 162, 68, 119, 172, 203, 84, 85, 85, 197, 191, 160, 162, 160, 160, 182, 11, 33, 0, 32, 2, 65, 16, 106, 36, 0, 32, 0, 11, 200, 6, 2, 1, 127, 29, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 32, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 32, 1, 65, 28, 106, 42, 2, 0, 34, 7, 148, 147, 34, 20, 32, 1, 65, 36, 106, 42, 2, 0, 34, 8, 32, 1, 65, 56, 106, 42, 2, 0, 34, 9, 148, 32, 1, 65, 40, 106, 42, 2, 0, 34, 10, 32, 1, 65, 52, 106, 42, 2, 0, 34, 11, 148, 147, 34, 21, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 12, 32, 7, 148, 32, 4, 32, 1, 65, 24, 106, 42, 2, 0, 34, 13, 148, 147, 34, 22, 32, 8, 32, 1, 65, 64, 107, 42, 2, 0, 34, 14, 148, 32, 1, 65, 48, 106, 42, 2, 0, 34, 15, 32, 11, 148, 147, 34, 23, 148, 32, 1, 42, 2, 4, 34, 16, 32, 5, 148, 32, 6, 32, 1, 65, 20, 106, 42, 2, 0, 34, 17, 148, 147, 34, 24, 32, 10, 32, 1, 65, 60, 106, 42, 2, 0, 34, 18, 148, 32, 1, 65, 44, 106, 42, 2, 0, 34, 19, 32, 9, 148, 147, 34, 25, 148, 32, 16, 32, 13, 148, 32, 12, 32, 17, 148, 147, 34, 26, 32, 19, 32, 14, 148, 32, 15, 32, 18, 148, 147, 34, 27, 148, 32, 16, 32, 7, 148, 32, 4, 32, 17, 148, 147, 34, 28, 32, 10, 32, 14, 148, 32, 15, 32, 9, 148, 147, 34, 29, 148, 147, 146, 146, 32, 12, 32, 5, 148, 32, 6, 32, 13, 148, 147, 34, 30, 32, 8, 32, 18, 148, 32, 19, 32, 11, 148, 147, 34, 31, 148, 147, 146, 34, 3, 139, 67, 23, 183, 209, 56, 93, 4, 127, 32, 2, 5, 32, 0, 65, 64, 107, 32, 8, 32, 22, 148, 32, 28, 32, 10, 148, 147, 32, 26, 32, 19, 148, 146, 67, 0, 0, 128, 63, 32, 3, 149, 34, 3, 148, 56, 2, 0, 32, 0, 65, 60, 106, 32, 28, 32, 9, 148, 32, 22, 32, 11, 148, 147, 32, 26, 32, 18, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 56, 106, 32, 4, 32, 21, 148, 32, 16, 32, 25, 148, 32, 12, 32, 31, 148, 147, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 52, 106, 32, 13, 32, 31, 148, 32, 17, 32, 25, 148, 147, 32, 7, 32, 21, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 48, 106, 32, 10, 32, 24, 148, 32, 8, 32, 30, 148, 147, 32, 26, 32, 15, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 30, 32, 11, 148, 32, 24, 32, 9, 148, 147, 32, 26, 32, 14, 148, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 40, 106, 32, 12, 32, 23, 148, 32, 16, 32, 29, 148, 147, 32, 6, 32, 21, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 5, 32, 21, 148, 32, 17, 32, 29, 148, 32, 13, 32, 23, 148, 147, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 8, 32, 20, 148, 32, 24, 32, 19, 148, 147, 32, 28, 32, 15, 148, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 24, 32, 18, 148, 32, 20, 32, 11, 148, 147, 32, 28, 32, 14, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 32, 31, 148, 32, 16, 32, 27, 148, 32, 4, 32, 23, 148, 147, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 7, 32, 23, 148, 32, 17, 32, 27, 148, 147, 32, 5, 32, 31, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 30, 32, 19, 148, 32, 10, 32, 20, 148, 147, 32, 22, 32, 15, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 20, 32, 9, 148, 32, 30, 32, 18, 148, 147, 32, 22, 32, 14, 148, 146, 32, 3, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 29, 148, 32, 12, 32, 27, 148, 147, 32, 6, 32, 25, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 25, 148, 32, 13, 32, 27, 148, 32, 7, 32, 29, 148, 147, 146, 32, 3, 148, 56, 2, 0, 32, 1, 40, 2, 0, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 166, 6, 2, 1, 127, 27, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 36, 106, 42, 2, 0, 34, 8, 32, 1, 65, 8, 106, 42, 2, 0, 34, 9, 32, 1, 65, 28, 106, 42, 2, 0, 34, 4, 148, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 1, 65, 24, 106, 42, 2, 0, 34, 10, 148, 147, 34, 22, 148, 32, 1, 42, 2, 4, 34, 11, 32, 10, 32, 1, 65, 44, 106, 42, 2, 0, 34, 6, 148, 32, 4, 32, 1, 65, 40, 106, 42, 2, 0, 34, 12, 148, 147, 34, 23, 148, 32, 1, 65, 20, 106, 42, 2, 0, 34, 13, 32, 9, 32, 6, 148, 32, 5, 32, 12, 148, 147, 34, 3, 148, 147, 146, 56, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 52, 106, 42, 2, 0, 34, 14, 32, 3, 148, 32, 11, 32, 12, 32, 1, 65, 60, 106, 42, 2, 0, 34, 15, 148, 32, 6, 32, 1, 65, 56, 106, 42, 2, 0, 34, 3, 148, 147, 34, 24, 148, 32, 8, 32, 9, 32, 15, 148, 32, 5, 32, 3, 148, 147, 34, 25, 148, 147, 146, 56, 2, 0, 32, 0, 65, 44, 106, 32, 14, 32, 9, 32, 1, 65, 32, 106, 42, 2, 0, 34, 7, 148, 32, 10, 32, 1, 65, 16, 106, 42, 2, 0, 34, 16, 148, 147, 34, 26, 148, 32, 11, 32, 10, 32, 1, 65, 64, 107, 42, 2, 0, 34, 17, 148, 32, 7, 32, 3, 148, 147, 34, 18, 148, 32, 13, 32, 9, 32, 17, 148, 32, 16, 32, 3, 148, 147, 34, 27, 148, 147, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 14, 32, 10, 32, 1, 65, 48, 106, 42, 2, 0, 34, 19, 148, 32, 7, 32, 12, 148, 147, 34, 28, 148, 32, 13, 32, 12, 32, 17, 148, 32, 19, 32, 3, 148, 147, 34, 29, 148, 32, 8, 32, 18, 148, 147, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 8, 32, 5, 32, 7, 148, 32, 16, 32, 4, 148, 147, 34, 18, 148, 32, 11, 32, 4, 32, 19, 148, 32, 7, 32, 6, 148, 147, 34, 20, 148, 32, 13, 32, 5, 32, 19, 148, 32, 16, 32, 6, 148, 147, 34, 21, 148, 147, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 14, 32, 21, 148, 32, 11, 32, 6, 32, 17, 148, 32, 19, 32, 15, 148, 147, 34, 6, 148, 32, 8, 32, 5, 32, 17, 148, 32, 16, 32, 15, 148, 147, 34, 5, 148, 147, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 18, 32, 3, 148, 32, 9, 32, 4, 32, 17, 148, 32, 7, 32, 15, 148, 147, 34, 7, 148, 32, 10, 32, 5, 148, 147, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 3, 32, 20, 148, 32, 10, 32, 6, 148, 32, 12, 32, 7, 148, 147, 146, 56, 2, 0, 32, 0, 65, 60, 106, 32, 22, 32, 14, 148, 32, 11, 32, 10, 32, 15, 148, 32, 4, 32, 3, 148, 147, 34, 4, 148, 32, 13, 32, 25, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 52, 106, 32, 14, 32, 23, 148, 32, 13, 32, 24, 148, 32, 8, 32, 4, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 48, 106, 32, 8, 32, 26, 148, 32, 11, 32, 28, 148, 32, 13, 32, 9, 32, 19, 148, 32, 16, 32, 12, 148, 147, 34, 4, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 40, 106, 32, 14, 32, 4, 148, 32, 11, 32, 29, 148, 32, 8, 32, 27, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 28, 106, 32, 18, 32, 14, 148, 32, 11, 32, 7, 148, 32, 13, 32, 5, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 20, 106, 32, 14, 32, 20, 148, 32, 13, 32, 6, 148, 32, 8, 32, 7, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 16, 106, 32, 12, 32, 18, 148, 32, 9, 32, 20, 148, 32, 10, 32, 21, 148, 147, 146, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 3, 32, 21, 148, 32, 9, 32, 6, 148, 32, 12, 32, 5, 148, 147, 146, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 173, 6, 2, 1, 127, 16, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 12, 106, 42, 2, 0, 33, 6, 32, 3, 65, 8, 106, 42, 2, 0, 33, 5, 32, 3, 42, 2, 4, 33, 11, 2, 64, 32, 1, 65, 4, 106, 42, 2, 0, 34, 16, 32, 2, 65, 4, 106, 42, 2, 0, 147, 34, 7, 139, 67, 23, 183, 209, 56, 93, 65, 1, 115, 32, 1, 65, 8, 106, 42, 2, 0, 34, 17, 32, 2, 65, 8, 106, 42, 2, 0, 147, 34, 8, 139, 67, 23, 183, 209, 56, 93, 65, 1, 115, 114, 32, 1, 65, 12, 106, 42, 2, 0, 34, 18, 32, 2, 65, 12, 106, 42, 2, 0, 147, 34, 9, 139, 67, 23, 183, 209, 56, 93, 65, 1, 115, 114, 69, 4, 64, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 24, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 44, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 12, 1, 11, 32, 11, 32, 8, 67, 0, 0, 128, 63, 32, 7, 32, 7, 148, 32, 8, 32, 8, 148, 146, 32, 9, 32, 9, 148, 146, 145, 149, 34, 14, 148, 34, 8, 148, 32, 5, 32, 7, 32, 14, 148, 34, 7, 148, 147, 34, 15, 32, 15, 148, 32, 5, 32, 9, 32, 14, 148, 34, 9, 148, 32, 6, 32, 8, 148, 147, 34, 5, 32, 5, 148, 32, 6, 32, 7, 148, 32, 11, 32, 9, 148, 147, 34, 6, 32, 6, 148, 146, 146, 145, 34, 11, 67, 23, 183, 209, 56, 93, 69, 4, 64, 32, 15, 67, 0, 0, 128, 63, 32, 11, 149, 34, 10, 148, 33, 12, 32, 6, 32, 10, 148, 33, 13, 32, 5, 32, 10, 148, 33, 10, 11, 67, 0, 0, 0, 0, 33, 6, 67, 0, 0, 0, 0, 33, 5, 32, 7, 32, 13, 148, 32, 8, 32, 10, 148, 147, 34, 11, 32, 11, 148, 32, 8, 32, 12, 148, 32, 9, 32, 13, 148, 147, 34, 14, 32, 14, 148, 32, 9, 32, 10, 148, 32, 7, 32, 12, 148, 147, 34, 15, 32, 15, 148, 146, 146, 145, 34, 20, 67, 23, 183, 209, 56, 93, 69, 4, 64, 32, 11, 67, 0, 0, 128, 63, 32, 20, 149, 34, 5, 148, 33, 19, 32, 15, 32, 5, 148, 33, 6, 32, 14, 32, 5, 148, 33, 5, 11, 32, 0, 65, 48, 106, 65, 0, 54, 2, 0, 32, 0, 65, 44, 106, 32, 9, 56, 2, 0, 32, 0, 65, 40, 106, 32, 19, 56, 2, 0, 32, 0, 65, 36, 106, 32, 12, 56, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 28, 106, 32, 8, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 13, 56, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 7, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 56, 2, 0, 32, 0, 65, 4, 106, 32, 10, 56, 2, 0, 32, 0, 65, 60, 106, 32, 18, 32, 9, 148, 32, 16, 32, 7, 148, 32, 17, 32, 8, 148, 146, 146, 140, 56, 2, 0, 32, 0, 65, 56, 106, 32, 18, 32, 19, 148, 32, 17, 32, 6, 148, 32, 16, 32, 5, 148, 146, 146, 140, 56, 2, 0, 32, 0, 65, 52, 106, 32, 18, 32, 12, 148, 32, 17, 32, 13, 148, 32, 16, 32, 10, 148, 146, 146, 140, 56, 2, 0, 11, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 252, 8, 2, 3, 127, 3, 124, 35, 0, 65, 16, 107, 34, 2, 36, 0, 32, 0, 187, 33, 4, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 0, 188, 34, 3, 65, 255, 255, 255, 255, 7, 113, 34, 1, 65, 218, 159, 164, 250, 3, 77, 4, 64, 32, 1, 65, 128, 128, 128, 204, 3, 79, 13, 1, 32, 2, 32, 0, 67, 0, 0, 128, 3, 148, 32, 0, 67, 0, 0, 128, 123, 146, 32, 1, 65, 128, 128, 128, 4, 73, 27, 56, 2, 8, 32, 2, 42, 2, 8, 26, 12, 7, 11, 32, 1, 65, 210, 167, 237, 131, 4, 79, 13, 1, 32, 1, 65, 228, 151, 219, 128, 4, 79, 13, 2, 68, 0, 0, 0, 0, 0, 0, 240, 191, 68, 24, 45, 68, 84, 251, 33, 249, 63, 68, 24, 45, 68, 84, 251, 33, 249, 191, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 5, 32, 4, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 160, 32, 5, 32, 4, 32, 4, 162, 34, 6, 162, 32, 4, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 6, 32, 4, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 163, 182, 33, 0, 12, 6, 11, 32, 4, 32, 4, 162, 34, 5, 32, 4, 162, 34, 6, 32, 5, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 32, 4, 160, 32, 6, 32, 5, 32, 5, 162, 34, 4, 162, 32, 5, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 4, 32, 5, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 182, 33, 0, 12, 5, 11, 32, 1, 65, 214, 227, 136, 135, 4, 79, 13, 1, 32, 1, 65, 224, 219, 191, 133, 4, 79, 13, 2, 68, 0, 0, 0, 0, 0, 0, 240, 191, 68, 210, 33, 51, 127, 124, 217, 18, 64, 68, 210, 33, 51, 127, 124, 217, 18, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 5, 32, 4, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 160, 32, 5, 32, 4, 32, 4, 162, 34, 6, 162, 32, 4, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 6, 32, 4, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 163, 182, 33, 0, 12, 4, 11, 68, 24, 45, 68, 84, 251, 33, 9, 64, 68, 24, 45, 68, 84, 251, 33, 9, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 5, 32, 4, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 160, 32, 5, 32, 4, 32, 4, 162, 34, 6, 162, 32, 4, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 6, 32, 4, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 182, 33, 0, 12, 3, 11, 32, 1, 65, 255, 255, 255, 251, 7, 77, 13, 1, 32, 0, 32, 0, 147, 33, 0, 12, 2, 11, 68, 24, 45, 68, 84, 251, 33, 25, 64, 68, 24, 45, 68, 84, 251, 33, 25, 192, 32, 3, 65, 0, 72, 27, 32, 4, 160, 34, 5, 32, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 5, 32, 4, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 160, 32, 5, 32, 4, 32, 4, 162, 34, 6, 162, 32, 4, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 6, 32, 4, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 182, 33, 0, 12, 1, 11, 32, 2, 66, 0, 55, 3, 0, 32, 2, 66, 0, 55, 3, 8, 2, 64, 2, 64, 2, 64, 32, 1, 65, 218, 159, 164, 238, 4, 77, 4, 64, 32, 4, 32, 4, 68, 131, 200, 201, 109, 48, 95, 228, 63, 162, 68, 0, 0, 0, 0, 0, 0, 56, 67, 160, 68, 0, 0, 0, 0, 0, 0, 56, 195, 160, 34, 6, 68, 0, 0, 0, 80, 251, 33, 249, 191, 162, 160, 32, 6, 68, 99, 98, 26, 97, 180, 16, 81, 190, 162, 160, 33, 5, 32, 6, 153, 68, 0, 0, 0, 0, 0, 0, 224, 65, 99, 13, 1, 65, 128, 128, 128, 128, 120, 33, 1, 12, 3, 11, 32, 2, 32, 1, 32, 1, 65, 23, 118, 65, 234, 126, 106, 34, 1, 65, 23, 116, 107, 190, 187, 57, 3, 0, 32, 2, 32, 2, 65, 8, 106, 32, 1, 16, 2, 33, 1, 32, 3, 65, 127, 76, 13, 1, 32, 2, 43, 3, 8, 33, 5, 12, 2, 11, 32, 6, 170, 33, 1, 12, 1, 11, 65, 0, 32, 1, 107, 33, 1, 32, 2, 43, 3, 8, 154, 33, 5, 11, 68, 0, 0, 0, 0, 0, 0, 240, 191, 32, 5, 32, 5, 32, 5, 32, 5, 162, 34, 4, 162, 34, 6, 32, 4, 68, 114, 159, 153, 56, 253, 18, 193, 63, 162, 68, 159, 201, 24, 52, 77, 85, 213, 63, 160, 162, 160, 32, 6, 32, 4, 32, 4, 162, 34, 5, 162, 32, 4, 68, 206, 51, 140, 144, 243, 29, 153, 63, 162, 68, 254, 90, 134, 29, 201, 84, 171, 63, 160, 32, 5, 32, 4, 68, 205, 27, 151, 191, 185, 98, 131, 63, 162, 68, 78, 244, 236, 252, 173, 93, 104, 63, 160, 162, 160, 162, 160, 34, 4, 163, 32, 4, 32, 1, 65, 1, 113, 27, 182, 33, 0, 11, 32, 2, 65, 16, 106, 36, 0, 32, 0, 11, 171, 7, 1, 5, 127, 32, 0, 65, 120, 106, 34, 1, 32, 0, 65, 124, 106, 40, 2, 0, 34, 3, 65, 120, 113, 34, 0, 106, 33, 2, 2, 64, 2, 64, 2, 64, 32, 3, 65, 1, 113, 13, 0, 32, 3, 65, 3, 113, 69, 13, 1, 32, 1, 40, 2, 0, 34, 3, 32, 0, 106, 33, 0, 2, 64, 2, 64, 32, 1, 32, 3, 107, 34, 1, 65, 180, 135, 192, 0, 40, 2, 0, 71, 4, 64, 32, 3, 65, 255, 1, 75, 13, 1, 32, 1, 40, 2, 12, 34, 4, 32, 1, 40, 2, 8, 34, 5, 70, 13, 2, 32, 5, 32, 4, 54, 2, 12, 32, 4, 32, 5, 54, 2, 8, 12, 3, 11, 32, 2, 40, 2, 4, 65, 3, 113, 65, 3, 71, 13, 2, 65, 172, 135, 192, 0, 32, 0, 54, 2, 0, 32, 2, 65, 4, 106, 34, 2, 32, 2, 40, 2, 0, 65, 126, 113, 54, 2, 0, 12, 4, 11, 32, 1, 16, 68, 12, 1, 11, 65, 156, 132, 192, 0, 65, 156, 132, 192, 0, 40, 2, 0, 65, 126, 32, 3, 65, 3, 118, 119, 113, 54, 2, 0, 11, 2, 64, 65, 220, 135, 192, 0, 2, 127, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 2, 64, 32, 2, 40, 2, 4, 34, 3, 65, 2, 113, 69, 4, 64, 65, 184, 135, 192, 0, 40, 2, 0, 32, 2, 70, 13, 1, 65, 180, 135, 192, 0, 40, 2, 0, 32, 2, 70, 13, 2, 32, 3, 65, 120, 113, 34, 4, 32, 0, 106, 33, 0, 32, 4, 65, 255, 1, 75, 13, 3, 32, 2, 40, 2, 12, 34, 4, 32, 2, 40, 2, 8, 34, 2, 70, 13, 4, 32, 2, 32, 4, 54, 2, 12, 32, 4, 32, 2, 54, 2, 8, 12, 5, 11, 32, 2, 65, 4, 106, 32, 3, 65, 126, 113, 54, 2, 0, 32, 1, 32, 0, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 0, 54, 2, 0, 12, 7, 11, 65, 184, 135, 192, 0, 32, 1, 54, 2, 0, 65, 176, 135, 192, 0, 65, 176, 135, 192, 0, 40, 2, 0, 32, 0, 106, 34, 0, 54, 2, 0, 32, 1, 32, 0, 65, 1, 114, 54, 2, 4, 65, 180, 135, 192, 0, 40, 2, 0, 32, 1, 70, 4, 64, 65, 172, 135, 192, 0, 65, 0, 54, 2, 0, 65, 180, 135, 192, 0, 65, 0, 54, 2, 0, 11, 65, 212, 135, 192, 0, 40, 2, 0, 34, 3, 32, 0, 79, 13, 7, 65, 184, 135, 192, 0, 40, 2, 0, 34, 0, 69, 13, 7, 2, 64, 65, 176, 135, 192, 0, 40, 2, 0, 34, 4, 65, 41, 73, 13, 0, 65, 196, 135, 192, 0, 33, 1, 3, 64, 32, 1, 40, 2, 0, 34, 2, 32, 0, 77, 4, 64, 32, 2, 32, 1, 40, 2, 4, 106, 32, 0, 75, 13, 2, 11, 32, 1, 40, 2, 8, 34, 1, 13, 0, 11, 11, 65, 204, 135, 192, 0, 40, 2, 0, 34, 0, 69, 13, 4, 65, 0, 33, 1, 3, 64, 32, 1, 65, 1, 106, 33, 1, 32, 0, 40, 2, 8, 34, 0, 13, 0, 11, 32, 1, 65, 255, 31, 32, 1, 65, 255, 31, 75, 27, 12, 5, 11, 65, 180, 135, 192, 0, 32, 1, 54, 2, 0, 65, 172, 135, 192, 0, 65, 172, 135, 192, 0, 40, 2, 0, 32, 0, 106, 34, 0, 54, 2, 0, 12, 7, 11, 32, 2, 16, 68, 12, 1, 11, 65, 156, 132, 192, 0, 65, 156, 132, 192, 0, 40, 2, 0, 65, 126, 32, 3, 65, 3, 118, 119, 113, 54, 2, 0, 11, 32, 1, 32, 0, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 0, 54, 2, 0, 32, 1, 65, 180, 135, 192, 0, 40, 2, 0, 71, 13, 2, 65, 172, 135, 192, 0, 32, 0, 54, 2, 0, 15, 11, 65, 255, 31, 11, 54, 2, 0, 32, 4, 32, 3, 77, 13, 1, 65, 212, 135, 192, 0, 65, 127, 54, 2, 0, 15, 11, 65, 220, 135, 192, 0, 2, 127, 2, 64, 2, 127, 2, 64, 32, 0, 65, 255, 1, 77, 4, 64, 32, 0, 65, 3, 118, 34, 2, 65, 3, 116, 65, 164, 132, 192, 0, 106, 33, 0, 65, 156, 132, 192, 0, 40, 2, 0, 34, 3, 65, 1, 32, 2, 65, 31, 113, 116, 34, 2, 113, 69, 13, 1, 32, 0, 40, 2, 8, 12, 2, 11, 32, 1, 32, 0, 16, 67, 65, 220, 135, 192, 0, 65, 220, 135, 192, 0, 40, 2, 0, 65, 127, 106, 34, 1, 54, 2, 0, 32, 1, 13, 4, 65, 204, 135, 192, 0, 40, 2, 0, 34, 0, 69, 13, 2, 65, 0, 33, 1, 3, 64, 32, 1, 65, 1, 106, 33, 1, 32, 0, 40, 2, 8, 34, 0, 13, 0, 11, 32, 1, 65, 255, 31, 32, 1, 65, 255, 31, 75, 27, 12, 3, 11, 65, 156, 132, 192, 0, 32, 2, 32, 3, 114, 54, 2, 0, 32, 0, 11, 33, 2, 32, 0, 32, 1, 54, 2, 8, 32, 2, 32, 1, 54, 2, 12, 32, 1, 32, 0, 54, 2, 12, 32, 1, 32, 2, 54, 2, 8, 15, 11, 65, 255, 31, 11, 54, 2, 0, 11, 15, 11, 32, 1, 32, 0, 65, 1, 114, 54, 2, 4, 32, 0, 32, 1, 106, 32, 0, 54, 2, 0, 11, 221, 5, 2, 1, 127, 23, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 2, 64, 32, 3, 42, 2, 4, 34, 8, 32, 8, 148, 32, 3, 65, 8, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 32, 3, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 145, 34, 7, 67, 23, 183, 209, 56, 93, 13, 0, 32, 2, 16, 6, 33, 11, 32, 0, 65, 48, 106, 32, 2, 16, 5, 34, 12, 32, 6, 67, 0, 0, 128, 63, 32, 7, 149, 34, 7, 148, 34, 2, 148, 34, 24, 67, 0, 0, 128, 63, 32, 11, 147, 34, 6, 32, 5, 32, 7, 148, 34, 5, 32, 8, 32, 7, 148, 34, 8, 148, 148, 34, 25, 146, 34, 7, 32, 1, 65, 16, 106, 42, 2, 0, 34, 13, 148, 32, 6, 32, 5, 32, 2, 148, 148, 34, 26, 32, 12, 32, 8, 148, 34, 27, 147, 34, 9, 32, 1, 65, 32, 106, 42, 2, 0, 34, 14, 148, 146, 32, 11, 32, 6, 32, 5, 32, 5, 148, 148, 146, 34, 10, 32, 1, 65, 48, 106, 42, 2, 0, 34, 15, 148, 146, 56, 2, 0, 32, 0, 65, 44, 106, 32, 7, 32, 1, 65, 12, 106, 42, 2, 0, 34, 16, 148, 32, 9, 32, 1, 65, 28, 106, 42, 2, 0, 34, 17, 148, 146, 32, 10, 32, 1, 65, 44, 106, 42, 2, 0, 34, 18, 148, 146, 56, 2, 0, 32, 0, 65, 40, 106, 32, 7, 32, 1, 65, 8, 106, 42, 2, 0, 34, 19, 148, 32, 9, 32, 1, 65, 24, 106, 42, 2, 0, 34, 20, 148, 146, 32, 10, 32, 1, 65, 40, 106, 42, 2, 0, 34, 21, 148, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 7, 32, 1, 65, 4, 106, 42, 2, 0, 34, 22, 148, 32, 9, 32, 1, 65, 20, 106, 42, 2, 0, 34, 23, 148, 146, 32, 10, 32, 1, 65, 36, 106, 42, 2, 0, 34, 9, 148, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 13, 32, 6, 32, 2, 32, 8, 148, 148, 34, 10, 32, 12, 32, 5, 148, 34, 12, 147, 34, 5, 148, 32, 14, 32, 11, 32, 6, 32, 2, 32, 2, 148, 148, 146, 34, 2, 148, 146, 32, 15, 32, 27, 32, 26, 146, 34, 7, 148, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 5, 32, 16, 148, 32, 2, 32, 17, 148, 146, 32, 7, 32, 18, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 5, 32, 19, 148, 32, 2, 32, 20, 148, 146, 32, 7, 32, 21, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 32, 22, 148, 32, 2, 32, 23, 148, 146, 32, 7, 32, 9, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 13, 32, 11, 32, 6, 32, 8, 32, 8, 148, 148, 146, 34, 6, 148, 32, 14, 32, 12, 32, 10, 146, 34, 8, 148, 146, 32, 15, 32, 25, 32, 24, 147, 34, 5, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 16, 148, 32, 8, 32, 17, 148, 146, 32, 5, 32, 18, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 6, 32, 19, 148, 32, 8, 32, 20, 148, 146, 32, 5, 32, 21, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 6, 32, 22, 148, 32, 8, 32, 23, 148, 146, 32, 5, 32, 9, 148, 146, 56, 2, 0, 32, 0, 32, 1, 70, 13, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 41, 2, 0, 55, 2, 0, 11, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 224, 5, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 34, 4, 32, 1, 65, 20, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 34, 4, 32, 1, 65, 24, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 34, 4, 32, 1, 65, 28, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 34, 4, 32, 1, 65, 32, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 36, 106, 42, 2, 0, 34, 4, 32, 1, 65, 36, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 183, 5, 2, 1, 127, 15, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 33, 4, 32, 2, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 65, 4, 106, 42, 2, 0, 33, 7, 32, 2, 42, 2, 4, 33, 6, 2, 125, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 4, 106, 32, 7, 56, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 48, 106, 42, 2, 0, 34, 8, 56, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 42, 2, 0, 34, 9, 56, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 40, 106, 42, 2, 0, 34, 10, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 34, 11, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 34, 12, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 34, 13, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 34, 14, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 34, 15, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 16, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 17, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 18, 56, 2, 0, 32, 0, 65, 52, 106, 32, 6, 32, 7, 148, 32, 5, 32, 15, 148, 146, 32, 4, 32, 11, 148, 146, 32, 1, 65, 52, 106, 42, 2, 0, 146, 56, 2, 0, 32, 6, 32, 16, 148, 32, 5, 32, 12, 148, 146, 32, 4, 32, 8, 148, 146, 33, 7, 32, 6, 32, 17, 148, 32, 5, 32, 13, 148, 146, 32, 4, 32, 9, 148, 146, 32, 1, 65, 60, 106, 42, 2, 0, 146, 33, 8, 32, 1, 65, 64, 107, 42, 2, 0, 33, 9, 32, 6, 32, 18, 148, 32, 5, 32, 14, 148, 146, 32, 4, 32, 10, 148, 146, 32, 1, 65, 56, 106, 42, 2, 0, 146, 12, 1, 11, 32, 0, 65, 52, 106, 34, 3, 32, 3, 42, 2, 0, 32, 6, 32, 7, 148, 32, 5, 32, 0, 65, 20, 106, 42, 2, 0, 148, 146, 32, 4, 32, 0, 65, 36, 106, 42, 2, 0, 148, 146, 146, 56, 2, 0, 32, 6, 32, 0, 65, 16, 106, 42, 2, 0, 148, 32, 5, 32, 0, 65, 32, 106, 42, 2, 0, 148, 146, 32, 4, 32, 0, 65, 48, 106, 42, 2, 0, 148, 146, 33, 9, 32, 0, 65, 60, 106, 42, 2, 0, 32, 6, 32, 0, 65, 12, 106, 42, 2, 0, 148, 32, 5, 32, 0, 65, 28, 106, 42, 2, 0, 148, 146, 32, 4, 32, 0, 65, 44, 106, 42, 2, 0, 148, 146, 146, 33, 8, 32, 0, 65, 64, 107, 42, 2, 0, 33, 7, 32, 0, 65, 56, 106, 42, 2, 0, 32, 6, 32, 0, 65, 8, 106, 42, 2, 0, 148, 32, 5, 32, 0, 65, 24, 106, 42, 2, 0, 148, 146, 32, 4, 32, 0, 65, 40, 106, 42, 2, 0, 148, 146, 146, 11, 33, 4, 32, 0, 65, 64, 107, 32, 7, 32, 9, 146, 56, 2, 0, 32, 0, 65, 60, 106, 32, 8, 56, 2, 0, 32, 0, 65, 56, 106, 32, 4, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 247, 4, 2, 1, 127, 17, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 5, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 5, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 5, 65, 1, 106, 54, 2, 0, 32, 4, 69, 13, 0, 32, 4, 32, 5, 65, 1, 106, 54, 2, 0, 32, 0, 65, 48, 106, 65, 0, 54, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 10, 32, 10, 146, 34, 8, 148, 34, 11, 32, 1, 65, 4, 106, 42, 2, 0, 34, 7, 32, 7, 146, 34, 17, 32, 1, 65, 16, 106, 42, 2, 0, 34, 9, 148, 34, 13, 147, 32, 3, 65, 12, 106, 42, 2, 0, 34, 12, 148, 34, 18, 56, 2, 0, 32, 0, 65, 36, 106, 32, 12, 32, 7, 32, 8, 148, 34, 14, 32, 9, 32, 6, 32, 6, 146, 34, 16, 148, 34, 15, 146, 148, 34, 19, 56, 2, 0, 32, 0, 65, 28, 106, 32, 11, 32, 13, 146, 32, 3, 65, 8, 106, 42, 2, 0, 34, 11, 148, 34, 13, 56, 2, 0, 32, 0, 65, 20, 106, 32, 11, 32, 7, 32, 16, 148, 34, 20, 32, 9, 32, 8, 148, 34, 21, 147, 148, 34, 22, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 65, 4, 106, 42, 2, 0, 34, 9, 32, 14, 32, 15, 147, 148, 34, 14, 56, 2, 0, 32, 0, 65, 8, 106, 32, 9, 32, 20, 32, 21, 146, 148, 34, 15, 56, 2, 0, 32, 0, 65, 44, 106, 32, 12, 67, 0, 0, 128, 63, 32, 7, 32, 17, 148, 34, 7, 32, 6, 32, 16, 148, 34, 6, 146, 147, 148, 34, 12, 56, 2, 0, 32, 0, 65, 24, 106, 32, 11, 67, 0, 0, 128, 63, 32, 7, 32, 10, 32, 8, 148, 34, 8, 146, 147, 148, 34, 10, 56, 2, 0, 32, 0, 65, 4, 106, 32, 9, 67, 0, 0, 128, 63, 32, 6, 32, 8, 146, 147, 148, 34, 6, 56, 2, 0, 32, 0, 65, 52, 106, 32, 4, 42, 2, 4, 34, 7, 32, 2, 65, 4, 106, 42, 2, 0, 146, 32, 6, 32, 7, 148, 32, 22, 32, 4, 65, 8, 106, 42, 2, 0, 34, 6, 148, 146, 32, 19, 32, 4, 65, 12, 106, 42, 2, 0, 34, 8, 148, 146, 147, 56, 2, 0, 32, 0, 65, 56, 106, 32, 6, 32, 2, 65, 8, 106, 42, 2, 0, 146, 32, 15, 32, 7, 148, 32, 10, 32, 6, 148, 146, 32, 18, 32, 8, 148, 146, 147, 56, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 60, 106, 32, 8, 32, 2, 65, 12, 106, 42, 2, 0, 146, 32, 14, 32, 7, 148, 32, 13, 32, 6, 148, 146, 32, 12, 32, 8, 148, 146, 147, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 150, 5, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 34, 4, 32, 1, 65, 20, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 34, 4, 32, 1, 65, 24, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 34, 4, 32, 1, 65, 28, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 34, 4, 32, 1, 65, 32, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 252, 4, 1, 20, 125, 32, 1, 42, 2, 48, 33, 9, 32, 1, 42, 2, 32, 33, 10, 32, 1, 42, 2, 0, 33, 11, 32, 1, 42, 2, 16, 33, 12, 32, 1, 42, 2, 52, 33, 13, 32, 1, 42, 2, 36, 33, 14, 32, 1, 42, 2, 4, 33, 15, 32, 1, 42, 2, 20, 33, 16, 32, 1, 42, 2, 56, 33, 17, 32, 1, 42, 2, 40, 33, 18, 32, 1, 42, 2, 8, 33, 19, 32, 1, 42, 2, 24, 33, 20, 32, 0, 32, 1, 42, 2, 12, 34, 7, 32, 2, 42, 2, 0, 34, 3, 148, 32, 1, 42, 2, 28, 34, 8, 32, 2, 42, 2, 4, 34, 4, 148, 146, 32, 1, 42, 2, 44, 34, 21, 32, 2, 42, 2, 8, 34, 5, 148, 146, 32, 1, 42, 2, 60, 34, 22, 32, 2, 42, 2, 12, 34, 6, 148, 146, 56, 2, 12, 32, 0, 32, 19, 32, 3, 148, 32, 20, 32, 4, 148, 146, 32, 18, 32, 5, 148, 146, 32, 17, 32, 6, 148, 146, 56, 2, 8, 32, 0, 32, 15, 32, 3, 148, 32, 16, 32, 4, 148, 146, 32, 14, 32, 5, 148, 146, 32, 13, 32, 6, 148, 146, 56, 2, 4, 32, 0, 32, 11, 32, 3, 148, 32, 12, 32, 4, 148, 146, 32, 10, 32, 5, 148, 146, 32, 9, 32, 6, 148, 146, 56, 2, 0, 32, 0, 32, 7, 32, 2, 42, 2, 16, 34, 3, 148, 32, 8, 32, 2, 42, 2, 20, 34, 4, 148, 146, 32, 21, 32, 2, 42, 2, 24, 34, 5, 148, 146, 32, 22, 32, 2, 42, 2, 28, 34, 6, 148, 146, 56, 2, 28, 32, 0, 32, 19, 32, 3, 148, 32, 20, 32, 4, 148, 146, 32, 18, 32, 5, 148, 146, 32, 17, 32, 6, 148, 146, 56, 2, 24, 32, 0, 32, 15, 32, 3, 148, 32, 16, 32, 4, 148, 146, 32, 14, 32, 5, 148, 146, 32, 13, 32, 6, 148, 146, 56, 2, 20, 32, 0, 32, 11, 32, 3, 148, 32, 12, 32, 4, 148, 146, 32, 10, 32, 5, 148, 146, 32, 9, 32, 6, 148, 146, 56, 2, 16, 32, 0, 32, 7, 32, 2, 42, 2, 32, 34, 3, 148, 32, 8, 32, 2, 42, 2, 36, 34, 4, 148, 146, 32, 21, 32, 2, 42, 2, 40, 34, 5, 148, 146, 32, 22, 32, 2, 42, 2, 44, 34, 6, 148, 146, 56, 2, 44, 32, 0, 32, 19, 32, 3, 148, 32, 20, 32, 4, 148, 146, 32, 18, 32, 5, 148, 146, 32, 17, 32, 6, 148, 146, 56, 2, 40, 32, 0, 32, 15, 32, 3, 148, 32, 16, 32, 4, 148, 146, 32, 14, 32, 5, 148, 146, 32, 13, 32, 6, 148, 146, 56, 2, 36, 32, 0, 32, 11, 32, 3, 148, 32, 12, 32, 4, 148, 146, 32, 10, 32, 5, 148, 146, 32, 9, 32, 6, 148, 146, 56, 2, 32, 32, 0, 32, 7, 32, 2, 42, 2, 48, 34, 3, 148, 32, 8, 32, 2, 42, 2, 52, 34, 7, 148, 146, 32, 21, 32, 2, 42, 2, 56, 34, 8, 148, 146, 32, 22, 32, 2, 42, 2, 60, 34, 4, 148, 146, 56, 2, 60, 32, 0, 32, 19, 32, 3, 148, 32, 20, 32, 7, 148, 146, 32, 18, 32, 8, 148, 146, 32, 17, 32, 4, 148, 146, 56, 2, 56, 32, 0, 32, 15, 32, 3, 148, 32, 16, 32, 7, 148, 146, 32, 14, 32, 8, 148, 146, 32, 13, 32, 4, 148, 146, 56, 2, 52, 32, 0, 32, 11, 32, 3, 148, 32, 12, 32, 7, 148, 146, 32, 10, 32, 8, 148, 146, 32, 9, 32, 4, 148, 146, 56, 2, 48, 11, 228, 4, 2, 2, 127, 25, 125, 35, 0, 65, 16, 107, 34, 2, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 2, 65, 8, 106, 32, 1, 16, 153, 2, 32, 2, 40, 2, 12, 33, 3, 32, 2, 40, 2, 8, 34, 1, 42, 2, 8, 34, 11, 32, 1, 42, 2, 28, 34, 6, 148, 32, 1, 42, 2, 12, 34, 7, 32, 1, 42, 2, 24, 34, 12, 148, 147, 34, 22, 32, 1, 42, 2, 32, 34, 4, 32, 1, 42, 2, 52, 34, 13, 148, 32, 1, 42, 2, 36, 34, 5, 32, 1, 42, 2, 48, 34, 14, 148, 147, 34, 23, 148, 32, 1, 42, 2, 4, 34, 15, 32, 12, 148, 32, 11, 32, 1, 42, 2, 20, 34, 16, 148, 147, 34, 26, 32, 4, 32, 1, 42, 2, 60, 34, 8, 148, 32, 1, 42, 2, 44, 34, 9, 32, 14, 148, 147, 34, 17, 148, 32, 1, 42, 2, 0, 34, 18, 32, 6, 148, 32, 7, 32, 1, 42, 2, 16, 34, 19, 148, 147, 34, 24, 32, 5, 32, 1, 42, 2, 56, 34, 20, 148, 32, 1, 42, 2, 40, 34, 10, 32, 13, 148, 147, 34, 25, 148, 32, 18, 32, 16, 148, 32, 15, 32, 19, 148, 147, 34, 27, 32, 10, 32, 8, 148, 32, 9, 32, 20, 148, 147, 34, 21, 148, 32, 18, 32, 12, 148, 32, 11, 32, 19, 148, 147, 34, 28, 32, 5, 32, 8, 148, 32, 9, 32, 13, 148, 147, 34, 5, 148, 147, 146, 146, 32, 15, 32, 6, 148, 32, 7, 32, 16, 148, 147, 34, 9, 32, 4, 32, 20, 148, 32, 10, 32, 14, 148, 147, 34, 10, 148, 147, 146, 34, 4, 139, 67, 23, 183, 209, 56, 93, 69, 4, 64, 32, 0, 65, 36, 106, 32, 9, 32, 14, 148, 32, 24, 32, 13, 148, 147, 32, 27, 32, 8, 148, 146, 67, 0, 0, 128, 63, 32, 4, 149, 34, 4, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 24, 32, 20, 148, 32, 22, 32, 14, 148, 147, 32, 28, 32, 8, 148, 147, 32, 4, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 22, 32, 13, 148, 32, 9, 32, 20, 148, 147, 32, 26, 32, 8, 148, 146, 32, 4, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 15, 32, 17, 148, 32, 18, 32, 5, 148, 147, 32, 7, 32, 23, 148, 147, 32, 4, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 7, 32, 10, 148, 32, 18, 32, 21, 148, 32, 11, 32, 17, 148, 147, 146, 32, 4, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 11, 32, 5, 148, 32, 15, 32, 21, 148, 147, 32, 7, 32, 25, 148, 147, 32, 4, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 23, 148, 32, 19, 32, 5, 148, 32, 16, 32, 17, 148, 147, 146, 32, 4, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 12, 32, 17, 148, 32, 19, 32, 21, 148, 147, 32, 6, 32, 10, 148, 147, 32, 4, 148, 56, 2, 0, 32, 0, 32, 6, 32, 25, 148, 32, 16, 32, 21, 148, 32, 12, 32, 5, 148, 147, 146, 32, 4, 148, 56, 2, 4, 11, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 2, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 205, 4, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 2, 64, 32, 3, 139, 67, 23, 183, 209, 56, 93, 65, 1, 115, 69, 4, 64, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 12, 1, 11, 32, 2, 65, 8, 106, 42, 2, 0, 33, 5, 32, 3, 67, 0, 0, 0, 63, 148, 34, 3, 16, 5, 33, 6, 32, 2, 42, 2, 4, 33, 7, 32, 2, 65, 12, 106, 42, 2, 0, 33, 9, 32, 1, 65, 8, 106, 42, 2, 0, 33, 8, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 10, 32, 3, 16, 6, 34, 3, 148, 32, 1, 65, 4, 106, 42, 2, 0, 34, 11, 32, 6, 32, 7, 148, 32, 7, 32, 7, 148, 32, 5, 32, 5, 148, 146, 32, 9, 32, 9, 148, 146, 145, 34, 13, 149, 34, 7, 148, 147, 32, 8, 32, 6, 32, 5, 148, 32, 13, 149, 34, 5, 148, 147, 32, 1, 65, 12, 106, 42, 2, 0, 34, 12, 32, 6, 32, 9, 148, 32, 13, 149, 34, 6, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 11, 32, 5, 148, 32, 3, 32, 12, 148, 32, 10, 32, 6, 148, 146, 146, 32, 8, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 12, 32, 7, 148, 32, 3, 32, 8, 148, 32, 10, 32, 5, 148, 146, 146, 32, 11, 32, 6, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 8, 32, 6, 148, 32, 3, 32, 11, 148, 32, 10, 32, 7, 148, 146, 146, 32, 12, 32, 5, 148, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 3, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 32, 7, 32, 1, 65, 20, 106, 42, 2, 0, 34, 9, 148, 147, 32, 5, 32, 1, 65, 24, 106, 42, 2, 0, 34, 10, 148, 147, 32, 6, 32, 1, 65, 28, 106, 42, 2, 0, 34, 11, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 5, 32, 9, 148, 32, 3, 32, 11, 148, 32, 6, 32, 8, 148, 146, 146, 32, 7, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 7, 32, 11, 148, 32, 3, 32, 10, 148, 32, 5, 32, 8, 148, 146, 146, 32, 6, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 6, 32, 10, 148, 32, 3, 32, 9, 148, 32, 7, 32, 8, 148, 146, 146, 32, 5, 32, 11, 148, 147, 56, 2, 0, 11, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 154, 4, 2, 2, 127, 10, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 34, 11, 32, 3, 65, 16, 106, 42, 2, 0, 34, 6, 148, 32, 2, 65, 16, 106, 42, 2, 0, 34, 12, 32, 3, 65, 12, 106, 42, 2, 0, 34, 7, 148, 147, 33, 13, 32, 2, 65, 8, 106, 42, 2, 0, 34, 8, 32, 6, 148, 32, 12, 32, 3, 65, 8, 106, 42, 2, 0, 34, 9, 148, 147, 33, 14, 32, 8, 32, 7, 148, 32, 11, 32, 9, 148, 147, 33, 15, 32, 2, 65, 4, 106, 42, 2, 0, 34, 10, 32, 6, 148, 32, 12, 32, 3, 42, 2, 4, 34, 6, 148, 147, 33, 12, 32, 10, 32, 7, 148, 32, 11, 32, 6, 148, 147, 33, 11, 32, 10, 32, 9, 148, 32, 8, 32, 6, 148, 147, 33, 6, 32, 0, 65, 16, 106, 2, 125, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 12, 106, 32, 14, 32, 1, 65, 4, 106, 42, 2, 0, 34, 7, 148, 32, 12, 32, 1, 65, 8, 106, 42, 2, 0, 34, 8, 148, 147, 32, 6, 32, 1, 65, 16, 106, 42, 2, 0, 34, 9, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 12, 32, 1, 65, 12, 106, 42, 2, 0, 34, 10, 148, 32, 13, 32, 7, 148, 147, 32, 11, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 13, 32, 8, 148, 32, 14, 32, 10, 148, 147, 32, 15, 32, 9, 148, 146, 56, 2, 0, 32, 11, 32, 8, 148, 32, 15, 32, 7, 148, 147, 32, 6, 32, 10, 148, 147, 12, 1, 11, 32, 0, 65, 12, 106, 34, 4, 42, 2, 0, 33, 7, 32, 4, 32, 14, 32, 0, 65, 4, 106, 34, 4, 42, 2, 0, 34, 8, 148, 32, 12, 32, 0, 65, 8, 106, 34, 5, 42, 2, 0, 34, 9, 148, 147, 32, 6, 32, 0, 65, 16, 106, 42, 2, 0, 34, 10, 148, 146, 56, 2, 0, 32, 5, 32, 12, 32, 7, 148, 32, 13, 32, 8, 148, 147, 32, 11, 32, 10, 148, 147, 56, 2, 0, 32, 4, 32, 13, 32, 9, 148, 32, 14, 32, 7, 148, 147, 32, 15, 32, 10, 148, 146, 56, 2, 0, 32, 11, 32, 9, 148, 32, 15, 32, 8, 148, 147, 32, 6, 32, 7, 148, 147, 11, 56, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 245, 4, 2, 4, 127, 4, 125, 35, 0, 65, 64, 106, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 1, 65, 4, 106, 33, 5, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 0, 54, 2, 8, 32, 3, 66, 0, 55, 3, 0, 32, 3, 65, 0, 54, 2, 24, 32, 3, 66, 128, 128, 128, 252, 3, 55, 3, 16, 32, 3, 65, 0, 54, 2, 40, 32, 3, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 32, 2, 64, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 148, 146, 34, 7, 67, 239, 255, 127, 191, 93, 65, 1, 115, 69, 4, 64, 32, 3, 32, 3, 65, 16, 106, 32, 5, 16, 79, 2, 127, 32, 3, 42, 2, 0, 34, 7, 32, 7, 148, 32, 3, 42, 2, 4, 34, 8, 32, 8, 148, 146, 32, 3, 65, 8, 106, 42, 2, 0, 34, 9, 32, 9, 148, 146, 145, 67, 23, 183, 209, 56, 93, 4, 64, 32, 3, 32, 3, 65, 32, 106, 32, 5, 16, 79, 32, 3, 65, 8, 106, 42, 2, 0, 33, 9, 32, 3, 42, 2, 4, 33, 8, 32, 3, 42, 2, 0, 33, 7, 11, 32, 7, 32, 7, 148, 32, 8, 32, 8, 148, 146, 32, 9, 32, 9, 148, 146, 34, 10, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 11, 4, 64, 67, 0, 0, 128, 63, 32, 10, 145, 149, 33, 10, 11, 32, 3, 65, 8, 106, 32, 10, 32, 9, 148, 34, 9, 56, 2, 0, 32, 0, 65, 16, 106, 65, 174, 250, 238, 153, 123, 54, 2, 0, 32, 0, 65, 12, 106, 32, 9, 56, 2, 0, 32, 0, 65, 8, 106, 32, 8, 32, 10, 148, 34, 8, 56, 2, 0, 32, 3, 32, 8, 56, 2, 4, 32, 3, 32, 7, 32, 10, 148, 34, 7, 56, 2, 0, 32, 0, 65, 4, 106, 32, 7, 56, 2, 0, 12, 1, 11, 32, 7, 67, 239, 255, 127, 63, 94, 4, 64, 32, 0, 65, 12, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 4, 106, 66, 0, 55, 2, 0, 12, 1, 11, 32, 3, 32, 5, 32, 2, 65, 4, 106, 16, 79, 32, 0, 65, 4, 106, 32, 3, 40, 2, 0, 34, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 3, 40, 2, 4, 34, 5, 54, 2, 0, 32, 0, 65, 16, 106, 32, 7, 67, 0, 0, 128, 63, 146, 34, 7, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 65, 8, 106, 40, 2, 0, 34, 6, 54, 2, 0, 32, 3, 32, 7, 56, 2, 60, 32, 3, 32, 6, 54, 2, 56, 32, 3, 32, 5, 54, 2, 52, 32, 3, 32, 4, 54, 2, 48, 32, 0, 65, 4, 106, 32, 3, 65, 48, 106, 16, 231, 1, 11, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 64, 107, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 179, 4, 2, 1, 127, 10, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 12, 106, 42, 2, 0, 33, 6, 32, 3, 65, 8, 106, 42, 2, 0, 33, 7, 32, 3, 42, 2, 4, 33, 11, 32, 1, 65, 4, 106, 42, 2, 0, 34, 12, 32, 2, 65, 4, 106, 42, 2, 0, 147, 34, 8, 32, 8, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 13, 32, 2, 65, 8, 106, 42, 2, 0, 147, 34, 9, 32, 9, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 14, 32, 2, 65, 12, 106, 42, 2, 0, 147, 34, 10, 32, 10, 148, 146, 34, 5, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 32, 10, 67, 0, 0, 128, 63, 32, 5, 145, 149, 34, 5, 148, 33, 10, 32, 9, 32, 5, 148, 33, 9, 32, 8, 32, 5, 148, 33, 8, 11, 32, 11, 32, 9, 148, 32, 7, 32, 8, 148, 147, 34, 5, 32, 5, 148, 32, 7, 32, 10, 148, 32, 6, 32, 9, 148, 147, 34, 7, 32, 7, 148, 32, 6, 32, 8, 148, 32, 11, 32, 10, 148, 147, 34, 6, 32, 6, 148, 146, 146, 34, 11, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 32, 5, 67, 0, 0, 128, 63, 32, 11, 145, 149, 34, 11, 148, 33, 5, 32, 7, 32, 11, 148, 33, 7, 32, 6, 32, 11, 148, 33, 6, 11, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 60, 106, 32, 14, 56, 2, 0, 32, 0, 65, 56, 106, 32, 13, 56, 2, 0, 32, 0, 65, 52, 106, 32, 12, 56, 2, 0, 32, 0, 65, 48, 106, 65, 0, 54, 2, 0, 32, 0, 65, 44, 106, 32, 10, 56, 2, 0, 32, 0, 65, 40, 106, 32, 9, 56, 2, 0, 32, 0, 65, 36, 106, 32, 8, 56, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 5, 56, 2, 0, 32, 0, 65, 8, 106, 32, 6, 56, 2, 0, 32, 0, 65, 4, 106, 32, 7, 56, 2, 0, 32, 0, 65, 28, 106, 32, 8, 32, 6, 148, 32, 9, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 10, 32, 7, 148, 32, 8, 32, 5, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 9, 32, 5, 148, 32, 10, 32, 6, 148, 147, 56, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 162, 4, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 65, 28, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 65, 32, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 65, 36, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 40, 106, 42, 2, 0, 32, 2, 65, 40, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 42, 2, 0, 32, 2, 65, 44, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 48, 106, 42, 2, 0, 32, 2, 65, 48, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 42, 2, 0, 32, 2, 65, 52, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 56, 106, 42, 2, 0, 32, 2, 65, 56, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 42, 2, 0, 32, 2, 65, 60, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 64, 107, 42, 2, 0, 32, 2, 65, 64, 107, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 130, 4, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 34, 4, 32, 1, 65, 20, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 34, 4, 32, 1, 65, 24, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 187, 4, 2, 1, 127, 10, 125, 35, 0, 65, 16, 107, 34, 2, 36, 0, 32, 2, 65, 0, 54, 2, 8, 32, 2, 66, 0, 55, 3, 0, 32, 2, 32, 1, 16, 225, 1, 67, 0, 0, 128, 63, 32, 2, 42, 2, 4, 149, 34, 3, 32, 1, 42, 2, 36, 148, 33, 6, 67, 0, 0, 128, 63, 32, 2, 42, 2, 0, 149, 34, 4, 32, 1, 42, 2, 32, 148, 33, 7, 67, 0, 0, 128, 63, 32, 2, 42, 2, 8, 149, 34, 5, 32, 1, 42, 2, 24, 148, 33, 8, 32, 4, 32, 1, 42, 2, 16, 148, 33, 9, 32, 5, 32, 1, 42, 2, 8, 148, 33, 10, 32, 3, 32, 1, 42, 2, 4, 148, 33, 11, 2, 64, 32, 4, 32, 1, 42, 2, 0, 148, 34, 4, 32, 3, 32, 1, 42, 2, 20, 148, 34, 3, 146, 32, 5, 32, 1, 42, 2, 40, 148, 34, 5, 146, 34, 12, 67, 0, 0, 0, 0, 94, 65, 1, 115, 69, 4, 64, 32, 0, 32, 11, 32, 9, 147, 67, 0, 0, 192, 127, 32, 12, 67, 0, 0, 128, 63, 146, 34, 3, 145, 34, 4, 32, 4, 146, 32, 3, 67, 0, 0, 0, 0, 93, 27, 34, 3, 149, 56, 2, 8, 32, 0, 32, 7, 32, 10, 147, 32, 3, 149, 56, 2, 4, 32, 0, 32, 8, 32, 6, 147, 32, 3, 149, 56, 2, 0, 32, 0, 32, 3, 67, 0, 0, 128, 62, 148, 56, 2, 12, 12, 1, 11, 32, 4, 32, 3, 94, 65, 1, 115, 32, 4, 32, 5, 94, 65, 1, 115, 114, 69, 4, 64, 32, 0, 32, 10, 32, 7, 146, 67, 0, 0, 192, 127, 32, 4, 67, 0, 0, 128, 63, 146, 32, 3, 147, 32, 5, 147, 34, 3, 145, 34, 4, 32, 4, 146, 32, 3, 67, 0, 0, 0, 0, 93, 27, 34, 3, 149, 56, 2, 8, 32, 0, 32, 11, 32, 9, 146, 32, 3, 149, 56, 2, 4, 32, 0, 32, 3, 67, 0, 0, 128, 62, 148, 56, 2, 0, 32, 0, 32, 8, 32, 6, 147, 32, 3, 149, 56, 2, 12, 12, 1, 11, 32, 3, 32, 5, 94, 65, 1, 115, 69, 4, 64, 32, 0, 32, 8, 32, 6, 146, 67, 0, 0, 192, 127, 32, 3, 67, 0, 0, 128, 63, 146, 32, 4, 147, 32, 5, 147, 34, 3, 145, 34, 4, 32, 4, 146, 32, 3, 67, 0, 0, 0, 0, 93, 27, 34, 3, 149, 56, 2, 8, 32, 0, 32, 3, 67, 0, 0, 128, 62, 148, 56, 2, 4, 32, 0, 32, 11, 32, 9, 146, 32, 3, 149, 56, 2, 0, 32, 0, 32, 7, 32, 10, 147, 32, 3, 149, 56, 2, 12, 12, 1, 11, 32, 0, 67, 0, 0, 192, 127, 32, 5, 67, 0, 0, 128, 63, 146, 32, 4, 147, 32, 3, 147, 34, 3, 145, 34, 4, 32, 4, 146, 32, 3, 67, 0, 0, 0, 0, 93, 27, 34, 3, 67, 0, 0, 128, 62, 148, 56, 2, 8, 32, 0, 32, 8, 32, 6, 146, 32, 3, 149, 56, 2, 4, 32, 0, 32, 10, 32, 7, 146, 32, 3, 149, 56, 2, 0, 32, 0, 32, 11, 32, 9, 147, 32, 3, 149, 56, 2, 12, 11, 32, 2, 65, 16, 106, 36, 0, 11, 233, 3, 2, 1, 127, 14, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 7, 16, 5, 33, 4, 32, 1, 42, 2, 4, 33, 2, 32, 7, 16, 6, 33, 5, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 67, 0, 0, 0, 0, 32, 5, 32, 5, 139, 67, 23, 183, 209, 56, 93, 27, 34, 6, 148, 32, 2, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 8, 148, 147, 34, 9, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 6, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 8, 148, 147, 34, 10, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 6, 148, 32, 4, 32, 8, 148, 146, 34, 11, 56, 2, 0, 32, 0, 32, 2, 32, 6, 148, 32, 7, 32, 8, 148, 146, 34, 6, 56, 2, 4, 32, 0, 65, 32, 106, 32, 7, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 32, 2, 32, 1, 65, 20, 106, 42, 2, 0, 34, 12, 148, 146, 32, 5, 32, 1, 65, 24, 106, 42, 2, 0, 34, 13, 148, 146, 32, 4, 32, 1, 65, 28, 106, 42, 2, 0, 34, 14, 148, 146, 34, 15, 32, 9, 148, 32, 7, 32, 12, 148, 32, 8, 32, 2, 148, 147, 32, 13, 32, 4, 148, 147, 32, 14, 32, 5, 148, 146, 34, 16, 32, 6, 148, 147, 32, 7, 32, 13, 148, 32, 8, 32, 5, 148, 147, 32, 14, 32, 2, 148, 147, 32, 12, 32, 4, 148, 146, 34, 17, 32, 11, 148, 147, 32, 7, 32, 14, 148, 32, 8, 32, 4, 148, 147, 32, 12, 32, 5, 148, 147, 32, 13, 32, 2, 148, 146, 34, 2, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 16, 32, 11, 148, 32, 15, 32, 10, 148, 32, 2, 32, 9, 148, 146, 146, 32, 17, 32, 6, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 2, 32, 6, 148, 32, 15, 32, 11, 148, 32, 17, 32, 9, 148, 146, 146, 32, 16, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 17, 32, 10, 148, 32, 15, 32, 6, 148, 32, 16, 32, 9, 148, 146, 146, 32, 2, 32, 11, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 233, 3, 2, 1, 127, 14, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 7, 16, 5, 33, 4, 32, 1, 65, 8, 106, 42, 2, 0, 33, 2, 32, 7, 16, 6, 33, 5, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 67, 0, 0, 0, 0, 32, 5, 32, 5, 139, 67, 23, 183, 209, 56, 93, 27, 34, 6, 148, 32, 2, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 8, 148, 147, 34, 9, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 6, 148, 32, 1, 42, 2, 4, 34, 5, 32, 8, 148, 146, 34, 10, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 6, 148, 32, 7, 32, 8, 148, 146, 34, 11, 56, 2, 0, 32, 0, 32, 5, 32, 6, 148, 32, 4, 32, 8, 148, 147, 34, 6, 56, 2, 4, 32, 0, 65, 32, 106, 32, 7, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 32, 5, 32, 1, 65, 20, 106, 42, 2, 0, 34, 12, 148, 146, 32, 2, 32, 1, 65, 24, 106, 42, 2, 0, 34, 13, 148, 146, 32, 4, 32, 1, 65, 28, 106, 42, 2, 0, 34, 14, 148, 146, 34, 15, 32, 9, 148, 32, 7, 32, 12, 148, 32, 8, 32, 5, 148, 147, 32, 13, 32, 4, 148, 147, 32, 14, 32, 2, 148, 146, 34, 16, 32, 6, 148, 147, 32, 7, 32, 13, 148, 32, 8, 32, 2, 148, 147, 32, 14, 32, 5, 148, 147, 32, 12, 32, 4, 148, 146, 34, 17, 32, 11, 148, 147, 32, 7, 32, 14, 148, 32, 8, 32, 4, 148, 147, 32, 12, 32, 2, 148, 147, 32, 13, 32, 5, 148, 146, 34, 2, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 16, 32, 11, 148, 32, 15, 32, 10, 148, 32, 2, 32, 9, 148, 146, 146, 32, 17, 32, 6, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 2, 32, 6, 148, 32, 15, 32, 11, 148, 32, 17, 32, 9, 148, 146, 146, 32, 16, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 17, 32, 10, 148, 32, 15, 32, 6, 148, 32, 16, 32, 9, 148, 146, 146, 32, 2, 32, 11, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 233, 3, 2, 1, 127, 14, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 7, 16, 5, 33, 4, 32, 1, 65, 12, 106, 42, 2, 0, 33, 2, 32, 7, 16, 6, 33, 5, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 67, 0, 0, 0, 0, 32, 5, 32, 5, 139, 67, 23, 183, 209, 56, 93, 27, 34, 6, 148, 32, 2, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 8, 148, 147, 34, 9, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 6, 148, 32, 7, 32, 8, 148, 146, 34, 10, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 32, 6, 148, 32, 1, 42, 2, 4, 34, 5, 32, 8, 148, 147, 34, 11, 56, 2, 0, 32, 0, 32, 5, 32, 6, 148, 32, 4, 32, 8, 148, 146, 34, 6, 56, 2, 4, 32, 0, 65, 32, 106, 32, 7, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 32, 5, 32, 1, 65, 20, 106, 42, 2, 0, 34, 12, 148, 146, 32, 4, 32, 1, 65, 24, 106, 42, 2, 0, 34, 13, 148, 146, 32, 2, 32, 1, 65, 28, 106, 42, 2, 0, 34, 14, 148, 146, 34, 15, 32, 9, 148, 32, 7, 32, 12, 148, 32, 8, 32, 5, 148, 147, 32, 13, 32, 2, 148, 147, 32, 14, 32, 4, 148, 146, 34, 16, 32, 6, 148, 147, 32, 7, 32, 13, 148, 32, 8, 32, 4, 148, 147, 32, 14, 32, 5, 148, 147, 32, 12, 32, 2, 148, 146, 34, 17, 32, 11, 148, 147, 32, 7, 32, 14, 148, 32, 8, 32, 2, 148, 147, 32, 12, 32, 4, 148, 147, 32, 13, 32, 5, 148, 146, 34, 2, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 16, 32, 11, 148, 32, 15, 32, 10, 148, 32, 2, 32, 9, 148, 146, 146, 32, 17, 32, 6, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 2, 32, 6, 148, 32, 15, 32, 11, 148, 32, 17, 32, 9, 148, 146, 146, 32, 16, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 17, 32, 10, 148, 32, 15, 32, 6, 148, 32, 16, 32, 9, 148, 146, 146, 32, 2, 32, 11, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 159, 4, 1, 6, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 20, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 36, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 52, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 40, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 56, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 12, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 28, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 60, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 32, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 48, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 64, 107, 40, 2, 0, 54, 2, 0, 12, 1, 11, 32, 0, 65, 8, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 20, 106, 34, 4, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 34, 2, 40, 2, 0, 33, 5, 32, 2, 32, 0, 65, 36, 106, 34, 6, 40, 2, 0, 54, 2, 0, 32, 4, 32, 3, 54, 2, 0, 32, 0, 65, 16, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 52, 106, 34, 4, 40, 2, 0, 54, 2, 0, 32, 0, 65, 28, 106, 34, 2, 40, 2, 0, 33, 7, 32, 2, 32, 0, 65, 40, 106, 34, 2, 40, 2, 0, 54, 2, 0, 32, 2, 32, 7, 54, 2, 0, 32, 6, 32, 5, 54, 2, 0, 32, 0, 65, 32, 106, 34, 2, 40, 2, 0, 33, 5, 32, 2, 32, 0, 65, 56, 106, 34, 6, 40, 2, 0, 54, 2, 0, 32, 6, 32, 5, 54, 2, 0, 32, 4, 32, 3, 54, 2, 0, 32, 0, 65, 60, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 48, 106, 34, 4, 40, 2, 0, 54, 2, 0, 32, 4, 32, 3, 54, 2, 0, 11, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 242, 3, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 65, 28, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 65, 32, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 65, 36, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 40, 106, 42, 2, 0, 32, 2, 65, 40, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 42, 2, 0, 32, 2, 65, 44, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 48, 106, 42, 2, 0, 32, 2, 65, 48, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 42, 2, 0, 32, 2, 65, 52, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 56, 106, 42, 2, 0, 32, 2, 65, 56, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 42, 2, 0, 32, 2, 65, 60, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 64, 107, 42, 2, 0, 32, 2, 65, 64, 107, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 226, 3, 2, 1, 127, 13, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 48, 106, 65, 0, 54, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 11, 32, 11, 146, 34, 7, 148, 34, 9, 32, 1, 65, 4, 106, 42, 2, 0, 34, 5, 32, 5, 146, 34, 14, 32, 1, 65, 16, 106, 42, 2, 0, 34, 8, 148, 34, 10, 147, 32, 3, 65, 12, 106, 42, 2, 0, 34, 12, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 12, 32, 5, 32, 7, 148, 34, 15, 32, 8, 32, 6, 32, 6, 146, 34, 13, 148, 34, 16, 146, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 9, 32, 10, 146, 32, 3, 65, 8, 106, 42, 2, 0, 34, 9, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 9, 32, 5, 32, 13, 148, 34, 10, 32, 8, 32, 7, 148, 34, 17, 147, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 42, 2, 4, 34, 8, 32, 15, 32, 16, 147, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 8, 32, 10, 32, 17, 146, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 12, 67, 0, 0, 128, 63, 32, 5, 32, 14, 148, 34, 5, 32, 6, 32, 13, 148, 34, 6, 146, 147, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 9, 67, 0, 0, 128, 63, 32, 5, 32, 11, 32, 7, 148, 34, 7, 146, 147, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 8, 67, 0, 0, 128, 63, 32, 6, 32, 7, 146, 147, 148, 56, 2, 0, 32, 0, 65, 52, 106, 32, 2, 65, 4, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 56, 106, 32, 2, 65, 8, 106, 41, 2, 0, 55, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 188, 3, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 2, 65, 16, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 148, 32, 2, 42, 2, 4, 34, 6, 32, 1, 65, 4, 106, 42, 2, 0, 34, 7, 148, 147, 32, 2, 65, 8, 106, 42, 2, 0, 34, 8, 32, 1, 65, 8, 106, 42, 2, 0, 34, 9, 148, 147, 32, 2, 65, 12, 106, 42, 2, 0, 34, 10, 32, 1, 65, 12, 106, 42, 2, 0, 34, 11, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 8, 32, 7, 148, 32, 4, 32, 11, 148, 32, 10, 32, 5, 148, 146, 146, 32, 6, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 6, 32, 11, 148, 32, 4, 32, 9, 148, 32, 8, 32, 5, 148, 146, 146, 32, 10, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 10, 32, 9, 148, 32, 4, 32, 7, 148, 32, 6, 32, 5, 148, 146, 146, 32, 8, 32, 11, 148, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 4, 32, 1, 65, 32, 106, 42, 2, 0, 34, 5, 148, 32, 6, 32, 1, 65, 20, 106, 42, 2, 0, 34, 7, 148, 147, 32, 8, 32, 1, 65, 24, 106, 42, 2, 0, 34, 9, 148, 147, 32, 10, 32, 1, 65, 28, 106, 42, 2, 0, 34, 11, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 8, 32, 7, 148, 32, 4, 32, 11, 148, 32, 10, 32, 5, 148, 146, 146, 32, 6, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 32, 11, 148, 32, 4, 32, 9, 148, 32, 8, 32, 5, 148, 146, 146, 32, 10, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 10, 32, 9, 148, 32, 4, 32, 7, 148, 32, 6, 32, 5, 148, 146, 146, 32, 8, 32, 11, 148, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 188, 3, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 4, 32, 2, 65, 16, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 4, 106, 42, 2, 0, 34, 6, 32, 2, 42, 2, 4, 34, 7, 148, 147, 32, 1, 65, 8, 106, 42, 2, 0, 34, 8, 32, 2, 65, 8, 106, 42, 2, 0, 34, 9, 148, 147, 32, 1, 65, 12, 106, 42, 2, 0, 34, 10, 32, 2, 65, 12, 106, 42, 2, 0, 34, 11, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 9, 148, 32, 4, 32, 11, 148, 32, 10, 32, 5, 148, 146, 146, 32, 8, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 10, 32, 7, 148, 32, 4, 32, 9, 148, 32, 8, 32, 5, 148, 146, 146, 32, 6, 32, 11, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 8, 32, 11, 148, 32, 4, 32, 7, 148, 32, 6, 32, 5, 148, 146, 146, 32, 10, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 4, 32, 2, 65, 32, 106, 42, 2, 0, 34, 5, 148, 32, 6, 32, 2, 65, 20, 106, 42, 2, 0, 34, 7, 148, 147, 32, 8, 32, 2, 65, 24, 106, 42, 2, 0, 34, 9, 148, 147, 32, 10, 32, 2, 65, 28, 106, 42, 2, 0, 34, 11, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 6, 32, 9, 148, 32, 4, 32, 11, 148, 32, 10, 32, 5, 148, 146, 146, 32, 8, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 10, 32, 7, 148, 32, 4, 32, 9, 148, 32, 8, 32, 5, 148, 146, 146, 32, 6, 32, 11, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 8, 32, 11, 148, 32, 4, 32, 7, 148, 32, 6, 32, 5, 148, 146, 146, 32, 10, 32, 9, 148, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 202, 3, 2, 3, 127, 13, 125, 35, 0, 65, 32, 107, 34, 2, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 0, 65, 4, 106, 33, 4, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 65, 0, 54, 2, 8, 32, 2, 66, 0, 55, 3, 0, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 32, 1, 65, 20, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 32, 106, 42, 2, 0, 34, 10, 32, 1, 42, 2, 4, 34, 11, 148, 147, 32, 1, 65, 24, 106, 42, 2, 0, 34, 12, 32, 1, 65, 12, 106, 42, 2, 0, 34, 13, 148, 147, 32, 1, 65, 28, 106, 42, 2, 0, 34, 14, 32, 1, 65, 8, 106, 42, 2, 0, 34, 15, 148, 146, 34, 8, 32, 8, 146, 33, 7, 32, 13, 140, 33, 8, 32, 15, 140, 33, 16, 32, 11, 140, 33, 17, 2, 125, 32, 11, 32, 11, 148, 32, 15, 32, 15, 148, 146, 32, 13, 32, 13, 148, 146, 32, 6, 32, 6, 148, 146, 34, 9, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 32, 2, 32, 7, 32, 9, 149, 56, 2, 0, 32, 5, 32, 16, 148, 32, 6, 32, 14, 148, 32, 10, 32, 8, 148, 146, 146, 32, 12, 32, 17, 148, 147, 34, 7, 32, 7, 146, 32, 9, 149, 33, 7, 32, 14, 32, 17, 148, 32, 6, 32, 12, 148, 32, 10, 32, 16, 148, 146, 146, 32, 5, 32, 8, 148, 147, 34, 5, 32, 5, 146, 32, 9, 149, 12, 1, 11, 32, 2, 32, 7, 56, 2, 0, 32, 5, 32, 16, 148, 32, 6, 32, 14, 148, 32, 10, 32, 8, 148, 146, 146, 32, 12, 32, 17, 148, 147, 34, 9, 32, 9, 146, 33, 7, 32, 14, 32, 17, 148, 32, 6, 32, 12, 148, 32, 10, 32, 16, 148, 146, 146, 32, 5, 32, 8, 148, 147, 34, 5, 32, 5, 146, 11, 33, 5, 32, 2, 65, 8, 106, 32, 7, 56, 2, 0, 32, 2, 32, 5, 56, 2, 4, 32, 2, 32, 6, 56, 2, 28, 32, 2, 32, 13, 56, 2, 24, 32, 2, 32, 15, 56, 2, 20, 32, 2, 32, 11, 56, 2, 16, 32, 4, 32, 2, 65, 16, 106, 32, 2, 16, 104, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 2, 65, 32, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 148, 3, 1, 16, 125, 32, 0, 32, 1, 42, 2, 12, 34, 3, 32, 2, 42, 2, 12, 34, 4, 148, 32, 1, 42, 2, 0, 34, 5, 32, 2, 42, 2, 0, 34, 6, 148, 147, 32, 1, 42, 2, 4, 34, 7, 32, 2, 42, 2, 4, 34, 8, 148, 147, 32, 1, 42, 2, 8, 34, 9, 32, 2, 42, 2, 8, 34, 10, 148, 147, 56, 2, 12, 32, 0, 32, 5, 32, 8, 148, 32, 3, 32, 10, 148, 32, 9, 32, 4, 148, 146, 146, 32, 7, 32, 6, 148, 147, 56, 2, 8, 32, 0, 32, 9, 32, 6, 148, 32, 3, 32, 8, 148, 32, 7, 32, 4, 148, 146, 146, 32, 5, 32, 10, 148, 147, 56, 2, 4, 32, 0, 32, 7, 32, 10, 148, 32, 3, 32, 6, 148, 32, 5, 32, 4, 148, 146, 146, 32, 9, 32, 8, 148, 147, 56, 2, 0, 32, 0, 32, 3, 32, 2, 42, 2, 28, 34, 11, 148, 32, 5, 32, 2, 42, 2, 16, 34, 12, 148, 147, 32, 7, 32, 2, 42, 2, 20, 34, 13, 148, 147, 32, 9, 32, 2, 42, 2, 24, 34, 14, 148, 147, 32, 4, 32, 1, 42, 2, 28, 34, 15, 148, 146, 32, 6, 32, 1, 42, 2, 16, 34, 16, 148, 147, 32, 8, 32, 1, 42, 2, 20, 34, 17, 148, 147, 32, 10, 32, 1, 42, 2, 24, 34, 18, 148, 147, 56, 2, 28, 32, 0, 32, 16, 32, 8, 148, 32, 15, 32, 10, 148, 32, 5, 32, 13, 148, 32, 3, 32, 14, 148, 32, 9, 32, 11, 148, 146, 146, 32, 7, 32, 12, 148, 147, 32, 18, 32, 4, 148, 146, 146, 146, 32, 17, 32, 6, 148, 147, 56, 2, 24, 32, 0, 32, 18, 32, 6, 148, 32, 15, 32, 8, 148, 32, 9, 32, 12, 148, 32, 3, 32, 13, 148, 32, 7, 32, 11, 148, 146, 146, 32, 5, 32, 14, 148, 147, 32, 17, 32, 4, 148, 146, 146, 146, 32, 16, 32, 10, 148, 147, 56, 2, 20, 32, 0, 32, 17, 32, 10, 148, 32, 15, 32, 6, 148, 32, 7, 32, 14, 148, 32, 3, 32, 12, 148, 32, 5, 32, 11, 148, 146, 146, 32, 9, 32, 13, 148, 147, 32, 16, 32, 4, 148, 146, 146, 146, 32, 18, 32, 8, 148, 147, 56, 2, 16, 11, 218, 3, 2, 1, 127, 4, 125, 2, 64, 2, 125, 32, 1, 42, 2, 0, 34, 3, 32, 1, 42, 2, 16, 34, 4, 146, 32, 1, 42, 2, 32, 34, 5, 146, 34, 6, 67, 0, 0, 0, 0, 94, 65, 1, 115, 69, 4, 64, 32, 0, 32, 6, 67, 0, 0, 128, 63, 146, 145, 34, 3, 67, 0, 0, 0, 63, 148, 56, 2, 12, 32, 0, 67, 0, 0, 0, 63, 32, 3, 149, 34, 3, 32, 1, 42, 2, 20, 32, 1, 42, 2, 28, 147, 148, 56, 2, 0, 32, 0, 32, 3, 32, 1, 42, 2, 24, 32, 1, 42, 2, 8, 147, 148, 56, 2, 4, 32, 0, 65, 8, 106, 33, 0, 32, 3, 32, 1, 42, 2, 4, 32, 1, 42, 2, 12, 147, 148, 12, 1, 11, 2, 64, 65, 2, 32, 4, 32, 3, 94, 34, 2, 32, 5, 32, 4, 32, 3, 32, 2, 27, 94, 27, 34, 2, 65, 2, 71, 4, 64, 32, 2, 65, 1, 70, 13, 1, 32, 2, 13, 3, 32, 0, 32, 3, 32, 4, 147, 32, 5, 147, 67, 0, 0, 128, 63, 146, 145, 34, 3, 67, 0, 0, 0, 63, 148, 56, 2, 0, 32, 0, 67, 0, 0, 0, 63, 32, 3, 149, 34, 3, 32, 1, 42, 2, 20, 32, 1, 42, 2, 28, 147, 148, 56, 2, 12, 32, 0, 32, 3, 32, 1, 42, 2, 12, 32, 1, 42, 2, 4, 146, 148, 56, 2, 4, 32, 0, 65, 8, 106, 33, 0, 32, 3, 32, 1, 42, 2, 24, 32, 1, 42, 2, 8, 146, 148, 12, 2, 11, 32, 0, 32, 5, 32, 3, 147, 32, 4, 147, 67, 0, 0, 128, 63, 146, 145, 34, 3, 67, 0, 0, 0, 63, 148, 56, 2, 8, 32, 0, 67, 0, 0, 0, 63, 32, 3, 149, 34, 3, 32, 1, 42, 2, 4, 32, 1, 42, 2, 12, 147, 148, 56, 2, 12, 32, 0, 32, 3, 32, 1, 42, 2, 8, 32, 1, 42, 2, 24, 146, 148, 56, 2, 0, 32, 0, 65, 4, 106, 33, 0, 32, 3, 32, 1, 42, 2, 20, 32, 1, 42, 2, 28, 146, 148, 12, 1, 11, 32, 0, 32, 4, 32, 5, 147, 32, 3, 147, 67, 0, 0, 128, 63, 146, 145, 34, 3, 67, 0, 0, 0, 63, 148, 56, 2, 4, 32, 0, 67, 0, 0, 0, 63, 32, 3, 149, 34, 3, 32, 1, 42, 2, 24, 32, 1, 42, 2, 8, 147, 148, 56, 2, 12, 32, 0, 32, 3, 32, 1, 42, 2, 28, 32, 1, 42, 2, 20, 146, 148, 56, 2, 8, 32, 3, 32, 1, 42, 2, 4, 32, 1, 42, 2, 12, 146, 148, 11, 33, 3, 32, 0, 32, 3, 56, 2, 0, 11, 11, 151, 3, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 67, 0, 0, 128, 63, 32, 3, 147, 34, 5, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 148, 32, 2, 65, 16, 106, 42, 2, 0, 34, 7, 32, 3, 140, 32, 3, 32, 1, 65, 4, 106, 42, 2, 0, 34, 8, 32, 2, 42, 2, 4, 34, 9, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 10, 32, 2, 65, 8, 106, 42, 2, 0, 34, 11, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 12, 32, 2, 65, 12, 106, 42, 2, 0, 34, 13, 148, 146, 32, 6, 32, 7, 148, 146, 67, 23, 183, 209, 56, 93, 27, 34, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 5, 32, 12, 148, 32, 13, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 10, 148, 32, 11, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 8, 148, 32, 9, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 32, 1, 65, 20, 106, 42, 2, 0, 148, 32, 3, 32, 2, 65, 20, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 5, 32, 1, 65, 24, 106, 42, 2, 0, 148, 32, 3, 32, 2, 65, 24, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 5, 32, 1, 65, 28, 106, 42, 2, 0, 148, 32, 3, 32, 2, 65, 28, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 5, 32, 1, 65, 32, 106, 42, 2, 0, 148, 32, 3, 32, 2, 65, 32, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 128, 3, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 6, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 6, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 6, 65, 1, 106, 54, 2, 0, 32, 4, 69, 13, 0, 32, 4, 32, 6, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 5, 148, 34, 7, 32, 5, 32, 5, 146, 34, 10, 67, 0, 0, 64, 192, 146, 148, 67, 0, 0, 128, 63, 146, 34, 8, 32, 1, 65, 4, 106, 42, 2, 0, 148, 32, 7, 32, 5, 67, 0, 0, 0, 192, 146, 148, 32, 5, 146, 34, 9, 32, 2, 65, 4, 106, 42, 2, 0, 148, 146, 32, 7, 32, 5, 67, 0, 0, 128, 191, 146, 148, 34, 5, 32, 3, 65, 4, 106, 42, 2, 0, 148, 146, 32, 7, 67, 0, 0, 64, 64, 32, 10, 147, 148, 34, 7, 32, 4, 42, 2, 4, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 8, 32, 1, 65, 8, 106, 42, 2, 0, 148, 32, 9, 32, 2, 65, 8, 106, 42, 2, 0, 148, 146, 32, 5, 32, 3, 65, 8, 106, 42, 2, 0, 148, 146, 32, 7, 32, 4, 65, 8, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 8, 32, 1, 65, 12, 106, 42, 2, 0, 148, 32, 9, 32, 2, 65, 12, 106, 42, 2, 0, 148, 146, 32, 5, 32, 3, 65, 12, 106, 42, 2, 0, 148, 146, 32, 7, 32, 4, 65, 12, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 135, 3, 2, 1, 127, 13, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 32, 1, 65, 20, 106, 42, 2, 0, 34, 9, 32, 1, 65, 28, 106, 42, 2, 0, 34, 10, 148, 147, 34, 13, 148, 32, 1, 42, 2, 4, 34, 5, 32, 9, 32, 1, 65, 36, 106, 42, 2, 0, 34, 11, 148, 32, 1, 65, 24, 106, 42, 2, 0, 34, 12, 32, 8, 148, 147, 34, 14, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 12, 32, 10, 148, 32, 7, 32, 11, 148, 147, 34, 15, 148, 146, 146, 34, 3, 139, 67, 23, 183, 209, 56, 93, 4, 127, 32, 2, 5, 32, 0, 65, 28, 106, 32, 13, 67, 0, 0, 128, 63, 32, 3, 149, 34, 3, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 15, 32, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 14, 32, 3, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 5, 32, 9, 148, 32, 6, 32, 7, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 6, 32, 10, 148, 32, 5, 32, 8, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 4, 32, 7, 148, 32, 5, 32, 12, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 32, 11, 148, 32, 4, 32, 10, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 12, 148, 32, 4, 32, 9, 148, 147, 32, 3, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 8, 148, 32, 6, 32, 11, 140, 148, 146, 32, 3, 148, 56, 2, 0, 32, 1, 40, 2, 0, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 243, 2, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 6, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 6, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 6, 65, 1, 106, 54, 2, 0, 32, 4, 69, 13, 0, 32, 4, 32, 6, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 67, 0, 0, 128, 63, 32, 5, 147, 34, 7, 32, 7, 32, 7, 148, 34, 8, 148, 34, 9, 32, 1, 65, 4, 106, 42, 2, 0, 148, 32, 5, 67, 0, 0, 64, 64, 148, 32, 8, 148, 34, 8, 32, 2, 65, 4, 106, 42, 2, 0, 148, 146, 32, 7, 32, 5, 32, 5, 148, 34, 10, 67, 0, 0, 64, 64, 148, 148, 34, 7, 32, 3, 65, 4, 106, 42, 2, 0, 148, 146, 32, 10, 32, 5, 148, 34, 5, 32, 4, 42, 2, 4, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 9, 32, 1, 65, 8, 106, 42, 2, 0, 148, 32, 8, 32, 2, 65, 8, 106, 42, 2, 0, 148, 146, 32, 7, 32, 3, 65, 8, 106, 42, 2, 0, 148, 146, 32, 5, 32, 4, 65, 8, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 9, 32, 1, 65, 12, 106, 42, 2, 0, 148, 32, 8, 32, 2, 65, 12, 106, 42, 2, 0, 148, 146, 32, 7, 32, 3, 65, 12, 106, 42, 2, 0, 148, 146, 32, 5, 32, 4, 65, 12, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 141, 3, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 34, 3, 54, 2, 0, 32, 2, 32, 2, 42, 2, 4, 34, 6, 32, 6, 148, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 32, 4, 148, 146, 32, 2, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 145, 34, 7, 67, 23, 183, 209, 56, 93, 4, 127, 32, 3, 5, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 44, 106, 32, 1, 16, 6, 34, 9, 67, 0, 0, 128, 63, 32, 9, 147, 34, 8, 32, 5, 67, 0, 0, 128, 63, 32, 7, 149, 34, 7, 148, 34, 5, 32, 5, 148, 148, 146, 56, 2, 0, 32, 0, 65, 40, 106, 32, 8, 32, 5, 32, 4, 32, 7, 148, 34, 4, 148, 148, 34, 10, 32, 1, 16, 5, 34, 1, 32, 6, 32, 7, 148, 34, 6, 148, 34, 7, 147, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 32, 4, 148, 34, 11, 32, 8, 32, 5, 32, 6, 148, 148, 34, 12, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 7, 32, 10, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 9, 32, 8, 32, 4, 32, 4, 148, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 8, 32, 4, 32, 6, 148, 148, 34, 4, 32, 1, 32, 5, 148, 34, 5, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 12, 32, 11, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 4, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 9, 32, 8, 32, 6, 32, 6, 148, 148, 146, 56, 2, 0, 32, 2, 40, 2, 0, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 132, 3, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 1, 65, 48, 106, 42, 2, 0, 33, 5, 32, 1, 65, 44, 106, 42, 2, 0, 33, 6, 32, 1, 65, 40, 106, 42, 2, 0, 33, 7, 32, 1, 65, 36, 106, 42, 2, 0, 33, 8, 32, 1, 65, 32, 106, 42, 2, 0, 33, 9, 32, 1, 65, 28, 106, 42, 2, 0, 33, 10, 32, 1, 65, 24, 106, 42, 2, 0, 33, 11, 32, 1, 65, 20, 106, 42, 2, 0, 33, 12, 32, 2, 16, 6, 33, 4, 32, 2, 16, 5, 33, 2, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 41, 2, 0, 55, 2, 0, 11, 32, 0, 65, 48, 106, 32, 4, 32, 5, 148, 32, 2, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 44, 106, 32, 4, 32, 6, 148, 32, 2, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 40, 106, 32, 4, 32, 7, 148, 32, 2, 32, 11, 148, 147, 56, 2, 0, 32, 0, 65, 36, 106, 32, 4, 32, 8, 148, 32, 2, 32, 12, 148, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 4, 32, 9, 148, 32, 2, 32, 5, 148, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 4, 32, 10, 148, 32, 2, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 4, 32, 11, 148, 32, 2, 32, 7, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 4, 32, 12, 148, 32, 2, 32, 8, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 132, 3, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 1, 65, 48, 106, 42, 2, 0, 33, 5, 32, 1, 65, 44, 106, 42, 2, 0, 33, 6, 32, 1, 65, 40, 106, 42, 2, 0, 33, 7, 32, 1, 65, 36, 106, 42, 2, 0, 33, 8, 32, 1, 65, 16, 106, 42, 2, 0, 33, 9, 32, 1, 65, 12, 106, 42, 2, 0, 33, 10, 32, 1, 65, 8, 106, 42, 2, 0, 33, 11, 32, 1, 42, 2, 4, 33, 12, 32, 2, 16, 6, 33, 4, 32, 2, 16, 5, 33, 2, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 41, 2, 0, 55, 2, 0, 11, 32, 0, 65, 48, 106, 32, 2, 32, 9, 148, 32, 4, 32, 5, 148, 146, 56, 2, 0, 32, 0, 65, 44, 106, 32, 2, 32, 10, 148, 32, 4, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 40, 106, 32, 2, 32, 11, 148, 32, 4, 32, 7, 148, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 2, 32, 12, 148, 32, 4, 32, 8, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 32, 9, 148, 32, 2, 32, 5, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 10, 148, 32, 2, 32, 6, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 11, 148, 32, 2, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 12, 148, 32, 2, 32, 8, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 132, 3, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 1, 65, 32, 106, 42, 2, 0, 33, 5, 32, 1, 65, 28, 106, 42, 2, 0, 33, 6, 32, 1, 65, 24, 106, 42, 2, 0, 33, 7, 32, 1, 65, 20, 106, 42, 2, 0, 33, 8, 32, 1, 65, 16, 106, 42, 2, 0, 33, 9, 32, 1, 65, 12, 106, 42, 2, 0, 33, 10, 32, 1, 65, 8, 106, 42, 2, 0, 33, 11, 32, 1, 42, 2, 4, 33, 12, 32, 2, 16, 6, 33, 4, 32, 2, 16, 5, 33, 2, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 41, 2, 0, 55, 2, 0, 11, 32, 0, 65, 32, 106, 32, 4, 32, 5, 148, 32, 2, 32, 9, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 4, 32, 6, 148, 32, 2, 32, 10, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 4, 32, 7, 148, 32, 2, 32, 11, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 4, 32, 8, 148, 32, 2, 32, 12, 148, 147, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 32, 9, 148, 32, 2, 32, 5, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 10, 148, 32, 2, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 11, 148, 32, 2, 32, 7, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 12, 148, 32, 2, 32, 8, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 130, 3, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 2, 42, 2, 4, 34, 4, 32, 1, 65, 4, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 1, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 1, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 32, 1, 65, 16, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 5, 32, 1, 65, 20, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 5, 32, 1, 65, 24, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 5, 32, 1, 65, 28, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 33, 4, 32, 0, 65, 32, 106, 32, 5, 32, 1, 65, 32, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 36, 106, 32, 4, 32, 1, 65, 36, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 40, 106, 32, 4, 32, 1, 65, 40, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 4, 32, 1, 65, 44, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 48, 106, 32, 4, 32, 1, 65, 48, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 249, 2, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 32, 1, 65, 20, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 32, 1, 65, 24, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 32, 1, 65, 28, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 32, 1, 65, 32, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 36, 106, 42, 2, 0, 32, 1, 65, 36, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 40, 106, 42, 2, 0, 32, 1, 65, 40, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 44, 106, 42, 2, 0, 32, 1, 65, 44, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 48, 106, 42, 2, 0, 32, 1, 65, 48, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 52, 106, 42, 2, 0, 32, 1, 65, 52, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 56, 106, 42, 2, 0, 32, 1, 65, 56, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 60, 106, 42, 2, 0, 32, 1, 65, 60, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 64, 107, 42, 2, 0, 32, 1, 65, 64, 107, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 238, 2, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 246, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 40, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 48, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 56, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 64, 107, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 206, 2, 2, 1, 127, 10, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 2, 65, 16, 106, 42, 2, 0, 34, 5, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 32, 2, 42, 2, 4, 34, 6, 148, 32, 5, 32, 1, 65, 12, 106, 42, 2, 0, 34, 9, 148, 146, 32, 1, 65, 4, 106, 42, 2, 0, 34, 10, 32, 2, 65, 8, 106, 42, 2, 0, 34, 7, 148, 147, 34, 11, 148, 32, 10, 32, 6, 140, 148, 32, 4, 32, 7, 148, 147, 32, 9, 32, 2, 65, 12, 106, 42, 2, 0, 34, 8, 148, 147, 34, 12, 32, 8, 148, 147, 32, 9, 32, 7, 148, 32, 10, 32, 5, 148, 146, 32, 4, 32, 8, 148, 147, 34, 13, 32, 7, 148, 147, 32, 10, 32, 8, 148, 32, 4, 32, 5, 148, 146, 32, 9, 32, 6, 148, 147, 34, 4, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 4, 148, 32, 12, 32, 7, 148, 147, 32, 11, 32, 6, 148, 147, 32, 13, 32, 8, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 13, 148, 32, 12, 32, 6, 148, 147, 32, 4, 32, 8, 148, 147, 32, 11, 32, 7, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 223, 2, 2, 1, 127, 7, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 56, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 7, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 7, 32, 2, 65, 8, 106, 42, 2, 0, 67, 0, 0, 0, 63, 148, 34, 8, 148, 32, 4, 32, 2, 65, 12, 106, 42, 2, 0, 67, 0, 0, 0, 63, 148, 34, 9, 148, 146, 32, 6, 32, 2, 42, 2, 4, 67, 0, 0, 0, 63, 148, 34, 10, 148, 147, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 5, 32, 10, 148, 32, 4, 32, 8, 148, 146, 32, 7, 32, 9, 148, 147, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 4, 32, 10, 148, 32, 6, 32, 9, 148, 146, 32, 5, 32, 8, 148, 147, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 7, 32, 10, 148, 140, 32, 6, 32, 8, 148, 147, 32, 5, 32, 9, 148, 147, 32, 1, 65, 32, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 222, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 65, 28, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 65, 32, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 65, 36, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 212, 2, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 32, 7, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 4, 127, 32, 2, 5, 32, 0, 65, 16, 106, 32, 7, 32, 3, 145, 34, 3, 149, 34, 7, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 3, 149, 34, 6, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 3, 149, 34, 5, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 3, 149, 34, 8, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 34, 4, 32, 7, 32, 8, 32, 1, 65, 20, 106, 42, 2, 0, 34, 9, 148, 32, 5, 32, 1, 65, 24, 106, 42, 2, 0, 34, 10, 148, 146, 32, 6, 32, 1, 65, 28, 106, 42, 2, 0, 34, 11, 148, 146, 32, 7, 32, 4, 148, 146, 34, 4, 148, 147, 32, 3, 149, 56, 2, 0, 32, 0, 65, 28, 106, 32, 11, 32, 6, 32, 4, 148, 147, 32, 3, 149, 56, 2, 0, 32, 0, 65, 24, 106, 32, 10, 32, 5, 32, 4, 148, 147, 32, 3, 149, 56, 2, 0, 32, 0, 65, 20, 106, 32, 9, 32, 8, 32, 4, 148, 147, 32, 3, 149, 56, 2, 0, 32, 1, 40, 2, 0, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 227, 2, 2, 1, 127, 10, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 33, 6, 32, 1, 65, 12, 106, 42, 2, 0, 33, 4, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 42, 2, 4, 33, 3, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 44, 106, 67, 0, 0, 128, 63, 32, 3, 32, 3, 32, 3, 146, 34, 7, 148, 147, 34, 9, 32, 5, 32, 5, 32, 5, 146, 34, 3, 148, 34, 10, 147, 56, 2, 0, 32, 0, 65, 40, 106, 32, 4, 32, 3, 148, 34, 8, 32, 7, 32, 6, 148, 34, 11, 147, 56, 2, 0, 32, 0, 65, 36, 106, 32, 7, 32, 4, 148, 34, 12, 32, 3, 32, 6, 148, 34, 3, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 8, 32, 11, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 9, 32, 4, 32, 4, 32, 4, 146, 34, 8, 148, 34, 4, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 32, 7, 148, 34, 5, 32, 6, 32, 8, 148, 34, 6, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 12, 32, 3, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 6, 146, 56, 2, 0, 32, 0, 65, 4, 106, 67, 0, 0, 128, 63, 32, 10, 147, 32, 4, 147, 56, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 172, 2, 2, 1, 127, 16, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 0, 65, 32, 106, 42, 2, 0, 34, 3, 148, 32, 0, 65, 16, 106, 42, 2, 0, 34, 4, 32, 0, 65, 28, 106, 42, 2, 0, 34, 5, 148, 147, 32, 0, 65, 36, 106, 42, 2, 0, 34, 6, 32, 0, 65, 56, 106, 42, 2, 0, 34, 7, 148, 32, 0, 65, 40, 106, 42, 2, 0, 34, 8, 32, 0, 65, 52, 106, 42, 2, 0, 34, 9, 148, 147, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 10, 32, 5, 148, 32, 2, 32, 0, 65, 24, 106, 42, 2, 0, 34, 11, 148, 147, 32, 6, 32, 0, 65, 64, 107, 42, 2, 0, 34, 12, 148, 32, 0, 65, 48, 106, 42, 2, 0, 34, 13, 32, 9, 148, 147, 148, 32, 0, 42, 2, 4, 34, 14, 32, 3, 148, 32, 4, 32, 0, 65, 20, 106, 42, 2, 0, 34, 15, 148, 147, 32, 8, 32, 0, 65, 60, 106, 42, 2, 0, 34, 16, 148, 32, 0, 65, 44, 106, 42, 2, 0, 34, 17, 32, 7, 148, 147, 148, 32, 14, 32, 11, 148, 32, 10, 32, 15, 148, 147, 32, 17, 32, 12, 148, 32, 13, 32, 16, 148, 147, 148, 32, 14, 32, 5, 148, 32, 2, 32, 15, 148, 147, 32, 8, 32, 12, 148, 32, 13, 32, 7, 148, 147, 148, 147, 146, 146, 32, 10, 32, 3, 148, 32, 4, 32, 11, 148, 147, 32, 6, 32, 16, 148, 32, 17, 32, 9, 148, 147, 148, 147, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 195, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 65, 28, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 65, 32, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 65, 36, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 187, 2, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 36, 106, 32, 1, 42, 2, 4, 34, 3, 32, 1, 65, 20, 106, 42, 2, 0, 34, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 148, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 5, 32, 1, 65, 28, 106, 42, 2, 0, 34, 7, 148, 32, 3, 32, 1, 65, 32, 106, 42, 2, 0, 34, 8, 148, 147, 56, 2, 0, 32, 0, 65, 28, 106, 32, 6, 32, 8, 148, 32, 4, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 9, 148, 32, 3, 32, 1, 65, 24, 106, 42, 2, 0, 34, 10, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 3, 32, 1, 65, 36, 106, 42, 2, 0, 34, 3, 148, 32, 9, 32, 7, 148, 147, 56, 2, 0, 32, 0, 65, 16, 106, 32, 10, 32, 7, 148, 32, 6, 32, 3, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 5, 32, 10, 148, 32, 9, 32, 4, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 9, 32, 8, 148, 32, 5, 32, 3, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 3, 148, 32, 10, 32, 8, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 199, 2, 2, 2, 127, 4, 125, 35, 0, 65, 16, 107, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 8, 106, 32, 2, 16, 153, 2, 32, 3, 40, 2, 12, 33, 4, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 34, 5, 32, 3, 40, 2, 8, 34, 2, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 2, 42, 2, 16, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 32, 2, 42, 2, 32, 148, 146, 32, 1, 65, 16, 106, 42, 2, 0, 34, 8, 32, 2, 42, 2, 48, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 2, 42, 2, 4, 148, 32, 6, 32, 2, 42, 2, 20, 148, 146, 32, 7, 32, 2, 42, 2, 36, 148, 146, 32, 8, 32, 2, 42, 2, 52, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 5, 32, 2, 42, 2, 8, 148, 32, 6, 32, 2, 42, 2, 24, 148, 146, 32, 7, 32, 2, 42, 2, 40, 148, 146, 32, 8, 32, 2, 42, 2, 56, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 5, 32, 2, 42, 2, 12, 148, 32, 6, 32, 2, 42, 2, 28, 148, 146, 32, 7, 32, 2, 42, 2, 44, 148, 146, 32, 8, 32, 2, 42, 2, 60, 148, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 165, 2, 2, 1, 127, 10, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 2, 65, 16, 106, 42, 2, 0, 34, 4, 32, 4, 146, 34, 8, 32, 2, 42, 2, 4, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 9, 148, 32, 2, 65, 8, 106, 42, 2, 0, 34, 6, 32, 1, 65, 4, 106, 42, 2, 0, 34, 10, 148, 147, 34, 11, 148, 146, 32, 4, 32, 2, 65, 12, 106, 42, 2, 0, 34, 7, 32, 10, 148, 32, 4, 32, 5, 148, 147, 34, 12, 148, 32, 6, 32, 6, 32, 5, 148, 32, 7, 32, 9, 148, 147, 34, 5, 148, 147, 34, 13, 32, 13, 146, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 9, 32, 8, 32, 12, 148, 146, 32, 7, 32, 5, 148, 32, 4, 32, 11, 148, 147, 34, 4, 32, 4, 146, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 10, 32, 8, 32, 5, 148, 146, 32, 6, 32, 11, 148, 32, 7, 32, 12, 148, 147, 34, 4, 32, 4, 146, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 184, 2, 1, 2, 127, 35, 0, 65, 64, 106, 34, 4, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 5, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 5, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 5, 65, 1, 106, 54, 2, 0, 32, 4, 32, 2, 65, 4, 106, 40, 2, 0, 54, 2, 8, 32, 4, 32, 2, 65, 8, 106, 40, 2, 0, 54, 2, 20, 32, 4, 32, 2, 65, 12, 106, 40, 2, 0, 54, 2, 32, 32, 4, 32, 3, 40, 2, 4, 54, 2, 12, 32, 4, 32, 3, 65, 8, 106, 40, 2, 0, 54, 2, 24, 32, 4, 32, 3, 65, 12, 106, 40, 2, 0, 54, 2, 36, 32, 4, 32, 1, 65, 4, 106, 42, 2, 0, 140, 56, 2, 16, 32, 4, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 28, 32, 4, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 40, 32, 0, 65, 4, 106, 34, 5, 32, 4, 65, 8, 106, 16, 36, 32, 4, 32, 0, 65, 12, 106, 41, 2, 0, 55, 3, 56, 32, 4, 32, 0, 65, 4, 106, 41, 2, 0, 55, 3, 48, 32, 5, 32, 4, 65, 48, 106, 16, 231, 1, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 4, 65, 64, 107, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 180, 2, 2, 1, 127, 7, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 34, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 34, 7, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 8, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 9, 56, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 10, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 4, 32, 2, 42, 2, 4, 34, 5, 148, 32, 6, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 148, 146, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 9, 32, 5, 148, 32, 7, 32, 4, 148, 146, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 10, 32, 5, 148, 32, 8, 32, 4, 148, 146, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 197, 2, 2, 2, 127, 4, 125, 35, 0, 65, 16, 107, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 8, 106, 32, 2, 16, 153, 2, 32, 3, 40, 2, 12, 33, 4, 32, 0, 65, 4, 106, 32, 3, 40, 2, 8, 34, 2, 42, 2, 48, 32, 1, 42, 2, 4, 34, 6, 32, 2, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 7, 32, 2, 42, 2, 16, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 8, 32, 2, 42, 2, 32, 148, 146, 146, 67, 0, 0, 128, 63, 32, 2, 42, 2, 60, 32, 6, 32, 2, 42, 2, 12, 148, 32, 7, 32, 2, 42, 2, 28, 148, 146, 32, 8, 32, 2, 42, 2, 44, 148, 146, 146, 34, 5, 32, 5, 139, 67, 23, 183, 209, 56, 93, 27, 34, 5, 149, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 42, 2, 52, 32, 6, 32, 2, 42, 2, 4, 148, 32, 7, 32, 2, 42, 2, 20, 148, 146, 32, 8, 32, 2, 42, 2, 36, 148, 146, 146, 32, 5, 149, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 42, 2, 56, 32, 6, 32, 2, 42, 2, 8, 148, 32, 7, 32, 2, 42, 2, 24, 148, 146, 32, 8, 32, 2, 42, 2, 40, 148, 146, 146, 32, 5, 149, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 185, 2, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 33, 6, 32, 1, 65, 8, 106, 42, 2, 0, 33, 7, 32, 1, 42, 2, 4, 33, 8, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 4, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 9, 32, 9, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 32, 5, 32, 3, 148, 33, 5, 32, 4, 32, 3, 148, 33, 10, 67, 0, 0, 0, 0, 33, 4, 2, 64, 32, 9, 32, 3, 148, 2, 125, 32, 8, 32, 8, 148, 32, 7, 32, 7, 148, 146, 32, 6, 32, 6, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 32, 6, 32, 3, 148, 11, 148, 32, 10, 32, 8, 32, 3, 148, 148, 32, 5, 32, 7, 32, 3, 148, 148, 146, 146, 34, 3, 67, 0, 0, 128, 63, 94, 13, 0, 67, 219, 15, 73, 64, 33, 4, 32, 3, 67, 0, 0, 128, 191, 93, 13, 0, 32, 3, 16, 69, 33, 4, 32, 1, 40, 2, 0, 33, 2, 11, 32, 1, 32, 2, 65, 127, 106, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 4, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 188, 2, 1, 18, 125, 32, 2, 42, 2, 8, 33, 3, 32, 2, 42, 2, 0, 33, 4, 32, 2, 42, 2, 4, 33, 5, 32, 2, 42, 2, 20, 33, 6, 32, 2, 42, 2, 12, 33, 7, 32, 2, 42, 2, 16, 33, 8, 32, 1, 42, 2, 24, 33, 9, 32, 1, 42, 2, 0, 33, 10, 32, 1, 42, 2, 12, 33, 11, 32, 1, 42, 2, 28, 33, 12, 32, 1, 42, 2, 4, 33, 13, 32, 1, 42, 2, 16, 33, 14, 32, 0, 32, 1, 42, 2, 8, 34, 15, 32, 2, 42, 2, 24, 34, 16, 148, 32, 1, 42, 2, 20, 34, 17, 32, 2, 42, 2, 28, 34, 18, 148, 146, 32, 1, 42, 2, 32, 34, 19, 32, 2, 42, 2, 32, 34, 20, 148, 146, 56, 2, 32, 32, 0, 32, 13, 32, 16, 148, 32, 14, 32, 18, 148, 146, 32, 12, 32, 20, 148, 146, 56, 2, 28, 32, 0, 32, 10, 32, 16, 148, 32, 11, 32, 18, 148, 146, 32, 9, 32, 20, 148, 146, 56, 2, 24, 32, 0, 32, 15, 32, 7, 148, 32, 17, 32, 8, 148, 146, 32, 19, 32, 6, 148, 146, 56, 2, 20, 32, 0, 32, 13, 32, 7, 148, 32, 14, 32, 8, 148, 146, 32, 12, 32, 6, 148, 146, 56, 2, 16, 32, 0, 32, 10, 32, 7, 148, 32, 11, 32, 8, 148, 146, 32, 9, 32, 6, 148, 146, 56, 2, 12, 32, 0, 32, 15, 32, 4, 148, 32, 17, 32, 5, 148, 146, 32, 19, 32, 3, 148, 146, 56, 2, 8, 32, 0, 32, 13, 32, 4, 148, 32, 14, 32, 5, 148, 146, 32, 12, 32, 3, 148, 146, 56, 2, 4, 32, 0, 32, 10, 32, 4, 148, 32, 11, 32, 5, 148, 146, 32, 9, 32, 3, 148, 146, 56, 2, 0, 11, 201, 2, 1, 4, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 28, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 32, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 12, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 24, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 40, 2, 0, 54, 2, 0, 12, 1, 11, 32, 0, 65, 8, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 16, 106, 34, 4, 40, 2, 0, 54, 2, 0, 32, 0, 65, 28, 106, 34, 2, 40, 2, 0, 33, 5, 32, 2, 32, 0, 65, 12, 106, 34, 2, 40, 2, 0, 54, 2, 0, 32, 4, 32, 3, 54, 2, 0, 32, 2, 32, 5, 54, 2, 0, 32, 0, 65, 32, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 24, 106, 34, 4, 40, 2, 0, 54, 2, 0, 32, 4, 32, 3, 54, 2, 0, 11, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 170, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 65, 28, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 65, 32, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 164, 2, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 69, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 191, 2, 1, 4, 127, 32, 0, 66, 0, 55, 2, 16, 32, 0, 2, 127, 65, 0, 32, 1, 65, 8, 118, 34, 3, 69, 13, 0, 26, 65, 31, 32, 1, 65, 255, 255, 255, 7, 75, 13, 0, 26, 32, 1, 65, 38, 32, 3, 103, 34, 2, 107, 65, 31, 113, 118, 65, 1, 113, 65, 31, 32, 2, 107, 65, 1, 116, 114, 11, 34, 2, 54, 2, 28, 32, 2, 65, 2, 116, 65, 172, 134, 192, 0, 106, 33, 3, 2, 64, 2, 64, 2, 64, 2, 64, 65, 160, 132, 192, 0, 40, 2, 0, 34, 4, 65, 1, 32, 2, 65, 31, 113, 116, 34, 5, 113, 4, 64, 32, 3, 40, 2, 0, 34, 4, 40, 2, 4, 65, 120, 113, 32, 1, 71, 13, 1, 32, 4, 33, 2, 12, 2, 11, 65, 160, 132, 192, 0, 32, 4, 32, 5, 114, 54, 2, 0, 32, 3, 32, 0, 54, 2, 0, 32, 0, 32, 3, 54, 2, 24, 12, 3, 11, 32, 1, 65, 0, 65, 25, 32, 2, 65, 1, 118, 107, 65, 31, 113, 32, 2, 65, 31, 70, 27, 116, 33, 3, 3, 64, 32, 4, 32, 3, 65, 29, 118, 65, 4, 113, 106, 65, 16, 106, 34, 5, 40, 2, 0, 34, 2, 69, 13, 2, 32, 3, 65, 1, 116, 33, 3, 32, 2, 33, 4, 32, 2, 40, 2, 4, 65, 120, 113, 32, 1, 71, 13, 0, 11, 11, 32, 2, 40, 2, 8, 34, 3, 32, 0, 54, 2, 12, 32, 2, 32, 0, 54, 2, 8, 32, 0, 65, 0, 54, 2, 24, 32, 0, 32, 2, 54, 2, 12, 32, 0, 32, 3, 54, 2, 8, 15, 11, 32, 5, 32, 0, 54, 2, 0, 32, 0, 32, 4, 54, 2, 24, 11, 32, 0, 32, 0, 54, 2, 12, 32, 0, 32, 0, 54, 2, 8, 11, 198, 2, 1, 5, 127, 32, 0, 40, 2, 24, 33, 3, 2, 64, 2, 64, 2, 64, 32, 0, 32, 0, 40, 2, 12, 34, 1, 71, 4, 64, 32, 0, 40, 2, 8, 34, 2, 32, 1, 54, 2, 12, 32, 1, 32, 2, 54, 2, 8, 32, 3, 13, 1, 12, 2, 11, 32, 0, 65, 20, 65, 16, 32, 0, 65, 20, 106, 34, 1, 40, 2, 0, 34, 4, 27, 106, 40, 2, 0, 34, 2, 4, 64, 32, 1, 32, 0, 65, 16, 106, 32, 4, 27, 33, 4, 3, 64, 2, 64, 32, 4, 33, 5, 32, 2, 34, 1, 65, 20, 106, 34, 4, 40, 2, 0, 34, 2, 4, 64, 32, 2, 13, 2, 12, 1, 11, 32, 1, 65, 16, 106, 33, 4, 32, 1, 40, 2, 16, 34, 2, 13, 1, 11, 11, 32, 5, 65, 0, 54, 2, 0, 32, 3, 13, 1, 12, 2, 11, 65, 0, 33, 1, 32, 3, 69, 13, 1, 11, 2, 64, 32, 0, 32, 0, 40, 2, 28, 65, 2, 116, 65, 172, 134, 192, 0, 106, 34, 2, 40, 2, 0, 71, 4, 64, 32, 3, 65, 16, 65, 20, 32, 3, 40, 2, 16, 32, 0, 70, 27, 106, 32, 1, 54, 2, 0, 32, 1, 13, 1, 12, 2, 11, 32, 2, 32, 1, 54, 2, 0, 32, 1, 69, 13, 2, 11, 32, 1, 32, 3, 54, 2, 24, 32, 0, 40, 2, 16, 34, 2, 4, 64, 32, 1, 32, 2, 54, 2, 16, 32, 2, 32, 1, 54, 2, 24, 11, 32, 0, 65, 20, 106, 40, 2, 0, 34, 2, 69, 13, 0, 32, 1, 65, 20, 106, 32, 2, 54, 2, 0, 32, 2, 32, 1, 54, 2, 24, 11, 15, 11, 65, 160, 132, 192, 0, 65, 160, 132, 192, 0, 40, 2, 0, 65, 126, 32, 0, 65, 28, 106, 40, 2, 0, 119, 113, 54, 2, 0, 11, 228, 2, 2, 2, 127, 2, 125, 2, 64, 2, 125, 2, 64, 2, 64, 32, 0, 188, 34, 2, 65, 255, 255, 255, 255, 7, 113, 34, 1, 65, 128, 128, 128, 252, 3, 79, 4, 64, 32, 1, 65, 128, 128, 128, 252, 3, 71, 13, 1, 67, 218, 15, 73, 64, 67, 0, 0, 0, 0, 32, 2, 65, 0, 72, 27, 15, 11, 32, 1, 65, 128, 128, 128, 248, 3, 79, 13, 1, 67, 218, 15, 201, 63, 32, 1, 65, 129, 128, 128, 148, 3, 73, 13, 2, 26, 67, 104, 33, 162, 51, 32, 0, 32, 0, 148, 34, 3, 32, 3, 32, 3, 67, 107, 211, 13, 188, 148, 67, 186, 19, 47, 189, 146, 148, 67, 117, 170, 42, 62, 146, 148, 32, 3, 67, 174, 229, 52, 191, 148, 67, 0, 0, 128, 63, 146, 149, 32, 0, 148, 147, 32, 0, 147, 67, 218, 15, 201, 63, 146, 15, 11, 67, 0, 0, 0, 0, 32, 0, 32, 0, 147, 149, 15, 11, 32, 2, 65, 0, 72, 13, 1, 67, 0, 0, 128, 63, 32, 0, 147, 67, 0, 0, 0, 63, 148, 34, 0, 145, 34, 4, 32, 0, 32, 0, 32, 0, 67, 107, 211, 13, 188, 148, 67, 186, 19, 47, 189, 146, 148, 67, 117, 170, 42, 62, 146, 148, 32, 0, 67, 174, 229, 52, 191, 148, 67, 0, 0, 128, 63, 146, 149, 148, 32, 0, 32, 4, 188, 65, 128, 96, 113, 190, 34, 3, 32, 3, 148, 147, 32, 4, 32, 3, 146, 149, 146, 32, 3, 146, 34, 0, 32, 0, 146, 11, 15, 11, 67, 218, 15, 201, 63, 32, 0, 67, 0, 0, 128, 63, 146, 67, 0, 0, 0, 63, 148, 34, 0, 145, 34, 3, 32, 3, 32, 0, 32, 0, 32, 0, 67, 107, 211, 13, 188, 148, 67, 186, 19, 47, 189, 146, 148, 67, 117, 170, 42, 62, 146, 148, 32, 0, 67, 174, 229, 52, 191, 148, 67, 0, 0, 128, 63, 146, 149, 148, 67, 104, 33, 162, 179, 146, 146, 147, 34, 0, 32, 0, 146, 11, 165, 2, 2, 1, 127, 12, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 42, 2, 4, 34, 7, 32, 7, 146, 34, 4, 32, 1, 65, 12, 106, 42, 2, 0, 34, 3, 148, 34, 9, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 146, 34, 8, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 148, 34, 10, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 5, 32, 4, 148, 34, 11, 32, 6, 32, 3, 32, 3, 146, 34, 12, 148, 34, 13, 147, 56, 2, 0, 32, 0, 65, 32, 106, 32, 3, 32, 8, 148, 34, 14, 32, 4, 32, 6, 148, 34, 6, 147, 56, 2, 0, 32, 0, 65, 20, 106, 67, 0, 0, 128, 63, 32, 7, 32, 4, 148, 147, 34, 4, 32, 3, 32, 12, 148, 34, 3, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 11, 32, 13, 146, 56, 2, 0, 32, 0, 65, 36, 106, 32, 4, 32, 5, 32, 8, 148, 34, 5, 147, 56, 2, 0, 32, 0, 65, 24, 106, 32, 14, 32, 6, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 9, 32, 10, 147, 56, 2, 0, 32, 0, 65, 4, 106, 67, 0, 0, 128, 63, 32, 5, 147, 32, 3, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 152, 2, 1, 2, 127, 35, 0, 65, 32, 107, 34, 6, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 7, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 7, 65, 1, 106, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 7, 65, 1, 106, 54, 2, 0, 32, 4, 69, 13, 0, 32, 4, 32, 7, 65, 1, 106, 54, 2, 0, 32, 6, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 8, 32, 6, 66, 0, 55, 3, 0, 32, 6, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 24, 32, 6, 66, 0, 55, 3, 16, 32, 6, 32, 1, 65, 4, 106, 32, 4, 65, 4, 106, 32, 5, 16, 86, 32, 6, 65, 16, 106, 32, 2, 65, 4, 106, 32, 3, 65, 4, 106, 32, 5, 16, 86, 32, 0, 65, 4, 106, 32, 6, 32, 6, 65, 16, 106, 32, 5, 32, 5, 146, 67, 0, 0, 128, 63, 32, 5, 147, 148, 16, 86, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 6, 65, 32, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 150, 2, 2, 1, 127, 7, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 33, 5, 32, 2, 16, 5, 33, 4, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 34, 6, 32, 2, 16, 6, 34, 2, 148, 32, 4, 32, 5, 148, 147, 56, 2, 0, 32, 0, 65, 20, 106, 32, 2, 32, 1, 65, 20, 106, 42, 2, 0, 34, 7, 148, 32, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 8, 148, 147, 56, 2, 0, 32, 0, 65, 16, 106, 32, 2, 32, 1, 65, 16, 106, 42, 2, 0, 34, 9, 148, 32, 4, 32, 1, 42, 2, 4, 34, 10, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 5, 148, 32, 4, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 8, 148, 32, 4, 32, 7, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 2, 32, 10, 148, 32, 4, 32, 9, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 140, 2, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 42, 2, 4, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 12, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 16, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 140, 2, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 2, 42, 2, 4, 34, 5, 32, 5, 32, 1, 65, 4, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 16, 106, 32, 2, 65, 16, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 16, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 138, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 253, 1, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 16, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 20, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 24, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 28, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 32, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 36, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 40, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 44, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 48, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 52, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 56, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 60, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 64, 107, 42, 2, 0, 34, 2, 32, 2, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 133, 2, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 3, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 32, 3, 32, 3, 148, 146, 34, 3, 149, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 140, 32, 3, 149, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 3, 149, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 134, 2, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 2, 42, 2, 4, 34, 4, 32, 1, 65, 4, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 1, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 1, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 4, 32, 1, 65, 20, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 4, 32, 1, 65, 24, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 40, 2, 0, 54, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 141, 2, 1, 6, 125, 2, 127, 2, 64, 32, 0, 32, 1, 71, 4, 64, 32, 1, 42, 2, 8, 33, 3, 32, 1, 42, 2, 4, 33, 5, 32, 1, 42, 2, 0, 33, 6, 32, 0, 32, 2, 70, 13, 1, 32, 0, 32, 3, 32, 2, 42, 2, 0, 34, 7, 148, 32, 6, 32, 2, 42, 2, 8, 34, 4, 148, 147, 56, 2, 4, 32, 0, 32, 5, 32, 4, 148, 32, 3, 32, 2, 42, 2, 4, 34, 4, 148, 147, 56, 2, 0, 32, 6, 32, 4, 148, 32, 5, 32, 7, 148, 147, 33, 3, 32, 0, 65, 8, 106, 12, 2, 11, 32, 0, 42, 2, 4, 33, 3, 32, 0, 32, 0, 42, 2, 8, 34, 5, 32, 2, 42, 2, 0, 34, 6, 148, 32, 0, 42, 2, 0, 34, 7, 32, 2, 42, 2, 8, 34, 4, 148, 147, 56, 2, 4, 32, 0, 32, 3, 32, 4, 148, 32, 5, 32, 2, 42, 2, 4, 34, 4, 148, 147, 56, 2, 0, 32, 7, 32, 4, 148, 32, 3, 32, 6, 148, 147, 33, 3, 32, 0, 65, 8, 106, 12, 1, 11, 32, 0, 42, 2, 4, 33, 7, 32, 0, 32, 3, 32, 0, 42, 2, 0, 34, 4, 148, 32, 6, 32, 0, 42, 2, 8, 34, 8, 148, 147, 56, 2, 4, 32, 0, 32, 5, 32, 8, 148, 32, 3, 32, 7, 148, 147, 56, 2, 0, 32, 6, 32, 7, 148, 32, 5, 32, 4, 148, 147, 33, 3, 32, 0, 65, 8, 106, 11, 32, 3, 56, 2, 0, 11, 130, 2, 2, 1, 127, 7, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 32, 1, 42, 2, 4, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 148, 147, 34, 3, 139, 67, 23, 183, 209, 56, 93, 4, 127, 32, 2, 5, 32, 1, 65, 24, 106, 42, 2, 0, 33, 8, 32, 1, 65, 20, 106, 42, 2, 0, 33, 9, 32, 0, 65, 16, 106, 32, 4, 67, 0, 0, 128, 63, 32, 3, 149, 34, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 3, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 3, 32, 6, 32, 9, 148, 32, 4, 32, 8, 148, 147, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 3, 32, 7, 32, 8, 148, 32, 5, 32, 9, 148, 147, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 7, 32, 3, 148, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 6, 32, 3, 148, 140, 56, 2, 0, 32, 1, 40, 2, 0, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 244, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 32, 1, 65, 20, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 32, 1, 65, 24, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 32, 1, 65, 28, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 32, 1, 65, 32, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 36, 106, 42, 2, 0, 32, 1, 65, 36, 106, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 244, 1, 2, 1, 127, 9, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 28, 106, 42, 2, 0, 34, 3, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 32, 106, 42, 2, 0, 34, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 148, 147, 32, 1, 65, 20, 106, 42, 2, 0, 34, 8, 32, 1, 65, 8, 106, 42, 2, 0, 34, 9, 148, 147, 32, 1, 65, 24, 106, 42, 2, 0, 34, 10, 32, 1, 42, 2, 4, 34, 11, 148, 146, 34, 4, 32, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 10, 32, 5, 148, 32, 6, 32, 9, 148, 147, 32, 3, 32, 11, 148, 147, 32, 8, 32, 7, 148, 146, 34, 4, 32, 4, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 8, 32, 5, 148, 32, 6, 32, 11, 148, 147, 32, 10, 32, 7, 148, 147, 32, 3, 32, 9, 148, 146, 34, 3, 32, 3, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 248, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 65, 20, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 65, 24, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 134, 2, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 40, 106, 32, 1, 65, 40, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 44, 106, 32, 1, 65, 44, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 48, 106, 32, 1, 65, 48, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 52, 106, 32, 1, 65, 52, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 56, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 60, 106, 32, 1, 65, 60, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 64, 107, 32, 1, 65, 64, 107, 40, 2, 0, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 154, 2, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 67, 0, 0, 0, 63, 148, 16, 10, 33, 1, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 0, 54, 2, 0, 32, 0, 65, 56, 106, 65, 0, 54, 2, 0, 32, 0, 65, 48, 106, 66, 128, 128, 128, 252, 11, 55, 2, 0, 32, 0, 65, 24, 106, 67, 0, 0, 128, 63, 32, 1, 149, 34, 1, 56, 2, 0, 32, 0, 32, 1, 32, 2, 149, 56, 2, 4, 2, 125, 2, 64, 32, 4, 4, 64, 32, 5, 67, 0, 0, 128, 127, 91, 32, 5, 67, 0, 0, 128, 255, 91, 114, 13, 1, 32, 0, 65, 44, 106, 32, 5, 32, 3, 146, 67, 0, 0, 128, 63, 32, 3, 32, 5, 147, 149, 34, 1, 148, 56, 2, 0, 32, 5, 32, 5, 146, 32, 3, 148, 32, 1, 148, 12, 2, 11, 32, 0, 65, 44, 106, 65, 128, 128, 128, 252, 123, 54, 2, 0, 32, 3, 67, 0, 0, 0, 192, 148, 12, 1, 11, 32, 0, 65, 44, 106, 65, 128, 128, 128, 252, 123, 54, 2, 0, 32, 3, 67, 0, 0, 0, 192, 148, 11, 33, 5, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 60, 106, 32, 5, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 137, 2, 1, 11, 125, 2, 125, 2, 127, 67, 0, 0, 0, 0, 32, 1, 42, 2, 0, 34, 10, 32, 2, 42, 2, 0, 34, 6, 148, 32, 1, 42, 2, 4, 34, 11, 32, 2, 42, 2, 4, 34, 7, 148, 146, 32, 1, 42, 2, 8, 34, 12, 32, 2, 42, 2, 8, 34, 8, 148, 146, 32, 1, 42, 2, 12, 34, 13, 32, 2, 42, 2, 12, 34, 9, 148, 146, 34, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 4, 67, 0, 0, 0, 0, 93, 65, 1, 115, 69, 4, 64, 32, 9, 140, 33, 9, 32, 8, 140, 33, 8, 32, 7, 140, 33, 7, 32, 6, 140, 33, 6, 32, 4, 140, 33, 4, 11, 67, 0, 0, 128, 63, 32, 4, 147, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 11, 4, 64, 32, 4, 16, 69, 34, 5, 32, 3, 148, 16, 5, 32, 5, 16, 5, 34, 14, 149, 33, 4, 32, 5, 67, 0, 0, 128, 63, 32, 3, 147, 148, 16, 5, 32, 14, 149, 12, 1, 11, 67, 0, 0, 128, 63, 32, 3, 34, 4, 147, 11, 33, 5, 32, 0, 32, 9, 32, 4, 148, 32, 13, 32, 5, 148, 146, 56, 2, 12, 32, 0, 32, 8, 32, 4, 148, 32, 12, 32, 5, 148, 146, 56, 2, 8, 32, 0, 32, 7, 32, 4, 148, 32, 11, 32, 5, 148, 146, 56, 2, 4, 32, 0, 32, 6, 32, 4, 148, 32, 10, 32, 5, 148, 146, 56, 2, 0, 11, 244, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 56, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 7, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 4, 32, 2, 42, 2, 4, 34, 8, 148, 32, 5, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 148, 146, 146, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 7, 32, 8, 148, 32, 6, 32, 4, 148, 146, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 234, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 2, 42, 2, 4, 34, 5, 32, 1, 65, 4, 106, 42, 2, 0, 32, 5, 147, 146, 56, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 33, 5, 32, 1, 65, 12, 106, 42, 2, 0, 33, 6, 32, 3, 16, 6, 33, 8, 32, 2, 65, 8, 106, 42, 2, 0, 33, 9, 32, 1, 65, 8, 106, 42, 2, 0, 33, 7, 32, 0, 65, 12, 106, 32, 5, 32, 3, 16, 5, 34, 3, 32, 7, 32, 9, 147, 34, 7, 148, 32, 8, 32, 6, 32, 5, 147, 34, 6, 148, 146, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 9, 32, 8, 32, 7, 148, 32, 3, 32, 6, 148, 147, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 234, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 8, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 5, 32, 1, 65, 8, 106, 42, 2, 0, 32, 5, 147, 146, 56, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 33, 5, 32, 1, 65, 12, 106, 42, 2, 0, 33, 6, 32, 3, 16, 6, 33, 8, 32, 1, 65, 4, 106, 42, 2, 0, 33, 7, 32, 2, 42, 2, 4, 33, 9, 32, 0, 65, 12, 106, 32, 5, 32, 8, 32, 6, 32, 5, 147, 34, 6, 148, 32, 3, 16, 5, 34, 3, 32, 7, 32, 9, 147, 34, 7, 148, 147, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 9, 32, 8, 32, 7, 148, 32, 3, 32, 6, 148, 146, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 234, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 32, 2, 65, 12, 106, 42, 2, 0, 34, 5, 32, 1, 65, 12, 106, 42, 2, 0, 32, 5, 147, 146, 56, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 65, 8, 106, 42, 2, 0, 33, 6, 32, 3, 16, 6, 33, 8, 32, 1, 65, 4, 106, 42, 2, 0, 33, 7, 32, 2, 42, 2, 4, 33, 9, 32, 0, 65, 8, 106, 32, 5, 32, 3, 16, 5, 34, 3, 32, 7, 32, 9, 147, 34, 7, 148, 32, 8, 32, 6, 32, 5, 147, 34, 6, 148, 146, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 9, 32, 8, 32, 7, 148, 32, 3, 32, 6, 148, 147, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 242, 1, 2, 1, 127, 6, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 4, 32, 1, 42, 2, 4, 33, 5, 32, 0, 42, 2, 4, 34, 7, 32, 7, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 8, 32, 8, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 2, 64, 32, 7, 32, 5, 148, 32, 8, 32, 4, 148, 146, 32, 3, 148, 32, 5, 32, 5, 148, 32, 4, 32, 4, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 4, 125, 32, 3, 5, 67, 0, 0, 128, 63, 32, 3, 145, 149, 11, 148, 34, 4, 67, 0, 0, 128, 63, 94, 13, 0, 67, 219, 15, 73, 64, 33, 6, 32, 4, 67, 0, 0, 128, 191, 93, 13, 0, 32, 4, 16, 69, 33, 6, 32, 1, 40, 2, 0, 33, 2, 11, 32, 1, 32, 2, 65, 127, 106, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 6, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 232, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 5, 32, 2, 42, 2, 4, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 65, 8, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 2, 65, 12, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 32, 2, 65, 16, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 249, 1, 2, 2, 127, 3, 125, 35, 0, 65, 16, 107, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 8, 106, 32, 2, 16, 153, 2, 32, 3, 40, 2, 12, 33, 4, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 34, 5, 32, 3, 40, 2, 8, 34, 2, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 2, 42, 2, 12, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 32, 2, 42, 2, 24, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 2, 42, 2, 4, 148, 32, 6, 32, 2, 42, 2, 16, 148, 146, 32, 7, 32, 2, 42, 2, 28, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 5, 32, 2, 42, 2, 8, 148, 32, 6, 32, 2, 42, 2, 20, 148, 146, 32, 7, 32, 2, 42, 2, 32, 148, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 241, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 65, 36, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 225, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 32, 1, 65, 20, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 32, 1, 65, 24, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 28, 106, 42, 2, 0, 32, 1, 65, 28, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 32, 106, 42, 2, 0, 32, 1, 65, 32, 106, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 226, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 42, 2, 4, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 12, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 226, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 2, 42, 2, 4, 34, 5, 32, 5, 32, 1, 65, 4, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 65, 12, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 12, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 236, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 2, 16, 5, 33, 4, 32, 1, 42, 2, 4, 33, 5, 32, 2, 16, 6, 33, 2, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 67, 0, 0, 0, 0, 32, 2, 32, 2, 139, 67, 23, 183, 209, 56, 93, 27, 34, 2, 148, 32, 5, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 4, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 32, 2, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 8, 32, 4, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 8, 32, 2, 148, 32, 7, 32, 4, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 2, 148, 32, 6, 32, 4, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 236, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 2, 16, 5, 33, 4, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 2, 16, 6, 33, 2, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 67, 0, 0, 0, 0, 32, 2, 32, 2, 139, 67, 23, 183, 209, 56, 93, 27, 34, 2, 148, 32, 5, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 4, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 32, 2, 148, 32, 1, 42, 2, 4, 34, 8, 32, 4, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 2, 148, 32, 6, 32, 4, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 8, 32, 2, 148, 32, 7, 32, 4, 148, 147, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 236, 1, 2, 1, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 67, 0, 0, 0, 63, 148, 34, 2, 16, 5, 33, 4, 32, 1, 65, 12, 106, 42, 2, 0, 33, 5, 32, 2, 16, 6, 33, 2, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 67, 0, 0, 0, 0, 32, 2, 32, 2, 139, 67, 23, 183, 209, 56, 93, 27, 34, 2, 148, 32, 5, 67, 0, 0, 0, 0, 32, 4, 32, 4, 139, 67, 23, 183, 209, 56, 93, 27, 34, 4, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 5, 32, 2, 148, 32, 6, 32, 4, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 148, 32, 1, 42, 2, 4, 34, 6, 32, 4, 148, 147, 56, 2, 0, 32, 0, 65, 4, 106, 32, 6, 32, 2, 148, 32, 5, 32, 4, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 216, 1, 2, 2, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 42, 2, 4, 34, 4, 32, 1, 42, 2, 4, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 65, 1, 115, 69, 4, 64, 32, 0, 65, 8, 106, 42, 2, 0, 34, 4, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 147, 139, 32, 5, 139, 34, 5, 32, 5, 32, 4, 139, 34, 6, 32, 6, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 34, 4, 67, 0, 0, 128, 63, 32, 4, 67, 0, 0, 128, 63, 94, 27, 67, 23, 183, 209, 56, 148, 95, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 222, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 210, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 244, 1, 1, 11, 125, 32, 0, 65, 0, 54, 2, 44, 32, 0, 65, 0, 54, 2, 28, 32, 0, 65, 0, 54, 2, 12, 32, 0, 32, 2, 40, 2, 0, 54, 2, 48, 32, 0, 32, 1, 42, 2, 4, 34, 4, 32, 1, 42, 2, 8, 34, 8, 32, 8, 146, 34, 5, 148, 34, 7, 32, 1, 42, 2, 0, 34, 3, 32, 3, 146, 34, 10, 32, 1, 42, 2, 12, 34, 6, 148, 34, 11, 147, 56, 2, 36, 32, 0, 32, 3, 32, 5, 148, 34, 12, 32, 6, 32, 4, 32, 4, 146, 34, 9, 148, 34, 13, 146, 56, 2, 32, 32, 0, 32, 7, 32, 11, 146, 56, 2, 24, 32, 0, 32, 3, 32, 9, 148, 34, 7, 32, 6, 32, 5, 148, 34, 6, 147, 56, 2, 16, 32, 0, 32, 12, 32, 13, 147, 56, 2, 8, 32, 0, 32, 7, 32, 6, 146, 56, 2, 4, 32, 0, 67, 0, 0, 128, 63, 32, 3, 32, 10, 148, 34, 3, 32, 4, 32, 9, 148, 34, 4, 146, 147, 56, 2, 40, 32, 0, 67, 0, 0, 128, 63, 32, 3, 32, 8, 32, 5, 148, 34, 5, 146, 147, 56, 2, 20, 32, 0, 67, 0, 0, 128, 63, 32, 4, 32, 5, 146, 147, 56, 2, 0, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 60, 32, 0, 32, 2, 41, 2, 4, 55, 2, 52, 11, 229, 1, 1, 3, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 0, 54, 2, 0, 32, 0, 65, 56, 106, 65, 0, 54, 2, 0, 32, 0, 65, 48, 106, 66, 128, 128, 128, 252, 11, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 67, 0, 0, 128, 63, 32, 2, 32, 1, 147, 149, 34, 8, 32, 5, 32, 5, 146, 34, 9, 148, 56, 2, 4, 32, 0, 65, 60, 106, 32, 5, 32, 6, 148, 34, 7, 32, 7, 146, 67, 0, 0, 128, 63, 32, 5, 32, 6, 147, 149, 34, 7, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 5, 32, 6, 146, 32, 7, 148, 56, 2, 0, 32, 0, 65, 40, 106, 32, 3, 32, 4, 146, 67, 0, 0, 128, 63, 32, 4, 32, 3, 147, 149, 34, 5, 148, 56, 2, 0, 32, 0, 65, 36, 106, 32, 1, 32, 2, 146, 32, 8, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 9, 32, 5, 148, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 208, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 1, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 42, 2, 4, 34, 4, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 1, 65, 4, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 130, 2, 0, 32, 0, 32, 1, 42, 2, 0, 32, 2, 42, 2, 0, 147, 56, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 147, 56, 2, 4, 32, 0, 32, 1, 42, 2, 8, 32, 2, 42, 2, 8, 147, 56, 2, 8, 32, 0, 32, 1, 42, 2, 12, 32, 2, 42, 2, 12, 147, 56, 2, 12, 32, 0, 32, 1, 42, 2, 16, 32, 2, 42, 2, 16, 147, 56, 2, 16, 32, 0, 32, 1, 42, 2, 20, 32, 2, 42, 2, 20, 147, 56, 2, 20, 32, 0, 32, 1, 42, 2, 24, 32, 2, 42, 2, 24, 147, 56, 2, 24, 32, 0, 32, 1, 42, 2, 28, 32, 2, 42, 2, 28, 147, 56, 2, 28, 32, 0, 32, 1, 42, 2, 32, 32, 2, 42, 2, 32, 147, 56, 2, 32, 32, 0, 32, 1, 42, 2, 36, 32, 2, 42, 2, 36, 147, 56, 2, 36, 32, 0, 32, 1, 42, 2, 40, 32, 2, 42, 2, 40, 147, 56, 2, 40, 32, 0, 32, 1, 42, 2, 44, 32, 2, 42, 2, 44, 147, 56, 2, 44, 32, 0, 32, 1, 42, 2, 48, 32, 2, 42, 2, 48, 147, 56, 2, 48, 32, 0, 32, 1, 42, 2, 52, 32, 2, 42, 2, 52, 147, 56, 2, 52, 32, 0, 32, 1, 42, 2, 56, 32, 2, 42, 2, 56, 147, 56, 2, 56, 32, 0, 32, 1, 42, 2, 60, 32, 2, 42, 2, 60, 147, 56, 2, 60, 11, 208, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 2, 16, 5, 33, 4, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 32, 2, 16, 6, 34, 2, 148, 32, 5, 32, 4, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 148, 32, 4, 32, 1, 42, 2, 4, 34, 8, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 5, 148, 32, 4, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 2, 32, 8, 148, 32, 4, 32, 7, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 199, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 34, 5, 32, 2, 42, 2, 4, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 65, 8, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 5, 32, 2, 65, 12, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 33, 7, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 3, 16, 6, 33, 8, 32, 2, 42, 2, 4, 33, 9, 32, 1, 42, 2, 4, 33, 6, 32, 0, 65, 8, 106, 32, 7, 32, 3, 16, 5, 34, 3, 32, 6, 32, 9, 147, 34, 6, 148, 32, 8, 32, 5, 32, 7, 147, 34, 5, 148, 146, 146, 56, 2, 0, 32, 0, 32, 9, 32, 8, 32, 6, 148, 32, 3, 32, 5, 148, 147, 146, 56, 2, 4, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 194, 1, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 42, 2, 0, 33, 4, 32, 0, 65, 12, 106, 42, 2, 0, 33, 5, 32, 0, 65, 4, 106, 42, 2, 0, 33, 3, 32, 0, 65, 8, 106, 42, 2, 0, 33, 6, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 33, 7, 32, 1, 65, 12, 106, 42, 2, 0, 33, 8, 32, 1, 65, 8, 106, 42, 2, 0, 33, 9, 32, 1, 42, 2, 4, 33, 10, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 10, 32, 3, 147, 34, 3, 32, 3, 148, 32, 9, 32, 6, 147, 34, 3, 32, 3, 148, 146, 32, 8, 32, 5, 147, 34, 5, 32, 5, 148, 146, 32, 7, 32, 4, 147, 34, 4, 32, 4, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 215, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 16, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 0, 12, 1, 11, 32, 0, 65, 16, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 4, 106, 34, 2, 40, 2, 0, 54, 2, 0, 32, 2, 32, 3, 54, 2, 0, 32, 0, 65, 12, 106, 34, 2, 32, 2, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 8, 106, 34, 2, 32, 2, 42, 2, 0, 140, 56, 2, 0, 11, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 147, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 149, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 16, 106, 42, 2, 0, 149, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 193, 1, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 42, 2, 0, 33, 4, 32, 0, 65, 12, 106, 42, 2, 0, 33, 5, 32, 0, 65, 4, 106, 42, 2, 0, 33, 3, 32, 0, 65, 8, 106, 42, 2, 0, 33, 6, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 33, 7, 32, 1, 65, 12, 106, 42, 2, 0, 33, 8, 32, 1, 65, 8, 106, 42, 2, 0, 33, 9, 32, 1, 42, 2, 4, 33, 10, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 10, 32, 3, 147, 34, 3, 32, 3, 148, 32, 9, 32, 6, 147, 34, 3, 32, 3, 148, 146, 32, 8, 32, 5, 147, 34, 5, 32, 5, 148, 146, 32, 7, 32, 4, 147, 34, 4, 32, 4, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 222, 1, 1, 6, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 3, 64, 16, 1, 34, 3, 32, 3, 146, 67, 0, 0, 128, 191, 146, 34, 3, 32, 3, 148, 16, 1, 34, 4, 32, 4, 146, 67, 0, 0, 128, 191, 146, 34, 4, 32, 4, 148, 146, 34, 7, 67, 0, 0, 128, 63, 94, 13, 0, 11, 3, 64, 16, 1, 34, 5, 32, 5, 146, 67, 0, 0, 128, 191, 146, 34, 5, 32, 5, 148, 16, 1, 34, 6, 32, 6, 146, 67, 0, 0, 128, 191, 146, 34, 6, 32, 6, 148, 146, 34, 8, 67, 0, 0, 128, 63, 94, 13, 0, 11, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 2, 67, 0, 0, 128, 63, 32, 1, 27, 34, 2, 32, 4, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 2, 32, 3, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 2, 32, 6, 148, 67, 0, 0, 128, 63, 32, 7, 147, 32, 8, 149, 145, 34, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 5, 148, 32, 3, 148, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 205, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 32, 1, 65, 16, 106, 42, 2, 0, 34, 7, 32, 7, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 32, 0, 65, 16, 106, 32, 7, 32, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 3, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 3, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 222, 1, 1, 2, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 48, 106, 65, 0, 54, 2, 0, 32, 0, 67, 0, 0, 128, 63, 32, 1, 32, 2, 147, 149, 34, 7, 67, 0, 0, 0, 192, 148, 56, 2, 4, 32, 0, 65, 24, 106, 67, 0, 0, 128, 63, 32, 3, 32, 4, 147, 149, 34, 8, 67, 0, 0, 0, 192, 148, 56, 2, 0, 32, 0, 65, 60, 106, 32, 5, 32, 6, 146, 67, 0, 0, 128, 63, 32, 5, 32, 6, 147, 149, 34, 5, 148, 56, 2, 0, 32, 0, 65, 56, 106, 32, 3, 32, 4, 146, 32, 8, 148, 56, 2, 0, 32, 0, 65, 52, 106, 32, 1, 32, 2, 146, 32, 7, 148, 56, 2, 0, 32, 0, 65, 44, 106, 32, 5, 32, 5, 146, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 204, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 140, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 42, 2, 0, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 204, 1, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 3, 67, 0, 0, 0, 0, 67, 0, 0, 128, 63, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 32, 3, 32, 3, 148, 146, 34, 3, 149, 32, 3, 67, 23, 183, 209, 56, 93, 27, 34, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 6, 32, 3, 148, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 3, 148, 140, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 3, 148, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 187, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 20, 106, 42, 2, 0, 32, 1, 65, 20, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 24, 106, 42, 2, 0, 32, 1, 65, 24, 106, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 190, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 2, 65, 20, 106, 42, 2, 0, 32, 1, 42, 2, 4, 34, 4, 32, 2, 42, 2, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 65, 12, 106, 42, 2, 0, 148, 146, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 2, 65, 24, 106, 42, 2, 0, 32, 4, 32, 2, 65, 8, 106, 42, 2, 0, 148, 32, 5, 32, 2, 65, 16, 106, 42, 2, 0, 148, 146, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 192, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 4, 32, 1, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 42, 2, 4, 34, 4, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 1, 65, 4, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 192, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 2, 16, 5, 33, 4, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 34, 6, 32, 2, 16, 6, 34, 2, 148, 32, 5, 32, 4, 148, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 148, 32, 4, 32, 1, 42, 2, 4, 34, 8, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 5, 148, 32, 4, 32, 6, 148, 146, 56, 2, 0, 32, 0, 65, 4, 106, 32, 2, 32, 8, 148, 32, 4, 32, 7, 148, 146, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 206, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 40, 2, 0, 13, 1, 32, 1, 65, 127, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 40, 2, 0, 13, 1, 32, 2, 65, 127, 54, 2, 0, 32, 3, 69, 13, 0, 32, 3, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 34, 4, 32, 3, 65, 12, 106, 42, 2, 0, 32, 3, 42, 2, 4, 34, 5, 149, 56, 2, 0, 32, 2, 65, 4, 106, 32, 5, 56, 2, 0, 32, 2, 65, 8, 106, 32, 3, 65, 8, 106, 42, 2, 0, 34, 5, 56, 2, 0, 32, 2, 65, 16, 106, 32, 3, 65, 16, 106, 42, 2, 0, 32, 5, 32, 4, 42, 2, 0, 148, 147, 56, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 65, 0, 54, 2, 0, 32, 1, 65, 0, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 204, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 40, 2, 4, 33, 2, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 1, 65, 8, 106, 40, 2, 0, 33, 3, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 2, 54, 2, 0, 32, 1, 65, 12, 106, 40, 2, 0, 33, 2, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 24, 106, 32, 3, 54, 2, 0, 32, 0, 65, 44, 106, 32, 2, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 203, 1, 2, 1, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 125, 32, 1, 65, 16, 106, 42, 2, 0, 16, 69, 34, 3, 32, 3, 146, 34, 5, 67, 0, 0, 0, 63, 148, 16, 5, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 3, 149, 56, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 32, 3, 149, 33, 4, 32, 1, 65, 8, 106, 42, 2, 0, 32, 3, 149, 12, 1, 11, 32, 0, 65, 4, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 67, 0, 0, 0, 0, 11, 33, 3, 32, 0, 65, 12, 106, 32, 4, 56, 2, 0, 32, 0, 65, 8, 106, 32, 3, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 5, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 182, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 193, 1, 2, 1, 127, 5, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 34, 2, 54, 2, 0, 32, 1, 32, 1, 42, 2, 4, 34, 4, 32, 1, 65, 16, 106, 42, 2, 0, 34, 5, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 1, 65, 12, 106, 42, 2, 0, 34, 7, 148, 147, 34, 3, 67, 0, 0, 0, 0, 92, 4, 127, 32, 0, 65, 16, 106, 32, 4, 67, 0, 0, 128, 63, 32, 3, 149, 34, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 5, 32, 3, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 7, 32, 3, 148, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 6, 32, 3, 148, 140, 56, 2, 0, 32, 1, 40, 2, 0, 5, 32, 2, 11, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 2, 2, 127, 2, 125, 35, 0, 65, 16, 107, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 8, 106, 32, 2, 16, 153, 2, 32, 3, 40, 2, 12, 33, 4, 32, 0, 32, 3, 40, 2, 8, 34, 2, 42, 2, 24, 32, 1, 42, 2, 4, 34, 5, 32, 2, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 2, 42, 2, 12, 148, 146, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 2, 42, 2, 28, 32, 5, 32, 2, 42, 2, 4, 148, 32, 6, 32, 2, 42, 2, 16, 148, 146, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 2, 2, 127, 2, 125, 35, 0, 65, 16, 107, 34, 3, 36, 0, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 3, 65, 8, 106, 32, 2, 16, 153, 2, 32, 3, 40, 2, 12, 33, 4, 32, 0, 32, 3, 40, 2, 8, 34, 2, 42, 2, 48, 32, 1, 42, 2, 4, 34, 5, 32, 2, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 6, 32, 2, 42, 2, 16, 148, 146, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 2, 42, 2, 52, 32, 5, 32, 2, 42, 2, 4, 148, 32, 6, 32, 2, 42, 2, 20, 148, 146, 146, 56, 2, 0, 32, 4, 32, 4, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 3, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 178, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 34, 5, 32, 5, 32, 2, 42, 2, 4, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 2, 65, 8, 106, 42, 2, 0, 34, 4, 32, 5, 32, 4, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 178, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 2, 42, 2, 4, 34, 5, 32, 5, 32, 1, 42, 2, 4, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 4, 32, 0, 65, 8, 106, 32, 2, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 32, 4, 32, 5, 93, 27, 32, 4, 32, 4, 92, 27, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 212, 1, 2, 4, 127, 1, 124, 32, 0, 188, 65, 255, 255, 255, 255, 7, 113, 34, 2, 32, 1, 188, 65, 255, 255, 255, 255, 7, 113, 34, 4, 32, 2, 32, 4, 73, 34, 5, 27, 34, 3, 190, 33, 0, 32, 3, 65, 128, 128, 128, 252, 7, 71, 4, 125, 32, 4, 32, 2, 32, 5, 27, 34, 2, 190, 33, 1, 2, 125, 2, 64, 32, 3, 69, 32, 2, 65, 255, 255, 255, 251, 7, 75, 114, 32, 2, 32, 3, 107, 65, 128, 128, 128, 228, 0, 79, 114, 69, 4, 64, 32, 2, 65, 128, 128, 128, 236, 5, 73, 13, 1, 32, 0, 67, 0, 0, 128, 18, 148, 33, 0, 32, 1, 67, 0, 0, 128, 18, 148, 33, 1, 67, 0, 0, 128, 108, 12, 2, 11, 32, 1, 32, 0, 146, 15, 11, 67, 0, 0, 128, 63, 32, 3, 65, 255, 255, 255, 139, 2, 75, 13, 0, 26, 32, 0, 67, 0, 0, 128, 108, 148, 33, 0, 32, 1, 67, 0, 0, 128, 108, 148, 33, 1, 67, 0, 0, 128, 18, 11, 32, 0, 187, 34, 6, 32, 6, 162, 32, 1, 187, 34, 6, 32, 6, 162, 160, 182, 145, 148, 5, 32, 0, 11, 11, 173, 1, 2, 1, 127, 8, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 42, 2, 0, 33, 3, 32, 0, 65, 4, 106, 42, 2, 0, 33, 4, 32, 0, 65, 8, 106, 42, 2, 0, 33, 5, 32, 0, 65, 12, 106, 42, 2, 0, 33, 6, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 33, 7, 32, 1, 65, 8, 106, 42, 2, 0, 33, 8, 32, 1, 65, 12, 106, 42, 2, 0, 33, 9, 32, 1, 42, 2, 4, 33, 10, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 4, 32, 10, 148, 32, 5, 32, 8, 148, 146, 32, 6, 32, 9, 148, 146, 32, 3, 32, 7, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 184, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 186, 1, 1, 5, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 2, 67, 53, 250, 14, 60, 148, 34, 2, 16, 5, 33, 4, 32, 1, 67, 53, 250, 14, 60, 148, 34, 5, 16, 5, 33, 6, 32, 3, 67, 53, 250, 14, 60, 148, 34, 7, 16, 5, 33, 1, 32, 2, 16, 6, 33, 3, 32, 5, 16, 6, 33, 5, 32, 0, 65, 16, 106, 32, 7, 16, 6, 34, 2, 32, 5, 32, 3, 148, 34, 7, 148, 32, 1, 32, 6, 32, 4, 148, 34, 8, 148, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 32, 7, 148, 32, 2, 32, 8, 148, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 5, 32, 4, 148, 34, 4, 148, 32, 1, 32, 6, 32, 3, 148, 34, 6, 148, 146, 56, 2, 0, 32, 0, 32, 2, 32, 6, 148, 32, 1, 32, 4, 148, 147, 56, 2, 4, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 173, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 146, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 173, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 147, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 147, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 173, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 173, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 42, 2, 0, 32, 2, 42, 2, 4, 149, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 65, 12, 106, 42, 2, 0, 149, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 172, 1, 2, 1, 127, 2, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 34, 4, 32, 2, 42, 2, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 65, 12, 106, 42, 2, 0, 148, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 4, 32, 2, 65, 8, 106, 42, 2, 0, 148, 32, 5, 32, 2, 65, 16, 106, 42, 2, 0, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 190, 1, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 64, 107, 32, 16, 56, 2, 0, 32, 0, 65, 60, 106, 32, 15, 56, 2, 0, 32, 0, 65, 56, 106, 32, 14, 56, 2, 0, 32, 0, 65, 52, 106, 32, 13, 56, 2, 0, 32, 0, 65, 48, 106, 32, 12, 56, 2, 0, 32, 0, 65, 44, 106, 32, 11, 56, 2, 0, 32, 0, 65, 40, 106, 32, 10, 56, 2, 0, 32, 0, 65, 36, 106, 32, 9, 56, 2, 0, 32, 0, 65, 32, 106, 32, 8, 56, 2, 0, 32, 0, 65, 28, 106, 32, 7, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 198, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 24, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 44, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 52, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 56, 106, 32, 1, 65, 8, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 163, 1, 2, 1, 127, 6, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 42, 2, 0, 33, 4, 32, 0, 65, 4, 106, 42, 2, 0, 33, 3, 32, 0, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 33, 6, 32, 1, 65, 8, 106, 42, 2, 0, 33, 7, 32, 1, 42, 2, 4, 33, 8, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 8, 32, 3, 147, 34, 3, 32, 3, 148, 32, 7, 32, 5, 147, 34, 3, 32, 3, 148, 146, 32, 6, 32, 4, 147, 34, 4, 32, 4, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 178, 1, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 32, 1, 65, 12, 106, 42, 2, 0, 34, 6, 32, 6, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 32, 0, 65, 12, 106, 32, 6, 32, 3, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 5, 32, 3, 148, 56, 2, 0, 32, 0, 65, 4, 106, 32, 4, 32, 3, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 186, 1, 2, 2, 127, 7, 126, 35, 0, 65, 64, 106, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 65, 12, 106, 41, 2, 0, 33, 3, 32, 0, 65, 20, 106, 41, 2, 0, 33, 4, 32, 0, 65, 28, 106, 41, 2, 0, 33, 5, 32, 0, 65, 36, 106, 41, 2, 0, 33, 6, 32, 0, 65, 44, 106, 41, 2, 0, 33, 7, 32, 0, 65, 52, 106, 41, 2, 0, 33, 8, 32, 0, 41, 2, 4, 33, 9, 32, 1, 32, 0, 65, 60, 106, 41, 2, 0, 55, 3, 56, 32, 1, 32, 8, 55, 3, 48, 32, 1, 32, 7, 55, 3, 40, 32, 1, 32, 6, 55, 3, 32, 32, 1, 32, 5, 55, 3, 24, 32, 1, 32, 4, 55, 3, 16, 32, 1, 32, 3, 55, 3, 8, 32, 1, 32, 9, 55, 3, 0, 32, 1, 16, 146, 2, 33, 0, 32, 1, 65, 64, 107, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 162, 1, 2, 1, 127, 6, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 42, 2, 0, 33, 4, 32, 0, 65, 4, 106, 42, 2, 0, 33, 3, 32, 0, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 33, 6, 32, 1, 65, 8, 106, 42, 2, 0, 33, 7, 32, 1, 42, 2, 4, 33, 8, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 8, 32, 3, 147, 34, 3, 32, 3, 148, 32, 7, 32, 5, 147, 34, 3, 32, 3, 148, 146, 32, 6, 32, 4, 147, 34, 4, 32, 4, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 181, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 32, 1, 71, 4, 64, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 12, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 12, 1, 11, 32, 0, 65, 12, 106, 34, 2, 40, 2, 0, 33, 3, 32, 2, 32, 0, 65, 8, 106, 34, 2, 40, 2, 0, 54, 2, 0, 32, 2, 32, 3, 54, 2, 0, 11, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 155, 1, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 16, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 20, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 24, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 28, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 32, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 36, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 160, 1, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 34, 5, 32, 2, 42, 2, 4, 32, 5, 147, 32, 3, 148, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 2, 65, 8, 106, 42, 2, 0, 32, 5, 147, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 170, 1, 1, 2, 127, 35, 0, 65, 32, 107, 34, 7, 36, 0, 32, 7, 32, 3, 56, 2, 12, 32, 7, 32, 1, 56, 2, 4, 32, 7, 32, 0, 56, 2, 0, 32, 7, 32, 4, 67, 0, 0, 0, 63, 148, 34, 4, 32, 1, 148, 32, 6, 67, 0, 0, 0, 63, 148, 34, 6, 32, 3, 148, 146, 32, 5, 67, 0, 0, 0, 63, 148, 34, 5, 32, 0, 148, 147, 56, 2, 24, 32, 7, 32, 2, 56, 2, 8, 32, 7, 32, 5, 32, 3, 148, 32, 6, 32, 0, 148, 146, 32, 4, 32, 2, 148, 147, 56, 2, 20, 32, 7, 32, 4, 32, 3, 148, 32, 5, 32, 2, 148, 146, 32, 6, 32, 1, 148, 147, 56, 2, 16, 32, 7, 32, 4, 32, 0, 148, 140, 32, 5, 32, 1, 148, 147, 32, 6, 32, 2, 148, 147, 56, 2, 28, 32, 7, 16, 179, 1, 33, 8, 32, 7, 65, 32, 106, 36, 0, 32, 8, 11, 149, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 16, 106, 42, 2, 0, 32, 1, 65, 16, 106, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 175, 1, 2, 3, 127, 1, 125, 35, 0, 65, 16, 107, 33, 1, 32, 0, 188, 34, 2, 65, 23, 118, 65, 255, 1, 113, 34, 3, 65, 149, 1, 77, 4, 125, 32, 0, 140, 32, 0, 32, 2, 65, 0, 72, 27, 33, 0, 32, 3, 65, 253, 0, 77, 4, 64, 32, 1, 32, 0, 67, 0, 0, 0, 75, 146, 56, 2, 12, 32, 1, 42, 2, 12, 26, 32, 0, 67, 0, 0, 0, 0, 148, 15, 11, 2, 125, 32, 0, 67, 0, 0, 0, 75, 146, 67, 0, 0, 0, 203, 146, 32, 0, 147, 34, 4, 67, 0, 0, 0, 63, 94, 65, 1, 115, 69, 4, 64, 32, 0, 32, 4, 146, 67, 0, 0, 128, 191, 146, 12, 1, 11, 32, 0, 32, 4, 146, 34, 0, 32, 4, 67, 0, 0, 0, 191, 95, 65, 1, 115, 13, 0, 26, 32, 0, 67, 0, 0, 128, 63, 146, 11, 34, 0, 140, 32, 0, 32, 2, 65, 0, 72, 27, 5, 32, 0, 11, 11, 174, 1, 1, 7, 125, 32, 0, 32, 1, 42, 2, 12, 34, 3, 56, 2, 12, 32, 0, 32, 1, 42, 2, 8, 34, 4, 56, 2, 8, 32, 0, 32, 1, 42, 2, 4, 34, 5, 56, 2, 4, 32, 0, 32, 1, 42, 2, 0, 34, 6, 56, 2, 0, 32, 0, 32, 5, 32, 2, 42, 2, 0, 67, 0, 0, 0, 63, 148, 34, 7, 148, 32, 3, 32, 2, 42, 2, 8, 67, 0, 0, 0, 63, 148, 34, 8, 148, 146, 32, 6, 32, 2, 42, 2, 4, 67, 0, 0, 0, 63, 148, 34, 9, 148, 147, 56, 2, 24, 32, 0, 32, 8, 32, 6, 148, 32, 9, 32, 3, 148, 146, 32, 7, 32, 4, 148, 147, 56, 2, 20, 32, 0, 32, 9, 32, 4, 148, 32, 7, 32, 3, 148, 146, 32, 8, 32, 5, 148, 147, 56, 2, 16, 32, 0, 32, 7, 32, 6, 148, 140, 32, 9, 32, 5, 148, 147, 32, 8, 32, 4, 148, 147, 56, 2, 28, 11, 156, 1, 1, 8, 125, 32, 0, 32, 1, 42, 2, 12, 34, 3, 32, 2, 42, 2, 12, 34, 4, 148, 32, 1, 42, 2, 0, 34, 5, 32, 2, 42, 2, 0, 34, 6, 148, 147, 32, 1, 42, 2, 4, 34, 7, 32, 2, 42, 2, 4, 34, 8, 148, 147, 32, 1, 42, 2, 8, 34, 9, 32, 2, 42, 2, 8, 34, 10, 148, 147, 56, 2, 12, 32, 0, 32, 5, 32, 8, 148, 32, 3, 32, 10, 148, 32, 9, 32, 4, 148, 146, 146, 32, 7, 32, 6, 148, 147, 56, 2, 8, 32, 0, 32, 9, 32, 6, 148, 32, 3, 32, 8, 148, 32, 7, 32, 4, 148, 146, 146, 32, 5, 32, 10, 148, 147, 56, 2, 4, 32, 0, 32, 7, 32, 10, 148, 32, 3, 32, 6, 148, 32, 5, 32, 4, 148, 146, 146, 32, 9, 32, 8, 148, 147, 56, 2, 0, 11, 159, 1, 2, 1, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 34, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 34, 4, 56, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 34, 5, 56, 2, 0, 32, 0, 65, 16, 106, 67, 0, 0, 128, 63, 32, 5, 32, 5, 148, 147, 32, 4, 32, 4, 148, 147, 32, 3, 32, 3, 148, 147, 139, 145, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 147, 1, 2, 1, 127, 6, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 42, 2, 0, 33, 3, 32, 0, 65, 8, 106, 42, 2, 0, 33, 4, 32, 0, 65, 12, 106, 42, 2, 0, 33, 5, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 6, 32, 1, 65, 12, 106, 42, 2, 0, 33, 7, 32, 1, 42, 2, 4, 33, 8, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 32, 8, 148, 32, 4, 32, 6, 148, 146, 32, 5, 32, 7, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 148, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 32, 3, 148, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 32, 3, 148, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 148, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 66, 0, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 42, 2, 4, 32, 2, 65, 8, 106, 42, 2, 0, 148, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 42, 2, 4, 148, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 174, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 4, 106, 66, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 42, 2, 4, 67, 0, 0, 0, 63, 148, 56, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 8, 106, 42, 2, 0, 67, 0, 0, 0, 63, 148, 56, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 12, 106, 42, 2, 0, 67, 0, 0, 0, 63, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 162, 1, 1, 6, 125, 32, 0, 32, 1, 42, 2, 4, 34, 4, 32, 2, 42, 2, 8, 34, 5, 148, 32, 1, 42, 2, 12, 34, 6, 32, 2, 42, 2, 12, 34, 3, 148, 146, 56, 2, 12, 32, 0, 32, 5, 32, 1, 42, 2, 0, 34, 7, 148, 32, 3, 32, 1, 42, 2, 8, 34, 5, 148, 146, 56, 2, 8, 32, 0, 32, 4, 32, 2, 42, 2, 0, 34, 3, 148, 32, 6, 32, 2, 42, 2, 4, 34, 8, 148, 146, 56, 2, 4, 32, 0, 32, 7, 32, 3, 148, 32, 5, 32, 8, 148, 146, 56, 2, 0, 32, 0, 32, 1, 42, 2, 20, 32, 4, 32, 2, 42, 2, 16, 34, 3, 148, 32, 6, 32, 2, 42, 2, 20, 34, 4, 148, 146, 146, 56, 2, 20, 32, 0, 32, 1, 42, 2, 16, 32, 7, 32, 3, 148, 32, 5, 32, 4, 148, 146, 146, 56, 2, 16, 11, 169, 1, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 44, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 40, 106, 65, 0, 54, 2, 0, 32, 0, 65, 36, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 65, 32, 106, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 32, 0, 32, 2, 56, 2, 4, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 12, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 139, 1, 2, 1, 127, 5, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 0, 65, 16, 106, 42, 2, 0, 34, 3, 32, 0, 65, 32, 106, 42, 2, 0, 34, 4, 148, 32, 0, 65, 20, 106, 42, 2, 0, 34, 2, 32, 0, 65, 28, 106, 42, 2, 0, 34, 5, 148, 147, 148, 32, 0, 42, 2, 4, 32, 2, 32, 0, 65, 36, 106, 42, 2, 0, 34, 6, 148, 32, 0, 65, 24, 106, 42, 2, 0, 34, 2, 32, 4, 148, 147, 148, 32, 0, 65, 8, 106, 42, 2, 0, 32, 2, 32, 5, 148, 32, 3, 32, 6, 148, 147, 148, 146, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 142, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 146, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 146, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 142, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 147, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 147, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 142, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 148, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 142, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 149, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 168, 1, 1, 2, 127, 35, 0, 65, 16, 107, 34, 2, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 2, 65, 8, 106, 32, 1, 16, 153, 2, 32, 2, 40, 2, 12, 33, 3, 32, 0, 65, 28, 106, 32, 2, 40, 2, 8, 34, 1, 41, 2, 32, 55, 2, 0, 32, 0, 32, 1, 40, 2, 0, 54, 2, 4, 32, 0, 65, 8, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 40, 2, 16, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 41, 2, 20, 55, 2, 0, 32, 0, 65, 36, 106, 32, 1, 40, 2, 40, 54, 2, 0, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 2, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 151, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 32, 2, 67, 0, 0, 0, 63, 148, 34, 2, 16, 6, 56, 2, 0, 32, 0, 65, 4, 106, 32, 2, 16, 5, 34, 2, 32, 1, 42, 2, 4, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 32, 1, 65, 8, 106, 42, 2, 0, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 1, 65, 12, 106, 42, 2, 0, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 150, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 24, 106, 32, 1, 65, 24, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 32, 106, 32, 1, 65, 32, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 146, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 158, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 67, 0, 0, 128, 63, 32, 1, 42, 2, 4, 149, 56, 2, 0, 32, 0, 65, 8, 106, 67, 0, 0, 128, 63, 32, 1, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 12, 106, 67, 0, 0, 128, 63, 32, 1, 65, 12, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 16, 106, 67, 0, 0, 128, 63, 32, 1, 65, 16, 106, 42, 2, 0, 149, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 152, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 36, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 130, 1, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 64, 32, 0, 65, 4, 106, 42, 2, 0, 32, 1, 42, 2, 4, 92, 13, 0, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 92, 13, 0, 32, 0, 65, 12, 106, 42, 2, 0, 32, 1, 65, 12, 106, 42, 2, 0, 91, 33, 3, 11, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 148, 1, 2, 1, 127, 3, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 32, 1, 65, 8, 106, 42, 2, 0, 34, 5, 32, 5, 148, 146, 34, 3, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 3, 145, 149, 33, 3, 11, 32, 0, 65, 8, 106, 32, 5, 32, 3, 148, 56, 2, 0, 32, 0, 32, 4, 32, 3, 148, 56, 2, 4, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 153, 1, 1, 4, 127, 35, 0, 65, 32, 107, 34, 1, 36, 0, 32, 1, 65, 24, 106, 34, 2, 32, 0, 65, 24, 106, 41, 2, 0, 55, 3, 0, 32, 1, 65, 16, 106, 34, 3, 32, 0, 65, 16, 106, 41, 2, 0, 55, 3, 0, 32, 1, 65, 8, 106, 34, 4, 32, 0, 65, 8, 106, 41, 2, 0, 55, 3, 0, 32, 1, 32, 0, 41, 2, 0, 55, 3, 0, 65, 36, 16, 3, 34, 0, 4, 64, 32, 0, 32, 1, 41, 3, 0, 55, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 4, 41, 3, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 3, 41, 3, 0, 55, 2, 0, 32, 0, 65, 28, 106, 32, 2, 41, 3, 0, 55, 2, 0, 32, 1, 65, 32, 106, 36, 0, 32, 0, 15, 11, 0, 11, 159, 1, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 12, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 32, 2, 56, 2, 4, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 44, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 164, 1, 1, 2, 127, 35, 0, 65, 48, 107, 34, 2, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 2, 65, 8, 106, 32, 1, 16, 153, 2, 32, 2, 40, 2, 12, 33, 3, 32, 2, 40, 2, 8, 33, 1, 32, 2, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 24, 32, 2, 66, 0, 55, 3, 16, 32, 2, 65, 16, 106, 32, 1, 16, 25, 32, 2, 32, 1, 40, 2, 48, 54, 2, 32, 32, 2, 32, 1, 41, 2, 52, 55, 2, 36, 32, 0, 65, 4, 106, 32, 2, 65, 16, 106, 32, 2, 65, 32, 106, 16, 157, 1, 32, 3, 32, 3, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 2, 65, 48, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 150, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 32, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 24, 106, 66, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 128, 1, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 8, 106, 42, 2, 0, 33, 3, 32, 0, 42, 2, 4, 33, 4, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 42, 2, 4, 33, 6, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 6, 32, 4, 147, 34, 4, 32, 4, 148, 32, 5, 32, 3, 147, 34, 3, 32, 3, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 138, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 141, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 141, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 141, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 141, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 138, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 142, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 142, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 142, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 142, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 146, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 16, 156, 1, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 138, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 42, 2, 0, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 137, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 140, 56, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 16, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 156, 1, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 44, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 32, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 65, 24, 106, 32, 2, 56, 2, 0, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 40, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 138, 1, 2, 2, 127, 4, 126, 35, 0, 65, 48, 107, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 65, 12, 106, 41, 2, 0, 33, 3, 32, 0, 65, 20, 106, 41, 2, 0, 33, 4, 32, 0, 65, 28, 106, 41, 2, 0, 33, 5, 32, 0, 41, 2, 4, 33, 6, 32, 1, 32, 0, 65, 36, 106, 40, 2, 0, 54, 2, 40, 32, 1, 32, 5, 55, 3, 32, 32, 1, 32, 4, 55, 3, 24, 32, 1, 32, 3, 55, 3, 16, 32, 1, 32, 6, 55, 3, 8, 32, 1, 65, 8, 106, 16, 139, 2, 33, 0, 32, 1, 65, 48, 106, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 120, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 4, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 4, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 32, 3, 16, 86, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 17, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 104, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 107, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 157, 1, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 134, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 35, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 63, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 220, 1, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 158, 1, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 164, 1, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 135, 2, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 79, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 2, 69, 13, 0, 32, 2, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 32, 2, 65, 4, 106, 16, 245, 1, 32, 2, 32, 2, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 132, 1, 2, 1, 127, 2, 126, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 65, 12, 106, 41, 2, 0, 33, 3, 32, 1, 41, 2, 4, 33, 4, 32, 0, 65, 20, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 4, 55, 2, 0, 32, 0, 65, 12, 106, 32, 3, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 139, 1, 1, 4, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 16, 1, 33, 2, 16, 1, 33, 1, 16, 1, 33, 3, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 67, 0, 0, 128, 63, 32, 2, 147, 145, 34, 4, 32, 1, 67, 219, 15, 201, 64, 148, 34, 1, 16, 6, 148, 56, 2, 0, 32, 0, 32, 4, 32, 1, 16, 5, 148, 56, 2, 4, 32, 0, 65, 16, 106, 32, 2, 145, 34, 2, 32, 3, 67, 219, 15, 201, 64, 148, 34, 1, 16, 6, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 2, 32, 1, 16, 5, 148, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 16, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 20, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 24, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 67, 0, 0, 128, 63, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 127, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 136, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 67, 0, 0, 128, 63, 32, 1, 42, 2, 4, 149, 56, 2, 0, 32, 0, 65, 8, 106, 67, 0, 0, 128, 63, 32, 1, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 0, 65, 12, 106, 67, 0, 0, 128, 63, 32, 1, 65, 12, 106, 42, 2, 0, 149, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 2, 1, 127, 4, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 8, 106, 42, 2, 0, 33, 3, 32, 0, 42, 2, 4, 33, 4, 32, 1, 32, 2, 54, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 33, 5, 32, 1, 42, 2, 4, 33, 6, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 4, 32, 6, 148, 32, 3, 32, 5, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 137, 1, 1, 2, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 16, 1, 33, 4, 16, 1, 33, 3, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 2, 67, 0, 0, 128, 63, 32, 1, 27, 34, 2, 32, 3, 32, 3, 146, 67, 0, 0, 128, 191, 146, 34, 3, 148, 56, 2, 0, 32, 0, 65, 8, 106, 32, 4, 32, 4, 146, 67, 219, 15, 73, 64, 148, 34, 4, 16, 5, 32, 2, 67, 0, 0, 128, 63, 32, 3, 32, 3, 148, 147, 145, 148, 34, 3, 148, 56, 2, 0, 32, 0, 32, 4, 16, 6, 32, 3, 148, 56, 2, 4, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 113, 1, 2, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 2, 127, 32, 0, 42, 2, 4, 32, 1, 42, 2, 4, 91, 4, 64, 32, 0, 65, 8, 106, 42, 2, 0, 32, 1, 65, 8, 106, 42, 2, 0, 91, 12, 1, 11, 65, 0, 11, 33, 3, 32, 1, 32, 2, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 138, 1, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 20, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 12, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 36, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 28, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 122, 1, 3, 127, 35, 0, 65, 32, 107, 34, 1, 36, 0, 32, 1, 65, 24, 106, 34, 2, 32, 0, 65, 16, 106, 41, 2, 0, 55, 3, 0, 32, 1, 65, 16, 106, 34, 3, 32, 0, 65, 8, 106, 41, 2, 0, 55, 3, 0, 32, 1, 32, 0, 41, 2, 0, 55, 3, 8, 65, 28, 16, 3, 34, 0, 4, 64, 32, 0, 32, 1, 41, 3, 8, 55, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 3, 41, 3, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 2, 41, 3, 0, 55, 2, 0, 32, 1, 65, 32, 106, 36, 0, 32, 0, 15, 11, 0, 11, 121, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 141, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 141, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 141, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 121, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 142, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 142, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 142, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 127, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 16, 156, 1, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 121, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 42, 2, 4, 140, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 42, 2, 0, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 114, 2, 1, 127, 1, 125, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 42, 2, 4, 32, 0, 42, 2, 4, 147, 32, 1, 65, 8, 106, 42, 2, 0, 32, 0, 65, 8, 106, 42, 2, 0, 147, 16, 136, 1, 33, 3, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 3, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 146, 1, 0, 32, 0, 32, 1, 42, 2, 0, 32, 2, 42, 2, 0, 147, 56, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 147, 56, 2, 4, 32, 0, 32, 1, 42, 2, 8, 32, 2, 42, 2, 8, 147, 56, 2, 8, 32, 0, 32, 1, 42, 2, 12, 32, 2, 42, 2, 12, 147, 56, 2, 12, 32, 0, 32, 1, 42, 2, 16, 32, 2, 42, 2, 16, 147, 56, 2, 16, 32, 0, 32, 1, 42, 2, 20, 32, 2, 42, 2, 20, 147, 56, 2, 20, 32, 0, 32, 1, 42, 2, 24, 32, 2, 42, 2, 24, 147, 56, 2, 24, 32, 0, 32, 1, 42, 2, 28, 32, 2, 42, 2, 28, 147, 56, 2, 28, 32, 0, 32, 1, 42, 2, 32, 32, 2, 42, 2, 32, 147, 56, 2, 32, 11, 122, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 20, 106, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 141, 1, 1, 2, 127, 35, 0, 65, 64, 106, 34, 16, 36, 0, 32, 16, 32, 15, 56, 2, 60, 32, 16, 32, 14, 56, 2, 56, 32, 16, 32, 13, 56, 2, 52, 32, 16, 32, 12, 56, 2, 48, 32, 16, 32, 11, 56, 2, 44, 32, 16, 32, 10, 56, 2, 40, 32, 16, 32, 9, 56, 2, 36, 32, 16, 32, 8, 56, 2, 32, 32, 16, 32, 7, 56, 2, 28, 32, 16, 32, 6, 56, 2, 24, 32, 16, 32, 5, 56, 2, 20, 32, 16, 32, 4, 56, 2, 16, 32, 16, 32, 3, 56, 2, 12, 32, 16, 32, 2, 56, 2, 8, 32, 16, 32, 1, 56, 2, 4, 32, 16, 32, 0, 56, 2, 0, 32, 16, 16, 146, 2, 33, 17, 32, 16, 65, 64, 107, 36, 0, 32, 17, 11, 143, 1, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 16, 106, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 24, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 36, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 44, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 56, 106, 66, 0, 55, 2, 0, 32, 0, 65, 48, 106, 66, 0, 55, 2, 0, 32, 0, 65, 64, 107, 65, 128, 128, 128, 252, 3, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 118, 1, 1, 125, 32, 0, 32, 1, 42, 2, 32, 34, 2, 32, 2, 148, 32, 1, 42, 2, 36, 34, 2, 32, 2, 148, 146, 32, 1, 42, 2, 40, 34, 2, 32, 2, 148, 146, 145, 56, 2, 8, 32, 0, 32, 1, 42, 2, 16, 34, 2, 32, 2, 148, 32, 1, 42, 2, 20, 34, 2, 32, 2, 148, 146, 32, 1, 42, 2, 24, 34, 2, 32, 2, 148, 146, 145, 56, 2, 4, 32, 0, 32, 1, 42, 2, 0, 34, 2, 32, 2, 148, 32, 1, 42, 2, 4, 34, 2, 32, 2, 148, 146, 32, 1, 42, 2, 8, 34, 2, 32, 2, 148, 146, 145, 56, 2, 0, 11, 118, 2, 2, 127, 3, 126, 35, 0, 65, 32, 107, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 65, 12, 106, 41, 2, 0, 33, 3, 32, 0, 65, 20, 106, 41, 2, 0, 33, 4, 32, 0, 41, 2, 4, 33, 5, 32, 1, 32, 0, 65, 28, 106, 41, 2, 0, 55, 3, 24, 32, 1, 32, 4, 55, 3, 16, 32, 1, 32, 3, 55, 3, 8, 32, 1, 32, 5, 55, 3, 0, 32, 1, 16, 179, 1, 33, 0, 32, 1, 65, 32, 106, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 120, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 36, 106, 32, 9, 56, 2, 0, 32, 0, 65, 32, 106, 32, 8, 56, 2, 0, 32, 0, 65, 28, 106, 32, 7, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 112, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 105, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 52, 106, 40, 2, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 56, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 105, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 20, 106, 41, 2, 0, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 28, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 113, 1, 5, 125, 32, 1, 42, 2, 0, 34, 3, 32, 3, 148, 32, 1, 42, 2, 4, 34, 4, 32, 4, 148, 146, 32, 1, 42, 2, 8, 34, 5, 32, 5, 148, 146, 32, 1, 42, 2, 12, 34, 6, 32, 6, 148, 146, 34, 2, 67, 23, 183, 209, 56, 94, 65, 1, 115, 69, 4, 64, 67, 0, 0, 128, 63, 32, 2, 145, 149, 33, 2, 11, 32, 0, 32, 6, 32, 2, 148, 56, 2, 12, 32, 0, 32, 5, 32, 2, 148, 56, 2, 8, 32, 0, 32, 4, 32, 2, 148, 56, 2, 4, 32, 0, 32, 3, 32, 2, 148, 56, 2, 0, 11, 118, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 12, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 4, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 105, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 3, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 148, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 32, 2, 148, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 111, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 67, 0, 0, 128, 63, 32, 1, 42, 2, 4, 149, 56, 2, 4, 32, 0, 65, 8, 106, 67, 0, 0, 128, 63, 32, 1, 65, 8, 106, 42, 2, 0, 149, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 110, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 32, 106, 32, 8, 56, 2, 0, 32, 0, 65, 28, 106, 32, 7, 56, 2, 0, 32, 0, 65, 24, 106, 32, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 119, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 32, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 24, 106, 66, 0, 55, 2, 0, 32, 0, 65, 20, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 12, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 32, 2, 56, 2, 4, 32, 0, 65, 16, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 104, 2, 2, 127, 2, 126, 35, 0, 65, 32, 107, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 65, 12, 106, 41, 2, 0, 33, 3, 32, 0, 41, 2, 4, 33, 4, 32, 1, 32, 0, 65, 20, 106, 41, 2, 0, 55, 3, 24, 32, 1, 32, 3, 55, 3, 16, 32, 1, 32, 4, 55, 3, 8, 32, 1, 65, 8, 106, 16, 214, 1, 33, 0, 32, 1, 65, 32, 106, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 102, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 12, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 102, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 20, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 0, 65, 28, 106, 32, 1, 65, 12, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 102, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 40, 2, 4, 54, 2, 0, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 41, 2, 0, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 101, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 141, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 141, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 101, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 142, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 142, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 105, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 16, 156, 1, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 16, 156, 1, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 101, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 42, 2, 4, 140, 56, 2, 4, 32, 0, 65, 8, 106, 32, 1, 65, 8, 106, 42, 2, 0, 140, 56, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 108, 1, 5, 125, 32, 0, 32, 1, 42, 2, 4, 34, 3, 32, 2, 42, 2, 8, 34, 4, 148, 32, 1, 42, 2, 12, 34, 6, 32, 2, 42, 2, 12, 34, 5, 148, 146, 56, 2, 12, 32, 0, 32, 4, 32, 1, 42, 2, 0, 34, 7, 148, 32, 5, 32, 1, 42, 2, 8, 34, 4, 148, 146, 56, 2, 8, 32, 0, 32, 3, 32, 2, 42, 2, 0, 34, 5, 148, 32, 6, 32, 2, 42, 2, 4, 34, 3, 148, 146, 56, 2, 4, 32, 0, 32, 7, 32, 5, 148, 32, 4, 32, 3, 148, 146, 56, 2, 0, 11, 124, 1, 2, 127, 35, 0, 65, 64, 106, 34, 0, 36, 0, 32, 0, 65, 12, 106, 66, 0, 55, 2, 0, 32, 0, 65, 32, 106, 66, 0, 55, 3, 0, 32, 0, 65, 52, 106, 66, 0, 55, 2, 0, 32, 0, 66, 0, 55, 2, 4, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 20, 32, 0, 66, 0, 55, 3, 24, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 40, 32, 0, 66, 0, 55, 2, 44, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 60, 32, 0, 16, 146, 2, 33, 1, 32, 0, 65, 64, 107, 36, 0, 32, 1, 11, 85, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 16, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 84, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 16, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 119, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 32, 106, 66, 128, 128, 128, 252, 131, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 24, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 191, 127, 55, 2, 0, 32, 0, 65, 20, 106, 67, 0, 0, 0, 192, 32, 2, 149, 56, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 67, 0, 0, 0, 64, 32, 1, 149, 56, 2, 4, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 100, 1, 1, 127, 35, 0, 65, 16, 107, 34, 2, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 2, 65, 8, 106, 32, 1, 16, 153, 2, 32, 2, 40, 2, 12, 33, 1, 32, 0, 65, 4, 106, 32, 2, 40, 2, 8, 16, 36, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 32, 2, 65, 16, 106, 36, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 86, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 16, 225, 1, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 85, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 16, 25, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 86, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 4, 106, 16, 231, 1, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 91, 1, 2, 127, 35, 0, 65, 16, 107, 34, 1, 36, 0, 32, 1, 65, 8, 106, 34, 2, 32, 0, 65, 8, 106, 41, 2, 0, 55, 3, 0, 32, 1, 32, 0, 41, 2, 0, 55, 3, 0, 65, 20, 16, 3, 34, 0, 4, 64, 32, 0, 32, 1, 41, 3, 0, 55, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 2, 41, 3, 0, 55, 2, 0, 32, 1, 65, 16, 106, 36, 0, 32, 0, 15, 11, 0, 11, 91, 1, 2, 127, 35, 0, 65, 16, 107, 34, 1, 36, 0, 32, 1, 65, 8, 106, 34, 2, 32, 0, 65, 8, 106, 40, 2, 0, 54, 2, 0, 32, 1, 32, 0, 41, 2, 0, 55, 3, 0, 65, 16, 16, 3, 34, 0, 4, 64, 32, 0, 32, 1, 41, 3, 0, 55, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 2, 40, 2, 0, 54, 2, 0, 32, 1, 65, 16, 106, 36, 0, 32, 0, 15, 11, 0, 11, 86, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 41, 2, 4, 55, 2, 0, 32, 1, 32, 1, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 0, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 84, 2, 2, 127, 1, 126, 35, 0, 65, 16, 107, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 41, 2, 4, 33, 3, 32, 1, 32, 0, 65, 12, 106, 41, 2, 0, 55, 3, 8, 32, 1, 32, 3, 55, 3, 0, 32, 1, 16, 254, 1, 33, 0, 32, 1, 65, 16, 106, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 90, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 24, 106, 32, 6, 56, 2, 0, 32, 0, 65, 20, 106, 32, 5, 56, 2, 0, 32, 0, 65, 16, 106, 32, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 91, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 20, 106, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 32, 2, 56, 2, 4, 32, 0, 65, 12, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 84, 2, 2, 127, 1, 126, 35, 0, 65, 16, 107, 34, 1, 36, 0, 2, 64, 32, 0, 4, 64, 32, 0, 32, 2, 54, 2, 0, 32, 0, 41, 2, 4, 33, 3, 32, 1, 32, 0, 65, 12, 106, 40, 2, 0, 54, 2, 8, 32, 1, 32, 3, 55, 3, 0, 32, 1, 16, 255, 1, 33, 0, 32, 1, 65, 16, 106, 36, 0, 32, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 94, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 127, 54, 2, 0, 16, 1, 33, 3, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 2, 67, 0, 0, 128, 63, 32, 1, 27, 34, 2, 32, 3, 32, 3, 146, 67, 219, 15, 73, 64, 148, 34, 3, 16, 5, 148, 56, 2, 0, 32, 0, 32, 2, 32, 3, 16, 6, 148, 56, 2, 4, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 95, 1, 2, 127, 35, 0, 65, 48, 107, 34, 9, 36, 0, 32, 9, 32, 8, 56, 2, 40, 32, 9, 32, 7, 56, 2, 36, 32, 9, 32, 6, 56, 2, 32, 32, 9, 32, 5, 56, 2, 28, 32, 9, 32, 4, 56, 2, 24, 32, 9, 32, 3, 56, 2, 20, 32, 9, 32, 2, 56, 2, 16, 32, 9, 32, 1, 56, 2, 12, 32, 9, 32, 0, 56, 2, 8, 32, 9, 65, 8, 106, 16, 139, 2, 33, 10, 32, 9, 65, 48, 106, 36, 0, 32, 10, 11, 98, 0, 32, 0, 32, 1, 42, 2, 0, 32, 2, 42, 2, 0, 147, 56, 2, 0, 32, 0, 32, 1, 42, 2, 4, 32, 2, 42, 2, 4, 147, 56, 2, 4, 32, 0, 32, 1, 42, 2, 8, 32, 2, 42, 2, 8, 147, 56, 2, 8, 32, 0, 32, 1, 42, 2, 12, 32, 2, 42, 2, 12, 147, 56, 2, 12, 32, 0, 32, 1, 42, 2, 16, 32, 2, 42, 2, 16, 147, 56, 2, 16, 32, 0, 32, 1, 42, 2, 20, 32, 2, 42, 2, 20, 147, 56, 2, 20, 11, 71, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 145, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 70, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 32, 0, 65, 12, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 81, 1, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 1, 16, 6, 34, 2, 56, 2, 0, 32, 0, 65, 8, 106, 32, 1, 16, 5, 34, 1, 56, 2, 0, 32, 0, 32, 2, 56, 2, 4, 32, 0, 65, 12, 106, 32, 1, 140, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 69, 1, 1, 127, 35, 0, 65, 48, 107, 34, 1, 36, 0, 32, 1, 65, 8, 106, 32, 0, 65, 36, 16, 161, 2, 26, 65, 40, 16, 3, 34, 0, 4, 64, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 8, 106, 65, 36, 16, 161, 2, 26, 32, 1, 65, 48, 106, 36, 0, 32, 0, 15, 11, 0, 11, 85, 1, 2, 127, 35, 0, 65, 32, 107, 34, 8, 36, 0, 32, 8, 32, 7, 56, 2, 28, 32, 8, 32, 6, 56, 2, 24, 32, 8, 32, 5, 56, 2, 20, 32, 8, 32, 4, 56, 2, 16, 32, 8, 32, 3, 56, 2, 12, 32, 8, 32, 2, 56, 2, 8, 32, 8, 32, 1, 56, 2, 4, 32, 8, 32, 0, 56, 2, 0, 32, 8, 16, 179, 1, 33, 9, 32, 8, 65, 32, 106, 36, 0, 32, 9, 11, 77, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 32, 0, 65, 28, 106, 66, 0, 55, 2, 0, 32, 0, 65, 20, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 97, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 32, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 24, 106, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 62, 1, 1, 127, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 32, 0, 65, 16, 106, 42, 2, 0, 148, 32, 0, 65, 8, 106, 42, 2, 0, 32, 0, 65, 12, 106, 42, 2, 0, 148, 147, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 68, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 65, 1, 106, 54, 2, 0, 32, 0, 42, 2, 4, 32, 0, 65, 8, 106, 42, 2, 0, 16, 136, 1, 33, 2, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 32, 2, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 62, 1, 1, 127, 2, 64, 2, 64, 32, 0, 69, 13, 0, 32, 0, 32, 2, 65, 1, 106, 54, 2, 0, 32, 1, 69, 13, 0, 32, 1, 40, 2, 0, 65, 127, 70, 13, 1, 32, 0, 32, 0, 40, 2, 0, 65, 127, 106, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 67, 1, 1, 127, 35, 0, 65, 64, 106, 34, 1, 36, 0, 32, 1, 32, 0, 65, 192, 0, 16, 161, 2, 33, 1, 65, 196, 0, 16, 3, 34, 0, 4, 64, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 4, 106, 32, 1, 65, 192, 0, 16, 161, 2, 26, 32, 1, 65, 64, 107, 36, 0, 32, 0, 15, 11, 0, 11, 70, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 32, 4, 56, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 74, 1, 2, 127, 35, 0, 65, 32, 107, 34, 6, 36, 0, 32, 6, 32, 5, 56, 2, 28, 32, 6, 32, 4, 56, 2, 24, 32, 6, 32, 3, 56, 2, 20, 32, 6, 32, 2, 56, 2, 16, 32, 6, 32, 1, 56, 2, 12, 32, 6, 32, 0, 56, 2, 8, 32, 6, 65, 8, 106, 16, 214, 1, 33, 7, 32, 6, 65, 32, 106, 36, 0, 32, 7, 11, 65, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 42, 2, 4, 32, 0, 65, 16, 106, 42, 2, 0, 148, 32, 0, 65, 12, 106, 42, 2, 0, 32, 0, 65, 8, 106, 42, 2, 0, 148, 147, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 56, 2, 1, 127, 1, 125, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 34, 2, 32, 2, 148, 32, 0, 65, 8, 106, 42, 2, 0, 34, 2, 32, 2, 148, 146, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 75, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 24, 106, 65, 0, 54, 2, 0, 32, 0, 65, 16, 106, 66, 128, 128, 128, 252, 3, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 79, 1, 2, 127, 35, 0, 65, 48, 107, 34, 0, 36, 0, 32, 0, 65, 128, 128, 128, 252, 3, 54, 2, 40, 32, 0, 66, 0, 55, 3, 32, 32, 0, 66, 128, 128, 128, 252, 3, 55, 3, 24, 32, 0, 66, 0, 55, 3, 16, 32, 0, 66, 128, 128, 128, 252, 3, 55, 3, 8, 32, 0, 65, 8, 106, 16, 139, 2, 33, 1, 32, 0, 65, 48, 106, 36, 0, 32, 1, 11, 50, 1, 1, 127, 2, 64, 32, 1, 4, 64, 32, 1, 32, 2, 65, 1, 106, 54, 2, 0, 32, 0, 32, 1, 54, 2, 4, 32, 0, 32, 1, 65, 4, 106, 54, 2, 0, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 60, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 12, 106, 32, 3, 56, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 68, 1, 2, 127, 35, 0, 65, 32, 107, 34, 0, 36, 0, 32, 0, 65, 24, 106, 66, 0, 55, 3, 0, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 8, 32, 0, 66, 0, 55, 3, 0, 32, 0, 66, 0, 55, 3, 16, 32, 0, 16, 179, 1, 33, 1, 32, 0, 65, 32, 106, 36, 0, 32, 1, 11, 57, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 46, 1, 1, 127, 2, 64, 32, 0, 4, 64, 32, 0, 32, 1, 54, 2, 0, 32, 0, 42, 2, 4, 32, 0, 65, 8, 106, 42, 2, 0, 16, 171, 2, 15, 11, 16, 175, 2, 0, 0, 11, 0, 16, 176, 2, 0, 11, 53, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 0, 55, 2, 0, 32, 0, 65, 16, 106, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 65, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 2, 0, 32, 0, 65, 16, 106, 65, 128, 128, 128, 252, 3, 54, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 57, 1, 2, 127, 35, 0, 65, 16, 107, 34, 4, 36, 0, 32, 4, 32, 3, 56, 2, 12, 32, 4, 32, 2, 56, 2, 8, 32, 4, 32, 1, 56, 2, 4, 32, 4, 32, 0, 56, 2, 0, 32, 4, 16, 254, 1, 33, 5, 32, 4, 65, 16, 106, 36, 0, 32, 5, 11, 51, 1, 1, 127, 32, 2, 4, 64, 32, 0, 33, 3, 3, 64, 32, 3, 32, 1, 45, 0, 0, 58, 0, 0, 32, 3, 65, 1, 106, 33, 3, 32, 1, 65, 1, 106, 33, 1, 32, 2, 65, 127, 106, 34, 2, 13, 0, 11, 11, 32, 0, 11, 65, 1, 2, 127, 35, 0, 65, 32, 107, 34, 0, 36, 0, 32, 0, 66, 0, 55, 3, 24, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 16, 32, 0, 66, 128, 128, 128, 252, 3, 55, 3, 8, 32, 0, 65, 8, 106, 16, 214, 1, 33, 1, 32, 0, 65, 32, 106, 36, 0, 32, 1, 11, 50, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 32, 1, 56, 2, 4, 32, 0, 65, 0, 54, 2, 0, 32, 0, 65, 8, 106, 32, 2, 56, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 50, 1, 2, 127, 35, 0, 65, 16, 107, 34, 3, 36, 0, 32, 3, 32, 2, 56, 2, 8, 32, 3, 32, 1, 56, 2, 4, 32, 3, 32, 0, 56, 2, 0, 32, 3, 16, 255, 1, 33, 4, 32, 3, 65, 16, 106, 36, 0, 32, 4, 11, 43, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 66, 0, 55, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 43, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 66, 0, 55, 2, 0, 32, 0, 65, 8, 106, 65, 0, 54, 2, 0, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 46, 1, 2, 127, 35, 0, 65, 16, 107, 34, 0, 36, 0, 32, 0, 65, 8, 106, 66, 0, 55, 3, 0, 32, 0, 66, 0, 55, 3, 0, 32, 0, 16, 254, 1, 33, 1, 32, 0, 65, 16, 106, 36, 0, 32, 1, 11, 41, 1, 2, 127, 65, 208, 0, 33, 2, 32, 0, 33, 1, 3, 64, 32, 1, 65, 0, 58, 0, 0, 32, 1, 65, 1, 106, 33, 1, 32, 2, 65, 127, 106, 34, 2, 13, 0, 11, 32, 0, 11, 51, 1, 2, 127, 35, 0, 65, 16, 107, 34, 0, 36, 0, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 8, 32, 0, 66, 0, 55, 3, 0, 32, 0, 16, 254, 1, 33, 1, 32, 0, 65, 16, 106, 36, 0, 32, 1, 11, 43, 1, 2, 127, 35, 0, 65, 16, 107, 34, 0, 36, 0, 32, 0, 65, 0, 54, 2, 8, 32, 0, 66, 0, 55, 3, 0, 32, 0, 16, 255, 1, 33, 1, 32, 0, 65, 16, 106, 36, 0, 32, 1, 11, 38, 1, 1, 127, 65, 12, 16, 3, 34, 2, 4, 64, 32, 2, 32, 1, 56, 2, 8, 32, 2, 32, 0, 56, 2, 4, 32, 2, 65, 0, 54, 2, 0, 32, 2, 15, 11, 0, 11, 55, 1, 2, 127, 35, 0, 65, 16, 107, 34, 0, 36, 0, 32, 0, 66, 128, 128, 128, 128, 128, 128, 128, 192, 63, 55, 3, 8, 32, 0, 66, 128, 128, 128, 252, 3, 55, 3, 0, 32, 0, 16, 254, 1, 33, 1, 32, 0, 65, 16, 106, 36, 0, 32, 1, 11, 37, 0, 2, 64, 32, 0, 4, 64, 32, 0, 40, 2, 0, 13, 1, 32, 0, 65, 0, 54, 2, 0, 32, 0, 16, 11, 15, 11, 16, 175, 2, 0, 11, 16, 176, 2, 0, 11, 11, 0, 32, 1, 4, 64, 32, 0, 16, 11, 11, 11, 13, 0, 65, 128, 128, 192, 0, 65, 27, 16, 177, 2, 0, 11, 14, 0, 65, 155, 128, 192, 0, 65, 207, 0, 16, 177, 2, 0, 11, 9, 0, 32, 0, 32, 1, 16, 0, 0, 11, 15, 0, 67, 0, 0, 0, 0, 67, 0, 0, 0, 0, 16, 171, 2, 11, 9, 0, 32, 0, 32, 1, 16, 171, 2, 11, 7, 0, 65, 200, 131, 192, 0, 11, 11, 210, 3, 2, 0, 65, 128, 128, 192, 0, 11, 131, 3, 110, 117, 108, 108, 32, 112, 111, 105, 110, 116, 101, 114, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 114, 117, 115, 116, 114, 101, 99, 117, 114, 115, 105, 118, 101, 32, 117, 115, 101, 32, 111, 102, 32, 97, 110, 32, 111, 98, 106, 101, 99, 116, 32, 100, 101, 116, 101, 99, 116, 101, 100, 32, 119, 104, 105, 99, 104, 32, 119, 111, 117, 108, 100, 32, 108, 101, 97, 100, 32, 116, 111, 32, 117, 110, 115, 97, 102, 101, 32, 97, 108, 105, 97, 115, 105, 110, 103, 32, 105, 110, 32, 114, 117, 115, 116, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 131, 249, 162, 0, 68, 78, 110, 0, 252, 41, 21, 0, 209, 87, 39, 0, 221, 52, 245, 0, 98, 219, 192, 0, 60, 153, 149, 0, 65, 144, 67, 0, 99, 81, 254, 0, 187, 222, 171, 0, 183, 97, 197, 0, 58, 110, 36, 0, 210, 77, 66, 0, 73, 6, 224, 0, 9, 234, 46, 0, 28, 146, 209, 0, 235, 29, 254, 0, 41, 177, 28, 0, 232, 62, 167, 0, 245, 53, 130, 0, 68, 187, 46, 0, 156, 233, 132, 0, 180, 38, 112, 0, 65, 126, 95, 0, 214, 145, 57, 0, 83, 131, 57, 0, 156, 244, 57, 0, 139, 95, 132, 0, 40, 249, 189, 0, 248, 31, 59, 0, 222, 255, 151, 0, 15, 152, 5, 0, 17, 47, 239, 0, 10, 90, 139, 0, 109, 31, 109, 0, 207, 126, 54, 0, 9, 203, 39, 0, 70, 79, 183, 0, 158, 102, 63, 0, 45, 234, 95, 0, 186, 39, 117, 0, 229, 235, 199, 0, 61, 123, 241, 0, 247, 57, 7, 0, 146, 82, 138, 0, 251, 107, 234, 0, 31, 177, 95, 0, 8, 93, 141, 0, 48, 3, 86, 0, 123, 252, 70, 0, 240, 171, 107, 0, 32, 188, 207, 0, 54, 244, 154, 0, 227, 169, 29, 0, 94, 97, 145, 0, 8, 27, 230, 0, 133, 153, 101, 0, 160, 20, 95, 0, 141, 64, 104, 0, 128, 216, 255, 0, 39, 115, 77, 0, 6, 6, 49, 0, 202, 86, 21, 0, 201, 168, 115, 0, 123, 226, 96, 0, 107, 140, 192, 0, 65, 139, 131, 192, 0, 11, 61, 64, 251, 33, 249, 63, 0, 0, 0, 0, 45, 68, 116, 62, 0, 0, 0, 128, 152, 70, 248, 60, 0, 0, 0, 96, 81, 204, 120, 59, 0, 0, 0, 128, 131, 27, 240, 57, 0, 0, 0, 64, 32, 37, 122, 56, 0, 0, 0, 128, 34, 130, 227, 54, 0, 0, 0, 0, 29, 243, 105, 53]))];
            });
        });
    }
    exports.init = init;
});
//# sourceMappingURL=module.js.map