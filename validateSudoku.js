/* Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition. */


const input = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","8"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const inputTwo = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

const inputThree = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".","3","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

function validateSudoku(board) {
  let level = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  let l = board.length;
  let l_ = board[0].length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j< l_; j++) {
      if (board[i][j] in level) {
        if (level[board[i][j]] > 1) return false;
        else level[board[i][j]]++;
      }
    }
    for (let i in level) if (level[i] > 1) return false;
    level = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  }

  let column = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  let j = 0;
  while (j < 9) {
    let i = 0;
    while (i < 9) {
      if (board[i][j] in column) {
        if (column[board[i][j]] > 1) return false;
        else column[board[i][j]]++;
      }
      i++;
    }
    for (let i in column) if (column[i] > 1) return false;
    column = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    j++;
  }

  let box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  j = 0;
  while (j < 9) {
    let i = 0;

    while (i < 3) {
      if (board[i][j] in box) {
        if (box[board[i][j]] > 1) return false;
        else box[board[i][j]]++;
      }
      i++
    }

    if (j === 2 || j === 5 || j === 8) {
      for (let i in box) if (box[i] > 1) return false;
      box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    }

    j++;
  }

  box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  j = 0;
  while (j < 9) {
    let i = 3;

    while (i < 6) {
      if (board[i][j] in box) {
        if (box[board[i][j]] > 1) return false;
        else box[board[i][j]]++;
      }
      i++
    }

    if (j === 2 || j === 5 || j === 8) {
      for (let i in box) if (box[i] > 1) return false;
      box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    }

    j++;
  }

  box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  j = 0;
  while (j < 9) {
    let i = 6;

    while (i < 9) {
      if (board[i][j] in box) {
        if (box[board[i][j]] > 1) return false;
        else box[board[i][j]]++;
      }
      i++
    }

    if (j === 2 || j === 5 || j === 8) {
      for (let i in box) if (box[i] > 1) return false;
      box = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
    }

    j++;
  }

  return true;
}

console.log(validateSudoku(input));
console.log(validateSudoku(inputTwo));
console.log(validateSudoku(inputThree));
