// Find the factorial of a number

const factorial = number => {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log('Without memoization:');
console.time();
console.log(factorial(20));
console.timeEnd();
console.log('\n')


// With memo optimization

function factorial_(integer, memo) {
  memo = memo || {};
  if (memo[integer]) return memo[integer];
  else if (integer === 0) return 1;
  else {
    memo[integer] = integer * factorial_(integer - 1);
    return memo[integer];
  }
}

console.log('With memoization:');
console.time();
console.log(factorial_(20));
console.timeEnd();
