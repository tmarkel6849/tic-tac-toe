//Set a blank board

class Board {
  constructor() {
    this.board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    this.piece = 'X';
  }
  //Create a function that will produce a new board without refreshing the page
  refreshBoard() {
    //look through DOM element attached to the board, update them to be blank
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
  placePiece(element) {
    let piece = this.piece;
    this.togglePiece();
    return piece;
  }
  //Create helperfunctions to check if there is a winning game
  // checkForWin() {
  //   //needs to check for 'X' in a row for column and diagonal
  //     //if X found, check down, across, diagonal
  //       //if search of these returns an 'O' or nothing, break;

  //       // let placement = current square, let row = placement.row, let col = placement. col
  //       //loop over board row checking for 'X', if something else found break
  //       //same but for column / diagonal;
  //   }
};
  //