// An iterative depth first search of a graph

class StackNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    if (!this.head) {
      this.head = new StackNode(data);
      this.tail = this.head;
    } else {
      const node = new StackNode(data);
      node.next = this.tail;
      this.tail = node;
    }
  }

  pop() {
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
      node = this.tail;
      this.tail = this.tail.next;
      const data = node.data;
      node = null;
      return data;
    }
  }
}

class Node {
  constructor(data, adj) {
    this.data = data;
    this.visited = null;
    this.adj = [];
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");
const j = new Node("j");

a.adj = [b, d];
b.adj = [e, c];
c.adj = [f];
d.adj = [a, e, g];
e.adj = [b, d];
f.adj = [c];
g.adj = [d, h];
h.adj = [h, i];
i.adj = [h, j];
j.adj = [i];

/*    a  -  b   -  c

      |     |      |

      d  -  e      f

      |

      g  -   h   - i

                   |

                   j        */

function traversal(node) {
  const order = [];
  const stack = new Stack;
  stack.push(node);

  while (stack.head) {
    const vertex = stack.pop();
    if (vertex.visited === null) {
      order.push(vertex.data);
      vertex.visited = true;
    }

    const adj = vertex.adj;
    const l = adj.length;
    for (let i = 0; i < l; i++) {
      if (adj[i].visited === null) {
        stack.push(adj[i]);
      }
    }
  }

  return order;
}

console.log(traversal(a));
