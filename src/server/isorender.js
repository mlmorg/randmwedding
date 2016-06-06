import React from 'react';
import {renderToString} from 'react-dom/server';
import jsonGlobals from 'safe-json-globals';
import {match, RouterContext} from 'react-router';
import {renderStatic} from 'styletron-server';
import Helmet from 'react-helmet';

export default class IsoRenderer {

  constructor(opts = {}) {
    this.hydrate = opts.hydrate;
    this.routes = opts.routes;
    this.Root = opts.Root;
  }

  pageSkeleton(head, jsonGlobalState, reactAppString, styletronOutput) {
    const styletronHtml = styletronOutput ?
      `<script>${styletronOutput.hydrationSrc}</script>` +
      `<style data-styletron>${styletronOutput.css}</style>` : '';

    return '<DOCTYPE html><head>' +
      head.title.toString() +
      head.meta.toString() +
      head.link.toString() +
      head.script.toString() +
      `<script>${jsonGlobalState}</script>` + styletronHtml +
      `</head><body><div id="app-content">${reactAppString}</div></body></html>`;
  }

  render(renderProps, state, cb) {
    const Root = this.Root;

    try {
      const renderFn = () => renderToString(
        <Root state={state}>
          <RouterContext {...renderProps}/>
        </Root>
      );

      const {html: reactApp, css, hydrationSrc} = renderStatic(renderFn);

      const head = Helmet.rewind();
      const jsonGlobalState = jsonGlobals({state});
      const html = this.pageSkeleton(
        head,
        jsonGlobalState,
        reactApp,
        {css: hydrationSrc}
      );

      return cb(null, html);
    } catch (markupError) {
      markupError.statusCode = 500;
      return cb(markupError);
    }
  }

  handleError(err, req, res) {
    const status = err.statusCode || 500;

    res.writeHead(status);
    res.end(err.toString());
  }

  handleRequest(req, res) {
    const {routes} = this;
    const location = req.url;

    return match({
      routes,
      location
    }, (matchError, redirectLocation, renderProps) => {
      if (matchError) {
        matchError.statusCode = 500;
        return this.handleError(matchError, req, res);
      }

      if (redirectLocation) {
        const relativePath =
          redirectLocation.pathname +
          redirectLocation.search;

        res.writeHead(302, {Location: relativePath});
        return res.end();
      }

      return this.hydrate(renderProps, req, res, (hydrationError, state) => {
        if (hydrationError) {
          hydrationError.statusCode = 500;
          return this.handleError(hydrationError, req, res);
        }

        return this.render(renderProps, state, (renderError, html) => {
          if (renderError) {
            renderError.statusCode = 500;
            return this.handleError(renderError, res, res);
          }

          res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8'
          });
          res.end(html);
        });
      });
    });
  }

}
