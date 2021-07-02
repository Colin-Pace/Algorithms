/* Find whether two strings are one edit away from each other; assume ASCII characters

Big O
1. Time: O(c + p)
2. Space: O(1)  */


function oneAway(strOne, strTwo) {
  let charactersOne = {};
  let charactersTwo = {};
  let differentLetters = 0;
  
  if (Math.abs(strOne.length - strTwo.length) > 1) {
    return false;
  }
  
  for (let i = 0; i < strOne.length; i++) {
    if (strOne[i] in charactersOne) {
      charactersOne[strOne[i]] += 1;
    } else {
      charactersOne[strOne[i]] = 1;
    }
  }
  
  for (let i = 0; i < strTwo.length; i++) {
    if (strTwo[i] in charactersTwo) {
      charactersTwo[strTwo[i]] += 1;
    } else {
      charactersTwo[strTwo[i]] = 1;
    }
  }
  
  let shorter;
  let longer;
  
  if (strOne.length === strTwo.length) {
    shorter = charactersOne;
    longer = charactersTwo;
  
  } else if (strOne.legnth < strTwo.length) {
    shorter = charactersOne;
    longer = charactersTwo;
  
  } else {
    shorter = charactersTwo;
    longer = charactersOne;
  }
  
  for (let i in shorter) {
    if (Math.abs(shorter[i] - longer[i] > 1)) {
      return false;
   
    } else if (shorter[i] !== longer[i]) {
      differentLetters++;
   
    } else if (differentLetters > 1) {
      return false;
    }
  }
  
  return true;
}


const letters = "pale";
const additionAway = "ple";
const replacementAway = "bale";
const deletionAway = "pales";
const notOneAway = "bake";

console.log(oneAway(letters, additionAway)); // true
console.log(oneAway(letters, replacementAway)); // true
console.log(oneAway(letters, deletionAway)); // true
console.log(oneAway(letters, notOneAway)); // false 
