var bundler = require('./browserify-bundler');
var series = require('run-series');
var parallel = require('run-parallel');
var version = require('./version-assets');
var copy = require('copy');
var rimraf = require('rimraf');
var upload = require('./upload');

build(function (err) {
  if (err) {
    throw err;
  }
  console.log('Done!');
});

function build(cb) {
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  series([
    rimraf.bind(null, 'dist'),
    compile,
    version.bind(null, {}),
    upload.bind(null, {
      key: process.env.AWS_KEY,
      secret: process.env.AWS_SECRET,
      bucket: 'mlmorg-randmwedding'
    })
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
