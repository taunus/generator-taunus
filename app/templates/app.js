'use strict';

var taunus = require('taunus');

/*
 * Taunus provides plugins to hook into your favorite back-end HTTP server frameworks
 * https://github.com/taunus/taunus-express
 * https://github.com/taunus/taunus-hapi
 */
var taunusExpress = require('taunus-express');
var express = require('express');
var port = process.env.PORT || 3000;

/*
 * Just using Express as you normally would.
 * `serve-static` serves static assets
 */
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('.bin/public'));

/*
 * The options object passed to the mountpoint on the server-side allows you to
 * define view routes, a layout function, and tweak a few less-important options
 * http://taunus.bevacqua.io/api#the-options-object
 */
var options = {
  routes: require('./controllers/routes'),
  layout: require('./.bin/views/layout')
};

taunusExpress(taunus, app, options);
app.listen(port, listening);

function listening () {
  console.log('Taunus is listening on port %s.\nVisit him using `open http://localhost:%s`!', port, port);
}
