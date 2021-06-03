/* The number of queens on a chessboard
1. Print the arrangements of N queens on an N x N chessboard so that no two queens share a row, column, or diagonal */


function isSafe(mat, r, c) {
  for (let i = 0; i < r; i++) {
    if (mat[i][c] === "Q") {
      return false;
    }
  }

  for (let i = r, j = c; i >= 0 && j >= 0; i--, j--) {
    if (mat[i][j] === "Q") {
      return false;
    }
  }

  for (let i = r, j = c; i >= 0 && j < N; i--, j++) {
    if (mat[i][j] === "Q") {
      return false;
    }
  }

  return true;
}

function printSolution(mat) {
  solutions++;
  for (let i = 0; i < N; i++) {
    console.log(mat[i]);
  }
}

function nQueen(mat, r) {
  if (r === N) {
    printSolution(mat);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isSafe(mat, r, i)) {
      mat[r][i] = "Q";
      nQueen(mat, r + 1);
      mat[r][i] = "-";
    }
  }
}

let solutions = 0;
const N = 8;
const mat = new Array(N).fill().map(() => new Array(N).fill("-"));
nQueen(mat, 0);
console.log(solutions);