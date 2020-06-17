// Find the index of an element in a matrix that has sorted rows and columns

const matrix = [
  [15, 20, 40,  85],
  [20, 35, 80,  95],
  [30, 55, 95,  105],
  [40, 80, 100, 120]
]

function findElem(mat, elem, N, P) {
  let row = 0;
  let col = P - 1;
  while (row < N && col >= 0) {
    if (mat[row][col] === elem) return [row, col];
    else if (mat[row][col] > elem) col --;
    else row++;
  }
  return false;
}
console.log(findElem(matrix, 55, 4, 4));
