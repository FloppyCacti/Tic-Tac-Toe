const Gameboard = (() => {
    const board = [];

    for (i = 0; i < 9; i++){
        board.push([i+1]);
    }

    return board;
});

function Player(name, score){
    return {name , score};
}