/* Rod cutting problem
1. Given a rod of length n and two lists, rod lengths and prices, cut the rod into smaller rods so that profit is maximized
2. https://www.techiedelight.com/rod-cutting/
3. Rod length = [1, 2, 3, 4, 5, 6, 7, 8];
*/ 
const price =   [1, 5, 8, 9, 10, 17, 17, 20];
const n = 4;

function rodCutMemoized(price, n, lookup) {
  if (n in lookup) {
    return lookup[n];
  } else if (n === 0) {
    return 0;
  } else {
    let maxValue = Number.MIN_VALUE;
    for (let i = 1; i <= n; i++) {
      lookup[n] = price[i - 1] + rodCutMemoized(price, n - i, lookup);
      if (lookup[n] > maxValue) {
        maxValue = lookup[n];
      }
    }
    return maxValue;
  }
}
console.log(rodCutMemoized(price, n, {}));

function rodCutRecursive(price, n) {
  if (n === 0) {
    return n;
  }
  let maxValue = Number.MIN_VALUE;
  for (let i = 1; i <= n; i++) {
    const cost = price[i - 1] + rodCutRecursive(price, n - i);
    if (cost > maxValue) {
      maxValue = cost;
    }
  }
  return maxValue;
}
console.log(rodCutRecursive(price, n));

function rodCut(price, n) {
  const table = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      table[i] = Math.max(table[i], price[j - 1] + table[i - j]);
    }
  }
  return table[n];
}
console.log(rodCut(price, n));