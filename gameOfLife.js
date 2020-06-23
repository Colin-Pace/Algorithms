/*    
Implement Conway's Game of Life


Rules
1. Any live cell with fewer than two live neighbors dies
2. Any live cell with two or three neighbors lives
3. Any live cell with more than three neighbors dies
4. Any dead cell with exactly three neighbors revives
*/

const board = [
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
]

const iterations = 1;
function gameOfLife(board, iterations) {
  console.log(`Iteration: ${iterations}`);
  console.log(board);
  console.log("\n");
  if (iterations === 10) return;
  iterations++;

  const l = board.length, l_ = board[0].length, next = [];
  let i = 0, j = 0, count = 0, level = [];

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l_; j++) {
      count = 0;

      if (j !== 0)                     if (board[i][j - 1]    === 1) count++;
      if (j !== l_ - 1)                if (board[i][j + 1]    === 1) count++;
      if (i !== 0)                     if (board[i - 1][j]    === 1) count++;
      if (i !== l - 1)                 if (board[i + 1][j]    === 1) count++;

      if (i !== 0 && j !== 0)          if (board[i - 1][j - 1] === 1) count++;
      if (i !== 0 && j !== l_ - 1)     if (board[i - 1][j + 1] === 1) count++;
      if (i !== l - 1 && j !== 0)      if (board[i + 1][j - 1] === 1) count++;
      if (i !== l - 1 && j !== l_ - 1) if (board[i + 1][j + 1] === 1) count++;

      if (board[i][j] === 1) {
        if (count === 2 || count === 3) level.push(1);
        else level.push(0);

        if (level.length === l_) {
          next.push(level);
          level = [];
        }

      } else {
        if (count === 3) level.push(1);
        else level.push(0);

        if (level.length === l_) {
          next.push(level);
          level = [];
        }
      }
    }
  }

  return gameOfLife(next, iterations);
}

gameOfLife(board, iterations);
