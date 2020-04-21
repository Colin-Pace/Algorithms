/*
Recursive runtime
1. Runtime is O(2^n); space complexity is O(N)

            4
      3         3
    2   2     2   2
  1 1  1  1  1 1  1 1

*/
function f(n) {
  if (n <= 1) {
    return 1;
  }
  return f(n - 1) + f(n - 1);
}
console.log(f(4));
