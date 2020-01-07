import Layout from '../../layout/index.vue';
import RouterViewLayout from '@/components/RouterViewLayout.vue';

export default {
  path: '/app',
  component: Layout,
  name: 'App',
  meta: {
    title: '应用',
    icon: 'el-icon-s-grid',
  },
  children: [
    {
      path: 'content',
      name: 'AppContent',
      component: RouterViewLayout,
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
          component: () => import('@/views/app/content/list.vue'),
        },
      ],
    },
    {
      path: 'message',
      name: 'AppMessage',
      meta: {
        title: '消息中心',
      },
      component: () => import('@/views/app/message.vue'),
    },
  ],
};
