import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import {aesEncode} from '@/utils/validate';
import store from '@/store';
import {userApi} from '@/api';
import {Message} from 'element-ui';
import {PermissionModule} from '@/store/modules/permission';
import {
  setToken,
  getToken,
  removeToken,
  setRememberUser,
  getRememberUser,
  removeRememberUser,
  getUserInfo,
  setUserInfo,
  removeUserInfo,
} from '@/utils/cookies';

export interface IUserState {
  token: string;
  userInfo: string;
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
  public token = getToken() || '';
  public userInfo = getUserInfo() || '';
  public rememberUser = getRememberUser() || '';

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_USERINFO(userInfo: string) {
    this.userInfo = userInfo;
  }

  @Mutation
  private SET_REMEMBER_USER(value: string) {
    this.rememberUser = value;
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    return new Promise((resolve) => {
      userApi.login(userInfo).then((data: any) => {
        this.SET_TOKEN(data.data.token);
        setToken(data.data.token);

        this.SET_USERINFO(JSON.stringify(data.data));
        setUserInfo(JSON.stringify(data.data));
        resolve(data);
      }).catch((err) => {
        Message.error(err.message);
        resolve(false);
      });
    });
  }

  @Action
  public async Logout() {
    removeToken();
    removeUserInfo();
    this.SET_TOKEN('');
    this.SET_USERINFO('');
    PermissionModule.SET_ISNEEDGETROUTES(true);
  }

  @Action
  public rememberUserHanded(userInfo: { username: string, password: string }) {
    setRememberUser(JSON.stringify(userInfo));
    this.SET_REMEMBER_USER(JSON.stringify(userInfo));
  }

  @Action
  public removeRememberUserHanded() {
    removeRememberUser();
    this.SET_REMEMBER_USER('');
  }
}

export const UserModule = getModule(User);
