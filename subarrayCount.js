// How many non-empty subarrays have a sum s?
let input = [1, 0, 1, 0, 1];
let s = 2;

function subarrayCount(ints, s) {
  let count = 0;
  for (let i = 0; i < ints.length; i++) {
    let sum = 0;
    for (let j = i; j < ints.length; j++) {
      sum += ints[j];
      if (sum === s) count++;
    }
  }

  return count;
}

console.log(subarrayCount(input, s));
