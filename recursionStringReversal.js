// Reverse a string

const reverse = str => {
  if (str.length === 0) {
    return "";

  } else {
    return reverse(str.substring(1)) + str[0];
  }
}

console.log(reverse("world"));
