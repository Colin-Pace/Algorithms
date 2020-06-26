// Find if there is a route between two nodes in a graph

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
    let node = new QueueNode(data);
    if (!this.head) {
      this.tail = node;
      this.head = this.tail;
    } else {
      this.head.next = node;
      this.head = node;
    }
  }

  dequeue() {
    if (!this.head) return null;
    else {
      let node = this.tail;
      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
      } else this.tail = this.tail.next;
      node.next = null;
      return node;
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

function route(start, end) {
  if (!start || !end) return null;
  else {
    const visited = [];
    const order = [];
    queue.enqueue(start);
    while (queue.head) {
      const node = queue.dequeue().data;
      order.push(node.data);
      const adjacents = node.adj, l = adjacents.length;
      for (let i = 0; i < l; i++) {
        if (!visited.includes(adjacents[i])) {
          if (adjacents[i] === end) return true;
          else {
            visited.push(adjacents[i]);
            queue.enqueue(adjacents[i]);
          }
        }
      }
      visited.push(node);
    }
    return false;
  }
}

const queue = new Queue;
console.log(route(a, e));
