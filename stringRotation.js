/* Check to see if one of two strings is a substring of the other, using only one call to check for the substring */


function stringRotation(str, str_) {
  const doubled = str + str;
  if (doubled.includes(str_)) {
    return true;
  } else {
    return false;
  }
}


const letters = "erbottlewat";
const rotation = "waterbottle";
const notRotation = "zcxv";
console.log(stringRotation(letters, rotation));
