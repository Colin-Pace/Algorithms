const powerCalculator = (x, y) => {
  if (y <= -1) {
    throw "Exponent should be >= 0";
  } else if (y === 1) {
    return x;
  } else {
    return x * powerCalculator(x, y - 1);
  }
}
console.log(powerCalculator(10, 2));
