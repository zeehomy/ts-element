/*
 * @Description: 
 * @FilePath: \ts-element\vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts'

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
      tsconfigPath: './tsconfig.build.json'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TsElement',
      // 将添加适当的扩展名后缀
      fileName: 'ts-element',
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖
        // 提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 表示导出模块已经是命名导出
        exports: 'named'
      },
    },
  }
})
