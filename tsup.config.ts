import { defineConfig } from 'tsup';
import glob from 'fast-glob';

const components = glob.sync('src/components/**/*.tsx', { absolute: true });

export default defineConfig({
  entry: [...components],
  format: ['esm'],
  dts: true,
  minify: true,
  clean: true,
  target: 'es2017',
  external: ['react', 'react-dom'],
  splitting: true,
  shims: false,   
  outDir: 'dist',
});