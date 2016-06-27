var bundler = require('./browserify-bundler');
var nodemon = require('nodemon');
var process = require('process');
var series = require('run-series');
var parallel = require('run-parallel');
var rimraf = require('rimraf');
var copy = require('copy');

process.on('SIGINT', function exit() {
  process.exit(1);
});

watch(function (err) {
  if (err) {
    console.log(err.stack);
  }
});

function watch(cb) {
  series([
    rimraf.bind(null, 'dist'),
    compile,
    function (cb) {
      nodemon({watch: ['dist/server', 'config.json']});
      cb();
    }
  ], cb);
}

function compile(cb) {
  parallel([
    copy.bind(null, 'static/**/*', 'dist/browser'),
    bundler.bind(null, {node: true, watch: true}),
    bundler.bind(null, {browser: true, watch: true})
  ], cb)
}
