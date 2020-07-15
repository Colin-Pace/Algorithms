/*
Write a function that takes in and returns a string. The returned string should contain the same characters as the input string, but rearranged such that the first character and every other character following that come at the end of the string

Examples: "abc" -> "bac", "stadium" -> "tdusaim".
*/

let stringOne = 'abc';
let stringTwo = 'stadium';

function everyOtherAtEnd(str) {
  let array = str.split('')
  let before = [];
  let after = [];

  for (let i = 0; i <= array.length - 1; i++) {
    if (i % 2 !== 0) {
      before.push(str[i]);
    } else {
      after.push(str[i]);
    }
  }

  for (let i = 0; i <= after.length - 1; i++) {
    before.push(after[i]);
  }

  let result = before.join('')
  return result
}

console.log(everyOtherAtEnd(stringOne));
console.log(everyOtherAtEnd(stringTwo));
