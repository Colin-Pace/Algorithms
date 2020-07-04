/*
Write a function that, given a string, returns the length, of the largest block in the string. A block is a run of adjacent characters that are the same.

For instance, the largest block in "abcdef" is 1;

The largest block in "abcc" is 2;

The largest block in "abbbbbcdeffg" is 5 */

let inputOne = "abcdef";
let inputTwo = "abcc";
let inputThree = "abbbbbcdeffg";

function characterCount(str) {
  let count = 1;
  let largestSequence = -1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      count++;
      if (i === str.length - 1) {
        largestSequence = Math.max(largestSequence, count);
      }

    } else {
      largestSequence = Math.max(largestSequence, count);
      count = 1;
    }
  }

  return largestSequence;
}

console.log(characterCount(inputOne));
console.log(characterCount(inputTwo));
console.log(characterCount(inputThree));
