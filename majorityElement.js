// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times. Assume that the array is non-empty and the majority element always exist in the array.

function majorityElement(integers) {
  const l = integers.length;
  let visited = {};
  for (let i = 0; i < l; i++) {
    visited[integers[i]] = (visited[integers[i]] || 0) + 1;
  }
  for (let i in visited) {
    if (visited[i] > (l / 2)) return i;
  }
}

const inputOne = [3, 2, 3];
const inputTwo = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(inputOne));
console.log(majorityElement(inputTwo));
