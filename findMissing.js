/*
Find the integer in the first array,
  that is missing from the second
*/
let inputOne = [4, 12, 9, 5, 6];
let inputTwo = [4, 9, 12, 6];
function findMissing(ae, ap) {
  let object = {};
  let result = undefined;
  for (let c in ap) {
    object[ap[c]] = true;
  }
  for (let c in ae) {
    if (ae[c] in object) {
      continue;
    } else {
      result = ae[c];
    }
  }
  return result;
}
console.log(findMissing(inputOne, inputTwo));
