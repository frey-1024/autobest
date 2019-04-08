import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import htmlStr from '../../common/header/templete.html';
import { HandleHeader } from '../../common/header/script.js';

@inject('rootStore')
@observer
@withRouter
export default class Header extends React.Component {
  // 缓存初始化
  createdHandleHeader = null;
  componentDidMount() {
    this.initHandleHeader();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.createdHandleHeader) {
      this.createdHandleHeader.refresh(this.props);
    }
  }
  initHandleHeader = () => {
    const { userStore } = this.props.rootStore;
    if (userStore.userInfo.adminName && !this.createdHandleHeader) {
      this.createdHandleHeader = new HandleHeader();
    }
  };

  render() {
    return <div dangerouslySetInnerHTML={{ __html: htmlStr }} />;
  }
}
