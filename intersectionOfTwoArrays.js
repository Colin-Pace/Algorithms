// Given two arrays, write a function to compute their intersection. An intersection is an order of two or more numbers that appears in both arrays. Assume there is only one intersection.

function intersectionOfTwoArrays(array, array_) {
  if (!array.length || !array_.length) return null;
  const result = [];
  let start = 0, end, start_ = 0, end_, visited = {}, visited_ = {};
  const l = array.length, l_ = array_.length;

  for (let i = 0; i < l; i++) visited[array[i]] = (visited[array[i]] || 0) + 1;
  for (let i = 0; i < l_; i++) {
    visited_[array_[i]] = (visited_[array_[i]] || 0) + 1;
  };

  let temp;
  for (let i = 0; i < l_ - 1; i++) if (visited[array_[i]]) {
    if (visited_[array_[i]] > 1) {
      temp = 0;
      while (array[temp] !== array_[i]) temp++;

      if (array[temp + 1]) {
        if (array[temp + 1] === array_[i + 1]) {
          start_ = i;
          break;
        }
      } else continue;

    } else {
      start_ = i;
      break;
    }
  }

  while (array[start] !== array_[start_]) start++;
  end = start, end_ = start_;

  while (array[end] === array_[end_] && end < l && end_ < l_) {
    end++;
    end_++;
  }

  while (start < end) {
    result.push(array[start]);
    start++;
  }

  return result;
}

const inputOne = [1, 2, 2, 1];
const inputOne_ = [2, 2];

const inputTwo = [4, 9, 5];
const inputTwo_ = [9, 4, 9, 8, 4];

const inputThree = [0, 10, 4, 5, 10];
const inputThree_ = [1, 2, 3, 4, 5, 6];

const inputFour = [0, 10, 4, 5];
const inputFour_ = [1, 2, 3, 4, 5];

console.log(intersectionOfTwoArrays(inputOne, inputOne_));
console.log(intersectionOfTwoArrays(inputTwo, inputTwo_));
console.log(intersectionOfTwoArrays(inputThree, inputThree_));
console.log(intersectionOfTwoArrays(inputFour, inputFour_));
