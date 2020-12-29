const app = {
  size: 8,
  pixel: 20,
  slate: document.getElementById('board'),
  container: document.getElementById('app'),
  color: 'cell--white',

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
        cells[index].addEventListener('click',(event) => {
          event.target.setAttribute('class', `box ${app.color}`)
        })
    }
  },
  createPalette: () => {
    // Create color palette
  const colorPalette = document.createElement('div');
  colorPalette.classList.add('panel');
  const colorWhite = document.createElement('div');
  colorWhite.classList.add('panel__button', 'cell--white', 'panel__button--is-active');
  colorPalette.appendChild(colorWhite);
  const colorBlack = document.createElement('div');
  colorBlack.classList.add('panel__button', 'cell--black');
  colorPalette.appendChild(colorBlack);
  const colorYellow = document.createElement('div');
  colorYellow.classList.add('panel__button', 'cell--yellow');
  colorPalette.appendChild(colorYellow);
  const colorGreen = document.createElement('div');
  colorGreen.classList.add('panel__button', 'cell--green');
  colorPalette.appendChild(colorGreen);
    // Add color palette in dom
  app.container.appendChild(colorPalette);

  const buttons = document.getElementsByClassName('panel__button');
  for (let indexButtons = 0; indexButtons < buttons.length; indexButtons++) {
      buttons[indexButtons].addEventListener('click', function (event) {
          const buttonActive = document.getElementsByClassName(
              'panel__button--is-active'
          )[0];
          buttonActive.classList.remove('panel__button--is-active');
          event.target.classList.add('panel__button--is-active');
          app.color = event.target.className.split(' ')[1];
          console.log(app.color);
      });
  }
  },
  
  init: () => {
    app.makeGrid();
    app.createPalette();
  },
};

app.init();
