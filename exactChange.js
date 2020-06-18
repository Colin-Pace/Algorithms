/*
Write a function that accepts an object and a number. The object represents coins, and the number is an amount in change.

Find if the coins can create exact change for the number given.

For instance, if the number were 39 and the object were:
  {'pennies': 3, 'nickels': 3, 'dimes': 1, 'quarters': 2},
  return false.

If the number were 38, however, return true.
*/
let object = {'pennies': 3, 'nickels': 3, 'dimes': 1, 'quarters': 2};
function exactChange(number) {
  if (number === 0) {
    console.log(true);
  }
  if (number >= 25) {
    if (object['quarters'] > 0) {
      object['quarters'] -= 1;
      number -= 25;
      exactChange(number);
    }
  } else if (number >= 10) {
    if (object['dimes'] > 0) {
      object['dimes'] -= 1;
      number -= 10;
      exactChange(number);
    }
  } else if (number >= 5) {
    if (object['nickels'] > 0) {
      object['nickels'] -= 1;
      number -= 5;
      exactChange(number);
    }
  } else if (number >= 1) {
    if (object['pennies'] > 0) {
      object['pennies'] -= 1;
      number -= 1;
      exactChange(number);
    } else {
      console.log(false);
    }
  }
}
//exactChange(39);
//exactChange(38);
