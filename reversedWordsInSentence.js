/*
Reverse the words in a sentence
*/
let input = "Reverse the words in a sentence";
function reversedWordsInSentence(string) {
  let array = string.toLowerCase().split(" ");
  let result = "";
  for (let c = 0; c < array.length; c++) {
    let wordArray = array[c].split("");
    wordArray.reverse();
    result += wordArray.join("");
    result += " ";
  }
  return result;
}
console.log(reversedWordsInSentence(input));
