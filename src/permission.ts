import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {UserModule} from './store/modules/user';
import {PermissionModule} from '@/store/modules/permission';

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (UserModule.token) {
    if (to.path === '/login') {
      next({path: '/'});
    } else {
      if (PermissionModule.isNeedGetRoutes) {   // 是否需要重新获取左侧菜单
        PermissionModule.GenerateRoutes().then(() => {
          const newRouter = PermissionModule.dynamicRoutes;
          newRouter.push({
            path: '*',
            redirect: '/404',
            meta: {hidden: true},
          });
          router.addRoutes(newRouter);
          next({...to, replace: true});
        });
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login`);
    }
  }
});

router.afterEach((to) => {
  NProgress.done();
});
