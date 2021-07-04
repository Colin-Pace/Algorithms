/* Iterative mergesort

Big O
1. Time: O(n logn)  
2. Space: O(n)        

https://www.techiedelight.com/iterative-merge-sort-algorithm-bottom-up/   */


function merge(A, temp, from, mid, to) {
  let k = from;
  let i = from;
  let j = mid + 1;

  while (i <= mid && j <= to) {
    if (A[i] < A[j]) {
      temp[k++] = A[i++];
    
    } else {
      temp[k++] = A[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = A[i++];
  }

  for (i = from; i <= to; i++) {
    A[i] = temp[i];
  }
}

function mergesort(A) {
  const low = 0;
  const high = A.length - 1;

  const temp = Array.from(A);
  
  for (let m = 1; m <= high - low; m = 2 * m) {
    for (let i = low; i < high; i += 2 * m) {
      const from = i;
      const mid = i + m - 1;
      const to = Math.min(i + 2 * m - 1, high);

      merge(A, temp, from, mid, to);
    }
  }

  console.log(A);
}


const integers = [5, 4, 1, 3, 2];
mergesort(integers);