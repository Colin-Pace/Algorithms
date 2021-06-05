// Problem: https://www.techiedelight.com/longest-increasing-subsequence/
// Solution: https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-increasing-subsequence/dpLongestIncreasingSubsequence.js

function dpLongestIncreasingSubsequence(sequence) {
  const lengths = Array(sequence.length).fill(1);
  let prevIdx = 0;
  let currIdx = 1;

  while (currIdx < sequence.length) {
    if (sequence[prevIdx] < sequence[currIdx]) {
      const newLength = lengths[prevIdx] + 1;
      if (newLength > lengths[currIdx]) {
        lengths[currIdx] = newLength;
      }
    }

    prevIdx += 1;

    if (prevIdx === currIdx) {
      currIdx += 1;
      prevIdx = 0;
    }
  }

  let longest = 0;

  for (let i = 0; i < lengths.length; i += 1) {
    if (lengths[i] > longest) {
      longest = lengths[i];
    }
  }

  return longest;
}

const integers = [2, 6, 3, 4, 1, 2, 9, 5, 8];
console.log(dpLongestIncreasingSubsequence(integers));