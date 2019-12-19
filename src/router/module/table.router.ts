import Layout from '../../layout/index.vue';

export default {
  path: '/table',
  component: Layout,
  meta: {
    title: '表格',
    icon: 'el-icon-s-grid',
  },
  children: [
    {
      path: 'simple',
      name: 'simpleTable',
      meta: {
        title: '简单数据表格',
      },
      component: () => import('@/views/table/simple.vue'),
    },
  ],
};
