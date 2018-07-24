var play = function() {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function() { // Its execute after loading the HTML
  if (localStorage.getItem('board') != null) {
    Window.hideModalWindow();
    Storage.load();
  } else {
    Storage.hideLoad();
    Window.Accept();
    Window.InputFocus();
  }
  //Game.init();
  //Game.start();
}

window.onload = init;
