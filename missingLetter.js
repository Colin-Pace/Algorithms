/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function missingLetters(str) {
  const alphabet = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25};
  const alphabet_ = "abcdefghijklmnopqrstuvwxyz", l = str.length;
  let i = alphabet[str[0]], count = 0;

  while (alphabet_[i] === str[count]) {
    i++, count++;
    if (count === 26) break;
  }

  if (count === 26) return undefined;
  else return alphabet_[i];
}

const inputOne = "abce";
const inputTwo = "abcdefghjklmno";
const inputThree = "stvwx";
const inputFour = "bcdf";
const inputFive = "abcdefghijklmnopqrstuvwxyz";

console.log(missingLetters(inputOne));
console.log(missingLetters(inputTwo));
console.log(missingLetters(inputThree));
console.log(missingLetters(inputFour));
console.log(missingLetters(inputFive));
