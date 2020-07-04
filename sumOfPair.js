/*
Given an array of integers determine whether it contains a pair of numbers whose value is equal to a target if multiple pairs exist, return the first pair
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let integer = 7;

function sumOfPair(values, target) {
  let object = {};
  for (let a = 0; a < values.length; a++) {
    if (values[a] in object) {
      continue;
    } else {
      object[values[a]] = true;
    }

    let complement = Math.abs(target - values[a]);
    if (complement in object) {
      return `${values[a]} and ${complement}`
    }
  }

  let noPair = "Pair not found"
  return noPair;
}

console.log(sumOfPair(array, integer));
