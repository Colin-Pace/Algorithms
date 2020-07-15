// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place without making a copy of the array. Minimize the total number of operations.

function moveZeros(integers) {
  let fast = 1, slow = 0;
  const l = integers.length;
  while (fast < l) {
    if (integers[fast] === 0) {
      fast++;
    } else {
      while (integers[slow] !== 0) slow++;
      integers[slow] = integers[fast];
      integers[fast] = 0;
      fast++;
    }
  }
  return integers;
}

const input = [0, 1, 0, 3, 12];
const inputTwo = [1, 0, 20, 0, 0, 8, 0];

console.log(moveZeros(input));
console.log(moveZeros(inputTwo));
