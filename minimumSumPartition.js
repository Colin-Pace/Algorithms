// Given a list of positive integers, partition the list into two subsets so that the difference between the sum of the elements in each subset is minimized

function minPartitionRecursion(S, n, S1, S2, lookup) {
  if (n < 0) {
    return Math.abs(S1 - S2);
  }

  const key = n + "|" + S1;
  if (!(key in lookup)) {
    const inc = minPartitionRecursion(S, n - 1, S1 + S[n], S2, lookup);
    const exc = minPartitionRecursion(S, n - 1, S1, S2 + S[n], lookup);
    lookup[key] = Math.min(inc, exc);
  }

  return lookup[key];
}

function minPartition(S) {
  const sum = S.reduce((a, b) => a + b, 0);
  const table = new Array(S.length + 1).fill().map(() => new Array(sum + 1).fill(false));
  for (let i = 0; i <= S.length; i++) {
    table[i][0] = true;
    for (let j = 1; i > 0 && j <= sum; j++) {
      table[i][j] = table[i - 1][j];
      if (S[i - 1] <= j) {
        table[i][j] |= table[i - 1][j - S[i - 1]];
      }
    }
  }

  let j = Math.floor(sum / 2);
  while (j >= 0 && !table[S.length][j]) {
    j--;
  }
  
  return sum - 2 * j;
}

const S = [10, 20, 15, 15, 25];
const lookup = {};
console.log(minPartitionRecursion(S, S.length - 1, 0, 0, lookup));
console.log(minPartition(S));