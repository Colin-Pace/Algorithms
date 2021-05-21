/* Chess knight shortest path
1. Given a chessboard, find the shortest distance between a source and destination for a knight
2. https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/
*/

const row = [2, 2, -2, -2, 1, 1, -1, -1];
const col = [-1, 1, 1, -1, 2, -2, 2, -2];

class Node {
  constructor(x, y, distance, visited) {
    this.x = x;
    this.y = y;
    this.distance = distance;
    this.visited = false;
  }
}

function isValid(x, y, N) {
  if (x < 0 || y < 0 || x >= N || y >= N) {
    return false;
  }
  return true;
}

function breadthFirstSearch(src, dest, N) {
  const q = [];
  q.push(src);
  while (q.length) {
    const node = q.shift();
    const x = node.x;
    const y = node.y;
    const distance = node.distance;
    if (x === dest.x && y === dest.y) {
      return distance;
    } else {
      if (node.visited === false) {
        node.visited = true;
        for (let i = 0; i < 8; i++) {
          const x1 = x + row[i];
          const y1 = y + col[i];
          if (isValid(x1, y1, N)) {
            q.push(new Node(x1, y1, distance + 1));
          }
        }
      }
    }
  }
  return Infinity;
}

const N = 8;
const src = new Node(0, 7, 0);
const dest = new Node(7, 0, 0);
console.log(breadthFirstSearch(src, dest, N));