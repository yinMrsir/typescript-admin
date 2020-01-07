import Vue from 'vue';
import Router, {RouteConfig} from 'vue-router';
/* Router modules */
import Layout from '@/layout/index.vue';

Vue.use(Router);

const routerList: RouteConfig[] = [];

function importAll(r: any) {
  r.keys().forEach((key: any) => {
    routerList.push(r(key).default);
  });
}

const requireComponent = require.context('./module', false, /\.router\.ts$/);
importAll(requireComponent);

/**
 * 没有权限要求的基本页
 * 可以访问所有角色
 */
export const constantRoutes: RouteConfig[] = [
  {
    path: '',
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

/**
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes: RouteConfig[] = [
  ...routerList,
  {
    path: '/errpage',
    name: 'errPage',
    meta: {
      title: '错误页面',
      icon: 'el-icon-warning',
    },
    component: Layout,
    children: [
      {
        path: '404',
        name: 'page404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {title: '404'},
      },
      {
        path: '401',
        name: 'page401',
        component: () => import('@/views/error-page/401.vue'),
        meta: {title: '401'},
      },
    ],
  },
];

const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

const router = createRouter();

router.addRoutes(asyncRoutes);

export default router;
