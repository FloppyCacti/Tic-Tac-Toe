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
    newBoard = () => {
      values = [];
      this.gb.makeBoard();

      for (let i = 0; i < 3; i++) {
        values.push(this.gb.board.splice(0, 3));
      }

      console.log(values);
    };

    newBoard();
  },
};
