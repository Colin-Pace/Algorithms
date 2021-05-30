/* Levenshtein or edit distance
1. Prompt: compute the number of single-character edits (insertions, deletions, or substitutions) for changing one string into another
2. https://www.techiedelight.com/levenshtein-distance-edit-distance-problem/ */

const X = "kitten";
const Y = "sitting";

function distance(X, m, Y, n) {
  if (m === 0) {
    return n;
  } else if (n === 0) {
    return m
  } else {
    const cost = (X.charAt(m - 1) === Y.charAt(n - 1)) ? 0 : 1;
    return Math.min(distance(X, m - 1, Y, n) + 1,
                    distance(X, m, Y, n - 1) + 1,
                    distance(X, m - 1, Y, n - 1) + cost);
  }
}
console.log(distance(X, X.length, Y, Y.length));

function distanceMemoized(X, m, Y, n, memo) {
  if (m === 0) {
    return n;
  } else if (n === 0) {
    return m
  } else {
    const key = m + "|" + n;
    if (!(key in memo)) {
      const cost = (X.charAt(m - 1) === Y.charAt(n - 1)) ? 0 : 1;
      memo[key] = Math.min(
        distanceMemoized(X, m - 1, Y, n, memo) + 1,
        distanceMemoized(X, m, Y, n - 1, memo) + 1,
        distanceMemoized(X, m - 1, Y, n - 1, memo) + cost
      );
    }
    return memo[key];
  }
}
console.log(distanceMemoized(X, X.length, Y, Y.length, {}));

function iterativeDistance(X, Y) {
  const m = X.length;
  const n = Y.length;
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    table[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    table[0][j] = j;
  }
  let cost;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X.charAt(i - 1) === Y.charAt(j - 1)) {
        cost = 0;
      } else {
        cost = 1;
      }
      table[i][j] = Math.min(
        table[i - 1][j] + 1,
        table[i][j - 1] + 1,
        table[i - 1][j - 1] + cost 
      )
    }
  }
  return table[m][n];
}
console.log(iterativeDistance(X, Y));