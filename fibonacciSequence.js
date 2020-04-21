
function fibonacciSequence(n, memo) {
  memo = memo || {};

  if (memo[n]) {
    return memo[n];
  } else if (n < 1) {
    return 0;
  } else if (n <= 2) {
    return 1;
  } else {
    memo[n] = fibonacciSequence(n - 1, memo) + fibonacciSequence(n - 2, memo);
    return memo[n];
  }
}

console.log(fibonacciSequence(100));
