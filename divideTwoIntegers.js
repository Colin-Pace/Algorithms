/*
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
*/

let dividend = 10;
let divisor = 3;

function likeDivision(dividend, divisor) {
  let result = 1;
  let sum = divisor;

  while (sum < dividend) {
    sum += divisor;
    result++;
  }

  if (sum > dividend) result--;

  return result;
}

console.log(likeDivision(dividend, divisor));
