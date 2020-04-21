/*
Given an unsorted array of integers, find the length of longest subsequence. A subsequence can be contiguous, but its indices increase.
*/

let inputOne = [10,9,2,5,3,7,101,18];
let inputTwo = [10, 1, 2, 3, 4, 5];
let inputThree = [1, 2, 5, 3, 4, 6];
let inputFour = [5, 4, 1, 2, 3];


function longestSubsequence(integers) {
  let subsequences = [];
  let length = 0;

  for (let i = 0; i < integers.length; i++) {
    if (i === 0) {
      subsequences[i] = [integers[0]];
    } else {
      for (let j = 0; j < subsequences.length; j++) {

        if (integers[i] > subsequences[j][subsequences[j].length - 1]) {
          subsequences[j].push(integers[i]);

        } else if (integers[i] < subsequences[j][subsequences[j].length - 1] && integers[i] > subsequences[j][subsequences[j][0]]) {

          for (let k = 0; k < subsequences[j].length; k++) {
            if (subsequences[j][k] < integers[i]) {
              continue;

            } else {
              let temp = subsequences[j].slice(0, k);
              temp.push(integers[i]);
              subsequences.push(temp);
            }
          }

        } else if (integers[i] < subsequences[j][0] && j === subsequences.length - 1) {
          let temp = [];
          temp.push(integers[i]);
          subsequences.push(temp);
        }
      }
    }
  }

  for (let i = 0; i < subsequences.length; i++) {
    if (subsequences[i].length > length) {
      length = subsequences[i].length;
    }
  }

  return length;
}

console.log(longestSubsequence(inputOne));
//console.log(longestSubsequence(inputTwo));
// console.log(longestSubsequence(inputThree));
// console.log(longestSubsequence(inputFour));
