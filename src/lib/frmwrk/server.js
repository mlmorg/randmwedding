import fs from 'fs';
import st from 'st';
import path from 'path';
import {createServer} from 'http';
import React from 'react';
import {renderToString} from 'react-dom/server';
import jsonGlobals from 'safe-json-globals';
import Helmet from 'react-helmet';
import {renderStatic} from 'styletron-server';
import process from 'process';
import isMobile from 'ismobilejs';
import compression from 'compression';
import jsonBody from 'body/json';

import assetUrl from '../asset-url';
import createRouter from '../../shared/router';
import createStore from '../../shared/store';
import Root from './root';

const cwd = process.cwd();
const ASSET_PREFIX = process.env.ASSET_PREFIX || '/assets';

class Server {
  constructor(Component, apiObj) {
    this.Component = Component;
    this.API = apiObj;

    this.appMount = st({url: '/assets', path: 'dist/browser'});
    this.server = createServer(this.handler.bind(this));
    this.compression = compression();
    this.manifest = this.getManifest();

    assetUrl.init(ASSET_PREFIX, this.manifest);
  }

  getManifest() {
    const manifestPath = path.join(cwd, 'dist/browser/manifest.json');
    try {
      return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch (err) {
      return {};
    }
  }

  start() {
    const port = process.env.PORT || 3000;
    this.server.listen(port, function () {
      console.log(`listening at http://localhost:${port}`);
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
    const {appMount, Component, API} = this;
    const urlParts = req.url.split('/');

    // Static assets
    if (urlParts[1] === 'assets' && appMount(req, res)) {
      console.log(`Rendered asset: ${req.url}`);
      return;
    }

    // API
    if (urlParts[1] === 'api' && API[urlParts[2]]) {
      function handleResponse(statusCode, data) {
        res.writeHead(statusCode, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(data));
      }

      function onApiResponse(err, data) {
        if (err) {
          console.log('Error reaching API', err);
          return handleResponse(502, {error:'Upstream API error'});
        }
        return handleResponse(200, data);
      }

      function callApi(err, body) {
        if (err) {
          console.log('Error parsing body', err);
          return handleResponse(400, {error: 'Bad request'});
        }
        API[urlParts[2]](req, body, onApiResponse);
      }

      return jsonBody(req, res, callApi);
    }

    // Everything else is rendering the app

    this.compression(req, res, () => {});

    const router = createRouter();
    const store = createStore(router, {
      server: {
        manifest: this.manifest,
        assetPrefix: ASSET_PREFIX,
        userAgent: req.headers['user-agent'],
        isMobile: isMobile(req.headers['user-agent']).any
      }
    });

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

export default function initServer(Component, apiObj) {
  return new Server(Component, apiObj);
}
