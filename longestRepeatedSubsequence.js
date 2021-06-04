// Longest repeated subsequence

function lrsLength(X, m, n, lookup) {
  if (m === 0 || n === 0) {
    return 0;
  }

  const key = m + "|" + n;
  if (!(key in lookup)) {
    if (X.charAt(m - 1) === X.charAt(n - 1) && m !== n) {
      lookup[key] = lrsLength(X, m - 1, n - 1, lookup) + 1;
    } else {
      lookup[key] = Math.max(lrsLength(X, m, n - 1, lookup), 
                             lrsLength(X, m - 1, n , lookup));
    }
  }
  
  return lookup[key];
}

function lrsLengthTable(X) {
  const n = X.length;
  const table = new Array(n + 1).fill().map(() => new Array(n + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (X.charAt(i - 1) === X.charAt(j - 1) && i !== j) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }

  return table[n][n];
}

const X = "ATACTCGGA";
const m = X.length;
const lookup = {};
console.log(lrsLength(X, m, m, lookup));
console.log(lrsLengthTable(X));