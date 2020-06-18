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


// Alternative solution
function pairSums(array, value) {
  array.sort(function(a, b){return a - b});
  let first = 0;
  let last = array.length - 1;
  while (first < last) {
    let s = array[first] + array[last];
    if (s === value) {
      console.log([array[first], array[last]]);
      first++;
      last--;
    } else {
      if (s < value) first++;
      else last--;
    }
  }
}
//pairSums(integers, value);
