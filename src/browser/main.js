import document from 'global/document';
import getState from 'safe-json-globals/get';
import React from 'react';
import {render} from 'react-dom';

import createStore from '../shared/store';
import createRouter from '../shared/router';
import Root from '../shared/components/root';

const initialState = getState('initialState');
const router = createRouter();
const store = createStore(router, initialState);

router.start(() => {
  return render(
    <Root store={store} router={router}/>,
    document.getElementById('app')
  );
});
