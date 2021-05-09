/* Knapsack problem
1. Prompt: Given a list of values with a corresponding weight in another list, determine the number of each item to include in a collection so that the total weight is less than or equal to a limit and is as large as possible
2. https://www.techiedelight.com/0-1-knapsack-problem/ */

function knapsackRecursive(v, w, n, W, lookup) {
  if (W < 0) {
    return Number.NEGATIVE_INFINITY;
  }
  if (n < 0 || W === 0) {
    return 0;
  }
  const key = n + "|" + W;
  if (!(key in lookup)) {
    const include = v[n] + knapsack(v, w, n - 1, W - w[n], lookup);
    const exclude = knapsack(v, w, n - 1, W, lookup);
    lookup[key] = Math.max(include, exclude);
  }
  return lookup[key];
}

function knapsackIterative(v, w, W) {
  const table = new Array(v.length + 1).fill(0).map(() => new Array(W + 1).fill(0));
  for (let i = 1; i <= v.length; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (w[i - 1] > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i - 1][j - w[i - 1]] + v[i - 1]);
      }
    }
  }
  return table[v.length][W];
}

const v = [20, 5, 10, 40, 15, 25];
const w = [1, 2, 3, 8, 7, 4];
const W = 10;
const lookup = {};
console.log(knapsackRecursive(v, w, v.length - 1, W, lookup));
console.log(knapsackIterative(v, w, W));
