import {combineReducers} from 'redux';
import {router5Reducer} from 'redux-router5';

import address from './address';
import nav from './nav';

const rootReducer = combineReducers({
  address,
  nav,
  server: (state) => state || {},
  router: router5Reducer
});

export default rootReducer;
