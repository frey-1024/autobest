import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import appStore from './store/index';
import ErrorBoundary from './components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import renderRoutes from './utils/renderRoutes';
import routes from './routes';

ReactDOM.render(
  <Provider {...appStore}>
    <ErrorBoundary>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
