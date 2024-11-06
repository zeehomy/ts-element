/*
 * @Description: 
 * @FilePath: \ts-element\src\main.ts
 */
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import plugins from './test.plugin';

import TsElement, { Button } from './index';
import './styles/index.css';

library.add(fas);

createApp(App)
  .use(plugins, {
    greetings: {
      hello: 'Bonjour!'
    }
  })
  .use(TsElement)
  .use(Button)
  .mount('#app');
