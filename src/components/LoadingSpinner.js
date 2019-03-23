import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

export default class LoadingSpinner extends PureComponent {
  // 类型检查
  static propTypes = {
    isLoading: PropTypes.bool,
    size: PropTypes.string,
    tip: PropTypes.string
  };
  static defaultProps = {
    isLoading: false,
    size: 'default',
    tip: 'Loading...'
  };
  render() {
    const { isLoading, size, tip } = this.props;
    return (
      <Spin tip={tip} spinning={isLoading} size={size}>
        {this.props.children}
      </Spin>
    );
  }
}
