var bundler = require('./browserify-bundler');

build(function (err) {
  if (err) {
    throw err;
  }
  console.log('Done!');
});

function build(cb) {
  bundler({node: true}, cb);
  bundler({browser: true}, cb);
}
