// With a number as input, display it number of sheep that jump over the fence. 

const sheep = number => {
  if (number === 0) {
    return;
  } else {
    console.log(`${number}: Another sheep jumps over the fence.`);
    return sheep(number - 1);
  }
}
sheep(10);
