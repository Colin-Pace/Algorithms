/* Partition
1. Given a set of positive integers, find if it can be divided into two subsets with equal sum 
2. https://www.techiedelight.com/partition-problem/  */

const A = [7, 3, 1, 5, 4, 8];

function recursiveSubsetSum(A, n, sum) {
  if (sum === 0) {
    return true;
  } else if (n < 0 || sum < 0) {
    return false;
  } else {
    const include = recursiveSubsetSum(A, n - 1, sum - A[n]);
    if (include) {
      return true;
    } else {
      const exclude = recursiveSubsetSum(A, n - 1, sum);
      return exclude;
    }
  }
}

function memoizedSubsetSum(A, n, sum, memo) {
  if (sum === 0) {
    return true;
  } else if (n < 0 || sum < 0) {
    return false;
  } else {
    const key = n + "|" + sum;
    if (!(key in memo)) {
      const include = memoizedSubsetSum(A, n - 1, sum - A[n], memo);
      if (include) {
        memo[key] = include;
        return true;
      } else {
        const exclude = memoizedSubsetSum(A, n - 1, sum, memo);
        memo[key] = exclude;
      }
    }
    return memo[key];
  }
}

function subsetSum(A, n, sum) {
  const table = new Array(n + 1).fill(0).map(
    () => new Array(sum + 1).fill(0)
  );
  for (let i = 0; i <= n; i++) {
    table[i][0] = true;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (A[i - 1] > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j] ||
                      table[i - 1][j - A[i - 1]];
      }
    }
  }
  return table[n][sum];
}

function partition(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }
  console.log(sum % 2 === 0 && recursiveSubsetSum(A, A.length, sum / 2));
  console.log(sum % 2 === 0 && memoizedSubsetSum(A, A.length, sum / 2, {}));
  console.log(sum % 2 === 0 && subsetSum(A, A.length, sum / 2));
}
partition(A);