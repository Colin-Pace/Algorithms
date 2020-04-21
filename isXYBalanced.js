/*
A string is "xy-balanced,"
  if a 'y' character follows
    all the 'x' characters

One 'y' can balance multiple 'x's;

Return true if,
  the given string is xy-balanced;

For instance,
  "xxy" is balanced,
  but "xyx" is not
*/
let stringOne = 'xxy';
let stringTwo = 'xyx';
function isXYBalanced(str) {
  let balanced = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'y') {
      balanced = true;
    } else if (balanced === true && str[i] === 'x') {
      balanced = false;
    }
  }
  return balanced;
}
// console.log(isXYBalanced(stringOne));
// console.log(isXYBalanced(stringTwo));
