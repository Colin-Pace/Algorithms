// A triangular number counts the objects that con form an equilateral triangle. It is the sum of the natural numbers from one to n

const triangularNumber = (number, memo) => {
  memo = memo || {};
  if (memo[number]) {
    return memo[number];
  } else if (number <= 1) {
    return 1;
  } else {
    memo[number] = triangularNumber(number - 1) + number;
    return memo[number];
  }
}
console.log(triangularNumber(5));
