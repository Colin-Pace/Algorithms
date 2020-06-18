/*
Write a function that reverses and returns, the first integers of an array
*/
let inputOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputTwo = [10, 4, 8, 5, 7, 2, 1, 7, 8];
let inputThree = 5;
function flipIntegers(array, index) {
  let result = [];
  for (let b = index - 1; b > -1; b--) {
    result.push(array[b]);
  }
  for (let b = index; b < array.length; b++) {
    result.push(array[b]);
  }
  return result;
}
console.log(flipIntegers(inputOne, inputThree));
console.log(flipIntegers(inputTwo, inputThree));

/*
Write a function that reverses and returns the first integers of an array -- without a new array
*/
function sameDataStructure(array, index) {
  let length = array.length;
  for (let b = index - 1; b > -1; b--) {
    array.push(array[b]);
  }
  for (let b = index; b < length; b++) {
    array.push(array[b]);
  }
  for (let b = 0; b < length; b++) {
    array.shift()
  }
  return array;
}
console.log(sameDataStructure(inputOne, inputThree));
console.log(sameDataStructure(inputTwo, inputThree));
