var Window = {
  accept: null,
  number: 0,
  getAccept: function() {
    return document.getElementsByName('Accept')[0];
  },
  Accept: function() {
    Window.accept = Window.getAccept();
    Window.accept.onclick = Window.getNumberFromHTML;
  },
  hideModalWindow: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
  },
  getNumberFromHTML: function() {
    Window.number = document.getElementsByName('cells')[0].value;
    Window.hideModalWindow();
    Board.rows = Window.number;
    Board.columns = Window.number;
    Game.init();
    Game.start();
  }
}
