/*

File structure
1. Discussion of a Google example coding interview
2. Fail and pass code implementation



Collection of numbers _______

1. Prompt: Given a collection of ascending negative and positive
    integers, including repetitions, find a pair whose sum matches
      a given search number (later: ... return a Boolean)


2. E.g.,

  a. Failing

    Input: [1, 2, 3, 9]
    Output: 8

  b. Passing

    Input: [1, 2, 4, 4]
    Output: 8

*/
let one = [1, 2, 3, 9];
let two = [1, 2, 4, 4];
function hasPairWithSum(collection, searchInteger) {
  let hashSet = new Set();
  for (let i = 0; i < collection.length; i++) {
    if (hashSet.has(collection[i])) {
      return true;
    } else {
    hashSet.add(searchInteger - collection[i]);
    }
  }
  return false;
}
console.log(hasPairWithSum(one, 8));
console.log(hasPairWithSum(two, 8));
