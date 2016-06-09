import React from 'react';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router5';

const Root = ({store, router, children}) => (
  <Provider store={store}>
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  </Provider>
);

export default Root;
