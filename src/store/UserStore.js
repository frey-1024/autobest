import { observable } from 'mobx';
import { getCookie } from '@/utils/cookies';

export default class UserStore {
  @observable
  userInfo = {};

  constructor(rootStore) {
    this.rootStore = rootStore;
    const userInfo = getCookie('loginInfo');
    this.userInfo = userInfo || {};
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
