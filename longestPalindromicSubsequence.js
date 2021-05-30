/* Longest palindromic subsequence
1. Prompt: Find the longest subsequence of a string that is also a palindrome
2. https://www.techiedelight.com/longest-palindromic-subsequence-using-dynamic-programming/
*/

function lengthOfLongestPalindromicSubsequence(X, i, j, lookup) {
  if (i > j) {
    return 0;
  } else if (i === j) {
    return 1;
  } else {
    const key = i + "|" + j;
    if (!(key in lookup)) {
      if (X.charAt(i) === X.charAt(j)) {
        lookup[key] = lengthOfLongestPalindromicSubsequence(X, i + 1, j - 1, lookup) + 2;
      } else {
        lookup[key] = Math.max(lengthOfLongestPalindromicSubsequence(X, i, j - 1, lookup), 
                               lengthOfLongestPalindromicSubsequence(X, i + 1, j, lookup));
      }
    }
    return lookup[key];
  }
}
const X = "ABBDCACB";
const n = X.length;
console.log(lengthOfLongestPalindromicSubsequence(X, 0, n - 1, {}));

function longestPalindrome(X, Y, m, n, table) {
  if (m === 0 || n === 0) {
    return "";
  } else if (X[m - 1] === Y[n - 1]) {
    return longestPalindrome(X, Y, m - 1, n - 1, table) + X[m -1];
  } else {
    if (table[m - 1][n] > table[m][n - 1]) {
      return longestPalindrome(X, Y, m - 1, n, table);
    }
    return longestPalindrome(X, Y, m, n - 1, table);
  }
}

function lcsLength(X, Y, n, table) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (X[i - 1] === Y[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
    }
  }
  return table[n][n];
}
const Y = "BCACDBBA";
const table = new Array(X.length + 1).fill().map(() => new Array(X.length + 1).fill(0));
console.log(lcsLength(X, Y, X.length, table));
console.log(longestPalindrome(X, Y, X.length, X.length, table));