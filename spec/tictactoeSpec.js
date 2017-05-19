describe('Tic Tac Toe', function() {
    var tictactoe;

    beforeEach(function() {
        tictactoe = new TicTacToe();
    });

    it('starts with a board', function() {
        expect(tictactoe.board.length).toEqual(3);
    });

    it('expects a row to be empty', function() {
        expect(tictactoe.board[0]).toEqual([0,0,0]);
    });

    it('expects player1 to pick a symbol', function() {
        tictactoe.pickPlayer('x');
        expect(tictactoe.player1).toEqual("x");
        expect(tictactoe.player2).toEqual("o");
    });

    it('expects a player1 to choose a start co-ordinate', function() {
        tictactoe.pickLocation(0, 0);
        expect(tictactoe.board[0][0]).toEqual('x');
    });

    it('expects coordinates to be no higher than 2', function() {
        expect(tictactoe.pickLocation(3, 0)).toEqual('Sorry try again');
    });

    it('should check to see if a row is filled with the same symbol' , function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        tictactoe.pickLocation(1, 0);
        tictactoe.pickLocation(2, 0);
        console.log(tictactoe.board);
        expect(tictactoe.checkRow()).toEqual('winner');
    });

    it('should check to see if a row is filled with different symbols' , function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        expect(tictactoe.checkRow()).toEqual('no winner yet');
    });
});