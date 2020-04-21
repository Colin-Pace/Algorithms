/* Iterations rules ____

File structure
1. Simple array iteration
2. Array iteration with additional indexation
3. Built in methods
*/

let array = ['a', 'b', 'c', 'd', 'e'];
let integerArray = [175, 50, 25];


// If iteration to final element,
//    go to less than length
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}


// If extension of index, consider off by one,
//    to avoid an undefined return
for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i+1]);
}


// For each calls a function on each item,
//    in the original array
array.forEach(i => (console.log(`Item: ${i}`)));


// Map returns a new array with items that
//    are the returns of a function
//    that accepts the original items with iteration
// Example input:  [1, 5, 7]
// Example output: [3, 15, 21]
let tripled = [1, 5, 7].map(i => {
  return i * 3;
});
console.log(tripled);


// Filter returns a new array,
//    with only the values that pass a test;
//    the Boolean returns the isolated value
//    in a new array
// Example input:  ['h', 'e', 'l', 'l', 'o']
// Example output: ['l', 'l']
let filtered = ['h', 'e', 'l', 'l', 'o'].filter(i => {
  if (i === 'l') {
    return true;
  }
})
console.log(filtered);


/* Reduce reduces an array down to a single value. It does this by
      executing a function on each element of the array and
      storing the result of each iteration in an "accumulator"
      variable, ultimately resulting in the output value.
      You may optionally specify the starting value of the
      accumulator. If you don't specify, then its starting
      value is the first element in the array.

      In the example below, accumulator starts out at -250 (because
      we're choosing to specify a starting value). Recall that our
      integerArray is [175, 50, 25]. So in the first iteration,
      accumulator is -250 and currentValue is 175, resulting in -75.
      In the second iteration, accumulator is -75 (i.e., the result
      of the prior iteration) and currentValue is 50. -75 + 50 is -25.
      In the third iteration, accumulator is -25 and currentValue is 25.
      -25 + 25 is 0, so the result of our reduce call is 0.
*/
let summedMinusTwoHundredFifty = integerArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, -250);
console.log(summedMinusTwoHundredFifty);

/*
   Here's one more example of reduce. This time it is finding the multiplicative
      product of the array. Note that we are not supplying an initial value for accumulator,
      so it'll start out as 175 (i.e., the first value of the array), and our iterations
      will actually begin on the second element of the array. So in the first iteration,
      accumulator will be 175 and currentValue will be 50. On the second iteration,
      accumulator will be 8,750 (== 175 * 50) and currentValue will be 25. Finally,
      218,750 will be logged to the console.
*/
let product = integerArray.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});
console.log(product);


// Reduce right works the same way as reduce, except it moves through the function in the opposite order
//    (right-to-left instead of left-to-right). The example below concatenates string elements together
//    and reduces down to "hello".
let stringFromArray = ['o', 'l', 'el', 'h'].reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(stringFromArray);


// Every returns true if every item of the array satisfies a condition, and returns false otherwise.
//
// false
let arrayContainsOnlyEvens = [1, 2, 3].every(i => {
  return i % 2 == 0;
});
console.log(arrayContainsOnlyEvens);

// true
let someOtherArrayContainsOnlyEvens = [2, 68, 304].every(i => {
  return i % 2 == 0;
});
console.log(someOtherArrayContainsOnlyEvens);


// Some returns true if if one or more items in the satisfies a condition, and returns false otherwise.
//
// true
let arrayContainsSomeEvens = [1, 2, 3].some(i => {
  return i % 2 == 0;
});
console.log(arrayContainsSomeEvens);

// false
let someOtherArrayContainsSomeEvens = [1, 3, 5].some(i => {
  return i % 2 == 0;
});
console.log(someOtherArrayContainsSomeEvens);

// Index of returns the position
//    of the first occurence ofthe value
console.log(array.indexOf('e'))


// Last index of returns the postition
//    of the last occurence of the value
console.log(array.lastIndexOf('e'))


// Find returns the first element in the array that satisfies a condition. The example below returns 8.
let firstEvenElement = [1, 3, 5, 8, 9, 12].find(i => {
  return i % 2 == 0;
});
console.log(firstEvenElement);


// Find index returns the index of the first element in the array that satisfies a condition. The example below returns 3, the index of the element 8.
let indexOfFirstEvenElement = [1, 3, 5, 8, 9, 12].findIndex(i => {
  return i % 2 == 0;
});
console.log(indexOfFirstEvenElement);
