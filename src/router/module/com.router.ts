const comRouter = {
  path: '/com',
  name: 'Com',
  component: 'Layout',
  redirect: '/com/layout/base',
  meta: {
    title: '组件',
    icon: 'el-icon-s-management',
  },
  children: [
    {
      path: 'layout',
      component: 'RouterViewLayout',
      name: 'ComLayout',
      meta: {
        title: '布局',
      },
      children: [
        {
          path: 'base',
          name: 'ComLayoutBase',
          meta: {
            title: '基础布局',
          },
          component: 'com/layout/base',
        },
      ],
    },
    {
      path: 'button',
      name: 'Button',
      component: 'com/button',
      meta: {
        title: '按钮',
      },
    },
  ],
};

export default comRouter;
