// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffTwoArrays(array, array_) {
  const items = {}, items_ = {}, result = [];
  const l = array.length, l_ = array_.length;

  for (let i = 0; i < l; i++) items[array[i]] = true;
  for (let i = 0; i < l_; i++) items_[array_[i]] = true;

  for (let i = 0; i < l; i++) {
    if (array[i] in items_) continue;
    else result.push(array[i]);
  }

  for (let i = 0; i < l_; i++) {
    if (array_[i] in items) continue;
    else result.push(array_[i]);
  }

  return result;
}

const inputOne = [1, 2, 3, 5];
const inputOne_ = [1, 2, 3, 4, 5];

const inputTwo = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
const inputTwo_ = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

const inputThree = [1, "calf", 3, "piglet"];
const inputThree_ = [1, "calf", 3, 4];

const inputFour = [1, "calf", 3, "piglet"];
const inputFour_ = [7, "filly"];

console.log(diffTwoArrays(inputOne, inputOne_));
console.log(diffTwoArrays(inputTwo, inputTwo_));
console.log(diffTwoArrays(inputThree, inputThree_));
console.log(diffTwoArrays(inputFour, inputFour_));
