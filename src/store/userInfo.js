import { observable } from 'mobx';

class UserInfo {
  @observable
  info = { name: 'gyp' };
  @action
  aa = () => {
    ajax
    this.info = {name: 'zhang'}
  }
}

export default new UserInfo();
