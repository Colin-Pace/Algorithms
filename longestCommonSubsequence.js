/*  1. Find the length of the longest common subsequence
    2. https://www.techiedelight.com/longest-common-subsequence/, https://www.techiedelight.com/longest-common-subsequence-finding-lcs/ */

class LongestCommonSubsequence {
  lengthTopDown(X, Y, m, n, lookup) {
    if (m === 0 || n === 0) {
      return 0;
    } else {
      const key = String(m) + "|" + String(n);
      if (!(key in lookup)) {
        if (X[m - 1] === Y[n - 1]) {
          lookup[key] = this.lengthTopDown(X, Y, m - 1, n - 1, lookup) + 1;
        } else {
          lookup[key] = Math.max( this.lengthTopDown(X, Y, m, n - 1, lookup), 
                                  this.lengthTopDown(X, Y, m - 1, n, lookup));
        }
      }
      return lookup[key];
    }
  }

  lengthBottomUp(X, Y) {
    let m = X.length;
    let n = Y.length;
    const table = [];
    const rowLength = m + 1;
    const columnLength = n + 1;
    for (let i = 0; i < rowLength; i++) {
      table.push([]);
      for (let j = 0; j < columnLength; j++) {
        table[i].push(0);
      }
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (X.charAt(i - 1) === Y.charAt(j - 1)) {
          table[i][j] = table[i - 1][j - 1] + 1;
        } else {
          table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
        }
      }
    }
    return table[m][n];
  }

  makeList(X, Y, m, n, table) {
    if (m === 0 || n === 0) {
      return [""];
    }
    if (X[m - 1] === Y[n - 1]) {
      const lcs = this.makeList(X, Y, m - 1, n - 1, table);
      for (let i = 0; i < lcs.length; i++) {
        lcs[i] = lcs[i] + X[m - 1];
      }
      return lcs;
    }
    if (table[m - 1][n] > table[m][n - 1]) {
      return this.makeList(X, Y, m - 1, n, table);
    }
    if (table[m][n - 1] > table[m - 1][n]) {
      return this.makeList(X, Y, m, n - 1, table);
    }
    const top = this.makeList(X, Y, m - 1, n, table);
    const left = this.makeList(X, Y, m, n - 1, table);
    return top.concat(left);
  }

  makeTable(X, Y, table) {
    for (let i = 1; i <= X.length; i++) {
      for (let j = 1; j <= Y.length; j++) {
        if (X[i - 1] === Y[j - 1]) {
          table[i][j] = table[i - 1][j - 1] + 1;
        } else {
          table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
        }
      }
    }
  }

  findLCS(X, Y, table) {
    this.makeTable(X, Y, table);
    const lcs = this.makeList(X, Y, X.length, Y.length, table);
    const lcsSet = new Set(lcs);
    return lcsSet;
  }
}

const lcs = new LongestCommonSubsequence;
const X = "ABCBDAB";
const Y = "BDCABA";
const table = new Array(X.length + 1).fill(0).map(() => new Array(Y.length + 1).fill(0));

console.log(lcs.lengthTopDown(X, Y, X.length, Y.length, {}));
console.log(lcs.lengthBottomUp(X, Y));
console.log(lcs.findLCS(X, Y, table));
    