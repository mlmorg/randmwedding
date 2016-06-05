var express = require('express');

module.exports = initServer;

function initServer() {
  var server = express();
  return server;
}
