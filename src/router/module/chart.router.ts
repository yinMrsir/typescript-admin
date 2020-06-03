export default {
  path: '/chart',
  component: 'Layout',
  name: 'Chart',
  meta: {
    title: '图库',
    icon: 'el-icon-s-data',
  },
  children: [
    {
      path: 'simple-bar-chart',
      name: 'simpleBarChart',
      meta: {
        title: '简单柱状图',
      },
      component: 'chart/simple-bar-chart',
    },
  ],
};
