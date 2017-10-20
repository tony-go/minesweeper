'use strict';

// PLAYER BOARD

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];

  for (var myRows = 0; myRows < numberOfRows; myRows++) {
    var row = [];
    for (var myColumns = 0; myColumns < numberOfColumns; myColumns++) {
      row.push(' ');
    };
    board.push(row);
  };
  return board;
};

//BOMB BOARD
var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];

  for (var myRows = 0; myRows < numberOfRows; myRows++) {
    var row = [];
    for (var myColumns = 0; myColumns < numberOfColumns; myColumns++) {
      row.push(' ');
    };
    board.push(row);
  };
  //return board;

  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColumnsIndex] !== 'B') {
      board[randomRowIndex][randomColumnsIndex] = 'B';
      numberOfBombsPlaced++;
    };
  };
  return board;
};

var getNumberOfNeighborBombs = function getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex) {
  var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  var numberOfRows = bombBoard.length;
  var numberOfColumns = bombBoard[0].length;
  var numberOfBombs = 0;

  neighborOffsets.forEach(function (offset) {
    var neighborRowIndex = rowIndex + offset[0];
    var neighborColumnIndex = columnIndex + offset[1];

    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfRows) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
        numberOfBombs++;
      }
    }
  });
  return numberOfBombs;
};

var flipTile = function flipTile(playerBoard, bombBoard, rowIndex, columnIndex) {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    return 'This tile has already been flipped!';
  } else if (bombBoard[rowIndex][columnIndex] !== 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  } else {
    playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex);
  }
};

// PRINT BOARD
var printBoard = function printBoard(board) {
  return board.map(function (row) {
    return row.join('|');
  }).join('\n');
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 1);

// OUTPUT
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));
flipTile(playerBoard, bombBoard, 0, 1);
console.log('Updated Player Board: ');
console.log(printBoard(playerBoard));