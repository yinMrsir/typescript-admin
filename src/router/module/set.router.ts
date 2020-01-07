import Layout from '../../layout/index.vue';
import RouterViewLayout from '@/components/RouterViewLayout.vue';

export default {
  path: '/set',
  component: Layout,
  name: 'Set',
  meta: {
    title: '设置',
    icon: 'el-icon-s-tools',
  },
  children: [
    {
      path: 'system',
      name: 'System',
      meta: {
        title: '系统设置',
      },
      component: RouterViewLayout,
      children: [
        {
          path: 'website',
          name: 'Website',
          meta: {
            title: '网站设置',
          },
          component: () => import('@/views/set/system/website.vue'),
        },
        {
          path: 'email',
          name: 'Email',
          meta: {
            title: '邮件设置',
          },
          component: () => import('@/views/set/system/email.vue'),
        },
      ],
    },
    {
      path: 'user',
      name: 'User',
      meta: {
        title: '我的设置',
      },
      component: RouterViewLayout,
      children: [
        {
          path: 'info',
          name: 'Info',
          meta: {
            title: '基本资料',
          },
          component: () => import('@/views/set/user/info.vue'),
        },
        {
          path: 'password',
          name: 'Password',
          meta: {
            title: '修改密码',
          },
          component: () => import('@/views/set/user/password.vue'),
        },
      ],
    },
  ],
};
