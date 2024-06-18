function gameBoard() {
  const board = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
}

function player() {
  const name = prompt("NAME:");
  const sign = prompt("INSERT THE SIGN YOU WANT:");

  return { name, sign };
}

function gameFlow() {
  const board = gameBoard();
  let num = 0;
  let winner = { isFound: false, person: "" };
  const player1 = player();

  function userInput() {
    const [a, b, c] = prompt("ENTER HERE:").split(" ");
    if (board[a][b] === " ") {
      board[a][b] = c;
    } else {
      console.log("error 1");
    }
    console.log(board);
  }

  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== " ") {
        winner.isFound = true;
        winner.person = board[i][0];
      }
      if (board[0][i] === board[1][i] && board[0][i] == board[2][i] && board[0][i] !== " ") {
        winner.isFound = true;
        winner.person = board[0][i];
      }
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== " ") {
      winner.isFound = true;
      winner.person = board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== " ") {
      winner.isFound = true;
      winner.person = board[0][2];
    }
  }

  while (num < 9) {
    if (!winner.isFound) {
      userInput();
      checkWinner();
    } else {
      break;
    }
    num++;
  }

  if (winner.isFound) {
    if (winner.person == player1.sign) {
      console.log(`WINNER is ${player1.name}`);
    }
  }
}

gameFlow();
