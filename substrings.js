/*
Write a function that,
  given a string,
  returns the longest substring that,
  appears at both the beginning and end,
  of the string without overlapping;

For instance, if the input were "abc123abc",
  the output would be "abc"
*/
let inputOne = "abc123abc";
function longestSubstringAtStartAndEnd(str) {
  let endCount = str.length - 1
  let endValue = str[endCount];
  let mid = 0;
  let penultimateResult = "";
  if (str.length % 2 === 0) {
    mid = Math.floor(str.length / 2);
  } else {
    mid = Math.floor((str.length / 2) - 1);
  }
  for (let i = mid; i > -1; i--) {
    if (str[i] === endValue) {
      penultimateResult += str[i];
      endCount--;
      endValue = str[endCount]
    } else if (endValue = str[str.length - 1]) {
    continue;
    } else {
      if (str[i+1] === str[endValue+1]) {
        break;
      }
      else {
        continue;
        }
      }
  }
  let result = penultimateResult.split('').reverse().join('');
  return result;
}
console.log(longestSubstringAtStartAndEnd(inputOne));
