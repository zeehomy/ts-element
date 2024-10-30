/*
 * @Description: 
 * @FilePath: \ts-element\src\test.plugin.ts
 */
import type { App, Plugin } from 'vue';
import Button from './components/Button/index.vue';

const plugins: Plugin = {
  install: (app: App, options: any) => {

    // 定义全局属性
    app.config.globalProperties.$translate = (key: string) => {

      const keyArr = key.split('.');
      const result: string = keyArr.reduce((total: string, item: string) => {

        if (total) {
          return total[item];
        }

      }, options);

      return result;
    };

    // 定义全局provide
    app.provide('i18n', options);

    // 全局组件
    app.component('ts-button', Button);
  }
};

export default plugins;