import type { App, Plugin } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from './components/Button';
import Collapse, { CollapseItem } from './components/Collapse';

// 打包样式
import './styles/index.css';

// 初始化fontawesome
library.add(fas);

const components = [
  Button,
  Collapse,
  CollapseItem
];

// 函数形式
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name as string, component);
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