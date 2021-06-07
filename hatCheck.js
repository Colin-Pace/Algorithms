/* Hat check
1. Find the number of ways in which n hats can be returned to n people so that no hat makes it back to its owner
2. https://www.techiedelight.com/hat-check-problem/
*/

function derangements(n) {
  const table = new Array(n + 1).fill(0);
  table[2] = 1;
  
  for (let i = 3; i <= n; i++) {
    table[i] = (i - 1) * (table[i - 1] + table[i - 2]);
  }

  return table[n];
}

console.log(derangements(4));