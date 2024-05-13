const Gameboard = {
  board: [],

  makeBoard() {
    for (let i = 0; i < 9; i++) {
      this.board.push(i);
    }
  },

  showBoard() {
    if (this.board.length == 0) {
      this.makeBoard();
    }
    console.log(this.board);
  },
};

const gameLogic = {
  gb: Gameboard,

  startGame() {
    this.gb.showBoard();
  },
};
