/* Longest bitonic subarray
1. Elements increase, decrease, or increase and then decrease
2. https://www.techiedelight.com/find-longest-bitonic-subarray-array/
*/

function findBitonicSubarray(A) {
  const n = A.length;
  let i = 0;
  let end_index = 0;
  let max_len = 0;
  
  while (i + 1 < n) {
    let len = 1;
    while (i + 1 < n && A[i] < A[i + 1]) {
      i++;
      len++;
    }
  
    while (i + 1 < n && A[i] > A[i + 1]) {
      i++;
      len++;
    }

    if (len > max_len) {
      max_len = len;
      end_index = i;
    }
  }

  return [end_index, max_len];
}

const A = [3, 5, 8, 4, 5, 9, 10, 8, 5, 3, 4];
const [end_index, max_len] = findBitonicSubarray(A);
console.log("Longest bitonic subarray length: " + max_len);
console.log("Indices: [" + (end_index - max_len + 1) + ", " + end_index + "]");