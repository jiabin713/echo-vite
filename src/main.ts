import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
// app.use(i18n);
// app.use(globalComponents);

app.mount('#app');
