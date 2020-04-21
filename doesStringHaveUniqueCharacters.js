// Determine if a string has unique characters

let inputOne = "False false";
let inputTwo = "12345 1";
let inputThree = "True 1234";

function areUniqueCharacters(string) {
  string.toLowerCase();
  let storage = {};
  for (let itr = 0; itr < string.length; itr++) {
    let item = string[itr];
    if (item in storage) {
      return false;
    } else {
      storage[item] = 1;
    }
  }
  return true;
}

console.log(areUniqueCharacters(inputOne));
console.log(areUniqueCharacters(inputTwo));
console.log(areUniqueCharacters(inputThree));
