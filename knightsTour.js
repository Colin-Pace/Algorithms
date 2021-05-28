/* Knight's tour
1. Print all sequences of moves of a knight on a chessboard. The knight can visit every square only once. */

function isValid(x, y) {
  if (x < 0 || y < 0 || x >= N || y >= N) {
    return false;
  }
  return true;
}

function knightTour(visited, x, y, pos) {
  visited[x][y] = pos;

  if (pos >= N * N) {
    console.log(visited);
    visited[x][y] = 0;
    return;
  }

  for (let i = 0; i < 8; i++) {
    const newX = x + row[i];
    const newY = y + col[i];
    if (isValid(newX, newY) && visited[newX][newY] === 0) {
      knightTour(visited, newX, newY, pos + 1);
    }
  }

  visited[x][y] = 0;
}

const row = [2, 1, -1, -2, -2, -1, 1, 2, 2];
const col = [1, 2, 2, 1, -1, -2, -2, -1, 1];
const N = 5;
const visited = new Array(N).fill(0).map(() => new Array(N).fill(0));
const pos = 1;
knightTour(visited, 0, 0, pos);

/*

1 0 0 0 0
0 0 0 0 0
0 2 0 0 0
0 0 0 0 0
0 0 3 0 0

x = 0, y = 0, pos = 1
x = 2, y = 1, pos = 2
...

*/