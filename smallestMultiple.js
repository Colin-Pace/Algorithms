/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n? */

function smallestMultiple(int) {
  const result = null;
  let count = int;

  while (!result) {
    for (let i = 1; i <= int; i++) {
      if (count % i !== 0) break;
      else if (i === int) return count;
    }
    count++;
  }
}

console.log(smallestMultiple(5));
console.log(smallestMultiple(7));
console.log(smallestMultiple(10));
console.log(smallestMultiple(13));
console.log(smallestMultiple(20));
