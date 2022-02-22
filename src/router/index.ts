/*
 * @File  : \oa-system\src\router\index.ts
 * @Author: YNF
 * @Create: 2022-02-15 10:58:53
 * @Update: 2022-02-15 17:23:50
 */

import { createRouter, createWebHashHistory } from 'vue-router';
import User from '@/views/user/index.vue';

const routes = [
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        redirect: '/login',
      },
      {
        path: '/login',
        component: () =>
          import(/* user-login */ '@/views/user/components/Login.vue'),
      },
      {
        path: '/register',
        component: () =>
          import(/* user-register */ '@/views/user/components/Register.vue'),
      },
      {
        path: '/forget',
        component: () =>
          import(/* user-forget */ '@/views/user/components/Forget.vue'),
      },
    ],
  },
  {
    path: '/layout',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
