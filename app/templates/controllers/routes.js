'use strict';

/*
 * View routes in Taunus are declared here.
 * Each view route will be added to Express (or Hapi), and the relevant controller will be executed
 * When the controller produces a model, and the view is rendered,
 *   the appropriate client-side view controller will be invoked.
 * http://taunus.bevacqua.io/api#-options-routes-
 */

module.exports = [
  { route: '/', action: 'home/index' }
];
