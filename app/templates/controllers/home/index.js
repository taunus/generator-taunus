'use strict';

/*
 * This is the controller action for home/index. By default it'll render the home/index view
 *   when `next` is called. You could change that by setting model.action to some other view
 * Everything that's on the model will be passed to every view.
 * http://taunus.bevacqua.io/api#server-side-controllers
 */

module.exports = function (req, res, next) {
  res.viewModel = {
    model: {
      title: 'Welcome Home!',
      trivia: random(trivias)
    }
  };
  next();
};

// Just being playful

var trivias = [
 'Did you know Taunus has a yeoman generator? https://github.com/taunus/generator-taunus',
 'Have you tried the Getting Started guide? https://github.com/taunus/getting-started',
 'Do check out the documentation mini site! http://taunus.bevacqua.io',
 'Did you consider using Taunus with Hapi? https://github.com/taunus/taunus-hapi',
 'Piranhas can eat your flesh!',
 'Dinosaurs cannot hurt you.',
 'Bunnies like carrots.',
 'You are wonderful.'
];

function random (collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}
