import {combineReducers} from 'redux';
import {router5Reducer} from 'redux-router5';

import form from './form';
import nav from './nav';

const rootReducer = combineReducers({
  form,
  nav,
  server: (state) => state || {},
  router: router5Reducer
});

export default rootReducer;
