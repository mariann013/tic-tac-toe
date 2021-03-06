function TicTacToe () {

    this.board = [  [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]  ];

    var player1;
    var player2;
    var currentPlayer;
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
    this.currentPlayer = this.player1
};

TicTacToe.prototype.pickLocation = function(x, y) {
    if (x > 2 || y > 2) {
        return 'Sorry try again';
    }
    if (this.board[y][x] !== 0) {
        return 'Sorry that spot is already taken!';
    }

    this.currentPlayer === "x" ? this.board[y][x] = "x" : this.board[y][x] = "o";

    this.currentPlayer === this.player1 ? this.currentPlayer = this.player2 : this.currentPlayer = this.player1;
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

TicTacToe.prototype.checkDiagonal = function() {
    var winner;
    var colboard = [];
    for (var i = 0; i <= 2; i++) {
        this.board.map(function (value) {
            colboard.push(value[i]);
        });
    }
    if ((colboard[0] === "x" && colboard[4] === "x" && colboard[8] === "x") || (colboard[2] === "x" && colboard[4] === "x" && colboard[6] === "x")) {
        winner = 'x is the winner';
    }
    else if ((colboard[0] === "o" && colboard[4] === "o" && colboard[8] === "o") || (colboard[2] === "o" && colboard[4] === "o" && colboard[6] === "o")) {
        winner = 'o is the winner';
    }
    return winner || 'no winner yet';
};