// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function seekAndDestroy(array) {
  const array_ = array[0], args = array.slice(1), result = [];
  const items = {}, l = args.length, l_ = array_.length;

  for (let i = 0; i < l; i++) items[args[i]] = true;
  for (let i = 0; i < l_; i++) {
    if (array_[i] in items) continue;
    else result.push(array_[i]);
  }

  return result;
}

const inputOne = [[1, 2, 3, 1, 2, 3], 2, 3];
const inputTwo = [[1, 2, 3, 5, 1, 2, 3], 2, 3];
const inputThree = [[3, 5, 1, 2, 2], 2, 3, 5];
const inputFour = [[2, 3, 2, 3], 2, 3];

console.log(seekAndDestroy(inputOne));
console.log(seekAndDestroy(inputTwo));
console.log(seekAndDestroy(inputThree));
console.log(seekAndDestroy(inputFour));
