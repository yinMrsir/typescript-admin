import Layout from '../../layout/index.vue';

export default {
  path: '/',
  component: Layout,
  meta: {
    title: 'd3.js图库',
    icon: 'el-icon-s-data',
  },
  children: [
    {
      path: '/simple-bar-chart',
      name: 'simpleBarChart',
      meta: {
        title: '简单柱状图',
      },
      component: () => import('@/views/chart/simple-bar-chart.vue'),
    },
  ],
};
