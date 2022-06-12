# simd-wasm-matrix

一个有 simd 加速和自动 GC 的 matrix 数学库

## 特性

- malloc/free 由 JS 侧实现, wasm 内存更加紧凑

## 内存管理

- 方式一: 数据存储 wasm 内存中, 依赖 FinalizationRegistry 回收内存
- 方式二: 数据存储 JS 侧, wasm 侧提供固定大小缓存区块, 未命中缓存时需复制到 wasm 内存, 读取时需要同步 wasm 到 js 数据

## 性能

**需关闭 devtools 测试** LoopCount: 10^6

> THREE.Matrix4.invertTransform 测试代码 patch 上去的

| function         | simd-wasm-matrix | gl-matrix-wasm | gl-matrix | three   |
| ---------------- | ---------------- | -------------- | --------- | ------- |
| instancing[10^5] | 29.10ms          | 27.30ms        | 5.30ms    | 1.90ms  |
| multiply         | 17.40ms          | 31.40ms        | 45.90ms   | 34.70ms |
| multiplyScalar   | 11.90ms          | 21.60ms        | 21.00ms   | 11.50ms |
| determinant      | 16.70ms          | 25.90ms        | 10.80ms   | 26.40ms |
| invert           | 28.50ms          | 40.00ms        | 48.60ms   | 47.80ms |
| invertTransform  | 15.70ms          |                |           | 20.50ms |
| transpose        | 13.50ms          | 19.60ms        | 13.00ms   | 11.50ms |

## 体积

| name             | version | js(min) | wasm | simd wasm | total size |
| ---------------- | ------- | ------- | ---- | --------- | ---------- |
| simd-wasm-matrix | dev     |         |      |           |            |
| gl-matrix        | 3.4.3   | 51k     |      |           | 51k        |
| gl-matrix-wasm   | 0.8.0   | 27k     | 81k  |           | 108k       |

## 开发

```sh
> pnpm i
> pnpm b:cpp
> pnpm b:ts
> pnpm srv
```

## TODO

# 赞助

如果项目对您有帮助或者有适配需求，欢迎打赏

<img src="https://upload-images.jianshu.io/upload_images/252050-d3d6bfdb1bb06ddd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="赞赏码" width="300">

# License

MIT 造轮子锻炼抽象能力
