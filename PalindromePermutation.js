// Determine if a string is the permutation of a palindrome

function palindromePermutation(string) {
  let storage = {};
  for (let itr = 0; itr < string.length; itr++) {
    let item = string[itr];
    if (item === " ") {
      continue;
    } else {
      if (item in storage) {
        storage[item] += 1;
      } else {
        storage[item] = 1;
      }
    }
  }

  let oddCount = 0;
  for (let item in storage) {
    if (storage[item] % 2 !== 0) {
      oddCount += 1;
      if (oddCount > 1) {
        return false;
      }
    }
  }

  return true;
}

let inputOne = "tact coa";
let inputTwo = "hot dogs";
console.log(palindromePermutation(inputOne));
console.log(palindromePermutation(inputTwo));
