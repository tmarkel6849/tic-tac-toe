//Set a blank board

class Board {
  constructor() {
    this.board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    this.piece = 'X';
  }
  //Create a function that will produce a new board without refreshing the page
  refreshBoard() {
    this.board = this.startBoard;
  }
  //function that toggles piece from 'X' to 'O'
  togglePiece() {
    if ( this.piece === 'X' ) {
      this.piece = 'O';
    } else {
      this.piece = 'X';
    }
  }
  //Create a function to place a piece one the board and update the DOM
    //needs to alternate between X and O for placements
  placePiece(element, row, square) {
    let piece = this.piece;
     this.board[row][square] = this.piece;
     this.togglePiece();
     return this.board;
  }
  //Create helperfunctions to check if there is a winning game
  checkWin() {
    //move row by row checking for solutions?
  }

  winningRow(row, piece) {
    let current = this.board[row];
    for ( let square of current ) {
      if ( square !== piece ) {
        return 'No winner';
      }
    }
    return 'WINNER BY ROW!!!!';
  }
  winningCol(col, piece) {
    for ( let i = 0; i < this.board.length; i++ ) {
      let row = this.board[i];
      if ( piece !== row[col] ) {
        return 'No Winner'
      }
    }
    return 'WINNER BY COLUMN!!!!';
  }
  winningDiagonal(row, col) {

  }
};
  //