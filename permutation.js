// Check if one of two strings is a permutation of the other

let inputOne = "permutation";
let inputTwo = "mutation";
let inputThree = "notmutation";
let inputFour = "mutationper";
function isPermutation(one, two) {
  if (one.length !== two.length) {
    return false;
  } else {

    let storage = {};
    for (let itr = 0; itr < one.length; itr++) {
      let item = one[itr];
      if (item in storage) {
        storage[item] += 1;
      } else {
        storage[item] = 1;
      }
    }

    let storageTwo = {};
    for (let itr = 0; itr < two.length; itr++) {
      let item = two[itr];
      if (item in storageTwo) {
        storageTwo[item] += 1;
        if (storageTwo[item] > storage[item]) {
          return false;
        }
      } else {
        storageTwo[item] = 1;
      }
    }

    for (let item in storage) {
      if (storage[item] !== storageTwo[item]) {
        return false;
      }
    }

    return true;
  }
}
console.log(isPermutation(inputOne, inputTwo));
console.log(isPermutation(inputOne, inputThree));
console.log(isPermutation(inputOne, inputFour));
