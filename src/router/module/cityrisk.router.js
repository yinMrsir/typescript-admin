import Layout from '../../layout/index.vue';
import RouterView from '../../components/RouterView.vue'

const cityRiskRouter = {
  path: '/city-risk',
  name: 'CityRisk',
  component: Layout,
  redirect: '/city-risk/risk-analysis/add',
  meta: {
    title: '市级风险管理',
    icon: 'el-icon-s-management',
  },
  children: [
    {
      path: 'risk-analysis',
      component: RouterView,
      meta: {
        title: '风险分析',
      },
      children: [
        {
          path: 'add',
          name: 'CityRiskAnalysisAdd',
          meta: {
            title: '任务发起'
          },
          component: () => import('@/views/city-risk/risk-analysis/add.vue')
        },
        {
          path: 'list',
          name: 'CityRiskAnalysisList',
          meta: {
            title: '任务查询'
          },
          component: () => import('@/views/city-risk/risk-analysis/list.vue')
        }
      ]
    }
  ],
};

export default cityRiskRouter
