import React from 'react';
import { inject, observer } from 'mobx-react';
// import htmlStr from '../../../../common/header.html';

@inject('userInfo')
@observer
export default class Test extends React.Component {
  componentDidMount() {
    const el = document.getElementById('testId');
    console.log(el);
    el.style.color = 'red';
  }

  render() {
    console.log(this.props);
    console.log(this.props.userInfo.info.name);
    console.log(this.props.userInfo.aa());
    // console.log(htmlStr);
    return (
      <div>
        <span>test</span>
        {/* <div dangerouslySetInnerHTML={{ __html: htmlStr }} /> */}
      </div>
    );
  }
}
