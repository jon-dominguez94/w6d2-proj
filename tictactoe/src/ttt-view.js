class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

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
    // debugger
    // const $board = $('<table>');
    // const $square = $("<td class='square'></td>");
    // const $row = $("<tr>");
    //   for (var i = 0; i < 3; i++) {
    //     $row.append($square.html());
    //   }
    //   for (var j = 0; j < 3; j++) {
    //     $board.append($row.html());
    //   }
    // this.$el.append($board.html());
    // this.$el.append("<table><tr><td class='square'></td><td class='square'></td><td class='square'></td><tr><tr><td class='square'></td><td class='square'></td><td class='square'></td><tr><tr><td class='square'></td><td class='square'></td><td class='square'></td><tr></table>");
  }
}

module.exports = View;
