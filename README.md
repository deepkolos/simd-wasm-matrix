# simd-wasm-matrix

一个有 simd 加速和自动 GC 的 matrix 数学库

## 内存管理

- 方式一: 数据存储 wasm 内存中, 依赖 FinalizationRegistry 回收内存
- 方式二: 数据存储 JS 侧, wasm 侧提供固定大小缓存区块, 未命中缓存时需复制到 wasm 内存, 读取时需要同步 wasm 到 js 数据

## 性能

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
