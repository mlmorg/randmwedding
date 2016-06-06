import {createStore, compose, applyMiddleware} from 'redux';
import {router5Middleware} from 'redux-router5';

import reducers from './reducers';

export default function createAppStore(router, initialState) {
  const storeFactory = compose(
    applyMiddleware(router5Middleware(router))
  )(createStore);

  return storeFactory(reducers, initialState);
}
