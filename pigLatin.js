/* Pig Latin is a way of altering English Words. The rules are as follows:

1. If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

2. If a word begins with a vowel, just add "way" at the end.

3. If the first vowel comes in the middle of the word, the consonants until the vowel shoudl be moved to the end of the word.

4. If there are no vowels, add -ay to the word. */

function pigLatin(str) {
  let result = "", i = 0, found = false;
  const vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};
  const l = str.length;

  while (!found) {
    if (str[i] in vowels) {
      found = true;
      break;
    } else if (i === l) break;
    i++;
  }

  if (!found) return str + 'ay';
  else if (i === 0) return str + 'way';
  else return str.slice(i) + str.slice(0, i) + 'ay';
}

const inputOne = 'california';
const inputTwo = 'paragraphs';
const inputThree = 'glove';
const inputFour = 'algorithm';
const inputFive = 'eight';
const inputSix = 'schwartz';
const inputSeven = 'rhythm';

console.log(pigLatin(inputOne));
console.log(pigLatin(inputTwo));
console.log(pigLatin(inputThree));
console.log(pigLatin(inputFour));
console.log(pigLatin(inputFive));
console.log(pigLatin(inputSix));
console.log(pigLatin(inputSeven));
