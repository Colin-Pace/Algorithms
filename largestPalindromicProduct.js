/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromicProduct(int) {
  let multiplicand = "";
  for (let i = 0; i < int; i++) multiplicand += 9;
  multiplicand = Number(multiplicand);
  let multiplier = multiplicand;
  let result = null;
  const seen = {};

  while (multiplicand > 0) {
    multiplier = multiplicand;

    while (multiplier > 0) {
      let test = String(multiplicand * multiplier);
      let l = 0, r = test.length - 1;

      if (test in seen) break;
      else seen[test] = true;

      while (l < r) {
        if (test[l] === test[r]) {
          if (r - 1 === l || r - 2 === l) {
            if (Number(test) > result) result = Number(test);
            break;
          } else l++, r--;
        } else break;
      }

      multiplier--;
    }

    multiplicand--;
  }

  return result;
}

console.log(largestPalindromicProduct(3));
