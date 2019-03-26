import React, { PureComponent } from 'react';
import s from '@/assets/styles/loadingBar.module.scss';

export default class LoadingBar extends PureComponent {
  render() {
    return (
      <div className={`${s.loadingBar} ${s.active}`}>
        <span className="bar" />
      </div>
    );
  }
}
