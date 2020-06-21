// Given a non empty array of integers, every element appears twice except for one. Find the single one.

function singleNumber(integers) {
  if (!integers) return null;
  let visited = {};
  const l = integers.length;
  for (let i = 0; i < l; i++) {
    visited[integers[i]] = (visited[integers[i]] || 0) + 1;
  }
  for (let i in visited) if (visited[i] === 1) return i;
}

const array = [2, 2, 1];
const array_ = [4, 1, 2, 1, 2];
console.log(singleNumber(array));
console.log(singleNumber(array_));
