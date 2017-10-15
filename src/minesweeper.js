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
      row.push(' ');
    };
    board.push(row);
  };
  //return board;

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnsIndex] !== 'B'){
      board[randomRowIndex][randomColumnsIndex] = 'B';
      numberOfBombsPlaced++;
    };
  };
  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach( offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfRows) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
        numberOfBombs ++;
      }
    }
    }
  );
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' '){
    return 'This tile has already been flipped!'
  } else if (bombBoard[rowIndex][columnIndex] !== 'B'){
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
  }
};

// PRINT BOARD
const printBoard = (board) => {
  return board.map(row => row.join('|')).join('\n');
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 1);



// OUTPUT
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));
flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board: ');
console.log(printBoard(playerBoard));
