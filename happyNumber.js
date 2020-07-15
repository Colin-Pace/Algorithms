/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.
*/

function happyNumber(integer, count) {
  if (!integer || !count) return null;
  else if (integer === 1) return true;
  else if (count > 5000) return false;
  count++

  let str = String(integer)
  const array = str.split('');
  let l = array.length, sum = null;
  let integers = [], powers = [];

  for (let i = 0; i < l; i++) {
    const int = parseInt(array[i]);
    integers.push(int);
  }

  for (let i = 0; i < l; i++) {
    let power = Math.pow(integers[i], 2);
    powers.push(power);
  }

  l = powers.length;
  for (let i = 0; i < l; i++) sum += powers[i];
  return happyNumber(sum, count);
}

const input = 19;
const input_ = 18;

console.log(happyNumber(input, 1));
console.log(happyNumber(input_, 1));
