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

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");
const e = new GraphNode("e");
const f = new GraphNode("f");
const g = new GraphNode("g");
const h = new GraphNode("h");
const i = new GraphNode("i");
const j = new GraphNode("j");

/*
                                                        i           j

              b           d           f

        a                                         h

              c           e           g

*/

a.adj = [b, c];
b.adj = [c, d];
c.adj = [e];
d.adj = [f, g];
e.adj = [f];
f.adj = [h];
g.adj = null;
h.adj = [f];
i.adj = [h];
j.adj = [i];


function route(start, end) {
  const queue = new Queue;
  if (!start || !end) return null;
  else {
    const visited = [];
    const order = [];
    queue.enqueue(start);
    while (queue.head) {
      const node = queue.dequeue();
      order.push(node.data);
      if (node.adj === null) continue;
      const adjacents = node.adj, l = adjacents.length;
      for (let i = 0; i < l; i++) {
        if (adjacents[i] === end) return true;
        else {
          if (!visited.includes(adjacents[i])) {
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

console.log(route(a, h));
