// InterviewBit: reverse bits. Reverse the bits of an 32 bit unsigned integer A.

function reverseBits(bit) {
  bit = (bit >>> 0).toString(2);

  const l = bit.length - 1;
  let reversed = "";
  for (let i = l; i >= 0; i--) reversed += bit[i];

  while (reversed.length < 32) reversed += 0;

  return parseInt(reversed, 2);
}

console.log(reverseBits(3));
