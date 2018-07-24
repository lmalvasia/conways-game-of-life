var Storage = {
  board: null,
  saveBoard: function(currentBoard) {
    Storage.board = currentBoard;
    localStorage.setItem('board',Storage.board);
    console.log(localStorage.getItem('board'));
  }
}
