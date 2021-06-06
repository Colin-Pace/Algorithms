// Find the longest consecutive subsequence of distinct, consecutive values, and irrespective of order: https://www.techiedelight.com/find-longest-subsequence-formed-by-consecutive-integers/

function findMaxLenSubsequence(integers) {
  const set = new Set(integers); 
  let maxLen = 1;

  for (let i = 0; i < integers.length; i++) {
    if (!set.has(integers[i] - 1)) {
      let len = 1;

      while (set.has(integers[i] + len)) {
        len++;
      }

      maxLen = Math.max(maxLen, len);
    }
  }

  return maxLen;
}

const integers = [2, 0, 6, 1, 5, 3, 7];
console.log(findMaxLenSubsequence(integers));