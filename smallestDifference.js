// Given two arrays, find the pair of values (one from each array) with the smallest, non-negative difference, and return the difference

function findSmallestDifference(array1, array2) {
  array1.sort(function(a, b) {return a - b});
  array2.sort(function(a, b) {return a - b});
  let a = 0;
  let b = 0;
  let difference = Number.MAX_VALUE;
  const l = array1.length;
  const l2 = array2.length;

  while (a < l && b < l2) {
    if (Math.abs(array1[a] - array2[b]) < difference) {
      difference = Math.abs(array1[a] - array2[b]);
    }

    if (array1[a] < array2[b]) a++;
    else b++
  }

  return difference;
}
const array1 = [1, 11, 2, 15];
const array2 = [4, 12, 19, 23, 127, 235];
console.log(findSmallestDifference(array1, array2));
