/* Replace all spaces in a string with %20

Big O
1. Time: O(n)
2. Space: O(n)    */


function URLify(str) {
  let result = "";

  for (let itr = 0; itr < str.length; itr++) {
    if (str[itr] === " ") {
      result += "%20";
    } else {
      result += str[itr];
    }
  }

  return result;
}

console.log(URLify("Mr John Smith"));
