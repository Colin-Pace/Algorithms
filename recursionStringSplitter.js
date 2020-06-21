// Split a string based on a separator

let result = [];
const stringSplitter = str => {
  if (str.length === 0) {
    return;
  } else {
    let part = "";
    let i = 0;
    while (str[i] !== "/" && str[i] !== undefined) {
      part += str[i];
      i++
    }
    result.push(part);
    if (str[i] === undefined) {
      return;
    } else {
      stringSplitter(str.substring(i + 1));
    }
  }
}
stringSplitter("02/20/2020");
console.log(result);
