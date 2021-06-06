// Find the length of the longest alternating subsequence: https://www.techiedelight.com/longest-alternating-subsequence/

function util(A, start, end, flag, lookup) {
  if (start >= A.length) {
    return 0;
  } else if (lookup[start][flag] === 0) {
    let result = 0;
  
    for (let i = start; i <= end; i++) {
      if (flag === 1 && A[i - 1] < A[i]) {
        result = Math.max(result, 1 + util(A, i + 1, end, 0, lookup));
      } else if (flag === 0 && A[i - 1] > A[i]) {
        result = Math.max(result, 1 + util(A, i + 1, end, 1, lookup));
      } else {
        result = Math.max(result, util(A, i + 1, end, flag, lookup));
      }
    }
    
    lookup[start][flag] = result;
  }

  return lookup[start][flag];
}

function findLongestSequenceRecursive(A, lookup) {
  return 1 + Math.max(util(A, 1, A.length - 1, 1, lookup),
                      util(A, 1, A.length - 1, 0, lookup));
}


// _____________________________________________

function findLongestSequence(A, lookup) {
  let result = 0;
  lookup[0][0] = lookup[0][1] = 1;
  for (let i = 1; i < A.length; i++) {
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j]) {
        lookup[i][0] = Math.max(lookup[i][0], lookup[j][1] + 1);
      } 
      
      if (A[i] < A[j]) {
        lookup[i][1] = Math.max(lookup[i][1], lookup[j][0] + 1);
      }
    }

    if (result < Math.max(lookup[i][0], lookup[i][1])) {
      result = Math.max(lookup[i][0], lookup[i][1]);
    }
  }

  return result;
}

const A = [8, 9, 6, 4, 5, 7, 3, 2, 4];
let lookup = new Array(A.length).fill().map(() => new Array(2).fill(0));
console.log(findLongestSequenceRecursive(A, lookup));

lookup = new Array(A.length).fill().map(() => new Array(2).fill(0));
console.log(findLongestSequence(A, lookup));