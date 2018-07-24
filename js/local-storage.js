var Storage = {
  board: null,
  cancelButton: null,
  loadButton: null,
  saveBoard: function(currentBoard) {
    Storage.board = currentBoard;
    localStorage.setItem('board', Storage.board);
  },
  loadBoard: function(currentBoard) {
    Storage.board = localStorage.getItem('board');
    currentBoard.innerHTML = generateListFromArray(Storage.board).innerHTML;
  },
  hideLoad: function() {
    document.getElementsByClassName('modalwindow-storage')[0].style.display = 'none';
  },
  load: function() {
    Storage.cancelButton = document.getElementById('cancel');
    Storage.loadButton = document.getElementById('load');
    Storage.cancelButton.onclick = Storage.cancel;
  },
  cancel: function() {
    localStorage.removeItem('board');
    Window.showModalWindow();
    window.onload();
  }
}
