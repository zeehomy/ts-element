/*
 * @Description: ES构建模式打包配置文件
 * @FilePath: \ts-element\vite.es.config.ts
 */
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'


// 遍历package.json, 读取dependencies
const dependenciesArr = Object.keys(require('./package.json').dependencies);

// 排除lodash-es
const externalDependenciesArr = dependenciesArr.filter(dependencieItem => {
  return dependencieItem !== 'lodash-es';
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(), // 如果需要
      },
    }),
    vueDevTools(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      // 配置生成类型声明文件的输出目录
      outDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist/es',         // 设置自己的输出目录
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TsElement',
      // 将添加适当的扩展名后缀
      fileName: 'ts-element',
      formats: ['es']           // 规定单一格式
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      // external: [     // 可通过遍历dependencies读取
      //   'vue',
      //   // 添加package.json中声明的依赖  lodash-es支持ES模块
      //   '@fortawesome/fontawesome-svg-core',
      //   '@fortawesome/free-solid-svg-icons',
      //   '@fortawesome/vue-fontawesome'
      // ],
      external: externalDependenciesArr,
      output: {
        // 移除为UMD服务的globals、exports: 'named'选项
        // 定制静态资源 style.css名称
        assetFileNames: (assetInfo) => {
          return assetInfo.name === 'style.css'
            ? 'index.css'
            : assetInfo.name as string;
        }
      },
    },
  }
})
