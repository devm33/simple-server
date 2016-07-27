#!/usr/bin/env node
/* origin server for a file cdn */

var argv = require('yargs')
  .default('port', 8080)
  .default('root', __dirname + '/root')
  .default('url', 'root')
  .argv;

var express = require('express');
var fs = require('fs');
var mkdirp = require('mkdirp');

var app = express();

app.get('/', function(req, res) {
  res.send('<a href="https://github.com/devm33/simple-server">' +
           'Well this is just a simple server.</a>');
});

app.put('/*', function(req, res) {
  var reqPathDirname = req.path.substr(0, req.path.lastIndexOf('/'));
  mkdirp(argv.root + reqPathDirname, function (err) {
    if (err) {
      console.error(err);
    } else {
      req.pipe(fs.createWriteStream(argv.root + req.path));
      res.send(req.path);
    }
  });
});

app.use('/' + argv.url, express.static(argv.root));

app.listen(argv.port, function () {
  console.log('server started at http://localhost:' + argv.port);
});
