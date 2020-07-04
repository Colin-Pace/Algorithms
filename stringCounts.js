/*
Write a function that returns true if the string "cat" and "dog" appear the same number of times;

For example, return true for an input of "cat//dog........catdog" and you'd return false for an input of "cat//dog............catcow"
*/

let stringTrue = "cat//dog........catdog";
let stringFalse = "cat//dog........catcow";

function stringCounts(str) {
  let catCount = 0;
  let dogCount = 0;

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === 'c') {
      if (str[i+1] === 'a') {
        if (str[i+2] === 't') {
          catCount++;
        }
      }
    }
    if (str[i] === 'd') {
      if (str[i+1] === 'o') {
        if (str[i+2] === 'g') {
          dogCount++;
        }
      }
    }
  }

  if (catCount === dogCount) {
    return true;
  }
  return false;
}

console.log(stringCounts(stringTrue));
console.log(stringCounts(stringFalse));
