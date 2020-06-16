// Replace all spaces in a string with %20

function URLify(string, integer) {
  let array = string.split("");
  let result = "";

  for (let itr = 0; itr < array.length; itr++) {
    if (array[itr] === " ") {
      result += "%20";
    } else {
      result += array[itr];
    }
  }

  return result;
}

console.log(URLify("Mr John Smith"));
