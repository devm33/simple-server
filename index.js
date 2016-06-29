#!/usr/bin/env node
/* origin server for a file cdn */

// TODO make these configurable command line args
var PORT = 8080;
var FILE_ROOT = __dirname + '/root';
var URL_ROOT = '/root';

var express = require('express');
var fs = require('fs');
var mkdirp = require('mkdirp');

var app = express();

app.get('/', function(req, res) {
  res.send('Well this is just a simple server.');
});

app.put('/*', function(req, res) {
  var reqPathDirname = req.path.substr(0, req.path.lastIndexOf('/'));
  mkdirp(FILE_ROOT + reqPathDirname, function (err) {
    if (err) {
      console.error(err);
    } else {
      req.pipe(fs.createWriteStream(FILE_ROOT + req.path));
      res.send(req.path);
    }
  });
});

app.use(URL_ROOT, express.static(FILE_ROOT));

app.listen(PORT, function () {
  console.log('simple server started at http://0.0.0.0:' + PORT);
});
