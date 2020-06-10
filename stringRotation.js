function stringRotation(str, str_) {
  const doubled = str + str;
  if (doubled.includes(str_)) return true;
  else return false;
}
const letters = "erbottlewat";
const rotation = "waterbottle";
const notRotation = "zcxv";
console.log(stringRotation(letters, rotation));
