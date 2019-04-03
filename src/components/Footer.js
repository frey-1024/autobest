import React from 'react';
import { inject, observer } from 'mobx-react';
import htmlStr from '../../common/footer/templete.html';
import '../../common/footer/style.css';
import { initFooter } from '../../common/footer/script.js';

@inject('rootStore')
@observer
export default class Footer extends React.Component {
  componentDidMount() {
    console.log(initFooter);
  }

  render() {
    console.log(this.props.rootStore.userStore.userInfo.adminName);
    return (
      <div>
        <span>test</span>
        <div dangerouslySetInnerHTML={{ __html: htmlStr }} />
      </div>
    );
  }
}
