/* 3 partition
1. Given a set of integers, determine if it can be divided into three subsets whose elements have an equal sum
2. https://www.techiedelight.com/3-partition-problem/  */


/*
1. S = [7, 3, 2, 1, 5, 4, 8], n = 6, a = 10, b = 10, c = 10
  1.1. n = 5, a = 2, b = 10, c = 10
    1.1.1. n = 4, a = 2, b = 6, c = 10
      1.1.1.1. n = 3, a = 2, b = 1, c = 10, callback true **
        1.1.1.1.1. n = 2, a = 1, b = 1, c = 10, callback false
          1.1.1.1.1.1. n = 1, a = 1, b = 1, c = 8
            1.1.1.1.1.1.1. n = 0, a = 1, b = 1, c = 5
              1.1.1.1.1.1.1.1. n = -1, return false
        1.1.1.1.2. n = 2, a = 2, b = 0, c = 10, callback true
          1.1.1.1.2.1. n = 1, a = 0, b = 0, c = 10
            1.1.1.1.2.1.1. n = 0, a = 0, b = 0, c = 7
              1.1.1.1.2.1.1.1. n = -1, a = 0, b = 0, c = 0, return true  */


function subsetSum(S, n, a, b, c, lookup) {
  if (a === 0 && b === 0 && c === 0) {
    return true;
  }
  if (n < 0) {
    return false;
  }
  const key = a + "|" + b + "|" + c + "|" + n;
  if (!(key in lookup)) {
    let A = false;
    let B = false;
    let C = false;
    if (a - S[n] >= 0) {
      A = subsetSum(S, n - 1, a - S[n], b, c, lookup);
    }
    if (!A && (b - S[n] >= 0)) {
      B = subsetSum(S, n - 1, a, b - S[n], c, lookup);
    }
    if ((!A && !B) && (c - S[n] >= 0)) {
      C = subsetSum(S, n - 1, a, b, c - S[n], lookup);
    }
    lookup[key] = A || B || C;
  }
  return lookup[key];
}

function partition(S) {
  if (S.length < 3) {
    return false;
  }
  const lookup = {};
  let sum = 0;
  for (let i = 0; i < S.length; i++) {
    sum += S[i];
  }
  return sum % 3 === 0 && subsetSum(S, S.length - 1, sum / 3, sum /3, sum / 3, lookup);
}

const S = [7, 3, 2, 1, 5, 4, 8];
console.log(partition(S));