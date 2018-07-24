var Storage = {
  board: null,
  saveBoard: function(currentBoard) {
    Storage.board = currentBoard;
    localStorage.setItem('board',Storage.board);
  },
  loadBoard: function(currentBoard) {
    Storage.board = localStorage.getItem('board');
    currentBoard.innerHTML = generateListFromArray(Storage.board).innerHTML;
  }
}
