import st from 'st';
import path from 'path';
import {createServer} from 'http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import jsonGlobals from 'safe-json-globals';
import Helmet from 'react-helmet';
import {renderStatic} from 'styletron-server';

import createRouter from '../../shared/router';
import createStore from '../../shared/store';
import Root from './root';

class Server {
  constructor(Component) {
    this.appMount = st({url: '/assets/app', path: 'dist/browser'});
    this.staticMount = st({url: '/assets/static', path: 'static'});
    this.Component = Component;
    this.server = createServer(this.handler.bind(this));
  }

  start() {
    this.server.listen(3000, function () {
      console.log('listening at http://localhost:3000');
    });
  }

  render(App, initialState) {
    const {html: app, css, hydrationSrc} = renderStatic(() => {
      return renderToString(App)
    });
    const head = Helmet.rewind();
    const jsonGlobalState = jsonGlobals({initialState});

    return '<!DOCTYPE html><html><head>' +
      head.title.toString() +
      head.meta.toString() +
      head.style.toString() +
      head.link.toString() +
      head.script.toString() +
      `<style data-styletron>${css}</style>` +
      `<script>${jsonGlobalState}</script>` +
      `<script>${hydrationSrc}</script>` +
      `</head><body><div id="app">${app}</div></body></html>`;
  }

  handler(req, res) {
    const {appMount, staticMount, Component} = this;

    const urlStart = req.url.split('/', 3).join('/');
    if (
      (urlStart === '/assets/app' && appMount(req, res)) ||
      (urlStart === '/assets/static' && staticMount(req, res))
    ) {
      console.log(`Rendered asset: ${req.url}`);
      return;
    }

    const router = createRouter();
    const store = createStore(router);

    router.start(req.url, (err, state)  => {
      console.log('handling request for ' + req.url);
      if (err && err.code === 'ROUTE_NOT_FOUND') {
        res.writeHead(404, {'Content-Type': 'text/html'});
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
      }

      const App = (
        <Root store={store} router={router}>
          <Component/>
        </Root>
      );
      const initialState = store.getState();
      const html = this.render(App, initialState);

      res.end(html);
      router.stop();
    });
  }
}

export default function initServer(Component) {
  return new Server(Component);
}
