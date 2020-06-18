/*
A prefix of a string is its first few characters.

Write a function that accepts a string and an integer, the latter of which, represents the number of prefix characters and returns either true, if the prefix appears elsewhere in the string, or otherwise false, because the prefix appears nowhere else.

For instance, if the parameters are "abXYabc" and 1, the function returns true, since the first character is "a" at index zero, and that appears elsewhere in the string, at index four.

The function returns true if with the same string, the integer parameter is 2, since "ab" from indices zero and one, appears elsewhere in the string at indices four and five.

The function would return false if the prefix number were 3, since 'abX' from indices zero, one, and two appears not elsewhere.
*/
let alphabeticalString = 'abXYabc';
function isPrefixAgain(str, number) {
  let prefix = '';
  let otherStringCharacters = '';
  for (let i = 0; i < number; i++) {
    prefix += str[i];
  }
  for (let i = number; i < str.length; i++) {
    otherStringCharacters += str[i];
  }
  if (otherStringCharacters.includes(prefix)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPrefixAgain(alphabeticalString, 2));
// console.log(isPrefixAgain(alphabeticalString, 3));
