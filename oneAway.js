/* Find whether two strings are one edit away from each other; assume ASCII characters

Big O
1. Time: O(b), where b is the length of the shorter string,
                because the algorithm returns false after a
                traversal of that string if there is more 
                than one difference with the longer string
2. Space: O(1)  */


function oneAway(first, second) {
  if (!first || !second) {
    return null;
  } 

  if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second);
  } else if (first.length - 1 === second.length) {
    return oneEditInsert(second, first);
  }
}

function oneEditReplace(first, second) {
  let foundDifference = false;
  for (let i = 0; i < first.length; i++) {
   
    if (first[i] !== second[i]) {
      if (foundDifference === true) {
        return false;
   
      } else {
        foundDifference = true;
      }
    }

    return true;
  }
}

function oneEditInsert(first, second) {
  let idxOne = 0;
  let idxTwo = 0;

  while (idx2 < second.length && idxOne < first.length) {
    if (first[idxOne] !== second[idxTwo]) {
      if (idxOne !== idxTwo) {
        return false;
      }
      idxTwo++;
   
    } else {
      idxOne++;
      idxTwo++;
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