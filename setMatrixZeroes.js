/*
Given a n x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1

Input:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
*/


let input = [[1, 1, 1],
             [1, 0, 1],
             [1, 1, 1]];

let inputTwo = [[1, 1, 1],
                [1, 1, 1],
                [0, 1, 1]];

let inputThree = [[1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 1],
                  [1, 1, 1, 0, 1],
                  [1, 1, 1, 1, 1],
                  [1, 1, 1, 1, 1]];


function setMatrixZeroes(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 0) {
        map[i] = j;
      }
    }
  }

  for (let i in map) {
    for (let j = 0; j < input[i].length; j++) {
      input[i][j] = 0;
    }
  }

  for (let i in map) {
    let column = map[i];
    for (let j = 0; j < input.length; j++) {
      input[j][column] = 0;
    }
  }

  return input;
}

console.log(setMatrixZeroes(input));
console.log(setMatrixZeroes(inputTwo));
console.log(setMatrixZeroes(inputThree));
