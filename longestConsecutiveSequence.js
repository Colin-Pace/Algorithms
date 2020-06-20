// Given an unsorted array of integers, find the length of the longest consecutive sequence of elements

function findMedian(array) {
  const sort = function(array) {
    if (array.length < 2) return array;
    else {
      const mid = Math.floor(array.length / 2);
      const left = sort(array.slice(0, mid));
      const right = sort(array.slice(mid));

      const merge = function(left, right) {
        const result = [];
        while (left.length && right.length) {
          result.push(left[0] < right[0] ? left.shift() : right.shift())
        }
        return result.concat(left.length ? left : right);
      }

      return merge(left, right);
    }
  }

  const sorted = sort(array);
  let count = 1, max = 1, ind;
  const result = [];

  const findLongestSequence = function(sorted) {
    const l = sorted.length - 1;
    for (let i = 0; i < l; i++) {
      if ((sorted[i] + 1) === sorted[i + 1]) {
        count++;
      } else {
        if (count > max) {
          max = count;
          count = 1;
          ind = i;
        }
      }
    }

    for (let i = 0; i < l; i++) {
      if (max === 0) break;
      else if (i === (ind - max) + 1) {
        result.push(sorted[i]);
        max--;
      }
    }

    return result;
  }

  return findLongestSequence(sorted);
}

const ints = [100, 4, 200, 1, 3, 2];
console.log(findMedian(ints));
