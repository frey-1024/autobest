import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import '@/assets/styles/app.scss';
import s from '@/assets/styles/base.module.scss';

export default class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div className="App">
        <button className={s.app}>1111</button>
        <Button type="primary">qqq</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
