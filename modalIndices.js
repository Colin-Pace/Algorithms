/*
Prompt: Given a 2D array with sub arrays of two positive
  integers between zero and one hundred inclusive, return
  in an array those two (or more) integers most common among the
  sub levels in each element index;

  e.g.,

    Input [[1, 2], [2, 3], [4, 3], [1, 6], [2, 4]]
    Output [['Index zero modal start', 1, 2, 'end'],
            ['Index one modal start', 3, 'end']]
*/
function makeInput(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result[i] = [];
    for (let j = 0; j < 2; j++) {
      result[i].push(Math.floor(Math.random() * 100));
    }
  } twoDimensionalMode(result);
}


function twoDimensionalMode(input) {
  let indexZeroCount = {};
  let indexOneCount = {};
  let indexZeroMode = 0;
  let indexOneMode = 0;
  let result = [[], []];
  let zeroMax = 0;
  let oneMax = 0;


  for (let i = 0; i < input.length; i++) {
    let indexZero = input[i][0];
    let indexOne = input[i][1];

    if (indexZero in indexZeroCount) {
      indexZeroCount[indexZero] += 1;
    } else {
      indexZeroCount[indexZero] = 1;
    }

    if (indexOne in indexOneCount) {
      indexOneCount[indexOne] += 1;
    } else {
      indexOneCount[indexOne] = 1;
    }
  }


  for (let i in indexZeroCount) {
    if (indexZeroCount[i] > zeroMax) {
      zeroMax = indexZeroCount[i];
    } else if (indexZeroCount[i] === zeroMax) {
    } else {
      continue;
    }
  }
    result[0].push('Index zero modal item(s) start');
    for (let i in indexZeroCount) {
      if (indexZeroCount[i] === zeroMax) {
        result[0].push(i);
      }
    }
    result[0].push('End');

  for (let i in indexOneCount) {
    if (indexOneCount[i] > oneMax) {
      oneMax = indexOneCount[i];
    } else if (indexOneCount[i] === oneMax) {
    } else {
      continue;
    }
  }
    result[1].push('Index one modal item(s) start')
    for (let i in indexOneCount) {
      if (indexOneCount[i] === oneMax) {
        result[1].push(i);
      }
    }
    result[1].push('End');


  console.log(result);
}
makeInput(50);
