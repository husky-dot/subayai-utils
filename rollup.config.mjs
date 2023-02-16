import path from 'path';
import ts from 'rollup-plugin-typescript2';
// 开发服务器
import serve from 'rollup-plugin-serve';
// 自己加载
import livereload from 'rollup-plugin-livereload';
// 在node_模块中查找并绑定第三方依赖项
import resolve from '@rollup/plugin-node-resolve';
// 将CommonJS模块转换为ES6
import commonjs from '@rollup/plugin-commonjs';
// rollup babel插件
import { babel } from '@rollup/plugin-babel';
// 优化代码
import { terser } from 'rollup-plugin-minification';
// 将json 文件转换为ES6 模块
import json from '@rollup/plugin-json';
// 自动帮你生成类型声明文件 *.d.ts
import dts from 'rollup-plugin-dts';
// 删除工具
import del from 'rollup-plugin-delete';
import pkg from './package.json';

// 判断是是否为生产环境
// 开发环境or生产环境
const isPro = function () {
  return process.env.NODE_ENV === 'production';
};

const extensions = ['.jsx', '.ts', '.tsx', '.less'];
const banner = `/*!
* ${pkg.name} ${pkg.version}
* author: xiaozhi
* Licensed under MIT
*/
`;

export default [
  {
    input: path.resolve('./index.ts'),
    output: [
      {
        file: pkg.unpkg,
        format: 'umd',
        name: pkg.jsname,
        sourcemap: true,
        banner,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
        banner,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        banner,
      },
    ],
    plugins: [
      resolve(), //快速查找外部模块
      commonjs(), //将CommonJS转换为ES6模块
      json(), //将json转换为ES6模块
      //ts编译插件
      ts({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        extensions: extensions,
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件,
        babelHelpers: 'runtime', // 使plugin-transform-runtime生效
      }),

      isPro() && terser(),
      !isPro() &&
        serve({
          open: false,
          port: 9530,
          contentBase: './',
          openPage: '/examples/index.html',
        }),
      !isPro() && livereload('examples'),
    ],
  },
  {
    // 生成 .d.ts 类型声明文件
    input: path.resolve('./index.ts'),
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [
      dts.default(),
      del({
        targets: ['./dist/src'],
        hook: 'buildEnd',
      }),
    ],
  },
];
