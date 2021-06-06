// Trapping rain water: https://www.techiedelight.com/trapping-rain-water-within-given-set-bars/

function trappingRainWater(heights) {
  let left = 0;
  let right = heights.length - 1;
  let water = 0;
  let maxLeft = heights[left];
  let maxRight = heights[right];

  while (left < right) {
    if (heights[left] <= heights[right]) {
      left++;
      maxLeft = Math.max(maxLeft, heights[left]);
      water += (maxLeft - heights[left]);
    } else {
      right--;
      maxRight = Math.max(maxRight, heights[right]);
      water += (maxRight - heights[right]);
    }
  }

  return water;
}

const heights = [7, 0, 4, 2, 5, 0, 6, 4, 0, 5];
console.log(trappingRainWater(heights));