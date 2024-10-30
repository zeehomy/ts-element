/*
 * @Description: 
 * @FilePath: \ts-element\src\main.ts
 */
// import './assets/main.css'
import './styles/index.css';

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import plugins from './test.plugin';

library.add(fas);

createApp(App)
  .use(plugins, {
    greetings: {
      hello: 'Bonjour!'
    }
  })
  .mount('#app');
