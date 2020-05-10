/*
Given a palindromic string, replace one character by any lowercase English letter so that the string becomes the lexicographically smallest possible string that isn't a palindrome.

After doing so, return the final string.  If there is no way to do so, return null.
*/

let str = 'abccba';

function breakPalindrome(str) {
  if (str.length === 1) return '';
  else {
    let singleLetter = 0;
    let result = '';
    let letters = str.split('');

    for (let i = 0; i < letters.length; i++) {
      if (letters[i] !== 'a') {
        letters[i] = 'a';
        break;
      } else if (letters[i] === 'a') singleLetter ++;
    }

    if (singleLetter === str.length) {
      letters[letters.length - 1] = 'b';
      result = letters.join();
      return result;
    } else {
      result = letters.join();
      return result;
    }
  }
}

console.log(breakPalindrome(str));
