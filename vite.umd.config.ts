/*
 * @Description: UMD构建模式打包配置文件
 * @FilePath: \ts-element\vite.umd.config.ts
 */
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(), // 如果需要
      },
    }),
    // 不需要打包类型文件
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist/umd',       // 设置自己的输出目录
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TsElement',
      // 将添加适当的扩展名后缀
      fileName: 'ts-element',
      formats: ['umd']        // 规定单一格式
    },
    rollupOptions: {
      // 确保外部化处理那些
      // 你不想打包进库的依赖
      external: [
        'vue',            // 只把vue作为外部依赖，其他都打包在内
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖
        // 提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 表示导出模块已经是命名导出
        exports: 'named',
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
