export default {
  path: '/app',
  component: 'Layout',
  name: 'App',
  meta: {
    title: '应用',
    icon: 'el-icon-s-grid',
  },
  children: [
    {
      path: 'content',
      name: 'AppContent',
      component: 'RouterViewLayout',
      meta: {
        title: '内容系统',
      },
      children: [
        {
          path: 'list',
          name: 'AppContentList',
          meta: {
            title: '文章列表',
          },
          component: 'app/content/list',
        },
      ],
    },
    {
      path: 'message',
      name: 'AppMessage',
      meta: {
        title: '消息中心',
      },
      component: 'app/message',
    },
    {
      path: 'design',
      name: 'Design',
      meta: {
        title: '可视化界面',
      },
      component: 'app/design',
    },
  ],
};
