function TicTacToe () {

    this.board = [  [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]  ];

    var player1;
    var player2;
}

TicTacToe.prototype.startGame = function() {
    return this.board;
};

TicTacToe.prototype.pickPlayer = function(symbol) {

    if (symbol === "x") {
        this.player1 = "x";
        this.player2 = "o";
    } else {
        this.player1 = "o";
        this.player2 = "x";
    }
};

TicTacToe.prototype.pickLocation = function(x, y) {
    if (x > 2 || y > 2) {
        return 'Sorry try again';
    }
    if (this.player1 === "x") {
        this.board[y][x] = "x";
    }
    else {
        this.board[y][x] = "o";
    }
};

TicTacToe.prototype.checkRow = function() {
    var winner;
    for (var i=0; i<=2; i++) {
        if (this.board[i].toString() === "x,x,x") {
             winner = 'x is the winner';
        }
        else if (this.board[i].toString() === "o,o,o") {
            winner = 'o is the winner';
        }
    }
    return winner || "no winner yet";
};

TicTacToe.prototype.checkColumn = function() {
    var winner;
    var colboard = [];
    for (var i = 0; i <= 2; i++) {
        this.board.map(function (value) {
             colboard.push(value[i]);
        });
    }
    if ((colboard[0] === "x" && colboard[1] === "x" && colboard[2] === "x") || (colboard[3] === "x" && colboard[4] === "x" && colboard[5] === "x") || (colboard[6] === "x" && colboard[7] === "x" && colboard[8] === "x")) {
        winner = 'x is the winner';
    }
    else if ((colboard[0] === "o" && colboard[1] === "o" && colboard[2] === "o") || (colboard[3] === "o" && colboard[4] === "o" && colboard[5] === "o") || (colboard[6] === "o" && colboard[7] === "o" && colboard[8] === "o")) {
        winner = 'o is the winner';
    }
    return winner || 'no winner yet';
};
