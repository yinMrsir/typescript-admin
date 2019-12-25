import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import {aesEncode} from '@/utils/validate';
import store from '@/store';
import {userApi} from '@/api';
import {Message} from 'element-ui';

export interface IUserState {
  token: string;
}

@Module({dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
  public token = '';

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
        resolve(data);
      }).catch((err) => {
        Message.error(err.message);
        resolve(false);
      });
    });
  }
}

export const UserModule = getModule(User);
