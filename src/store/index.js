import UserStore from './UserStore';
import { observable, action } from 'mobx';

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
  }
  @observable
  rootLoading = false;

  // 开启全局loading
  @action
  startLoading() {
    this.rootLoading = true;
  }

  // 停止全局loading
  @action
  stopLoading() {
    this.rootLoading = false;
  }
}

export default new RootStore();
