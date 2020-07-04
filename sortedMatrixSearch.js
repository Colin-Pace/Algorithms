// Find the index of an element in a matrix that has sorted rows and columns

const matrix = [
  [15, 20, 40,  85],
  [20, 35, 80,  95],
  [30, 55, 95,  105],
  [40, 80, 100, 120]
]

function findElement(mat, elem, N, P) {
  let row = 0;
  let col = P - 1;
  while (row < N && col >= 0) {
    if (mat[row][col] === elem) return [row, col];
    else if (mat[row][col] > elem) col --;
    else row++;
  }
  return false;
}
//console.log(findElement(matrix, 55, 4, 4));


function findElement_(matrix, element) {
  const binarySearch = function(array, x, start, end) {
    if (start > end) return;
    else {
      const mid = Math.floor((start + end) / 2);
      if (array[mid] === x) return mid;
      else if (array[mid] < x) return binarySearch(array, x, mid + 1, end);
      else return binarySearch(array, x, start, mid - 1);
    }
  }

  const l = matrix.length;
  for (let i = 0; i < l; i++) {
    const found = binarySearch(matrix[i], element, 0, matrix[i].length);
    if (found) return [i, found];
  }

  return false;
}
console.log(findElement_(matrix, 55));
