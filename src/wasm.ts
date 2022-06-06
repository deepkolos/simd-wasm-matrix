interface WasmExports {
  matrix4_multiply(left: number, right: number, out: number): void;
  matrix4_determinant(ptr: number): number;
  matrix4_invert(ptr: number): void;
  matrix4_invert_transform(ptr: number): void;
  matrix4_transpose(ptr: number): void;
  matrix4_multiply_scalar(ptr: number, v: number): void;
  // malloc(size: number): number;
  // free(ptr: number): void;
  memory: WebAssembly.Memory;
  __data_end: WebAssembly.Global;
  __dso_handle: WebAssembly.Global;
  __global_base: WebAssembly.Global;
  __heap_base: WebAssembly.Global;
  __memory_base: WebAssembly.Global;
  __table_base: WebAssembly.Global;
}

export let instanceSource: WebAssembly.WebAssemblyInstantiatedSource;
export let wasmExports: WasmExports;
export let wasmMemory: WebAssembly.Memory;
export let wasmMemoryBuffer: ArrayBuffer;
export let storeDataInWasm = false;

/**
 * 所分配heap内存最小未被使用指针            ⬇️
 * | used 2*4 | free 3*4 | used 2*4 | pointer
 */
let allocedMemoryTailPointer: number;

/**
 * 用于当相同size的被释放出空间时, 找更大size的被释放空间
 * 目前只为数学库服务所以固定(2 3 4 9 16) * 4字节
 */
const sortedAllocatedSizeArray: Array<number> = [2 * 4, 3 * 4, 4 * 4, 9 * 4, 16 * 4];
const sortedAllocatedSizeIndex = new Map<number, number>([
  [2 * 4, 0],
  [3 * 4, 1],
  [4 * 4, 2],
  [9 * 4, 3],
  [16 * 4, 4],
]);
const freedMemory = new Map<number, Array<number>>();
const allocatedMemory = new Map<number, number>();
let lastGrow = 8;

export async function init({ wasm = '', simdWasm = '', noSIMD = false } = {}): Promise<void> {
  if (window.FinalizationRegistry) storeDataInWasm = true;
  try {
    instanceSource = await WebAssembly.instantiateStreaming(fetch(noSIMD ? wasm : simdWasm));
    console.info(noSIMD ? 'not using simd' : 'using simd');
  } catch (error) {
    instanceSource = await WebAssembly.instantiateStreaming(fetch(wasm));
    console.info('not using simd');
  } finally {
    wasmExports = instanceSource.instance.exports as unknown as WasmExports;
    wasmMemory = wasmExports.memory;
    wasmMemoryBuffer = wasmMemory.buffer;
    allocedMemoryTailPointer = wasmExports.__heap_base.value;
  }
}

/**
 * 一维空间的小内存分配器, (2 3 4 9 16) * 4字节
 */
export function malloc(size: number): number {
  // 动态size时需扩展
  // if (!sortedAllocatedSizeArray.includes(size)) {
  //   sortedAllocatedSizeArray.push(size);
  //   sortedAllocatedSizeArray.sort((a, b) => a - b);
  // }
  let ptr: number = 0;

  // 优先从被释放的内存中分配
  const maxSizeIndex = sortedAllocatedSizeArray.length;
  if (freedMemory.size) {
    // 找合适的被释放的内存区块
    let sizeIndex: number = sortedAllocatedSizeIndex.get(size);
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
  if (allocedMemoryTailPointer + size > wasmMemoryBuffer.byteLength) {
    wasmMemory.grow((lastGrow *= 2));
    wasmMemoryBuffer = wasmMemory.buffer;
  }

  ptr = allocedMemoryTailPointer;
  allocedMemoryTailPointer += size;
  allocatedMemory.set(ptr, size);

  return ptr;
}

export function free(ptr: number): void {
  if (allocatedMemory.has(ptr)) {
    const size = allocatedMemory.get(ptr);
    if (!freedMemory.has(size)) freedMemory.set(size, [ptr]);
    else freedMemory.get(size).push(ptr);
    allocatedMemory.delete(ptr);
  }
}

export const wasmRegistry = new FinalizationRegistry((ptr: number) => {
  free(ptr);
  // console.log('free ptr', ptr);
});
