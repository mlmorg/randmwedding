'use strict';
var asyncEach = require('async-each');
var eachFile = require('each-file');
var extend = require('xtend');
var fmt = require('util').format;
var fs = require('fs');
var path = require('path');
var process = require('process');
var revHash = require('rev-hash');
var revPath = require('rev-path');
var series = require('run-series');

var cwd = process.cwd();

module.exports = versionAssets;

function versionAssets(options, cb) {
  options = extend({
    src: 'dist/browser/**/*',
    dest: 'dist/browser',
    manifest: 'manifest.json'
  }, options);

  var files = [];
  series([
    buildFilesArray.bind(null, files, options),
    updateReferences.bind(null, files, options),
    renameFiles.bind(null, files, options),
    writeManifest.bind(null, files, options)
  ], cb);
}

function buildFilesArray(files, options, cb) {
  eachFile(options.src, function setupFile(file, _cb) {
    file.origPath = file.path;
    file.origRelative = file.relative;
    file.revHash = revHash(file.contents);
    file.path = revPath(file.path, file.revHash);
    files.push(file);
    _cb(null);
  }, cb);
}

function updateReferences(files, options, cb) {
  // TODO: Update references to files so that they are hashed
  cb();
}

function renameFiles(files, options, cb) {
  asyncEach(files, function renameFile(file, _cb) {
    fs.rename(file.origPath, file.path, _cb);
  }, cb);
}

function writeManifest(files, options, cb) {
  var manifest = {};
  files.forEach(function addFileToManifest(file) {
    manifest[file.origRelative] = file.relative;
  });

  var manifestPath = path.join(cwd, options.dest, options.manifest);
  fs.writeFile(manifestPath, JSON.stringify(manifest, null, '  '), cb);
}
