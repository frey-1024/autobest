import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { setCookie } from '@/utils/cookies';
import { login } from '../server';

@inject('rootStore')
@observer
export default class LoginAndRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {}
    };
  }

  userLogin = async () => {
    const data = {
      adminName: 'admin',
      adminPassWord: '123456'
    };
    const loginInfo = await login.post(data);
    this.setState({
      loginInfo
    });
    setCookie('loginInfo', loginInfo);
  };
  render() {
    console.log(this.props.rootStore.userStore.userInfo.token);
    return (
      <div>
        login user is {this.state.loginInfo.adminName}
        <button onClick={this.userLogin}>login</button>
      </div>
    );
  }
}
