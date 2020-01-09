import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {RouteConfig} from 'vue-router';
import {constantRoutes} from '@/router';
import store from '@/store';
import {permissionApi} from '@/api';
import Layout from '@/layout/index.vue';
import RouterViewLayout from '@/components/RouterViewLayout.vue';
import {UserModule} from '@/store/modules/user';

const importFunction = (file: string) => require('@/views/' + file + '.vue').default; // 获取组件的方法

export interface IPermissionState {
  routes: RouteConfig[];
  dynamicRoutes: RouteConfig[];
  isNeedGetRoutes: boolean;
}

@Module({dynamic: true, store, name: 'permission'})
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteConfig[] = [];
  public dynamicRoutes: RouteConfig[] = [];
  public isNeedGetRoutes: boolean = true;

  @Mutation
  private SET_ROUTES(routes: RouteConfig[]) {
    this.routes = constantRoutes.concat(routes);
    this.dynamicRoutes = routes;
  }

  @Mutation
  public SET_ISNEEDGETROUTES(value: boolean) {
    this.isNeedGetRoutes = value;
  }

  @Action
  public GenerateRoutes() {
    return new Promise(async (resolve) => {
      const data: any = await permissionApi.getRouters({token: UserModule.token});
      const asyncRoutes = filterAsyncRouter(data.asyncRoutes);
      this.SET_ROUTES(asyncRoutes);
      this.SET_ISNEEDGETROUTES(false);
      resolve(true);
    });
  }
}

function filterAsyncRouter(asyncRouterMap: any) { // 遍历后台传来的路由字符串，转换为组件对象
  return asyncRouterMap.filter((route: any) => {
    if (route.component) {
      if (route.component === 'Layout') { // Layout组件特殊处理
        route.component = Layout;
      } else if (route.component === 'RouterViewLayout') {
        route.component = RouterViewLayout;
      } else {
        route.component = importFunction(route.component);
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
}

export const PermissionModule = getModule(Permission);
