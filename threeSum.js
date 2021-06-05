// Given an unsorted array, find a triplet that has a given sum

function doesTripletExist(A, sum) {
  const map = {};
  for (let i = 0; i < A.length; i++) {
    map[A[i]] = i;
  }

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const val = sum - A[i] + A[j];
      if (val in map) {
        if (map[val] !== i && map[val] !== j) {
          return true;
        }
      }
    }
  }

  return false;
}

const A = [2, 7, 4, 0, 9, 5, 1, 3];
const sum = 6 ;
console.log(doesTripletExist(A, sum));