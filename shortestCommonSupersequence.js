// Find the length of the shortest common supersequence

function scsLengthRecursion(X, Y, m, n, lookup) {
  if (m === 0 || n === 0) {
    return n + m;
  }

  const key = m + "|" + n;
  if (!(key in lookup)) {
    if (X.charAt(m - 1) === Y.charAt(n - 1)) {
      lookup[key] = scsLengthRecursion(X, Y, m - 1, n - 1, lookup) + 1;
    } else {
      const min = Math.min(scsLengthRecursion(X, Y, m, n - 1, lookup) + 1, 
                           scsLengthRecursion(X, Y, m - 1, n, lookup) + 1);
      lookup[key] = min;
    }
  }

  return lookup[key];
}

function scsLength(X, Y) {
  const m = X.length;
  const n = Y.length;
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    table[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    table[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X.charAt(i - 1) === Y.charAt(j - 1)) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.min(table[i - 1][j] + 1, table[i][j - 1] + 1);
      }
    }
  }

  return table[m][n];
}

const X = "ABCBDAB";
const Y = "BDCABA";
const lookup = {};
console.log(scsLengthRecursion(X, Y, X.length, Y.length, lookup));
console.log(scsLength(X, Y));