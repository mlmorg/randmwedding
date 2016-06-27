var bundler = require('./browserify-bundler');
var series = require('run-series');
var parallel = require('run-parallel');
var version = require('./version-assets');
var copy = require('copy');
var rimraf = require('rimraf');

build(function (err) {
  if (err) {
    throw err;
  }
  console.log('Done!');
});

function build(cb) {
  series([
    rimraf.bind(null, 'dist'),
    compile,
    version.bind(null, {})
  ], cb);
}

function compile(cb) {
  parallel([
    bundler.bind(null, {node: true}),
    bundler.bind(null, {browser: true}),
    copyStatic
  ], cb);
}

function copyStatic(cb) {
  copy('static/**/*', 'dist/browser', cb);
}
