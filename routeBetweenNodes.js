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
  if (!start || !end) return null;
  else {
    const visited = [];
    const order = [];
    queue.enqueue(start);
    while (queue.head) {
      const node = queue.dequeue().data;
      order.push(node.data);
      if (node.adj === null) continue;
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
console.log(route(a, h));
