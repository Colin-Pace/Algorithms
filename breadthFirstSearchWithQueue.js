class Node {
  constructor(data, next, adjacents) {
    this.data = data;
    this.next = next;
    this.adjacents = null;
  }
}

const A = new Node(0);
const B = new Node(1);
const C = new Node(2);
const D = new Node(3);
const E = new Node(4);
const F = new Node(5);
const G = new Node(6);
const H = new Node(7);
const I = new Node(8);
const J = new Node(9);
const K = new Node(10);
const L = new Node(11);

A.adjacents = [B, J];
B.adjacents = [A, I];
C.adjacents = [D];
D.adjacents = [C, E, H];
E.adjacents = [D];
F.adjacents = [G];
G.adjacents = [F, H];
H.adjacents = [D, G, I, K, L];
I.adjacents = [B, H, J];
J.adjacents = [A, I];
K.adjacents = [H];
L.adjacents = [H];


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

let queue = new Queue;
let visited = [];
let result = [];
function breadthFirstSearch(startNode) {
  queue.enqueue(startNode);
  visited.push(startNode);

  while (queue.head !== undefined) {
    let node = queue.dequeue();
    for (let i = 0; i < node.data.adjacents.length; i++) {
      if (!visited.includes(node.data.adjacents[i])) {
        visited.push(node.data.adjacents[i]);
        queue.enqueue(node.data.adjacents[i]);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    result.push(visited[i].data);
  }
  return result;
}

console.log(breadthFirstSearch(A));
