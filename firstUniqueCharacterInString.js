// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

function firstUnique(str) {
  let charCount = {};
  const l = str.length;
  for (let i = 0; i < l; i++) {
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  }
  for (let i = 0; i < l; i++) {
    if (charCount[str[i]] === 1) return i;
  }
  return -1;
}

const inputOne = 'leetcode';
const inputTwo = 'loveleetcode';

console.log(firstUnique(inputOne));
console.log(firstUnique(inputTwo));
