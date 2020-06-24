// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water. Return the magnitude of the water.

function containerWithMostWater(array) {
  let start = 0, end = array.length - 1, max = 0, shorter = 0, volume = 0;
  let startInd = 0, endInd = 0;

  while (start < end) {
    if (array[start] > array[end]) shorter = array[end];
    else shorter = array[start];

    volume = (Math.abs(end - start) * shorter);
    if (volume > max) {
      max = volume;
      startInd = start;
      endInd = end;
    }

    if (array[start] > array[end]) end--;
    else start++;
  }

  return max;
}

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(input));
