// Given a string, find the difference between the count of the most frequent and the least frequent alphabetical characters.

function frequencyDifference(str) {
  const len = str.length;
  let result;

  if (!str || len === 1 || len === 2) return null;
  else {
    const characters = {};

    for (let i = 0; i < len; i++) {
      characters[str[i]] = (characters[str[i]] || 0) + 1;
    }

    let min = Infinity, max = 0;
    for (let i in characters) {
      if (characters[i] < min && i !== " ") {
        min = characters[i];
      }
      if (characters[i] > max && i !== " ") {
        max = characters[i];
      }
    }

    result = max - min;
    return result;
  }
}

const input = "Ada Lovelace wrote the essay 'Sketch of the Analytical Engine invented by Charles Babbage' in the year 1843. It was the first program.";
const input_ = "Ad";

console.log(frequencyDifference(input));
console.log(frequencyDifference(input_));
