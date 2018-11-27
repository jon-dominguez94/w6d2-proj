class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li", e => {
      const $target = $(e.target);
      this.makeMove($target);
    });
  }

  makeMove($square) {
    const mark = this.game.currentPlayer;
    $square.css("background", "white");
    this.game.playMove($square.data("pos"));
    $square.html(mark);
  }

  setupBoard() {
    const $ul = $('<ul>');
      for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (var colIdx = 0; colIdx < 3; colIdx++) {
          let $li = $("<li>");
          $li.data("pos", [rowIdx, colIdx]);
          $ul.append($li);
        }
      }
      this.$el.append($ul);
  }
}

module.exports = View;
