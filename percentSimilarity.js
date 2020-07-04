/*
Write a function that, given two arrays of integers returns the percentage similarity of the arrays represented as a float from 0 to 1.

For instance, [1, 2, 3] and [1, 2, 3] are 100% similar,so the solution to return is 1.0; for [1, 2, 3, 4] and [1, 2, 3, 5], return 0.75; for [1, 2] and [2, 1], return 0.
*/

let integersOne = [1, 2, 3];
let integersTwo = [1, 2, 3];
let integersThree = [1, 2, 3, 4];
let integersFive = [1, 2, 3, 5];
let integersSix = [1, 2];
let integersSeven = [2, 1];

function percentSimilarity(a, b) {
  let count = 0;
  let multipleDecimals;
  let result;
  if (a.length !== b.length) {
    let difference = Math.abs(a.length - b.length);
    if (a.length > b.length) {
      count += difference;
      for (let i = 0; i < b.length; i++) {
        if (a[i] !== b[i]) {
          count++;
        } else {
          continue;
        }
      }

      multipleDecimals = (1 - (count / a.length));
      result = multipleDecimals.toFixed(2);
      return `The second array is ${result} percent similar to the first`;

    } else {
      count += difference;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          count++;
        } else {
          continue;
        }
      }
    }

    multipleDecimals = (1 - (count / b.length));
    result = multipleDecimals.toFixed(2);
    return `The first array is ${result} percent similar to the second`

  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        count++;
      }
    }

    multipleDecimals = (1 - (count / a.length));
    result = multipleDecimals.toFixed(2);
    return `The two arrays are ${result} percent similar to each other`
  }
}

console.log(percentSimilarity(integersOne, integersThree));
