export default {
  path: '/err-page',
  name: 'errPage',
  meta: {
    title: '错误页面',
    icon: 'el-icon-warning',
  },
  component: 'Layout',
  children: [
    {
      path: '404',
      name: 'page404',
      component: 'error-page/404',
      meta: {title: '404'},
    },
    {
      path: '401',
      name: 'page401',
      component: 'error-page/401',
      meta: {title: '401'},
    },
  ],
};
