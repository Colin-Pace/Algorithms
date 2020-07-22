// Find the middle value of the array. The middle value is singular in an array with an odd length and has two items in an array with an even length. 

function findMiddleValue(integers) {
  const len = integers.length;
  if (!Array.isArray(integers)) return false;
  else if (len === 0) return false;
  else if (len === 1) return integers;
  else {
    let count = Math.floor(integers.length / 2);
    let result = null;

    let i = 0;
    while (i < count - 1) i++;

    if (len % 2 === 0) result = [integers[i], integers[i + 1]];
    else result = integers[i + 1];

    return result;
  }
}

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inputTwo = [3, 5, 7, 9, 1, 2, 4, 6, 8];
const inputThree = {"a": 1, "b": 2, "c": 3, "d": 4};

console.log(findMiddleValue(input));
console.log(findMiddleValue(inputTwo));
console.log(findMiddleValue(inputThree));
