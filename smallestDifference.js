/*
Smallest difference

1. Given two arrays of integers, compute the pair of values,
    one from each array, with the smallest non-negative difference;
    return the difference
2. E.g.,

      Input:

            [1, 3, 15, 11, 2]
            [23, 127, 235, 19, 8]


      Output: 3 (from pair 11, 8)
*/
let one = [1, 3, 15, 11, 2];
let two = [23, 127, 235, 19, 8];
function smallestDifference(x, y) {
  let xBig = Math.max(...x);
  let xSmall = Math.min(...x);
  let yBig = Math.max(...y);
  let ySmall = Math.min(...y);

  let greater;
  let lesser;
  if (xBig > yBig) {
    greater = x;
    lesser = y;
  } else {
    greater = y;
    lesser = x;
  }

  if (xSmall > yBig) {
    return xSmall - yBig;
  } else if (ySmall > xBig) {
    return ySmall - xBig;
  } else {
    let xCommon = [];
    let yCommon = [];

    if (x === greater) {
      for (let i = 0; i < x.length; i++) {
        if (x[i] <= yBig) {
          xCommon.push(x[i]);
        }
      }
      for (let i = 0; i < y.length; i++) {
        if (y[i] >= xSmall) {
          yCommon.push(y[i]);
        }
      }
    } else {
      for (let i = 0; i < x.length; i++) {
        if (x[i] >= ySmall) {
          xCommon.push(x[i]);
        }
      }
      for (let i = 0; i < y.length; i++) {
        if (y[i] <= xBig) {
          yCommon.push(y[i]);
        }
      }
    }

    return console.log(smallestDifference(xCommon, yCommon));
  }
}
smallestDifference(one, two);
