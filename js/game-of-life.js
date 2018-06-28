var GameOfLife = {
  createEmptyBoard: function(rows, cols) {
    var newBoard = [];
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < cols; j++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  },
  getBoardFromHTML: function(cells, cols) {
    var board = [];
    var row = [];
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var isAlive = cell.className === 'alive'; //Devuelve Verdadero o falso este tipo de comparacion
      row.push(isAlive);
      if (i % cols === (cols - 1)) { // Reviso que el modulo de i sobre 5 sea equivalente a 4, entonces, cuando el modulo es 4, ya las 5 primeras celdas se agregaron al array row. Tengoque hacer push a ese array y vaciarlo para cargar las siguientes 5.
        board.push(row);
        row = [];
      }
    }
    return board;
  },
  getNextStep: function(a, b) { // A=current b=new
    for (var i = 0; i < a.length; i++) {
      var row = a[i];
      for (var j = 0; j < row.length; j++) {
        var willBeAlive = GameOfLife.applyRule(a, i, j);
        if (willBeAlive) {
          b[i][j] = true;
        }
      }
    }
  },
  applyRule: function(currentBoard, posY, posX) {
    var cell = currentBoard[posX][posY];
    var count = 0;
    if (currentBoard[posY - 1] && currentBoard[posY - 1][posX - 1])
      ++count;
    if (currentBoard[posY - 1] && currentBoard[posY - 1][posX])
      ++count;
    if (currentBoard[posY - 1] && currentBoard[posY - 1][posX + 1])
      ++count;
    if (currentBoard[posY][posX + 1])
      ++count;
    if (currentBoard[posY][posX - 1])
      ++count;
    if (currentBoard[posY + 1] && currentBoard[posY + 1][posX - 1])
      ++count;
    if (currentBoard[posY + 1] && currentBoard[posY + 1][posX])
      ++count;
    if (currentBoard[posY + 1] && currentBoard[posY + 1][posX + 1])
      count++;
    if (cell === false) {
      if (count >= 3) {
        return true;
      }
    }
    if (cell === true) {
      if (count === 2 || count === 3) {
        return true;
      }
    }
  }
};
