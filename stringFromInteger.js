/*
Prompt: given any integer between one and ten thousand,
          print an English phrase that describes the integer
  E.g.,

      Input: 1234
      Output: "one thousand two hundred and thirty four"
*/
let integer = 1234;
let int = 0;
function stringFromInteger(integer) {
  let strings = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
    100 : 'hundred',
    1000 : 'thousand'
  }
  let array = [];
  let length = integer.toString().length;
  let idxStr = integer.toString();
  let result = '';
  let last = parseInt(idxStr[idxStr.length - 1]);
  let tens = parseInt(idxStr[idxStr.length - 2]);
  let hundreds = parseInt(idxStr[idxStr.length - 3]);


  if (integer === 0) {
    console.log('zero');

  } else if (length === 1) {
    console.log(strings[integer]);

  } else if (length === 2) {
    if (integer in strings) {
      console.log(strings[integer]);
    }
    else {
      let tens = idxStr[0] + 0;
      array.push(strings[tens]);
      array.push(strings[idxStr[1]]);
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);
    }

  } else if (length === 3) {
    if (last === 0 && tens === 0) {
      array.push(strings[idxStr[0]]);
      array.push('hundred');
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);

    } else {
      array.push(strings[idxStr[0]]);
      array.push('hundred');
      if (last === 0) {
        let y = idxStr[1] + idxStr[2];
        array.push(strings[y]);
        for (let i = 0; i < array.length; i++) {
          result += array[i] + ' ';
        }
        console.log(result);
      } else {
          let tens = idxStr[1] + 0;
          array.push(strings[tens]);
          array.push(strings[idxStr[2]]);
          for (let i = 0; i < array.length; i++) {
            result += array[i] + ' ';
          }
          console.log(result);
        }
  }


  } else if (length === 4) {
    if (last === 0 && tens === 0 && hundreds === 0) {
      array.push(strings[idxStr[0]]);
      array.push('thousand');
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);
    } else if (last === 0 && tens === 0) {
      array.push(strings[idxStr[0]]);
      array.push('thousand');
      array.push(strings[idxStr[1]]);
      array.push('hundred');
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);
    } else if (last === 0) {
      array.push(strings[idxStr[0]]);
      array.push('thousand');
      array.push(strings[idxStr[1]]);
      array.push('hundred');
      let y = idxStr[2] + idxStr[3];
      array.push(strings[y]);
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);
    } else {
      array.push(strings[idxStr[0]]);
      array.push('thousand');
      array.push(strings[idxStr[1]]);
      array.push('hundred');
      let tens = idxStr[2] + 0;
      array.push(strings[tens]);
      array.push(strings[idxStr[3]]);
      for (let i = 0; i < array.length; i++) {
        result += array[i] + ' ';
      }
      console.log(result);
    }
  }
}
stringFromInteger(integer);
