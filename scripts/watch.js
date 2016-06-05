var bundler = require('./browserify-bundler');
var nodemon = require('nodemon');
var process = require('process');

process.on('SIGINT', function exit() {
  process.exit(1);
});

watch(function (err) {
  if (err) {
    console.log(err);
  }
});

function watch(cb) {
  bundler({node: true, watch: true}, cb);
  bundler({browser: true, watch: true}, cb);
  nodemon({watch: ['dist/server', 'config.json']});
}
