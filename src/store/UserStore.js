import { observable, action } from 'mobx';
import { getCookie, setCookie } from '@/utils/cookies';

export default class UserStore {
  @observable
  userInfo = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    const userInfo = getCookie('loginInfo');
    this.userInfo = userInfo || {};
  }
  @action
  setUserInfo(info = {}) {
    setCookie('loginInfo', info);
    this.userInfo = info;
  }
  // fetchProjects = flow(function*() {
  //   this.githubProjects = [];
  //   this.state = 'pending';
  //   try {
  //     const projects = yield login.post();
  //     const filteredProjects = somePreprocessing(projects);
  //     this.githubProjects = filteredProjects;
  //   } catch (error) {
  //     this.state = 'error';
  //   }
  // });
}
