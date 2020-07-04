/* Given an unsorted array, find a sub array that adds to integer S */

let inputOne = [1, 3, 2, 7, 4, 5, 2, 5, 8, 10, 1, 4, 2];
let inputTwo = 25;

function subListSum(array, integer) {
  let result = [];
  let count = 0;

  for (let ae = 0; ae < array.length; ae++) {
    for (let c = ae; c < array.length; c++) {
      if (count > 25) {
        result = [];
        count = 0;
        break;

      } else if (count < 25) {
        result.push(array[c]);
        count += array[c];
        
      } else {
        return result;
      }
    }
  }
}
console.log(subListSum(inputOne, inputTwo));
