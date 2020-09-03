// Recursive
function fibonacci(int, memo) {
  memo = memo || {};
  if (memo[int]) return memo[int];
  else if (int < 1) return 0;
  else if (int <= 2) return 1;
  else {
    memo[int] = fibonacci(int - 1, memo) + fibonacci(int - 2, memo);
    return memo[int];
  }
}
console.log(fibonacci(10));

// Iterative
function fibonacci(int) {
  if (int === 0) return 0;
  else if (int === 1) return 1;
  else if (int === 2) return 1;
  else {
    let first = 1;
    let second = 1;
    for (let i = 3; i <= int; i++) {
      let next = first + second;
      if (i === int) return next
      first = second;
      second = next;
    }
  }
}
console.log(fibonacci(10));
