/*
Find the shortest path on a grid. A cube might be rock and thereby not traversable. Diagonal movement also is prohibited.
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.head === null || this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      throw "No items in queue."
    } else {
      let node = this.head;
      this.head = node.next;
      return node;
    }
  }
}

const dungeon = [
  ["S", 0, 0, 1, 0, 0, 0],
  [0,   1, 0, 0, 0, 1, 0],
  [0,   1, 0, 0, 0, 0, 0],
  [0,   0, 1, 1, 0, 0, 0],
  [1,   0, 1,"E",0, 1, 0]
];

// const dungeon = [
//   ["S", 0, 0, 1, 0, 0, 0],
//   [0,   1, 0, 0, 0, 1, 0],
//   [0,   1, 0, 0, 0, 0, 0],
//   [0,   0, 1, 1, 0, 0, 0],
//   [1,   0, 1,"E",1, 1, 0]
// ];

let queue = new Queue;
const R = dungeon.length;
const C = dungeon[0].length;
const start = [0, 0];
const end = [4, 3];
const visited = {};
const dr = [-1, +1, 0, 0];
const dc = [0, 0, +1, -1];
let moveCount = 0;
let nodesLeftInLayer = 1;
let nodesInNextLayer = 0;
let reachedEnd = false;

function dungeonEscape() {
  function exploreNeighbors(r, c) {
    for (let i = 0; i < 4; i++) {
      const rr = r + dr[i];
      const cc = c + dc[i];

      if ((rr < 0 || cc < 0) || (rr >= R || cc >= C) || (dungeon[rr][cc] === 1)) {
        continue;
      }

      const pair = [rr, cc];
      if (pair in visited) {
        continue;
      }

      queue.enqueue(pair);
      visited[pair] = true;
      nodesInNextLayer++;
    }
  }

  visited[start] = true;
  queue.enqueue(start);
  while (queue.head !== undefined) {
    let node = queue.dequeue().data;
    if (end[0] === node[0] && end[1] === node[1]) {
      reachedEnd = true;
      break;
    }

    exploreNeighbors(node[0], node[1]);

    nodesLeftInLayer--;
    if (nodesLeftInLayer === 0) {
      nodesLeftInLayer = nodesInNextLayer;
      nodesInNextLayer = 0;
      moveCount++;
    }
  }

  if (reachedEnd === true) {
    return moveCount;
  }

  return false;
}
console.log(dungeonEscape());
