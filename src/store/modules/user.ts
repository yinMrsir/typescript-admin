import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import {aesEncode} from '@/utils/validate';
import store from '@/store';
import {userApi} from '@/api';
import {Message} from 'element-ui';
import {setToken, getToken, removeToken} from '@/utils/cookies';

export interface IUserState {
  token: string;
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
  public token = getToken() || '';

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    return new Promise((resolve) => {
      userApi.login({
        requestValue: aesEncode(JSON.stringify(userInfo)),
      }).then((data: any) => {
        this.SET_TOKEN(data.token);
        setToken(data.token);
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
    this.SET_TOKEN('');
  }
}

export const UserModule = getModule(User);
