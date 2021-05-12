/* Subset sum problem
1. Prompt: Given a set of positive integers and an integer S, is there any non-empty subset whose sum is S
2. https://www.techiedelight.com/subset-sum-problem/  */

/*
1. n = 4, sum = 14
  1.a. n = 3, sum = 6
    1.a.1. n = 2, sum = 1, callback false
      1.a.1.a. n = 1, sum = -1, return false
      1.a.1.b. n = 1, sum = 1, callback false
        1.a.1.b.1. n = 0, sum = -2, return false
        1.a.1.b.2. n = 0, sum = 1, callback false
          1.a.1.b.2.a. n = -1, sum = -6, return false
          1.a.1.b.2.b. n = -1, sum = 1, return false
    1.a.2. n = 2, sum = 6, callback false 
      1.a.2.a. n = 1, sum = 4, callback false 
        1.a.2.a.1. n = 0, sum = 1, callback false
          1.a.2.a.1.a. n = -1, sum = -6, return false
        1.a.2.a.2. n = 0, sum = 4, callback false
          1.a.2.a.2.a. n = -1, sum = -3, return false
          1.a.2.a.2.b. n = -1, sum = 4, return false
      1.a.2.b. n = 1, sum = 6, callback false 
        1.a.2.b.1. n = 0, sum = 3, callback false
          1.a.2.b.1.a. n = -1, sum = -4, return false
          1.a.2.b.1.b. n = -1, sum = 3, return false
        1.a.2.b.2. n = 0, sum = 6, callback false
          1.a.2.b.2.a. n = -1, sum = -1, return false
          1.a.2.b.2.b. n = -1, sum = 6, return false
  1.b. n = 3, sum = 14
    1.b.1. n = 2, sum = 9
      1.b.1.a. n = 1, sum = 7
        1.b.1.a.1. n = 0, sum = 4
          1.b.1.a.1.a. n = -1, sum = -3, return false
          1.b.1.a.1.b. n = -1, sum = 4, return false
        1.b.1.a.2. n = 0, sum = 7
          1.b.1.a.2.a. n = -1, sum = 0, return true ****************************
      1.b.1.b. n = 1, sum = 9
    1.b.2. n = 2, sum = 14
*/

const integers = [7, 3, 2, 5, 8];

function subsetSum(integers, n, sum, lookup) {
  if (sum === 0) {
    return true;
  } else if (n < 0 || sum < 0) {
    return false;
  } else {
    const key = n + "|" + sum;
    if (!(key in lookup)) {
      const include = subsetSum(integers, n - 1, sum - integers[n], lookup);
      const exclude = subsetSum(integers, n - 1, sum, lookup);
      lookup[key] = include || exclude;
    }
    return lookup[key];
  }
}
console.log(subsetSum(integers, integers.length - 1, 14, {}));

function subsetSumIterative(integers, sum) {
  const n = integers.length;
  const table = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(0));
  for (let i = 0; i <= n; i++) {
    table[i][0] = true;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (integers[i - 1] > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] || table[i - 1][j - integers[i - 1]];
      }
    }
  }
  return table[n][sum];
}
console.log(subsetSumIterative(integers, 18));


