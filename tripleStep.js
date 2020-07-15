// Starting from zero, how many ways can an integer be reached by adding 1, 2, or 3?

function countWays(integer, memo) {
  memo = {} || memo;
  if (integer < 0) {
    return 0;
  } else if (integer === 0) {
    return 1;
  } else if (memo[integer] > -1) {
    return memo[integer];
  } else {
    memo[integer] = countWays(integer - 1, memo) + countWays(integer - 2, memo) + countWays(integer - 3, memo);
    return memo[integer];
  }
}

console.log(countWays(3));
