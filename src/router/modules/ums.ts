export default {
  path: 'ums',
  name: 'system',
  component: () => import('@/views/ums/index.vue'),
  meta: {
    locale: 'menu.ums',
    requiresAuth: true,
    icon: 'icon-user-group',
  },
  children: [
    {
      path: 'staff',
      name: 'staff',
      component: () => import('@/views/ums/staff/index.vue'),
      meta: {
        locale: 'menu.ums.staff',
        requiresAuth: true,
      },
    },
    // {
    //   path: 'role',
    //   name: 'role',
    //   component: () => import('@/views/ums/role/index.vue'),
    //   meta: {
    //     locale: 'menu.ums.role',
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: 'menu',
    //   name: 'menu',
    //   component: () => import('@/views/ums/menu/index.vue'),
    //   meta: {
    //     locale: 'menu.ums.menu',
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: 'organization',
    //   name: 'organization',
    //   component: () => import('@/views/ums/organization/index.vue'),
    //   meta: {
    //     locale: 'menu.ums.organization',
    //     requiresAuth: true,
    //   },
    // },
  ],
};
