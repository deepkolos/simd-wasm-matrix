let instanceSource;
let wasmExports;
let wasmMemory;
let wasmMemoryBuffer;
let storeDataInWasm = false;

/**
 * 所分配heap内存最小未被使用指针            ⬇️
 * | used 2*4 | free 3*4 | used 2*4 | pointer
 */
let allocedMemoryTailPointer;

/**
 * 用于当相同size的被释放出空间时, 找更大size的被释放空间
 * 目前只为数学库服务所以固定(2 3 4 9 16) * 4字节
 */
const sortedAllocatedSizeArray = [2 * 4, 3 * 4, 4 * 4, 9 * 4, 16 * 4];
const sortedAllocatedSizeIndex = new Map([
  [2 * 4, 0],
  [3 * 4, 1],
  [4 * 4, 2],
  [9 * 4, 3],
  [16 * 4, 4],
]);
const freedMemory = new Map();
const allocatedMemory = new Map();
let lastGrow = 8;

async function init({ wasm = '', simdWasm = '' } = {}) {
  if (window.FinalizationRegistry) storeDataInWasm = true;
  try {
    instanceSource = await WebAssembly.instantiateStreaming(fetch(simdWasm));
    console.info('using simd');
  } catch (error) {
    instanceSource = await WebAssembly.instantiateStreaming(fetch(wasm));
    console.info('using none simd');
  } finally {
    wasmExports = instanceSource.instance.exports ;
    wasmMemory = wasmExports.memory;
    wasmMemoryBuffer = wasmMemory.buffer;
    allocedMemoryTailPointer = wasmExports.__heap_base.value;
  }
}

/**
 * 一维空间的小内存分配器, (2 3 4 9 16) * 4字节
 */
function malloc(size) {
  // 动态size时需扩展
  // if (!sortedAllocatedSizeArray.includes(size)) {
  //   sortedAllocatedSizeArray.push(size);
  //   sortedAllocatedSizeArray.sort((a, b) => a - b);
  // }
  let ptr = 0;

  // 优先从被释放的内存中分配
  const maxSizeIndex = sortedAllocatedSizeArray.length;
  if (freedMemory.size) {
    // 找合适的被释放的内存区块
    let sizeIndex = sortedAllocatedSizeIndex.get(size);
    let freedSizeArray = freedMemory.get(sortedAllocatedSizeArray[sizeIndex]);
    while (sizeIndex < maxSizeIndex && (!freedSizeArray || !freedSizeArray.length)) {
      sizeIndex++;
      freedSizeArray = freedMemory.get(sortedAllocatedSizeArray[sizeIndex]);
    }
    // 找到
    if (sizeIndex !== maxSizeIndex) {
      const freedSize = sortedAllocatedSizeArray[sizeIndex];
      ptr = freedMemory.get(freedSize).pop();
      // 目前简单把整个区块占用, TODO 做拆分
      allocatedMemory.set(ptr, freedSize);
      return ptr;
    }
  }

  // 检测tail是否可分配
  if (allocedMemoryTailPointer + size > wasmMemory.buffer.byteLength) {
    wasmMemory.grow(lastGrow *= 2);
    wasmMemoryBuffer = wasmMemory.buffer;
  }

  ptr = allocedMemoryTailPointer;
  allocedMemoryTailPointer += size;
  allocatedMemory.set(ptr, size);

  return ptr;
}

function free(ptr) {
  if (allocatedMemory.has(ptr)) {
    const size = allocatedMemory.get(ptr);
    if (!freedMemory.has(size)) freedMemory.set(size, [ptr]);
    else freedMemory.get(size).push(ptr);
    allocatedMemory.delete(ptr);
  }
}

const wasmRegistry = new FinalizationRegistry((ptr) => {
  free(ptr);
  // console.log('free ptr', ptr);
});

class Matrix4 {
  
  

  constructor() {
    this.ptr = malloc(16 * 4);
    this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
    this.identity();
    wasmRegistry.register(this, this.ptr);
  }

  // --------- operation ---------

  multiply(mat) {
    wasmExports.matrix4_multiply(this.ptr, mat.ptr, this.ptr);
    return this;
  }
  premultiply(mat) {
    wasmExports.matrix4_multiply(mat.ptr, this.ptr, this.ptr);
    return this;
  }
  multiplyMatrices(a, b) {
    wasmExports.matrix4_multiply(a.ptr, b.ptr, this.ptr);
    return this;
  }

  determinant() {
    return wasmExports.matrix4_determinant(this.ptr);
  }
  transpose() {
    wasmExports.matrix4_transpose(this.ptr);
    return this;
  }
  invert() {
    wasmExports.matrix4_invert(this.ptr);
    return this;
  }
  invertTransform() {
    wasmExports.matrix4_invert_transform(this.ptr);
    return this;
  }

  // --------- getter setter ---------

  get elements() {
    if (!this._elements.length) {
      this._elements = new Float32Array(wasmMemoryBuffer, this.ptr, 16);
    }
    return this._elements;
  }

  // prettier-ignore
  set(
    n11, n12, n13, n14, 
    n21, n22, n23, n24, 
    n31, n32, n33, n34, 
    n41, n42, n43, n44,
  ) {
    const te = this.elements;
    te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14; 
    te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24; 
    te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34; 
    te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
    return this;
  }
  identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  }
  clone() {
    return new Matrix4().fromArray(this.elements);
  }
  // prettier-ignore
  copy(m) {
    const te = this.elements;
    const me = m.elements;
    te[0] = me[0]; te[1] = me[1]; te[2] = me[2]; te[3] = me[3]; 
    te[4] = me[4]; te[5] = me[5]; te[6] = me[6]; te[7] = me[7]; 
    te[8] = me[8]; te[9] = me[9]; te[10] = me[10]; te[11] = me[11]; 
    te[12] = me[12]; te[13] = me[13]; te[14] = me[14]; te[15] = me[15];
    return this;
  }
  copyPosition(m) {
    const te = this.elements,
      me = m.elements;
    te[12] = me[12];
    te[13] = me[13];
    te[14] = me[14];
    return this;
  }
  fromArray(array, offset = 0) {
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

export { Matrix4, free, init, instanceSource, malloc, storeDataInWasm, wasmExports, wasmMemory, wasmMemoryBuffer, wasmRegistry };
