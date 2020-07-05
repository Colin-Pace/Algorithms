/* Sum of string numbers:

Write a function that, given a string that has a series of space-separated numbers returns the sum of those numbers. */

let integers = '1 2 3 4 132';
function sumNumbers(str) {
  let result = 0;
  let array = str.split(' ');

  for (let i = 0; i < array.length; i++) {
    result += parseInt(array[i]);
  }

  return console.log(result);
}

sumNumbers(integers);
