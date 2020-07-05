// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAllNumbersInRange(array) {
  let max = Math.max(array[0], array[1]);
  let min = Math.min(array[0], array[1]);
  let count = 0, result;

  while (max > min) {
    count += max;
    max--;
  }

  result = count + min;
  return result;
}

const inputOne = [4, 1];
const inputTwo = [1, 4];
const inputThree = [5, 10];
const inputFour = [10, 5];

console.log(sumAllNumbersInRange(inputOne));
console.log(sumAllNumbersInRange(inputTwo));
console.log(sumAllNumbersInRange(inputThree));
console.log(sumAllNumbersInRange(inputFour));
