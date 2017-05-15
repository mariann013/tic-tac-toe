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
        this.player2 = 'y';
    }
};

TicTacToe.prototype.pickLocation = function(x , y) {
   this.board[y][x] = 'x';
   console.log(this.board);
};