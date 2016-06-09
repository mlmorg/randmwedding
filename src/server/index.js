import st from 'st';
import path from 'path';
import {createServer} from 'http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import jsonGlobals from 'safe-json-globals';
import Helmet from 'react-helmet';

import createRouter from '../shared/router';
import createStore from '../shared/store';
import Root from '../shared/components/root';

export default function startServer(options = {}, cb) {
  const mount = st({
    path: path.join(process.cwd(), 'dist', 'browser'),
    url: '/assets'
  });
  const server = createServer((req, res) => {
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

      const context = (
        <Root store={store} router={router}/>
      );
      const app = renderToString(context);
      const head = Helmet.rewind();
      const initialState = store.getState();
      const jsonGlobalState = jsonGlobals({initialState});

      const html = '<!DOCTYPE html><html><head>' +
        head.title.toString() +
        head.meta.toString() +
        head.link.toString() +
        head.script.toString() +
        `<script>${jsonGlobalState}</script>` +
        `</head><body><div id="app">${app}</div></body></html>`

      res.end(html);
      router.stop();
    });
  });

  server.listen(3000, function () {
    console.log('listening at http://localhost:3000');
  });
  return server;
};
