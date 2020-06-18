/*
Write a function that given two integers, each in the range 10 to 99, returns true if there is an integer that appears in both numbers such as the 2 in 12 and 23, and returns false otherwise
*/
let testIntOne = 12;
let testIntTwo = 23;
function hasSame(intOne, intTwo) {
  let z = intOne.toString(10).split('');
  let y = intTwo.toString(10).split('');
  for (let i = 0; i < z.length; i++) {
    for (let j = 0; j < y.length; j++) {
      if (z[i] === y[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasSame(testIntOne, testIntTwo));
