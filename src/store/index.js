import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware([thunk]),
      ...enhancers
    )
  );
}
