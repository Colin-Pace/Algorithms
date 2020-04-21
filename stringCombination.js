/*
Write a function that, given two strings, a and b,
  creates a bigger string made of the first character of a,
  the first character of b, the second character of a,
  the second character of b, and so on; any leftover characters
  go at the end of the array; for instance, if the input
  were "hello" and "123", the output would be: "h1e2l3lo"
*/
let strOne = 'hello';
let strTwo = '123';
function stringCombination(str, str_) {
  let a = str.split('');
  let b = str_.split('');
  let array = [];
  let result = '';

  if (a.length > b.length) {
    for (let i = 0; i < b.length; i++) {
      array.push(a[i]);
      array.push(b[i]);
    }

    for (let i = b.length - 1;
      i < a.length; i++) {
      array.push(a[i]);
    }
  } else {
    for (let i = 0; i < a.length; i++) {
      array.push(a[i]);
      array.push(b[i]);
    }

    for (let i = a.length - 1;
      i < b.length; i++) {
      array.push(b[i]);
    }
  }

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
console.log(stringCombination(strOne, strTwo));
