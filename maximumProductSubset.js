/* Maximum product subset
1. Find a subset in a list with the maximum product of its elements
2. https://www.techiedelight.com/maximum-product-subset-problem/ */

function findMaxProduct(A, n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return A[0];
  }

  let product = 1;
  let abs_min_so_far = Number.MAX_VALUE;
  let negative = 0;
  let positive = 0;
  let contains_zero = false;

  for (let i = 0; i < n; i++) {
    if (A[i] < 0) {
      negative++;
      abs_min_so_far = Math.min(abs_min_so_far, Math.abs(A[i]));
    } else if (A[i] > 0) {
      positive++;
    }

    if (A[i] === 0) {
      contains_zero = true;
    } else {
      product = product * A[i];
    }
  }

  if ((negative & 1) !== 0) {
    product = product / -abs_min_so_far;
  }

  if (negative === 1 && positive === 0 && contains_zero) {
    product = 0;
  }

  return product;
}

const A = [-6, 4, -5, 8, -10, 0, 8];
console.log(findMaxProduct(A, A.length));