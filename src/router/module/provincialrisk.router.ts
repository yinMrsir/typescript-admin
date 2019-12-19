import Layout from '../../layout/index.vue';
import RouterViewLayout from '../../components/RouterViewLayout.vue';

const provincialRiskRouter = {
  path: '/provincial-risk',
  name: 'ProvincialRisk',
  component: Layout,
  redirect: '/provincial-risk/risk-analysis/add',
  meta: {
    title: '省级管理',
    icon: 'el-icon-s-finance',
  },
  children: [
    {
      path: 'risk-analysis',
      name: 'RiskAnalysis',
      meta: {
        title: '风险分析',
      },
      component: RouterViewLayout,
      children: [
        {
          path: 'add',
          name: 'ProvincialRiskAnalysisAdd',
          meta: {
            title: '任务发起',
          },
          component: () => import('@/views/provincial-risk/risk-analysis/add.vue'),
        },
        {
          path: 'list',
          name: 'ProvincialRiskAnalysisList',
          meta: {
            title: '任务查询',
          },
          component: () => import('@/views/provincial-risk/risk-analysis/list.vue'),
        },
      ],
    },
  ],
};

export default provincialRiskRouter;
