import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import Login from './modules/login';
import appRoutes from './modules';
import PageLayout from '@/layout/PageLayout';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   redirect: 'login',
    // },
    // Login,
    {
      name: 'root',
      path: '/system',
      component: PageLayout,
      children: appRoutes,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  await next();
  NProgress.done();
});

export default router;
