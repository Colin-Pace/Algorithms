/*
Find the length of the longest substring T of a given string. In the substring, every character must appear no fewer than k times.

Example 1:
Input:
s = "aaabb", k = 3
Output:
3
The longest substring is "aaa", as 'a' is repeated 3 times.


Example 2:
Input:
s = "ababbc", k = 2
Output:
5
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/


let inputOne = "aaabb";
let inputTwo = "ababbc";
let inputThree = "aabccdeeffgg";
let inputFour = "abbbbccccdeffffgggghhhhiiiijklmmmnnnnoppp";

function findSubStringLength(s, k) {
  let characterCount = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in characterCount) {
      characterCount[s[i]] += 1;
    } else {
      characterCount[s[i]] = 1;
    }
  }

  let start = false;
  let end = false;
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    let tempLength = 0;

    if (start === false && characterCount[s[i]] >= k) {
      start = i;
    }

    if (start !== false && characterCount[s[i]] < k) {
      end = i - 1;
      tempLength = (end - start) + 1;
      if (tempLength > length) {
        length = tempLength;
      }
      start = false;
      end = false;

    } else if (start !== false && characterCount[s[i]] >= k && i === s.length - 1) {
      end = i;
      tempLength = (end - start) + 1;
      if (tempLength > length) {
        length = tempLength;
      }
      start = false;
      end = false;
    }
  }

  return length;
}

console.log(findSubStringLength(inputOne, 3));
console.log(findSubStringLength(inputTwo, 2));
console.log(findSubStringLength(inputThree, 2));
console.log(findSubStringLength(inputFour, 4));
