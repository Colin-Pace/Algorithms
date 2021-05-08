/*  1. Find the length of the longest common subsequence
    2. https://www.techiedelight.com/longest-common-subsequence/ */

    const X = "ABCBDAB";
    const Y = "BDCABA";
    const m = X.length;
    const n = Y.length;
    const lookup =  {};
    function lcsLengthTopDown(X, Y, m, n, lookup) {
      if (m === 0 || n === 0) {
        return 0;
      } else {
        const key = String(m) + "|" + String(n);
        if (!(key in lookup)) {
          if (X[m - 1] === Y[n - 1]) {
            lookup[key] = lcsLengthTopDown(X, Y, m - 1, n - 1, lookup) + 1;
          } else {
            lookup[key] = Math.max( lcsLengthTopDown(X, Y, m, n - 1, lookup), 
                                    lcsLengthTopDown(X, Y, m - 1, n, lookup));
          }
        }
        return lookup[key];
      }
    }
    console.log(lcsLengthTopDown(X, Y, m, n, lookup));
    
    const A = "XMJYAUZ";
    const B = "MZJAWXU";
    function lcsLengthBottomUp(X, Y) {
      let m = X.length;
      let n = Y.length;
      // const table = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
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
    console.log(lcsLengthBottomUp(A, B));