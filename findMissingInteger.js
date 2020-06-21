// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

function findMissingInteger(array) {
  if (!array.length) return null;
  let visited = {}, maximum = null;
  const l = array.length;
  for (let i = 0; i < l; i++) visited[array[i]] = true;
  for (let i in visited) if (i > maximum) maximum = i;
  for (let i = 0; i < maximum; i++) if (!visited[i]) return i;
}

const input = [3, 0, 1];
const input_ = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingInteger(input));
console.log(findMissingInteger(input_));
