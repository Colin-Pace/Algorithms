let matrix = [
  [1, 1, 1, 1, 1],
  [2, 2, 2, 2, 2],
  [3, 3, 3, 3, 3],
  [4, 4, 4, 4, 4],
  [5, 5, 5, 5, 5]
]

function rotateMatrix(matrix) {
  let size = matrix[0].length;
  let result = [];
  for (let i = 0; i < size; i++) {
    result.push([]);
  }
  for (let i = size - 1; i > -1; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }
  return result;
}
console.log(rotateMatrix(matrix));
