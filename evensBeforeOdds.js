/*
Write a function that, has an array of numbers as input, and returns an array that has the exact same numbers, but rearranged so that all the even numbers come before all the odd numbers.

The numbers can be in any order.

Either the input array can be modified and returned, or a new one can be made */

function evensBeforeOdds(array) {
  let evensResult = [];
  let oddsResult = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evensResult.push(array[i]);
    } else {
      oddsResult.push(array[i]);
    }
  }

  for (let i = 0; i < oddsResult.length; i++) {
    evensResult.push(oddsResult[i]);
  }

  return evensResult;
}

let inputOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputTwo = [101, 200, 301, 400, 501, 600];

console.log(evensBeforeOdds(inputOne));
console.log(evensBeforeOdds(inputTwo));
