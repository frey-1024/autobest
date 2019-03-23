import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/index';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = window.initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
