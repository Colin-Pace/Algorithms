// Find whether two strings are one edit away from each other

function oneAway(str, str_) {
  let strObj = {};
  let str_Obj = {};
  let differentLetters = 0;
  if (Math.abs(str.length - str_.length) > 1) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in strObj) strObj[str[i]] += 1;
    else strObj[str[i]] = 1;
  }
  for (let i = 0; i < str_.length; i++) {
    if (str_[i] in str_Obj) str_Obj[str_[i]] += 1;
    else str_Obj[str_[i]] = 1;
  }
  let shorter;
  let longer;
  if (str.length === str_.length) {
    shorter = strObj;
    longer = str_Obj;
  } else if (str.legnth < str_.length) {
    shorter = strObj;
    longer = str_Obj;
  } else {
    shorter = str_Obj;
    longer = strObj;
  }
  for (let i in shorter) {
    if (Math.abs(shorter[i] - longer[i] > 1)) return false;
    if (shorter[i] !== longer[i]) differentLetters++;
    if (differentLetters > 1) return false;
  }
  return true;
}
const letters = "pale";
const additionAway = "ple";
const replacementAway = "bale";
const deletionAway = "pales";
const notOneAway = "bake";
console.log(oneAway(letters, additionAway));
console.log(oneAway(letters, replacementAway));
console.log(oneAway(letters, deletionAway));
console.log(oneAway(letters, notOneAway));
