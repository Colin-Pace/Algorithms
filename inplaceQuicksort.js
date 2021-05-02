function quicksort(integers, low, high) {
  if (low < high) {
    const pivot = partition(integers, low, high);
    quicksort(integers, low, pivot - 1);
    quicksort(integers, pivot + 1, high);
  }
}

function partition(integers, low, high) {
  let pivotIndex = high;
  const pivot = integers[pivotIndex];
  let i = low;
  while (i < integers.length - 1) {
    if (integers[i] > pivot && i < pivotIndex) {
      const greaterElement = integers[i];
      const subIndex = pivotIndex - 1;
      const sub = integers[subIndex];
      integers[i] = sub;
      integers[pivotIndex] = greaterElement;
      integers[subIndex] = pivot;
      pivotIndex--;
    } else {
      i++;
    }
  }
  return pivotIndex;
}

const integers = [5, 1, 3, 6, 3, 4, 8];
quicksort(integers, 0, integers.length - 1);
console.log(integers);