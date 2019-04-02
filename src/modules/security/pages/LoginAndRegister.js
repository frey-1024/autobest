import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
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
  componentDidMount() {
    this.userLogin();
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
  };
  render() {
    return (
      <div>
        login user is {this.state.loginInfo.adminName}
        <button onClick={this.userLogin}>login</button>
      </div>
    );
  }
}
