var play = function() {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function() {/* Se ejecuta luego de que se cargue todo el html */
  Game.init();
  Game.start();
  // var btnPlay = Board.getPlayButton();
  // btnPlay.onclick = play;
}

window.onload = init;
