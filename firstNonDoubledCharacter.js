/* Print the first non doubled character */

let input = "abcdefghijklmnopqrstuvwyzabcdefghijklmnoqrstuvw";

function firstNonDoubledCharacter(string) {
  let object = {};
  for (let ae = 0; ae < string.length; ae++) {
    if (string[ae] in object) {
      object[string[ae]] += 1;

    } else {
      object[string[ae]] = 1;
    }
  }

  for (let ae = 0; ae < string.length; ae++) {
    let item = string[ae]
    if (object[item] === 1) {
      return item;
    }
  }

}
console.log(firstNonDoubledCharacter(input));
