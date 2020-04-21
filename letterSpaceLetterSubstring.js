/*
Write a function that returns true,
  if there is a substring of the format "r",
  then some other character,
    then another "r"

For instance, valid true returns,
  would be for "ror", "r2rcl90",
  "123r7r"

Valid false returns would be for,
  the string "r3c", "81rla",
  "2r2", "ewe", "rzzr"
*/
let stringOne = 'ror';
let stringTwo = 'r2rcl90';
let stringThree = '123r7r';
let stringFour = 'r3c';
let stringFive = '81rla';
let stringSix = '2r2';
let stringSeven = 'ewe';
let stringEight = 'rzzr';
function isSubstring(string) {
  for (let i = 0; i < string.length - 2; i++) {
    if (string[i] === 'r') {
      if (string[i+2] === 'r') {
        return true;
      }
    }
  }
  return false;
}
console.log(isSubstring(stringEight));
