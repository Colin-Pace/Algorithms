function towersOfHanoi(int, from, to, buffer) {
  if (int === 1) console.log(`Moving from ${from} to ${to}`);
  else {
    towersOfHanoi(int - 1, from, buffer, to);
    towersOfHanoi(1, from, to, buffer);
    towersOfHanoi(int - 1, buffer, to, from);
  }
}
towersOfHanoi(3, 'a', 'c', 'b');
