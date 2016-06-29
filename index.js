#!/usr/bin/env node
/* origin server for a file cdn */

// TODO make these configurable command line args
var PORT = 8080;
var FILE_ROOT = __dirname + '/root';
var URL_ROOT = '/root';

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Well this is just a simple server.');
});

app.put('/*', function(req, res) {
  // TODO save file to FILE_ROOT
  console.log(req.files);
  res.send(req.path.slice(URL_ROOT.length));
});

app.use(URL_ROOT, express.static(FILE_ROOT));

app.listen(PORT, function () {
  console.log('simple server started at http://0.0.0.0:' + PORT);
});
