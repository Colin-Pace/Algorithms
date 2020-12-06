// Find the traversal order of a graph by a breadth first search

class QueueNode {
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
      this.head = new QueueNode(data);
      this.tail = this.head;
    } else {
      const node = new QueueNode(data);
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

class GraphNode {
  constructor(data, adj) {
    this.data = data;
    this.adj = adj;
  }
} 

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');
const d = new GraphNode('d');
const e = new GraphNode('e');

a.adj = [b];
b.adj = [a, c, d];
c.adj = [b, e];
d.adj = [b, e];
e.adj = [c, d];

function route(node) {
  const queue = new Queue;
  if (!node) return null;
  else {
    const visited = [];
    const order = [];
    queue.enqueue(node);
    while (queue.head) {
      const node = queue.dequeue();
      order.push(node.data);
      const adjacents = node.adj, l = adjacents.length;
      for (let i = 0; i < l; i++) {
        if (!visited.includes(adjacents[i])) {
          visited.push(adjacents[i]);
          queue.enqueue(adjacents[i]);
        }
      }
      if (!visited.includes(node)) visited.push(node);
    }
    return order;
  }
}

console.log(route(a));
