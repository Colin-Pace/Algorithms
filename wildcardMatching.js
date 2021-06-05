// Wildcard pattern matching

function isMatchingRecursive(chars, pattern, n, m, lookup) {
  if (m < 0 && n < 0) {
    return true;
  } else if (m < 0) {
    return false;
  } else if (n < 0) {
    for (let i = 0; i <= m; i++) {
      if (pattern[i] !== "*") {
        return false;
      }
    }
    return true;
  }
  
  if (!lookup[n][m]) {
    if (pattern[m] === "*") {
      lookup[n][m] = isMatchingRecursive(chars, pattern, n - 1, m, lookup) || isMatchingRecursive(chars, pattern, n, m - 1, lookup);
    } else {
      if (pattern[m] !== "?" && pattern[m] !== chars[n]) {
        lookup[n][m] = false;
      } else {
        lookup[n][m] = isMatchingRecursive(chars, pattern, n - 1, m - 1, lookup);
      }
    }
  }

  return lookup[n][m];
}

function isMatching(str, pattern) {
  const n = str.length;
  const m = pattern.length;
  const table = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));
  
  table[0][0] = true;
  for (let j = 1; j <= m; j++) {
    if (pattern.charAt(j - 1) === "*") {
      table[0][j] = table[0][j - 1];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (pattern.charAt(j - 1) === "*") {
        table[i][j] = table[i - 1][j] || table[i][j - 1];
      } else if (pattern.charAt(j - 1) === "?" || str.charAt(i - 1) === pattern.charAt(j - 1)) {
        table[i][j] = table[i - 1][j - 1];
      }
    }
  }

  return table[n][m];
}

const str = "xyxzzxy";
const pattern = "x***x?";
const lookup = new Array(str.length + 1).fill().map(() => new Array(pattern.length + 1).fill(0));
console.log(isMatchingRecursive(str.split(""), pattern.split(""), str.length - 1, pattern.length - 1, lookup));
console.log(isMatching(str, pattern));
