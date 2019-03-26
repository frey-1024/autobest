import { observable } from 'mobx';

class UserInfo {
  @observable
  info = { name: 'gyp' };
}

export default new UserInfo();
