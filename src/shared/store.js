import {createStore, compose, applyMiddleware} from 'redux';
import {router5Middleware} from 'redux-router5';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

export default function createAppStore(router, initialState) {
  const enhancers = compose(
    applyMiddleware(
      router5Middleware(router),
      thunkMiddleware
    )
  );

  return createStore(reducers, initialState, enhancers);
};
