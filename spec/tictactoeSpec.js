describe('Tic Tac Toe', function() {
    var tictactoe;

    beforeEach(function() {
        tictactoe = new TicTacToe();
    });

    it('starts with a board', function() {
        expect(tictactoe.startGame()).toEqual([]);
    });
});