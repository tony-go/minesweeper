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
      row.push(null);
    };
    board.push(row);
  };
  //return board;

  var numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    // what if two index are the same ?
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnsIndex = Math.floor(Math.random() * numberOfColumns);

    board[randomRowIndex][randomColumnsIndex] = 'B';

    numberOfBombsPlaced++;
  };
  return board;
};

// PRINT BOARD
var printBoard = function printBoard(board) {
  return board.map(function (row) {
    return row.join('|');
  }).join('\n');
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

// OUTPUT
console.log('Player Board: ');
console.log(printBoard(playerBoard));
console.log('Bomb Board: ');
console.log(printBoard(bombBoard));