/*
Find the antepenultimate integer of an array
*/
let inputOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let inputTwo = [3, 5, 2, 9, 4, 8, 11, 1, 10, 6];

function thirdSmallest(array) {
  let ultimate = 0;
  let penultimate = 0;
  let antepenultimate = 0;

  for (let c = 0; c < array.length; c++) {
    if (array[c] > ultimate) {
      antepenultimate = penultimate;
      penultimate = ultimate;
      ultimate = array[c];

    } else if (array[c] > penultimate) {
      antepenultimate = penultimate;
      penultimate = array[c];
      
    } else if (array[c] > antepenultimate) {
      antepenultimate = array[c];
    }
  }

  return antepenultimate;
}
console.log(thirdSmallest(inputOne));
console.log(thirdSmallest(inputTwo));
