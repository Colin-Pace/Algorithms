/*
Write a function that, given two arrays of strings,
  representing DNA strands, returns whether those strands are
  complementary; two strands are complementary
  if for every A in one strand there is a T in the same spot
  in the other, and vice-versa, and the same with C and G;
  assume that all strings in the arrays are
  'A', 'C', 'G', or 'T'.

For instance, ["A", "C", "G", "T"]
  and ["T", "G", "C", "A"] are complementary,
  but ["A", "C", "G", "T"]
  and ["T", "G", "C", "T"] are not. */

let complementaryOne = ['A', 'C', 'G', 'T'];
let complementaryTwo = ['T', 'G', 'C', 'A'];
let nonComplementaryOne = ['A', 'c', 'G', 'T'];
let nonComplementaryTwo = ['T', 'G', 'C', 'T'];

function areComplementaryDNAStrands(strOne, strTwo) {
  if (!strOne && !strTwo) {
    return false;

  } else if (strOne.length !== strTwo.length) {
    return false;

  } else {
    for (let i = 0; i < strOne.length; i++) {
      if (strOne[i] === 'A') {
        if (strTwo[i] !== 'T') {
          return false;
        } else {
          continue;
        }

      } else if (strOne[i] === 'C') {
        if (strTwo[i] !== 'G') {
          return false;
        } else {
          continue;
        }

      } else if (strOne[i] === 'G') {
        if (strTwo[i] !== 'C') {
          return false;
        } else {
          continue;
        }

      } else if (strOne[i] === 'T') {
        if (strTwo[i] === 'A') {
          continue;
        } else {
          return false;
        }
      }
    }

    return true;
  }
}

console.log(areComplementaryDNAStrands(complementaryOne, complementaryTwo));
console.log(areComplementaryDNAStrands(nonComplementaryOne, nonComplementaryTwo));
