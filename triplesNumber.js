/*
Let's say that a "triple" in a string,
  is a character appearing three times in a row;

Return the number of triples in the given string;

The triples can overlap;

For instance, if the input were "aaa", the output would be 1;

If the input were "cccc", the output would be 2;

If the input were "ababbbaaaa", the output would be 3
*/
let inputOne = "aaa";
let inputTwo = "cccc";
let inputThree = "ababbbaaaa";
function triplesNumber(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i+1] === str[i] && str[i+2] === str[i]) {
      count++;
    }
  }
  return count;
}
console.log(triplesNumber(inputOne));
console.log(triplesNumber(inputTwo));
console.log(triplesNumber(inputThree));
