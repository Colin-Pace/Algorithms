/*
Given an array of strings representing full names (first & last), write a function that returns a dictionary with keys 'a', 'b', 'c', etc., and values being arrays of the names whose last name starts with that letter; assume all input is valid
*/
let names = ['Michael Pace', 'Tina Applesauce', 'Colin Pace'];
function arrayOfStringsToObject(array) {
  let object = {};
  let res = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    res.push(item.split(' '));
  }

  for (let i = 0; i < res.length; i++) {
    let lowerCase = res[i][1][0].toLowerCase();
    let first = res[i][0];
    let last = res[i][1];
    let fullName = first + ' ' + last;
    let resArray = [];

    if (lowerCase in object) {
      object[lowerCase].push(fullName);
    } else {
      object[lowerCase] = resArray;
      object[lowerCase].push(fullName);
    }
  }

  return console.log(object);
}
arrayOfStringsToObject(names);
