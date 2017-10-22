export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs,
    this._numberOfTiles = numberOfRows * numberOfColumns,
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns),
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs)
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' '){
      return 'This tile has already been flipped!'
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B'){
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex)
    }
    this._numberOfTiles --;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {

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

    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    this._numberOfBombs = 0;

    neighborOffsets.forEach( offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];

      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfRows) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B') {
          this._numberOfBombs ++;
          }
        }
      }
    )
    return this._numberOfBombs;
  }

  hasSafeTiles() {
    if (this._numberOfTiles !== this._numberOfBombs) {
      return console.log("Continue")
    }
  }

  print() {
    console.log(this._playerBoard.map(row => row.join('|')).join('\n'));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];

    for (let myRows = 0; myRows < numberOfRows ; myRows ++) {
      let row = [];
      for (let myColumns = 0; myColumns < numberOfColumns ; myColumns ++) {
        row.push(' ');
      };
      board.push(row);
    };
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
  }
};
