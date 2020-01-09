import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';
/* Router modules */
import Layout from '@/layout/index.vue';

Vue.use(Router);

/**
 * 没有权限要求的基本页
 * 可以访问所有角色
 */
export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/',
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'el-icon-s-home',
      affix: true,
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: () => import('../views/login/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {hidden: true},
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {hidden: true},
  },
];


const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

const router = createRouter();

export default router;
