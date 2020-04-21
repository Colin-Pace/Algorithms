/*
Space complexity
1. O(n) time and O(n) space complexity
2. O(n) time and O(1) space complexity
    a. Addition of adjacent elements is constant space complexity
*/

// 1.
function sum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n-1);
}
console.log(sum(5));

// 2.
function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}
function pairSum(a, b) {
  return a + b;
}
console.log(pairSumSequence(5));
