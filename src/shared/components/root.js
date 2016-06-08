import React from 'react';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router5';

import AppContainer from '../containers/app';

const Root = ({store, router, state}) => (
  <Provider store={store}>
    <RouterProvider router={router}>
      <AppContainer state={state}/>
    </RouterProvider>
  </Provider>
);

export default Root;
