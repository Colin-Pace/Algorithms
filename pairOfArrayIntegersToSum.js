// Find all pairs of integers in an array that sum to a specified value

function pairSums(array, value) {
  let l = array.length;
  let integers = {};
  for (let i = 0; i < l; i++) {
    if ((value - array[i]) in integers) {
      console.log([value, (value - array[i])]);
    } else integers[array[i]] = true;
  }
}
const integers = [5, 2, 35, 7, 9, 4, 1, 14, 6];
const value = 23;
pairSums(integers, value);
