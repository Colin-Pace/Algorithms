/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

function removeDuplicates(array) {
  if (!array.length) return null;
  const len = array.length;
  let l = 0, r = 1;

  while (r < len) {
    if (array[l] === array[r]) {
      while (array[l] === array[r]) r++;
      l++;
      array[l] = array[r];
    }
  }

  let pop = r - l;
  while (pop) {
    array.pop();
    pop--;
  }

  return array;
}

const input = [1, 1, 2];
const input_ = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(input));
console.log(removeDuplicates(input_));
