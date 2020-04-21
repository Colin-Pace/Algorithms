/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).


Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

let integers = [4, 5, 6, 7, 0, 1, 2];
let value = 0;

let integersTwo = [400, 450, 600, 640, 1000, 1100, 1200, 10, 20, 30, 40];
let valueTwo = 20;

function findIntegerIndex(integers, value) {
  let first = integers[0];
  let midIndex = Math.floor(integers.length / 2);
  let midValue = integers[midIndex];

  if (value < midValue && value >= first) {
    for (let i = 0; i < midIndex; i++) {
      if (integers[i] === value) {
        return i;
      }
    }
  } else {
    for (let i = midIndex; i < integers.length; i++) {
      if (integers[i] === value) {
        return i;
      }
    }
  }

  return -1;
}

console.log(findIntegerIndex(integers, value));
console.log(findIntegerIndex(integersTwo, valueTwo));
