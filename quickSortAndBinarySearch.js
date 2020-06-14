// Quick sort and binary search

let integers = [4, 1, 8, 2, 6, 10, 3, 9, 5, 7];
function quickSort(ints) {
  if (ints.length <= 1) return ints;
  else {
    let left = [], right = [], result = [], pivot = ints.pop();
    for (let i = 0; i < ints.length; i++) {
      if (ints[i] <= pivot) left.push(ints[i]);
      else right.push(ints[i]);
    }
    return result.concat(quickSort(left), pivot, quickSort(right));
  }
}
const sorted = quickSort(integers);
console.log(sorted);

function binarySearch(array, x, start, end) {
  if (start > end) return false;
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === x) return mid;
  if (array[mid] > x) return binarySearch(array, x, start, mid - 1);
  else return binarySearch(array, x, mid + 1, end);
}
const x = 3;
console.log(`Item at index: ${binarySearch(sorted, x, 0, sorted.length - 1)}`);
