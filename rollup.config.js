import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babelSrc from './.babelrc.json' assert { type: 'json' };
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      getBabelOutputPlugin(babelSrc),
      terser(),
      commonjs({
        include: ['node_modules/**'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/examples/**'],
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/styles.css',
    output: [
      {
        file: 'dist/style.css',
        format: 'es',
      },
    ],
    plugins: [
      postcss({
        extract: true,
        plugins: [autoprefixer(), cssnanoPlugin()],
      }),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [
      dts.default(),
      copy({
        targets: [{ src: 'LICENSE', dest: 'dist' }],
      }),
    ],
  },
];
