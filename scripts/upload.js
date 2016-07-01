'use strict';
var assert = require('assert');
var eachFile = require('each-file');
var extend = require('xtend');
var knox = require('knox');
var path = require('path');

module.exports = uploadToS3;

function uploadToS3(options, cb) {
  options = extend({
    src: 'dist/browser/**/*.*',
    prefix: ''
  }, options);

  assert(options.key, 'An S3 key must be provided');
  assert(options.secret, 'An S3 secret must be provided');
  assert(options.bucket, 'An S3 bucket must be provided');

  var client = knox.createClient(options);

  eachFile(options.src, function onEachFile(file, _cb) {
    var key = path.join(options.prefix, file.relative);

    fileExists(key, function (exists) {
      if (exists) {
        console.log('File already exists: ' + key);
        return _cb(null);
      }
      putFile(file.path, key, function (err) {
        if (err) {
          return _cb(err);
        }
        console.log('Uploaded file: ' + key);
        _cb(null);
      });
    });
  }, cb);

  function putFile(path, key, _cb) {
    client.putFile(path, key, {
      'Cache-Control': 'max-age=31536000'
    }, function onResponse(err, res) {
      if (err) {
        return _cb(err);
      }

      if (res.statusCode !== 200) {
        err = new Error('Unexpected status code uploading to S3: ' +
          res.statusCode);
        return _cb(err);
      }

      _cb(null);
    });
  }

  function fileExists(key, _cb) {
    client.headFile(key, function (err, res) {
      if (res && res.statusCode === 200) {
        return _cb(true);
      }
      _cb(false);
    });
  }
}
