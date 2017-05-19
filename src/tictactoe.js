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

    if (symbol === 'x') {
        this.player1 = 'x';
        this.player2 = 'o';
    } else {
        this.player1 = 'o';
        this.player2 = 'x';
    }
};

TicTacToe.prototype.pickLocation = function(x, y) {
    if (x > 2 || y > 2) {
        return 'Sorry try again';
    }
    this.board[y][x] = 'x';
};

TicTacToe.prototype.checkRow = function() {
    count = 0;
    for(i=0; i<=2; i++) {
        for(j=0; j<=2; j++) {
            if (this.board[j][i] !== 0) {
                count += 1;
            }
        }
    }

    if (count === 3) {
        return "winner"
    } else {
        return 'no winner yet';
    }
};

