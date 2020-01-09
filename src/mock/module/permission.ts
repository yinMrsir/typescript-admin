import AppRouter from '@/router/module/app.router';
import SetRouter from '@/router/module/set.router';
import ChartRouter from '@/router/module/chart.router';
import ComRouter from '@/router/module/com.router';
import ErrPageRouter from '@/router/module/errpage.router';
import {getRequest} from '@/utils';

/**
 * 需要根据用户角色动态加载的路由
 */

export default {
  getRouters(params: {url: string}) {
    const token = getRequest(params.url, 'token');
    const asyncRoutes = token === 'admin' ? [
      ComRouter,
      ChartRouter,
      AppRouter,
      SetRouter,
      ErrPageRouter,
    ] : [
      ComRouter,
      AppRouter,
      SetRouter,
    ];
    return {
      code: 200,
      asyncRoutes,
    };
  },
};
