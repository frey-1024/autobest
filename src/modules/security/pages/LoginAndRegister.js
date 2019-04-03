import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { login } from '../server';

@inject('rootStore')
@observer
export default class LoginAndRegister extends Component {
  userLogin = async () => {
    const data = {
      adminName: 'admin',
      adminPassWord: '123456'
    };
    const loginInfo = await login.post(data);
    this.props.rootStore.userStore.setUserInfo(loginInfo);
  };
  render() {
    console.log(this.props.rootStore.userStore.userInfo);
    return (
      <div>
        login user is {this.props.rootStore.userStore.userInfo.adminName}
        <button onClick={this.userLogin}>login</button>
      </div>
    );
  }
}
