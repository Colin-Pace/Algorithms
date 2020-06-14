// Given an increasing sorted array of integers that has been rotated, find an element


function search(ints, left, right, x) {
  let result;
  const mid = Math.floor((left + right) / 2);
  if (ints[mid] === x) return mid;
  if (right < left) return false;

  if (ints[left] < ints[mid]) {
    if (x >= ints[left] && x < ints[mid]) {
      return search(ints, left, mid - 1, x);
    } else {
      return search(ints, mid + 1, right, x);
    }

  } else if (ints[mid] < ints[left]) {
    if (x > ints[mid] && x <= ints[right]) {
      return search(ints, mid + 1, right, x);
    } else {
      return search(ints, left, mid - 1, x);
    }

  } else if (ints[left] === ints[mid]) {
    if (ints[mid] != ints[right]) {
      return search(ints, mid + 1, right, x);
    } else {
      result = search(ints, left, mid - 1, x);
      if (result === -1) return search(ints, mid + 1, right, x);
      else return result;
    }
  }
  return false;
}

const array = [50, 5, 20, 30, 40];
console.log(search(array, 0, array.length - 1, 5));
