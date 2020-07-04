/*
Write a function that, given a string and an integer n, returns a string made of the first n characters of the string, followed by the first n-1 characters of the string, and so on

For instance, if the input were "Sandwich" and 5, the output would be: "SandwSandSanSaS" */

let string = "Sandwich";

function decrementedSequence(str, n) {
  let result = '';
  let array = str.split('');
  let i = 0;
  let decrementor = n;

  while (i < n) {
    for (let j = 0; j < decrementor; j++) {
      result += array[j];
    }
    i++;
    decrementor--;
  }

  return result;
}

console.log(decrementedSequence(string, 5));
