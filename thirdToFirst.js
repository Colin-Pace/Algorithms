/*
Given a string, write a function that computes a new string by changing every set of three characters.

In each set the third item should be moved to first in its set, and the other two should follow in the original order;

For example,
  "abc" yields "bca",
  "abcdef" yields "bcaefd",
  "abcdefghi" yields "bcaefd";

Ignore any group of fewer than three characters at the end
*/

let inputOne = "abc";
let inputTwo = "abcdef";
let inputThree = "abcdefgh";

function thirdToFirst(string) {
  let array = [];
  for (let i = 0; i < string.length; i+=3) {
    if (string[i+2]) {
      array += string[i+1];
      array += string[i+2];
      array += string[i];

    } else {
      break;
    }
  }

  let result = array.toString();
  return result;
}

//console.log(thirdToFirst(inputOne));
//console.log(thirdToFirst(inputTwo));
//console.log(thirdToFirst(inputThree));
