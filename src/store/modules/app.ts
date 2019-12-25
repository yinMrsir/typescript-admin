import {VuexModule, Module, Action, Mutation, getModule} from 'vuex-module-decorators';
import store from '@/store';

export interface IAppState {
  opened: boolean;
}

@Module({dynamic: true, store, name: 'app'})
class App extends VuexModule implements IAppState {
  public opened: boolean = false;

  @Mutation
  private SET_OPENED(state: boolean) {
    this.opened = state;
  }

  @Action
  public setOpened(state: boolean) {
    this.SET_OPENED(state);
  }
}

export const AppModule = getModule(App);

