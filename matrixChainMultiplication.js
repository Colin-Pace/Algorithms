/* Matrix chain multiplication
1. Determine the optimal parenthesization of a product of n matrices
2. https://www.techiedelight.com/matrix-chain-multiplication/
*/

function maxtrixChainMultiplication(dims, i, j, table) {
  if (j <= i + 1) {
    return 0;
  } else {
    let min = Number.MAX_VALUE;
    if (table[i][j] === 0) {
      for (let k = i + 1; k <= j - 1; k++) {
        let cost = maxtrixChainMultiplication(dims, i, k, table);
        cost += maxtrixChainMultiplication(dims, k, j, table);
        cost += dims[i] * dims[k] * dims[j];
        if (cost < min) {
          min = cost;
        }
      }
      table[i][j] = min;
    }
    return table[i][j];
  }
}
const dims = [10, 30, 5, 60];
const table = new Array(dims.length).fill().map(() => new Array(dims.length).fill(0));
console.log(maxtrixChainMultiplication(dims, 0, dims.length - 1, table));

function iterativeMaxtrixChainMultiplication(dims) {
  const n = dims.length;
  const table = new Array(dims.length + 1).fill(0).map(() => new Array(dims.length + 1).fill(0));
  for (let len = 2; len <= n; len++) {
    for (let i = 1; i <= n - len + 1; i++) {
      const j = i + len - 1;
      table[i][j] = Number.MAX_VALUE;
      for (let k = i; j < n && k <= j - 1; k++) {
        const cost = table[i][k] + table[k + 1][j] + dims[i - 1] * dims[k] * dims[j];
        if (cost < table[i][j]) {
          table[i][j] = cost;
        }
      }
    }
  }
  return table[1][n - 1];
}
console.log(iterativeMaxtrixChainMultiplication(dims));