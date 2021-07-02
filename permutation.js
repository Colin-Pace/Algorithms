/* Check if one of two strings is a permutation of the other; assume ASCII characters

Big O
1. Time: O(c + p), where c and p are the lengths of the strings
2. Space: O(1), since there is a limit of possible characters   */


function isPermutation(one, two) {
  if (one.length !== two.length) {
    return false;
  } else {

    let storage = {};
    for (let itr = 0; itr < one.length; itr++) {
      let element = one[itr];
      if (element in storage) {
        storage[element] += 1;
      } else {
        storage[element] = 1;
      }
    }

    let storageTwo = {};
    for (let itr = 0; itr < two.length; itr++) {
      let element = two[itr];
      if (element in storageTwo) {
        storageTwo[element] += 1;
        if (storageTwo[element] > storage[element]) {
          return false;
        }
      } else {
        storageTwo[element] = 1;
      }
    }

    for (let element in storage) {
      if (storage[element] !== storageTwo[element]) {
        return false;
      }
    }

    return true;
  }
}


let strOne = "permutation";
let strTwo = "mutation";
let strThree = "notmutation";
let strFour = "mutationper";

console.log(isPermutation(strOne, strTwo)); // false
console.log(isPermutation(strOne, strThree)); // false
console.log(isPermutation(strOne, strFour)); // true
