import {combineReducers} from 'redux';
import {router5Reducer} from 'redux-router5';

import nav from './nav';

const rootReducer = combineReducers({
  nav,
  manifest: (state) => state || {},
  router: router5Reducer
});

export default rootReducer;
