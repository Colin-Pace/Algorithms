/* Largest consecutive subarray
1. Given an integer array, find the largest subarray of consecutive and distinct integers, but the integers do not need to be in order
2. https://www.techiedelight.com/find-largest-sub-array-formed-by-consecutive-integers/
*/

function isConsecutive(A, i, j, min, max) {
  if (max - min !== j - 1) {
    return false;
  } else {
    let visited = new Array(j - i + 1).fill(false);
    for (let k = i; k <= j; k++) {
      if (visited[A[k] - min]) {
        return false;
      } else {
        visited[A[k] - min] = true;
      }
    }
    return true;
  }
}

function findMaxSubarray(A) {
  let len = 1;
  let start = 0;
  let end = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let min_val = A[i];
    let max_val = A[i];
    for (let j = i + 1; j < A.length; j++) {
      min_val = Math.min(min_val, A[j]);
      max_val = Math.max(max_val, A[j]);
      if (isConsecutive(A, i, j, min_val, max_val)) {
        if (len < max_val - min_val + 1) {
          len = max_val - min_val + 1;
          start = i;
          end = j;
        }
      }
    }
  }
  const result = [start, end];
  return result;
}

const A = [2, 0, 2, 1, 4, 3, 1, 0];
/*            i           j

1.1.
min = 0
max = 2
isConsecutive(A, 0, 1, 0, 2), return false

1.2.
min = 0
max = 2
iC(A, 0, 2, 0, 2), return false

1.3.
min = 0
max = 2
iC(A, 0, 3, 0, 2)
visited = [false, false, false, false]
k = 0
if (2 - 0), false
visited = [false, false, true, false]
k = 1
if (0 - 0), false
vsited = [true, false, true, false]
k = 2
if (2 - 0), true; return false

1.4.
min = 0
max = 4
iC(A, 0, 4, 0, 4), return false

1.5.
min = 0
max = 4
iC(A, 0, 5, 0, 4), return false

1.6.
min = 0
max = 4
iC(A, 0, 6, 0, 4), return false

1.7.
min = 0
max = 4
iC(A, 0, 7, 0, 4), return false

2.1.
i = 1
j = 2
min = 0
max = 2
iC(A, 1, 2, 0, 2), return false

...

2.5.
i = 1
j = 5
min = 0
max = 4
iC(A, 1, 5, 0, 4)
max - min = 4, j - 1 = 4
visited = [false, false, false, false, false]
k = 1
A[k] - min = 0
visited = [true, false, false, false, false]
k = 2
A[k] - min = 2
visited = [true, false, true, false, false]
k = 3
A[k] - min = 1
visited = [true, true, true, false, false]
k = 4
A[k] - min = 4
visited = [true, true, true, false, true]
k = 5
A[k] - min = 3
visited = [true, true, true, true, true], return true
len = 1 (less than 5)
len = 5, start = 1, end = 5

2.6.
i = 2
j = 3

... */

console.log(findMaxSubarray(A));