var Window = {
  accept: null,
  number: 0,
  getAccept: function() {
    return document.getElementsByName('Accept')[0];
  },
  getNumberFromInput: function() {
    return document.getElementsByName('cells')[0].value;
  },
  createDivValidation: function() {
    var formCells = document.getElementsByClassName('formCells')[0]; // Div with class formCells
    var Validation = document.createElement("div"); // New node, element div
    Validation.className = 'validation';
    var parentDiv = formCells.parentNode; // Parent of formCells
    parentDiv.insertBefore(Validation, formCells); // Add node validation to HTML
    Validation.innerHTML = 'Ingrese un <strong>&nbsp;"numero"&nbsp;</strong> entre <strong>&nbsp;"0 y 25"&nbsp;</strong>'
  },
  hideModalWindow: function() {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
  },
  Accept: function() {
    Window.accept = Window.getAccept();
    Window.accept.onclick = Window.setBoardDimension;
  },
  setBoardDimension: function() {
    Window.number = Window.getNumberFromInput();
    if (Window.number >= 5 && Window.number <= 25) {
      Window.hideModalWindow();
      Board.rows = Window.number;
      Board.columns = Window.number;
      Game.init();
      Game.start();
    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) {
        Window.createDivValidation();

      }
    }
  }
}
