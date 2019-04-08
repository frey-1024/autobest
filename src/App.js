import React, { Fragment, Component } from 'react';
import renderRoutes from './utils/renderRoutes';

export default class App extends Component {
  render() {
    const { route } = this.props;
    return <Fragment>{renderRoutes(route.routes)}</Fragment>;
  }
}
