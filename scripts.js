const Gameboard = {
  board: [],

  makeBoard() {
    for (i = 0; i < 9; i++) {
      this.board.push([i]);
    }
  },

  showBoard() {
    if (this.board.length == 0) {
      this.makeBoard();
    }
    return this.board;
  },
};
