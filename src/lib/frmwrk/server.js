import st from 'st';
import path from 'path';
import {createServer} from 'http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import jsonGlobals from 'safe-json-globals';
import Helmet from 'react-helmet';

import createRouter from '../../shared/router';
import createStore from '../../shared/store';
import Root from './root';

class Server {
  constructor(Component) {
    const staticPath = path.join(process.cwd(), 'dist', 'browser');

    this.Component = Component;
    this.mount = st({url: '/assets', path: staticPath});
    this.server = createServer(this.handler.bind(this));
  }

  start() {
    this.server.listen(3000, function () {
      console.log('listening at http://localhost:3000');
    });
  }

  render(App, initialState) {
    const app = renderToString(App);
    const head = Helmet.rewind();
    const jsonGlobalState = jsonGlobals({initialState});

    return '<!DOCTYPE html><html><head>' +
      head.title.toString() +
      head.meta.toString() +
      head.style.toString() +
      head.link.toString() +
      head.script.toString() +
      `<script>${jsonGlobalState}</script>` +
      `</head><body><div id="app">${app}</div></body></html>`
  }

  handler(req, res) {
    const {mount, Component} = this;

    if (req.url.split('/')[1] === 'assets' && mount(req, res)) {
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
