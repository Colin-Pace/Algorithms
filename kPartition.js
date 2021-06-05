// Partition an array of positive integers into k disjoint subsets which have an equal some and completely cover the array

function checkSum(sumLeft, k) {
  let r = true; 
  for (let i = 0; i < k; i++) {
    if (sumLeft[i] !== 0) {
      r = false;
    }
  }

  return r;
}

function subsetSum(S, n, sumLeft, A, k) {
  if (checkSum(sumLeft, k)) {
    return true;
  } else if (n < 0) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < k; i++) {
      if (!result && (sumLeft[i] - S[n]) >= 0) {
        A[n] = i + 1;
        sumLeft[i] = sumLeft[i] - S[n];
        result = subsetSum(S, n - 1, sumLeft, A, k);
        sumLeft[i] = sumLeft[i] + S[n];
      }
    }

    return result;
  }
}

function partition(S, k) {
  const n = S.length;
  if (n < k) {
    return null;
  }

  const sum = S.reduce((a, b) => a + b, 0);
  const A = new Array(n).fill(0);
  const sumLeft = new Array(k);
  sumLeft.fill(sum / k);
  
  const result = (sum % k) === 0 && subsetSum(S, n - 1, sumLeft, A, k);
  if (!result) {
    return null;
  } else {
    for (let i = 0; i < k; i++) {
      console.log("Partition " + i + " is ");
      const collection = [];
      for (let j = 0; j < n; j++) {
        if (A[j] === i + 1) {
          collection.push(S[j]);
        }
      }
      console.log(collection);
    }
  }
}

const S = [7, 3, 5, 12, 2, 1, 5, 3, 8, 4, 6, 4];
const k = 5;
partition(S, k);