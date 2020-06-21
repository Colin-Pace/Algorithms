// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.

function pascalianTriangle(integer) {
  if (!integer || integer === 0) return null;
  else {
    if (integer === 1) return [1];
    else if (integer === 2) return [[1], [1, 1]];
    else {
      let count = 2;
      const result = [[1], [1, 1]];
      while (count <= integer) {
        const last = result[result.length - 1];
        const next = [1];
        const l = last.length;
        for (let i = 0; i < l - 1; i ++) next.push(last[i] + last[i + 1]);
        next.push(1);
        result.push(next);
        count++;
      }
      return result;
    }
  }
}

const input = 5;
console.log(pascalianTriangle(5));
