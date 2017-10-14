// PLAYER BOARD

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  for (let myRows = 0; myRows < numberOfRows ; myRows ++) {
    let row = [];
    for (let myColumns = 0; myColumns < numberOfColumns ; myColumns ++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

//BOMB BOARD
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  for (let myRows = 0; myRows < numberOfRows ; myRows ++) {
    let row = [];
    for (let myColumns = 0; myColumns < numberOfColumns ; myColumns ++) {
      row.push(null);
    };
    board.push(row);
  };
  //return board;

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // what if two index are the same ?
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnsIndex] = 'B';

    numberOfBombsPlaced++;
  };
  return board;
};

// PRINT BOARD
const printBoard = (board) => {
  return board.map(row => row.join('|')).join('\n');
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);



// OUTPUT
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));
