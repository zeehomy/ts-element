/*
 * @Description: 
 * @FilePath: \ts-element\src\components\Button\index.ts
 */
import type { App } from 'vue';
import Button from './index.vue';

Button.install = (app: App) => {
  app.component(Button.name as string, Button);
};

export default Button;

export * from './types';