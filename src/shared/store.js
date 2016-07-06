import {createStore, compose, applyMiddleware} from 'redux';
import {router5Middleware} from 'redux-router5';

import reducers from './reducers';

export default function createAppStore(router, initialState) {
  const enhancers = compose(
    applyMiddleware(router5Middleware(router))
  );

  return createStore(reducers, initialState, enhancers);
};
