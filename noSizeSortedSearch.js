// Find the index of an element in an array without using a size method; there is a method for return the element an an index, which returns -1 if it is out of bounds

const integers = [1, 2, 3, 4, 10, 15, 20, 50, 80, 100, 150, 200, 250, 280];

function search(list, value) {
  let index = 1;
  while (list[index] !== -1 && list[index] < value) index *= 2;
  return binarySearch(list, value, Math.floor(index / 2), index);
}

function binarySearch(list, value, low, high) {
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);;
    const middle = list[mid];
    if (middle > value || middle === undefined) high = mid - 1;
    else if (middle < value) low = mid + 1;
    else return mid;
  }
  return -1;
}
console.log(search(integers, 150));
