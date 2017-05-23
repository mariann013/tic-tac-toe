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
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        expect(tictactoe.board[0][0]).toEqual('x');
    });

    it('expects coordinates to be no higher than 2', function() {
        expect(tictactoe.pickLocation(3, 0)).toEqual('Sorry try again');
    });

    it('should return winner if a row is filled with the x symbol' , function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        tictactoe.pickLocation(1, 0);
        tictactoe.pickLocation(2, 0);
        expect(tictactoe.checkRow()).toEqual('x is the winner');
    });

    it('should return winner if a row is filled with the o symbol' , function() {
        tictactoe.pickPlayer('o');
        tictactoe.pickLocation(0, 1);
        tictactoe.pickLocation(1, 1);
        tictactoe.pickLocation(2, 1);
        expect(tictactoe.checkRow()).toEqual('o is the winner');
    });

    it('should return no winner if a row is filled with the a mixture of symbols' , function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        expect(tictactoe.checkRow()).toEqual('no winner yet');
    });


    it('should return winner if a column is filled with the x symbol', function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        tictactoe.pickLocation(0, 1);
        tictactoe.pickLocation(0, 2);
        expect(tictactoe.checkColumn()).toEqual('x is the winner');
    });
    it('should return winner if a column is filled with the o symbol', function() {
        tictactoe.pickPlayer('o');
        tictactoe.pickLocation(1, 0);
        tictactoe.pickLocation(1, 1);
        tictactoe.pickLocation(1, 2);
        expect(tictactoe.checkColumn()).toEqual('o is the winner');
    });
    it('should return no winner if a column is filled with a mixture of symbols', function() {
        tictactoe.pickPlayer('o');
        tictactoe.pickLocation(1, 0);
        tictactoe.pickLocation(1, 2);
        expect(tictactoe.checkColumn()).toEqual('no winner yet');
    });
    it('should return winner if a diagonal is filled with the x symbol', function() {
        tictactoe.pickPlayer('x');
        tictactoe.pickLocation(0, 0);
        tictactoe.pickLocation(1, 1);
        tictactoe.pickLocation(2, 2);
        expect(tictactoe.checkColumn()).toEqual('x is the winner');
    });
    it('should return winner if a diagonal is filled with the o symbol', function() {
        tictactoe.pickPlayer('o');
        tictactoe.pickLocation(0, 0);
        tictactoe.pickLocation(1, 1);
        tictactoe.pickLocation(2, 2);
        expect(tictactoe.checkColumn()).toEqual('o is the winner');
    });
});