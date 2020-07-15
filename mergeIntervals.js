/*
Given a collection of intervals, merge all overlapping intervals. Assume that any overlapping intervals are sequential.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/

let inputOne = [[1, 3], [2, 6], [8, 10], [15, 18]];

let inputTwo = [[1, 3], [2, 4], [3, 5], [6, 7], [8, 10], [9, 12], [10, 13], [12, 14], [15, 16], [17, 18], [19, 22], [20, 21]];

let inputThree = [[1, 3], [4, 6], [8, 12], [10, 20]];

let inputFour = [[1, 3], [2, 4], [3, 5], [4, 6]];

let inputFive = [[1, 2], [3, 4], [5, 6], [7, 8]];


function mergeIntervals(input) {
  let result = [];
  let indices = [];
  let nonMerge = [];
  let nonMergeIndices = [];
  let nonMergeObject = {};
  let ends = [];
  let endsObject = {};

  // Find indices to merge
  for (let i = 1; i < input.length; i++) {
    if (input[i][0] < input[i - 1][1]) {
      if (i - 1 === 0) {
        indices.push(0, 1);
      } else {
        indices.push(i - 1, i);
      }
    }
  }

  // Find indices not to merge
  for (let i = 1; i < input.length; i++) {
    if (input[i][0] > input[i - 1][1]) {
      if (i - 1 === 0){
        nonMerge.push(0, i);
      } else {
        nonMerge.push(i - 1, i);
      }
    }
  }

  // Create an object from non merge indices
  for (let i = 1; i < nonMerge.length; i++) {
    if (nonMerge[i - 1] === 0) {
      nonMergeIndices.push(0);
    }
    if (nonMerge[i] === nonMerge[i - 1] || i === nonMerge.length - 1) {
      nonMergeIndices.push(nonMerge[i]);
    }
  }

  for (let i = 0; i < nonMergeIndices.length; i++) {
    nonMergeObject[nonMergeIndices[i]] = true;
  }

  // Create a two dimensional array of the ends of merge sequences
  let buffer = [];
  for (let i = 1; i <= indices.length; i++) {
    if (i === indices.length - 1 && buffer.length !== 0) {
      buffer.push(indices[i]);
      ends.push(buffer);
    } else if (buffer.length < 1) {
      buffer.push(indices[i - 1]);
    } else {
      if (Math.abs(indices[i] - indices[i - 1]) === 1 || Math.abs(indices[i] - indices[i - 1]) === 0) {
        continue;
      } else {
        buffer.push(indices[i - 1]);
        ends.push(buffer);
        buffer = [];
      }
    }
  }

  // Create an object from the two dimensional array
  for (let i = 0; i < ends.length; i++) {
    endsObject[ends[i][0]] = ends[i][1];
  }

  // Create the result array from the merge and non merge objects
  for (let i = 0; i < input.length; i++) {
    if (i in endsObject) {
      result.push( [ input[i][0], input[endsObject[i]][1] ] );
    } else if (i in nonMergeObject) {
      result.push( [ input[i][0], input[i][1] ] );
    }
  }

  return result;
}

console.log(mergeIntervals(inputOne));
console.log(mergeIntervals(inputTwo));
console.log(mergeIntervals(inputThree));
console.log(mergeIntervals(inputFour));
console.log(mergeIntervals(inputFive));
