import React from 'react';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router5';

import App from './app';

const Root = ({store, router, state}) => (
  <Provider store={store}>
    <RouterProvider router={router}>
      <h1>Hello World!</h1>
    </RouterProvider>
  </Provider>
);

export default Root;
