// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)

const board = document.getElementById('board')
board.style.width = '600px';
board.style.height = '600px';

let rows = 1;
let columns = 1;
let cellCount = 0;

function clearBoard() {
    for(let i = 0; i <= cellCount; i++) {
        let cell = document.getElementById(`cell-${i}`);
        if (cell !== null){
        cell.remove();
        }
    }
    cellCount = 0;
}

function buildBoard() {
    clearBoard();
    let i = 0;
    for (i = 0; i < rows * columns; i ++){
                let cell = document.createElement('div');
                cell.id = `cell-${i}`;
                cell.classList.add('cell')
                board.appendChild(cell);
                cellCount++;
    }
}

function handelBlurRows(event) {
    rows = event.target.value;
    board.style.gridTemplateRows =  `repeat(${event.target.value}, 1fr)`;
    buildBoard();
}

function handelBlurColumns(event) {
    columns = event.target.value;
    board.style.gridTemplateColumns =  `repeat(${event.target.value}, 1fr)`;
    buildBoard()
}

const rowsInput = document.getElementById('rows-input')
rowsInput.addEventListener('blur', handelBlurRows);

const columnsInput = document.getElementById('columns-input')
columnsInput.addEventListener('blur', handelBlurColumns);
