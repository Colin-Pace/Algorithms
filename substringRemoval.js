let inputOne = "the actors of the theatre";
let inputTwo = "the";

function twoFromOne(strOne, strTwo) {
  let result = strOne.replace(/the/g, "");
  return result;
}

console.log(twoFromOne(inputOne, inputTwo));
