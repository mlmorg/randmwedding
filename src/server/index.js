import React from 'react';
import {renderToString} from 'react-dom/server';
import { RouterProvider } from 'react-router5';
import { Provider } from 'react-redux';
import initServer from '../../lib/frmwrk/server';

import createRouter from '../shared/router';
import createStore from '../shared/store';
import Root from '../shared/components/root';

export default function startServer(options = {}, cb) {
  const server = initServer(options);

  const router = createRouter();
  const store = createStore(router);

  server.get('*', (req, res) => {
    router.start(req.url, (err, state)  => {
      const context = (
        <Root store={store} router={router} state={state}/>
      );
      const html = renderToString(context);

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(html);
    });
  });

  server.listen(3000, function () {
    console.log('listening');
  });
  return server;
}
