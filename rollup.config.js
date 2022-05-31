import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';

// const production = !process.env.ROLLUP_WATCH;

export default {
  input: './src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.esm.js',
  },
  plugins: [resolve(), sucrase({ transforms: ['typescript'] })],
};
