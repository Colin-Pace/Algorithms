/*
Write a function that,
  given a non-empty array,
  returns true if there is a place,
    to split the array such that,
    the sum of the numbers on one side,
    is equal to the sum
      of the numbers on the other side;

Return true for [44, 44] and [44, 22, 22],
  for instance, but not [44, 22, 23]
*/
let inputOne = [44, 44];
let inputTwo = [44, 22, 22];
let inputThree = [44, 22, 23];
function equalSplit(array) {
  let sum = 0;
  let half = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  half = Math.floor(sum / 2);
  for (let i = 0; i < array.length; i++) {
    sum -= array[i];
    if (sum === half) {
      return true;
    }
  }
  return false;
}
// console.log(equalSplit(inputOne));
// console.log(equalSplit(inputTwo));
// console.log(equalSplit(inputThree));
