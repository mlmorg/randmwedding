var babelify = require('babelify');
var browserify = require('browserify');
var envify = require('envify');
var extend = require('xtend');
var insertGlobals = require('insert-module-globals');
var watchify = require('watchify');
var write = require('write');

module.exports = bundler;

function getGlobalOptions() {
  // Must be in its own scope because of object caching in Browserify
  return {
    default: {
      debug: true,
      transform: [babelify, envify]
    },
    browser: {
      entries: ['src/browser/main.js']
    },
    node: {
      entries: ['src/server/main.js'],
      browserField: false,
      builtins: false,
      commondir: false,
      insertGlobalVars: getGlobalVars()
    },
    watch: {
      cache: {},
      packageCache: {},
      plugin: [watchify]
    }
  };
}

function bundler(options, cb) {
  var startTime;
  var outfile = options.node ? 'dist/server/main.js' : 'dist/browser/main.js';

  var browserifyOptions = getBrowserifyOptions(options);
  var bundler = browserify(browserifyOptions);

  if (options.watch) {
    bundler.on('update', function () {
      startTime = Date.now();
      bundle();
    });
  }

  startTime = Date.now();
  bundle();

  function bundle() {
    var stream = bundler.bundle();
    stream.on('end', function () {
      var time = Date.now() - startTime;
      console.log(outfile + ' written in ' + time + 'ms');
      cb();
    });
    stream.on('error', cb);
    stream.pipe(write.stream(outfile));
  }
}

function getBrowserifyOptions(options) {
  var globalBrowserifyOptions = getGlobalOptions();
  return extend(
    globalBrowserifyOptions.default,
    options.browser ? globalBrowserifyOptions.browser : {},
    options.node ? globalBrowserifyOptions.node : {},
    options.watch ? globalBrowserifyOptions.watch : {}
  );
}

function getGlobalVars() {
  var insertGlobalVars = {};
  var wantedGlobalVars = ['__dirname', '__filename'];
  Object.keys(insertGlobals.vars).forEach(function (x) {
    if (wantedGlobalVars.indexOf(x) === -1) {
      insertGlobalVars[x] = undefined;
    }
  });
  return insertGlobalVars;
}
