// Given an array of positive and negative integers, find the contiguous sequence with the largest sum, and return the sum

function getMaxSum(a) {
  let maxsum = 0;
  let sum = 0;
  let l = a.length;
  for (let i = 0; i < l; i++) {
    sum += a[i];
    if (maxsum < sum) maxsum = sum;
    else if (sum < 0) sum = 0;
  }
  return maxsum;
}
const array = [2, -8, 3, -2, 4, -16];
console.log(getMaxSum(array));
