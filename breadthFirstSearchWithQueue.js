// Find the traversal order of a graph by a breadth first search

class Node {
  constructor(data, adj = undefined) {
    this.data = data;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.adj = [b];
b.adj = [a, c, d];
c.adj = [b, e];
d.adj = [b, e];
e.adj = [c, d];


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
    if (!this.head) throw "No items in queue."
    else {
      let node = this.head;
      this.head = node.next;
      return node;
    }
  }
}

let queue = new Queue;
const visited = [];
const order = [];

function breadthFirstSearch(node) {
  visited.push(node);
  queue.enqueue(node);

  while (queue.head) {
    node = queue.dequeue().data;
    order.push(node.data);

    const l = node['adj'].length;
    for (let i = 0; i < l; i++) {
      const neighbor = node['adj'][i];
      if (!visited.includes(neighbor)) {
        visited.push(neighbor);
        queue.enqueue(neighbor);
      }
    }
    visited.push(node);
  }
  return order;
}

console.log(breadthFirstSearch(a));
