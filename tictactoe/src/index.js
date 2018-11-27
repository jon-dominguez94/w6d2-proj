const View = require('./ttt-view.js');
const Game = require('../../sol/game.js');

  $(() => {
    // Your code here
    const game = new Game();
    const rootEl = $('.ttt');
    new View(game, rootEl);
  });
