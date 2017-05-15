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
    })
});