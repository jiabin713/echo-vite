import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
// import globalComponents from '@/components';
import router from './router';
import store from './store';
import i18n from './locale';
import './mock';
import App from './App';
import '@/assets/style/global.less';
import '@/api/interceptor';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

app.use(router);
app.use(store);
app.use(i18n);
// app.use(globalComponents);

app.mount('#app');
