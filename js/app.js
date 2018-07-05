var play = function() {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function() { // Its execute after loading the HTML
  Window.Accept();
  //Game.init();
  //Game.start();
}

window.onload = init;
