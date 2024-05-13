const Gameboard = {
  board: [],

  makeBoard() {
    for (i = 0; i < 9; i++) {
      this.board.push([i]);
    }
  },
};
