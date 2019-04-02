import { observable } from 'mobx';
// import {  } from '';

export default class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable
  info = { name: 'gyp' };

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
