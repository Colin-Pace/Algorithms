/* Coin change problem
1. Given an unlimited supply of coins of different denominations, find the number of distinct ways to get the desired change
2. https://www.techiedelight.com/coin-change-problem-find-total-number-ways-get-denomination-coins/
*/

function coinChangeRecursive(S, n, N, lookup) {
  if (N === 0) {
    return 1;
  }
  if (N < 0 || n < 0) {
    return 0;
  }
  const key = n + "|" + N;
  if (!(key in lookup)) {
    const include = coinChangeRecursive(S, n, N - S[n], lookup);
    const exclude = coinChangeRecursive(S, n - 1, N, lookup);
    lookup[key] = include + exclude;
  }
  return lookup[key];
}
const S = [1, 2, 3];
const N = 4;
console.log(coinChangeRecursive(S, S.length - 1, N, {}));

function coinChangeIterative(S, N) {
  let table = [];
  for (let i = 0; i < N + 1; i ++) {
    table.push(0);
  }
  table[0] = 1;
  for (let i = 0; i < S.length; i++) {
    let j = S[i];
    while (j <= N) {
      table[j] += table[j - S[i]];
      j = j + 1;
    }
  }
  return table[N];
}
console.log(coinChangeIterative(S, N))