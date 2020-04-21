/*
Given two arrays of integers,
  find a pair of values, one from each array,
    that if swapped,
    would equalize the arrays' sums
*/
let inputOne = [4, 1, 2, 1, 1, 2];
let inputTwo = [3, 6, 3, 3];
function sumSwap(ae, ap) {
  let result = [];
  let object = {};
  let aeSum = 0;
  let apSum = 0;
  let difference = 0;
  for (let c in ae) {
    let idx = ae[c];
    aeSum += idx;
  }
  for (let c in ap) {
    apSum += ap[c];
  }

  difference = Math.abs(aeSum - apSum);
  for (let c = 0; c < ae.length; c++) {
    let complement = difference - ae[c];
    object[complement] = ae[c];
  }

  for (let c = 0; c < ap.length; c++) {
    if (ap[c] in object) {
      result.push(object[ap[c]]);
      result.push(ap[c]);
      if (result.length === 2) {
        break;
      }
    }
  }
  return result;
}
console.log(sumSwap(inputOne, inputTwo));
