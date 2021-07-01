function quicksort(integers, low, high) {
  if (low < high) {
    const pivot = partition(integers, low, high);
    quicksort(integers, low, pivot - 1);
    quicksort(integers, pivot + 1, high);
  }

  return integers;
}

function partition(integers, low, high) {
  let pivotIndex = high;
  let i = low;
  const pivot = integers[pivotIndex];
  
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

const integers = [4, 1, 5, 2, 6, 3];
console.log(quicksort(integers, 0, integers.length - 1));