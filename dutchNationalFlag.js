/* Dutch national flag problem
1. Sort an array of 0's, 1's, and 2's in linear time and constant space */

function threeWayPartition(A, end) {
  let start = 0;
  let mid = 0;
  let pivot = 1;
  while (mid <= end) {
    if (A[mid] < pivot) {
      swap(A, start, mid);
      start++;
      mid++;
    } else if (A[mid] > pivot) {
      swap(A, mid, end);
      end--;
    } else {
      mid++;
    }
  }
  return A;
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

const A = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0];
console.log(threeWayPartition(A, A.length - 1));

/*
1. 
A[mid] = 0, start = 0, mid = 0
A = [0, 1, ...]
start = 1
mid = 1

2.
A[mid] = 1
start = 1
mid = 2

3. 
A[mid] = 2
A = [0, 1, 0, 2, ..., 2]
end = 10
start = 1
mid = 2

4.
A[mid] = 0
A = [0, 0, 1, 2, ...]
start = 2
mid = 3

...  */