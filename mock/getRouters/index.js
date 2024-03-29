const comModule = {
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
    {
      path: 'consanguinity',
      name: 'Consanguinity',
      component: 'com/consanguinity',
      meta: {
        title: '机构血缘图',
      },
    },
  ],
};
const chartModule = {
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
}
const appModule = {
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
}
const setModule = {
  path: '/set',
  component: 'Layout',
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
      component: 'RouterViewLayout',
      children: [
        {
          path: 'website',
          name: 'Website',
          meta: {
            title: '网站设置',
          },
          component: 'set/system/website',
        },
        {
          path: 'email',
          name: 'Email',
          meta: {
            title: '邮件设置',
          },
          component: 'set/system/email',
        },
      ],
    },
    {
      path: 'user',
      name: 'User',
      meta: {
        title: '我的设置',
      },
      component: 'RouterViewLayout',
      children: [
        {
          path: 'info',
          name: 'Info',
          meta: {
            title: '基本资料',
          },
          component: 'set/user/info',
        },
        {
          path: 'password',
          name: 'Password',
          meta: {
            title: '修改密码',
          },
          component: 'set/user/password',
        },
      ],
    },
  ],
}
const errPageModule = {
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
}

module.exports = req => {
  return {
    code: 200,
    data: {
      asyncRoutes: req.headers.authorization === 'admin' ? [
        comModule,
        chartModule,
        appModule,
        setModule,
        errPageModule
      ] : [
        comModule,
        chartModule,
        appModule
      ]
    }
  }
}
