import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import appStore from './store/index';
import ErrorBoundary from './components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import renderRoutes from './utils/renderRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

configure({ enforceActions: 'observed' });

ReactDOM.render(
  <Provider rootStore={appStore}>
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
