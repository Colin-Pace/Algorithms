// Find the maximum sum submatrix of a matrix

function findSumSubmatrix(matrix) {
  let M = matrix.length;
  let N = matrix[0].length;
  let S = new Array(M + 1).fill().map(
          () => new Array(N + 1).fill(0));
  
  for (let i = 0; i <= M; i++) {
    for (let j = 0; j <= N; j++) {
      if (i === 0 || j === 0) {
        S[i][j] = 0;
      } else {
        S[i][j] = S[i - 1][j] + 
                  S[i][j - 1] -
                  S[i - 1][j - 1] +
                  matrix[i - 1][j - 1];
      }
    }
  }

  let maxSum = Number.MIN_VALUE;
  let rowStart = 0;
  let rowEnd = 0;
  let colStart = 0;
  let colEnd = 0;

  for (let i = 0; i < M; i++) {
    for (let j = i; j < M; j++) {
      for (let m = 0; m < N; m++) {
        for (let n = m; n < N; n++) {
          let submatrixSum = S[j+1][n+1] - 
                             S[j+1][m] -
                             S[i][n+1] + 
                             S[i][m];
          if (submatrixSum > maxSum) {
            maxSum = submatrixSum;
            rowStart = i;
            rowEnd = j;
            colStart = m;
            colEnd = n;
          }
        }
      }
    }
  }

  console.log("The submatrix is formed by rows " +
               rowStart + " to " + rowEnd +
               " and columns from " +
               colStart + " to " + colEnd);
  return maxSum;
}

const matrix = [
  [-5, -6,  3,  1,  0],
  [ 9,  7,  8,  3,  7],
  [-6, -2, -1,  2, -4],
  [-7,  5,  5,  2, -6],
  [ 3,  2,  9, -5,  1]
];
console.log("The maximum sum of the submatrix is " + findSumSubmatrix(matrix));