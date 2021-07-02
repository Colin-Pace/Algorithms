/* Compress a string such that the number of letters of consecutive letters follows the letter; if the compressed string is longer than the original, return the original */


function stringCompression(str) {
  let result = "";
  let count = 1;
  
  for (let i = 0; i < str.length - 1; i++) {
    if (result.length > str.length) {
      return str;
    
    } else if (str[i] === str[i + 1]) {
      if (i + 2 === str.length) {
        count++;
        result += `${str[i]}${count}`;
    
      } else {
        count++;
      }

    } else {
      if (i + 2 === str.length) {
        result += `${str[i]}${count}`;
        result += `${str[i + 1]}1`;
    
      } else {
        result += `${str[i]}${count}`;
        count = 1;
      }
    }
  }
 
  return result;
}


const letters = "aabcccccaaa";
const lettersTwo = "abbbbbccdda";

console.log(stringCompression(letters));
console.log(stringCompression(lettersTwo));