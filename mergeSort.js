// Sort an array of integers with merge sort

function sort(integers) {
  if (integers.length < 2) return integers;
  else {
    const mid = Math.floor(integers.length / 2);
    const left = sort(integers.slice(0, mid));
    const right = sort(integers.slice(mid));

    const merge = function(left, right) {
      const result = [];
      while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
      }
      return result.concat(left.length ? left : right);
    }

    return merge(left, right);
  }
}

const numbers = [4, 1, 3, 2, 5, 7, 6, 10, 9, 8];
console.log(sort(numbers));
