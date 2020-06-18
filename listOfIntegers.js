/*
Write a function that given a list of integers returns true if the sum of all the 7's in the list is exactly 28;

For instance, the parameter, [1, 7, 7, 3, 1, 7, 9, 7] returns true, but [1, 7, 7, 7, 7, 7, 7, 7, 7, 7] returns false
*/
let withSum = [1, 7, 7, 3, 1, 7, 9, 7];
let withoutSum = [1, 7, 7, 7, 7, 7, 7, 7, 7, 7];
function isTwentyEight(list) {
  let sevensCount = 0;
  for (let i = 0; i < list.length; i++) {
    if (sevensCount < 4 && list[i] === 7) {
      sevensCount++;
    } else if (sevensCount === 4 && list[i] === 7) {
      return false;
    }
  }
  if (sevensCount === 4) {
    return true;
  } else {
    return false;
  }
}
// console.log(isTwentyEight(withSum));
// console.log(isTwentyEight(withoutSum));
