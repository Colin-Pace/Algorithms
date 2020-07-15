// Given an unsorted integer array, find the smallest missing positive integer

function findMissingPositive(array) {
  let min = Number.MAX_VALUE, result;
  let l = array.length;

  for (let i = 0; i < l; i++) if (array[i] < min && array[i] > 0) {
    min = array[i];
    result = min + 1;
  }

  for (let i = 0; i < l; i++) if (array[i] === result) result++;
  if (min > 1) return 1;
  else return result;
}

const inputOne = [1, 2, 0];
const inputTwo = [3, 4, -1, 1];
const inputThree = [7, 8, 9, 11, 12];

console.log(findMissingPositive(inputOne));
console.log(findMissingPositive(inputTwo));
console.log(findMissingPositive(inputThree));
