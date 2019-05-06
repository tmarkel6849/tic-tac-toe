let squareElement, currentClick, rowElement, square, row;
let DOMboard = document.getElementById('board');
DOMboard.addEventListener('click', e => {
  currentClick = e.path;
  squareElement = currentClick[0];
  rowElement = currentClick[1];
  square = +squareElement.classList[1];
  row = +rowElement.classList[1]
  let piece = board.piece;
  squareElement.textContent = piece;
  if ( board.placePiece(row, square) ) {
    board.wipeBoard();
    board.count = 0;
    alert(`${piece} WINS!!!`);
  };
  if ( ++board.count === 9 ) {
    alert('Cats game!');
    board.wipeBoard();
  }
})
