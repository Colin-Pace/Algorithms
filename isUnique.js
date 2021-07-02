/* Find if a string has all unique characters

Big O
1. Time: O(n) or O(1), since there is a limit for possible characters
2. Space: O(1) */

function isUnique(str) {
  if (!str) {
    return null;
  }
  
  if (str.length > 128) {
    return false;
  }

  const seen = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in seen) {
      return false;
    } else {
      seen[str[i]] = true;
    }
  }

  return true;
}

const uniqueString = "uiopcvbn";
const notUniqueString = "yuiopphjk";

console.log(isUnique(uniqueString));
console.log(isUnique(notUniqueString));