import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('userInfo')
@observer
export default class Test extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.userInfo.info.name);
    return 'test';
  }
}
