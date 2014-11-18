'use strict';

/*
 * The client-side mountpoint just needs a root DOM element and a properly set up wiring module.
 * Everything else is up to you!
 * http://taunus.bevacqua.io/api#-taunus-mount-container-wiring-options-
 */

var taunus = require('taunus');

/*
 * For ways of creating the wiring module, read about the CLI interface:
 * http://taunus.bevacqua.io/api#command-line-interface
 */
var wiring = require('../../.bin/wiring');

// A regular DOM element will do.
var main = document.getElementsByTagName('main')[0];

/*
 * The options at the client-side mountpoint are quite futuristic.
 * Check them out:
 * http://taunus.bevacqua.io/api#-taunus-mount-container-wiring-options-
 */
taunus.mount(main, wiring);

/*
 * You could export taunus so that it's accessible as a global
 * Doing so might be useful during development.
 */
global.taunus = taunus;

// You can do whatever else you want here, too!
console.log('Hello Taunus!');
