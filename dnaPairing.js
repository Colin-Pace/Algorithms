/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */


function dnaPairing(str) {
  const result = [], l = str.length;

  for (let i = 0; i < l; i++) {
    if (str[i] === "A") result.push(["A", "T"]);
    else if (str[i] === "T") result.push(["T", "A"]);
    else if (str[i] === "C") result.push(["C", "G"]);
    else result.push(["G", "C"]);
  }

  return result;
}

const inputOne = "GCG";
const inputTwo = "ATCGA";
const inputThree = "TTGAG";
const inputFour = "CTCTA";

console.log(dnaPairing(inputOne));
console.log(dnaPairing(inputTwo));
console.log(dnaPairing(inputThree));
console.log(dnaPairing(inputFour));
