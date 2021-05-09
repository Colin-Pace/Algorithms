/* Coin change problem
1. Given an unlimited supply of coins of different denominations, find the number of distinct ways to get the desired change
2. https://www.techiedelight.com/coin-change-problem-find-total-number-ways-get-denomination-coins/
*/
/*
Call stack___________________________________
  Branch one
                1.a.2.b.2
                1.a.2.b.1
                1.a.2.b
                1.a.2.a
                1.a.2
                1.a.1
                1.a

  Branch two
                1.b.1.a.2
                1.b.1.a.1
                1.b.1.b
                1.b.1.a
                1.b.1
            
  Branch three
                1.b.2.a.1
                
  Branch four
                1.b.2.a.2

  Branch five
                1.b.2.a

  Branch six
                1.b.2.b
                1.b.2
                1.b
                1


Recursive tree________________________________
1. n = 2, N = 4, callback 4
  1.a. n = 2, N = 1, callback 1
    1.a.1. n = 2, N = -2, return 0
    1.a.2. n = 1, N = 1,, callback 1
      1.a.2.a. n = 1, N = -1, return 0
      1.a.2.b. n = 0, N = 1, callback 1
        1.a.2.b.1. n = 0, N = 0, return 1
        1.a.2.b.2. n = -1, N = 1, return 0
  1.b. n = 1, N = 4, callback 3
    1.b.1. n = 1, N = 2, callback 2
      1.b.1.a. n = 1, N = 0, return 1
      1.b.1.b. n = 0, N = 2, callback 1
        1.b.1.a.1. n = 0, N = 1, return 1
        1.b.1.a.2. n = -1, N = 2, return 0
    1.b.2. n = 0, N = 4, callback 1
      1.b.2.a. n = 0, N = 3, calback 1
        1.b.2.a.1. n = 0, N = 2, return 1
                (a. n = 0, N = 1
                      1. n = 0, N = 0, return 1
                      2. n = -1, N = 0, return 1
                b. n = -1, N = 1, return 0)
        1.b.2.a.2. n = -1, N = 3, return 0
      1.b.2.b. n = -1, N = 4, return 0
*/
function coinChangeRecursive(S, n, N, lookup) {
  if (N === 0) {
    return 1;
  } else if (n < 0 || N < 0) {
    return 0;
  } else {
    const key = n + "|" + N;
    if (!(key in lookup)) {
      const include = coinChangeRecursive(S, n, N - S[n], lookup);
      const exclude = coinChangeRecursive(S, n - 1, N, lookup);
      lookup[key] = include + exclude;
    }
    return lookup[key];
  }
}
const S = [1, 2, 3];
const n = S.length - 1;
const N = 4;
const lookup = {};
console.log(coinChangeRecursive(S, n, N, lookup));

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
//console.log(coinChangeIterative(S, N))