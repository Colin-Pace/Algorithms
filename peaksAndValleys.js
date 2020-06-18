/*
Given an array of integers, sort it into an alternating sequence of peaks and valleys. A peak is an element that is greater than or equal to its adjacent integers. A valley is an element that is less than or equal to its adjacent integers. 
*/

function sortValleyPeak(array) {
  const maxIndex = function(array, a, b, c) {
    const len = array.length;
    const aValue = a >= 0 && a < len ? array[a] : Number.MIN_VALUE;
    const bValue = b >= 0 && b < len ? array[b] : Number.MIN_VALUE;
    const cValue = c >= 0 && c < len ? array[c] : Number.MIN_VALUE;

    const max = Math.max(aValue, Math.max(bValue, cValue));
    if (aValue === max) return a;
    else if (bValue === max) return b;
    else return c;
  }

  let l = array.length;
  for (let i = 0; i < l; i += 2) {
    const biggestIndex = maxIndex(array, i - 1, i, i + 1);
    if (i !== biggestIndex) {
      [array[i], array[biggestIndex]] = [array[biggestIndex], array[i]];
    }
  }

  return array;
}

const array = [5, 3, 1, 2, 3];
const secondExample = [9, 1, 0, 4, 8, 7];
console.log(sortValleyPeak(array));
console.log(sortValleyPeak(secondExample));
