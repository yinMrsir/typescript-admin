import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {UserModule} from './store/modules/user';

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (UserModule.token) {
    if (to.path === '/login') {
      next({path: '/'});
    } else {
      next();
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
