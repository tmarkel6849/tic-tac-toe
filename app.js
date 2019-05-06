class Board {
  constructor() {
    this.startBoard = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    this.board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
    this.piece = 'X';
    this.count = 0;
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
  placePiece(row, square) {
    let piece = this.piece;
     this.board[row][square] = this.piece;
     if ( this.checkForWin(row, square, piece) )  {
       return true;
     }
     this.togglePiece();
     return;
  }

  winningRow(row, piece) {
    let current = this.board[row];
    for ( let square of current ) {
      if ( square !== piece ) {
        return null;
      }
    }
    return 'WINNER BY ROW!!!!';
  }

  winningCol(col, piece) {
    for ( let i = 0; i < this.board.length; i++ ) {
      let row = this.board[i];
      if ( piece !== row[col] ) {
        return null;
      }
    }
    return 'WINNER BY COLUMN!!!!';
  }

  winningDiagonal(piece) {
    let currentBoard = this.board;
    //not in middle of middle row
    if ( currentBoard[0][0] === piece ) {
      return this.leftDiagonal(piece);
    } else if ( currentBoard[0][2] ) {
      return this.rightDiagonal(piece);
    }
    return null;
  }

  leftDiagonal(piece) {
    let diagonalBoard = this.board;
    if ( diagonalBoard[1][1] === piece ) {
      if (diagonalBoard[2][2] === piece ) {
        return 'LEFT DIAGONAL WINNER!!!';
      }
    }
    return null;
  }

  rightDiagonal(piece) {
    let diagonalBoard = this.board;
    if (diagonalBoard[1][1] === piece) {
      if (diagonalBoard[2][0] === piece) {
        return 'RIGHT DIAGONAL WINNER!!!';
      }
    }
    return null;
  }

  checkForWin = (row, col, piece) => {
    if ( this.winningRow(row, piece) ) return true;
     if ( this.winningCol(col, piece) ) return true;
    if ( this.winningDiagonal(piece) ) return true;
    return false;
  }

  wipeBoard () {
   for (let i = 0; i < 3; i++) {
     let row = document.getElementsByClassName('row ' + i)[0];
     let children = row.children;
     for (let j = 0; j < children.length; j++) {
       let child = children[j];
       child.textContent = '-';
     }
   }
    for ( let i = 0; i < 3; i++ ) {
      this.board[i] = this.startBoard[i].slice();
    }
    this.count = 0;
  }
};


let board = new Board();