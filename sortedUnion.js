/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */


function sortedUnion(array) {
  const items = {}, l = array.length, result = [];

  for (let i = 0; i < l; i++) {
    const l_ = array[i].length;
    for (let j = 0; j < l_; j++) {
      if (!items[array[i][j]]) items[array[i][j]] = true;
    }
  }

  for (let i = 0; i < l; i++) {
    const l_ = array[i].length;
    for (let j = 0; j < l_; j++) {
      if (items[array[i][j]]) {
        result.push(array[i][j]);
        items[array[i][j]] = false;
      }
    }
  }

  return result;
}

const inputOne = [[1, 3, 2], [5, 2, 1, 4], [2, 1]];
const inputTwo = [[1, 2, 3], [5, 2, 1]];
const inputThree = [[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]];

console.log(sortedUnion(inputOne));
console.log(sortedUnion(inputTwo));
console.log(sortedUnion(inputThree));
