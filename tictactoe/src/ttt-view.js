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
    const mark = this.game.currentPlayer.toUpperCase();
    let $prettymark = $('<p class="mark">');
    $prettymark.html(mark);
    $square.css("background", "white");
    this.game.playMove($square.data("pos"));
    $square.append($prettymark);
    if (this.game.isOver()) {
      let $wins = $('<p class="winner">');
      if (this.game.winner()) {
        $wins.html(`${this.game.winner()} has won!`);
      } else {
        $wins.html('NO ONE WINS!');
      }
      this.$el.append($wins);
      $("ul").off("click");
      this.highlight();
    }
  }

  highlight() {
    const mark = this.game.currentPlayer.toUpperCase();
    $('li').each((idx, e) => {
      console.log($(e).children());
      if($(e).children().length === 1){
        if ( $(e).children()[0].innerHTML === mark ) {
          $(e).css("background", "white");
          $($(e).children()[0]).css("color", "red");
        } else {
          $(e).css("background", "green");
          $($(e).children()[0]).css("color", "white");
        }

      }

    });
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
