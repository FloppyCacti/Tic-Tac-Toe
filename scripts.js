function gameBoard() {
  board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  return { board };
}

console.log(gameBoard());
