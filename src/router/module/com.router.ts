import Layout from '../../layout/index.vue';
import RouterViewLayout from '../../components/RouterViewLayout.vue';

const comRouter = {
  path: '/com',
  name: 'Com',
  component: Layout,
  redirect: '/com/layout/base',
  meta: {
    title: '组件',
    icon: 'el-icon-s-management',
  },
  children: [
    {
      path: 'layout',
      component: RouterViewLayout,
      meta: {
        title: '布局',
      },
      children: [
        {
          path: 'add',
          name: 'ComLayoutBase',
          meta: {
            title: '基础布局',
          },
          component: () => import('@/views/com/layout/base.vue'),
        },
      ],
    },
    {
      path: 'icon',
      name: 'Icon',
      component: () => import('@/views/com/icon.vue'),
      meta: {
        title: '图标',
      },
    },
  ],
};

export default comRouter;
