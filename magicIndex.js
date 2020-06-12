// In an array, a magic index is A[i] = i.
// Given a sorted array of distinct integers, find the magic index

const array = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
function magicIndex(array, start, end) {
  if (end < start) return false;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === mid) return mid;
  else if (array[mid] > mid) return magicIndex(array, start, mid - 1);
  else return magicIndex(array, mid + 1, end);
}
console.log(magicIndex(array, 0, array.length - 1));
