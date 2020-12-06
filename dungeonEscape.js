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
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) return null;
    else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      const data = node.data;
      node = null;
      return data;
    } else {
      node = this.head;
      this.head = this.head.next;
      const data = node.data;
      node = null;
      return data;
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
