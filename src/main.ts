import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';

// Element Plus setup
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import pubsub from './utils/pubsub';
import { createRouter, createWebHistory } from 'vue-router';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $t: (text: string) => string,
      $isMobile: boolean,
      $pubsub: typeof pubsub
    }
  }

const app = createApp(App);

app.config.globalProperties.$pubsub = pubsub;

app.use(ElementPlus);
app.use(createRouter({
    history: createWebHistory(),
    routes: [ { path: '/', component: App } ],
}));

app.mount('#app');
