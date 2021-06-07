/* Water jugs
1. https://www.techiedelight.com/water-jugs-problem/ */

function swap(A, i, j) {
  const temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function partition(A, low, high, pivot) {
  let pIndex = low;
  for (let j = low; j < high; j++) {
    if (A[j] < pivot) {
      swap(A, pIndex, j);
      pIndex++;
    } else if (A[j] === pivot) {
      swap(A, j, high);
      j--;
    }
  }

  swap(A, pIndex, high);
  return pIndex;
}

function findMatchingPairs(red, blue, low, high) {
  if (low >= high) {
    return;
  }

  const r = Math.floor(Math.random() * (high - low + 1) + low);
  const chosenJug = red[r];
  const pivot = partition(red, low, high, chosenJug);
  partition(blue, low, high, chosenJug);
  findMatchingPairs(red, blue, low, pivot - 1);
  findMatchingPairs(red, blue, pivot + 1, high);
}

const red = [6, 3, 2, 8, 7];
const blue = [8, 6, 7, 2, 3];

findMatchingPairs(red, blue, 0, red.length - 1);
console.log("Red jugs: " + red);
console.log("Blue jugs: " + blue);