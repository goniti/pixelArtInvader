var app = {
  size: 8,
  pixel: 20,
  slate: document.getElementById('board'),
  container: document.getElementById('app'),

  makeGrid: function () {
    // create a grid of 64 cells 8 rows x 8 columns
    for (var indexRow = 0; indexRow < app.size; indexRow++) {
        var row = document.createElement('div');
        row.classList.add('row');
        for (var indexColumn = 0; indexColumn < app.size; indexColumn++) {
            var cell = document.createElement('div');
            cell.classList.add('cell', 'cell--white');
            row.appendChild(cell);
        }
        app.slate.appendChild(row);
    }
    // Set a default pixel size of 20
    var cells = document.getElementsByClassName('cell');
    for (var index = 0; index < cells.length; index++) {
        cells[index].style.height = app.pixel + 'px';
        cells[index].style.width = app.pixel + 'px';
    }
},
  
  init: function () {
    app.makeGrid();
  },
};

app.init();
