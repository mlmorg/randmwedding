import React from 'react';
import {renderToString} from 'react-dom/server';
import { RouterProvider } from 'react-router5';
import { Provider } from 'react-redux';
import initServer from '../../lib/frmwrk/server';
import jsonGlobals from 'safe-json-globals';
import Helmet from 'react-helmet';

import createRouter from '../shared/router';
import createStore from '../shared/store';
import Root from '../shared/components/root';

export default function startServer(options = {}, cb) {
  const server = initServer(options);

  server.get('*', (req, res) => {
    const router = createRouter();
    const store = createStore(router);

    router.start(req.url, (err, state)  => {
      const context = (
        <Root store={store} router={router} state={state}/>
      );
      const app = renderToString(context);
      const head = Helmet.rewind();
      const jsonGlobalState = jsonGlobals({state});

      const html = '<!DOCTYPE html><html><head>' +
        head.title.toString() +
        head.meta.toString() +
        head.link.toString() +
        head.script.toString() +
        `<script>${jsonGlobalState}</script>` +
        `</head><body><div id="app">${app}</div></body></html>`

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(html);
      router.stop();
    });
  });

  server.listen(3000, function () {
    console.log('listening');
  });
  return server;
}
