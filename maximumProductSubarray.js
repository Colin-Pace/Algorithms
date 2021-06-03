// Maximum product subarray

function min(x, y) {
  return (x < y) ? x : y;
}

function max(x, y) {
  return (x > y) ? x : y;
}

function findMaxProduct(ints) {
  let max_ending = 0;
  let min_ending = 0;
  let max_so_far = 0;
  for (let i = 0; i < ints.length; i++) {
    let temp = max_ending;
    max_ending = max(ints[i], max(ints[i] * max_ending, ints[i] * min_ending));
    min_ending = min(ints[i], min(ints[i] * temp, ints[i] * min_ending));
    max_so_far = max(max_so_far, max_ending);
  }

  return max_so_far;
}

const integers = [-6, 4, -5, 8, -10, 0, 8];
console.log(findMaxProduct(integers));