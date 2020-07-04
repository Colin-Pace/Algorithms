/*
Write a function that accepts a string.

Look for patterns like "zip" and "zap" in the string, i.e., patterns with a length of 3 that start with 'z' and end with 'p';

Return a string where for all such patterns the middle letter is gone;

For instance "zipXzap" would yield "zpXzp" and "zzzopzop" would yield "zzzpzp"
*/

let inputOne = "zipXzap";
let inputTwo = "zzzopzop";

function letterPattern(str) {
  let array = [];
  let i = 0;

  while (i < str.length - 2) {
    if (str[i] === "z" && str[i+2] === "p") {
      array.push(str[i]);
      array.push(str[i+2]);
      i+=3;
    } else {
      array.push(str[i])
      i++;
    }
  }

  if (str[str.length - 1] !== "p") {
    array.push(str[str.length - 2]);
    array.push(str[str.length - 1]);
  }

  let result = array.join(" ");
  return result;
}

console.log(letterPattern(inputOne));
console.log(letterPattern(inputTwo));
