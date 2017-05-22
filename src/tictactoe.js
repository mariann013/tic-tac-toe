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
    if (this.player1 === 'x') {
        this.board[y][x] = 'x';
    }
    else {
        this.board[y][x] = 'o';
    }
};

TicTacToe.prototype.checkRow = function() {
    x_count = 0;
    o_count = 0
    for(i=0; i<=2; i++) {
        for(j=0; j<=2; j++) {
            if (this.board[j][i] === 'x') {
                x_count += 1;
            }
            else if (this.board[j][i] === 'o') {
                o_count += 1;
            }
        }
    }

    if (x_count === 3) {
        return 'x is the winner';
    } else if (o_count === 3) {
        return 'o is the winner';
    } else {
        return 'no winner yet';
    }
};

