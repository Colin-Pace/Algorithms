/* Determine if a string is the permutation of a palindrome

Big O
1. Time: O(n)
2. Space: O(1), if there is a limit on the character count  */


function palindromePermutation(string) {
  let storage = {};
  for (let itr = 0; itr < string.length; itr++) {
    let element = string[itr];
    if (element === " ") {
      continue;
    } else {
      if (element in storage) {
        storage[element] += 1;
      } else {
        storage[element] = 1;
      }
    }
  }

  let oddCount = 0;
  for (let element in storage) {
    if (storage[element] % 2 !== 0) {
      oddCount += 1;
      if (oddCount > 1) {
        return false;
      }
    }
  }

  return true;
}


const strOne = "tact coa";
const strTwo = "tactca";
const strThree = "hot dogs";

console.log(palindromePermutation(strOne));
console.log(palindromePermutation(strTwo));
console.log(palindromePermutation(strThree));

