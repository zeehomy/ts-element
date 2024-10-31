/*
 * @Description: 
 * @FilePath: \ts-element\src\components\Button\index.ts
 */
import type { App } from 'vue';
import Button from './index.vue';

console.log('Button.name', Button.name);
Button.install = (app: App) => {
  app.component(Button.name || 'no name button', Button);
};

export default Button;

export * from './types';