// Given two sorted arrays, A and B, merge B into A; assume A has enough room to hodl B

let inputA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
let inputB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

function sortedMerge(A, B) {
  let indexA = A.length - 1;
  let indexB = B.length - 1;
  let indexMerged = (A.length + B.length) - 1;

  while (indexB >= 0) {
    if (indexA >= 0 && A[indexA] > B[indexB]) {
      A[indexMerged] = A[indexA];
      indexA--;
    } else {
      A[indexMerged] = B[indexB];
      indexB--;
    }
    indexMerged--;
  }
  return A;
}

console.log(sortedMerge(inputA, inputB));
