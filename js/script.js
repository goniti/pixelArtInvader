const app = {
  size: 8,
  pixel: 20,
  color: 'cell--white',
  slate: document.getElementById('board'),
  container: document.getElementById('app'),
  form: document.getElementsByClassName('settings')[0],
  makeGrid: () => {
    // create a grid of 64 cells 8 rows x 8 columns
    for (let indexRow = 0; indexRow < app.size; indexRow++) {
      const row = document.createElement('div');
      row.classList.add('row');

      for (let indexColumn = 0; indexColumn < app.size; indexColumn++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', 'cell--white');
        row.appendChild(cell);
      }

      app.slate.appendChild(row);
    }
    // Set a default pixel size of 20
    const cells = document.getElementsByClassName('cell');
    for (let index = 0; index < cells.length; index++) {
      cells[index].style.height = app.pixel + 'px';
      cells[index].style.width = app.pixel + 'px';
      cells[index].addEventListener('click', (event) => {
        event.target.setAttribute('class', `box ${app.color}`);
      });
    }
  },
  eraseGrid: () => {
    app.slate.innerHTML = '';
  },
  makePalette: () => {
    // Create DOM element
    const colorPalette = document.createElement('div');
    const colorWhite = document.createElement('div');
    const colorBlack = document.createElement('div');
    const colorYellow = document.createElement('div');
    const colorGreen = document.createElement('div');

    // Add class for all palette elements
    colorPalette.classList.add('panel');
    colorWhite.classList.add(
      'panel__button',
      'cell--white',
      'panel__button--is-active',
    );
    colorBlack.classList.add('panel__button', 'cell--black');
    colorYellow.classList.add('panel__button', 'cell--yellow');
    colorGreen.classList.add('panel__button', 'cell--green');

    // append elements on DOM
    colorPalette.appendChild(colorWhite);
    colorPalette.appendChild(colorBlack);
    colorPalette.appendChild(colorYellow);
    colorPalette.appendChild(colorGreen);
    app.container.appendChild(colorPalette);
  },
  colorPicker: () => {
    const buttons = document.getElementsByClassName('panel__button');
    for (let indexButtons = 0; indexButtons < buttons.length; indexButtons++) {
      buttons[indexButtons].addEventListener('click', function (event) {
        const buttonActive = document.getElementsByClassName(
          'panel__button--is-active',
        )[0];
        buttonActive.classList.remove('panel__button--is-active');
        event.target.classList.add('panel__button--is-active');
        app.color = event.target.className.split(' ')[1];
      });
    }
  },
  makeForm: () => {
    const inputGrid = document.createElement('input');
    inputGrid.classList.add('entries', 'entries--grid');
    inputGrid.setAttribute('type', 'text');
    inputGrid.setAttribute('name', 'grid');
    inputGrid.setAttribute('placeholder', 'Taille de la grille');

    const inputSize = document.createElement('input');
    inputSize.classList.add('entries', 'entries--pixels');
    inputSize.setAttribute('type', 'text');
    inputSize.setAttribute('name', 'size');
    inputSize.setAttribute('placeholder', 'Taille des pixels');

    const submit = document.createElement('input');
    submit.classList.add('entries', 'entries--submit');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Valider');

    app.form.appendChild(inputGrid);
    app.form.appendChild(inputSize);
    app.form.appendChild(submit);
  },
  handleSubmit: (event) => {
    event.preventDefault();
    const grid = event.target.grid.value;
    const size = event.target.size.value;

    if (grid < 1 || grid > 16 || isNaN(grid)) {
      alert('La taille de la grille doit etre un nombre compris entre 1 et 16');
    } else if (size < 15 || size > 40 || isNaN(size)) {
      alert(
        "La taille d'un case en pixels doit etre un nombre compris entre 15 et 40",
      );
    } else {
      app.pixel = size;
      app.size = grid;
      app.eraseGrid();
      app.makeGrid();
    }
  },
  init: () => {
    app.makeGrid();
    app.makePalette();
    app.colorPicker();
    app.makeForm();
    app.form.addEventListener('submit', app.handleSubmit);
  },
};

app.init();
