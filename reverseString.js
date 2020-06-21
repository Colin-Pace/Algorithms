// Write a function that reverses a string if the input is an array of string characters.

function reverseString(array) {
  if (!array.length) return null;
  else if (array.length === 1) return array;
  else {
    let temp, s = 0, e = array.length -1, l;
    if (array.length % 2 !== 0) l = Math.floor(array.length / 2);
    else l = array.length / 2 - 1;
    while (e > l) {
      temp = array[s];
      array[s] = array[e];
      array[e] = temp;
      s++;
      e--;
    }
    return array;
  }
}
const hello = ['h', 'e', 'l', 'l', 'o'];
const world = ['w', 'o', 'r', 'l', 'd', '.'];
console.log(reverseString(hello));
console.log(reverseString(world));
