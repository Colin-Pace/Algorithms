/* Zero matrix

Prompt: if an element in an M x N matrix is 0,
        set the elements in that row and column to 0

Big O
1. Time: O(c * p)
2. Space: O(1)    */

function setZeros(matrix) {
  let rowHasZero = false;
  let colHasZero = false;

  // check the first row
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      rowHasZero = true;
      break;
    }
  }

  // check the first column
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  // check all the interior rows and columns,
  // setting the corresponding elements of first row and column to zero
  // if the interior rows and columns have a zero
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // set the elements of an interior row to zero if that row has a zero (stored in first row)
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      nullifyRow(matrix, i);
    }
  }

  // set the elements of an interior column to zero if that column has a zero (stored in first column)
  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j] === 0) {
      nullifyColumn(matrix, j);
    }
  }

  // set the elements to the first row to zero if the first row has a zero
  if (rowHasZero) {
    nullifyRow(matrix, 0);
  }

  // set the elements of the first column to zero if the first column has a zero
  if (colHasZero) {
    nullifyColumn(matrix, 0);
  }

  return matrix;
}

function nullifyRow(matrix, row) {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
}

function nullifyColumn(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

const matrix = [
  [1, 1, 1],
  [0, 2, 2],
  [3, 3, 3],
  [4, 4, 4]
];

/*
  [
    [0, 1, 1],
    [0, 0, 0],
    [0, 3, 3],
    [0, 4, 4]
  ]
*/

console.log(setZeros(matrix));