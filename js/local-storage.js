var Storage = {
  board: null,
  cancelButton: null,
  loadButton: null,
  saveBoard: function(currentBoard) {
    Storage.board = document.getElementsByClassName('game')[0].innerHTML;
    localStorage.setItem('game', Storage.board);
    localStorage.setItem('columns',Board.columns);
  },
  loadBoard: function(currentBoard) {
    document.getElementsByClassName('game')[0].innerHTML = localStorage.getItem('game');
    Board.rows = localStorage.getItem('columns');
    Board.columns = localStorage.getItem('columns');
  },
  hideLoad: function() {
    document.getElementsByClassName('modalwindow-storage')[0].style.display = 'none';
  },
  loadWindow: function() {
    Storage.cancelButton = document.getElementById('cancel');
    Storage.loadButton = document.getElementById('load');
    Storage.cancelButton.onclick = Storage.cancel;
    Storage.loadButton.onclick = Storage.load;
  },
  cancel: function() {
    localStorage.removeItem('game');
    Window.showModalWindow();
    window.onload();
  },
  load: function() {
    Storage.hideLoad();
    Game.init();
    Game.start();
  }
}
