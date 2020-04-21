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
