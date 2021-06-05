// Find the longest alternating subarray with positive and negative elements

function longestSubarray(A) {
  let maxLen = 1;
  let endIndex = 0;
  let currLen = 1;
  
  for (let i = 1; i < A.length; i++) {
    if (A[i] * A[i - 1] < 0) {
      currLen++;
      if (currLen > maxLen) {
        maxLen = currLen;
        endIndex = i;
      }
    } else {
      currLen = 1;
    }
  }

  const subList = A.slice(endIndex - maxLen + 1, endIndex + 1);
  return subList;
}

const A = [1, -2, 6, 4, -3, 2, -4, -3];
console.log(longestSubarray(A));