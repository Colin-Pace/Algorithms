/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

function containsDuplicates(integers) {
  let visited = {};
  const l = integers.length;
  for (let i = 0; i < l; i++) {
    if (visited[integers[i]] === true) return true;
    else visited[integers[i]] = true;
  }
  return false;
}

const inputOne = [1, 2, 3, 1];
const inputTwo = [1, 2, 3, 4];
const inputThree = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicates(inputOne));
console.log(containsDuplicates(inputTwo));
console.log(containsDuplicates(inputThree));
