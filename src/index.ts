import type { App, Plugin } from 'vue';
import Button from './components/Button';
import Collapse, { CollapseItem } from './components/Collapse';

const components = [
  Button,
  Collapse,
  CollapseItem
];

// 函数形式
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component);
  });
};

// 带有install属性的Plugin对象形式 注册全局组件
const TsElementPlugin: Plugin = {
  install
};

export {
  install,
  Button,
  Collapse,
  CollapseItem
};

// export default TsElementPlugin;  // 或直接导出install
export default install;