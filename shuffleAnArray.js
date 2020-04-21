// Shuffle an array of numbers without duplicates.

let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleIntegers(integers) {
  let selected = {};
  let result = [];

  for (let i = 0; i < integers.length; i++) {
    let random = Math.floor(Math.random() * 10);
    while (random in selected) {
      random = Math.floor(Math.random() * 10);
    }
    selected[random] = true;
    result.push(integers[random]);
  }

  return result;
}

console.log(shuffleIntegers(integers));
