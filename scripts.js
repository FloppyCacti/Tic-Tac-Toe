const Gameboard = {
  board: [],

  showBoard() {
    for (i = 0; i < 9; i++) {
      this.board.push([i]);
    }
    return this.board;
  },
};
