/* Maximum product rod cutting
1. Find the optimal way to cut a rod, of the length n, into smaller rods so that the product of each of the smaller rod's prices is maximized; each rod length i has the price i
2. https://www.techiedelight.com/maximum-product-rod-cutting/ */

function findMaxProfit(n) {
  const table = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    table[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      table[i] = Math.max(table[i], j * table[i - j]);
    }
  }

  return table[n];
}

console.log(findMaxProfit(15));