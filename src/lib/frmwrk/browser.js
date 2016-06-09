import document from 'global/document';
import getState from 'safe-json-globals/get';
import React from 'react';
import {render} from 'react-dom';

import App from '../../shared/containers/app';
import createStore from '../../shared/store';
import createRouter from '../../shared/router';
import Root from './root';

class Browser {
  constructor(Component) {
    this.Component = Component;
    this.initialState = getState('initialState');
    this.router = createRouter();
    this.store = createStore(this.router, this.initialState);
  }

  start() {
    const {Component, store, router} = this;
    this.router.start(() => render(
      <Root store={store} router={router}>
        <Component/>
      </Root>,
      document.getElementById('app')
    ));
  }
}

export default function initBrowser(Component) {
  return new Browser(Component);
}
