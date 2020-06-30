class Node {
  constructor(data) {
    this.data = data;
    this.adj = [];
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

const visited = [];
const order = [];
function route(node) {
  if (!node) return null;
  else if (visited.includes(node)) return;
  else {
    visited.push(node);
    order.push(node.data);
    const neighbors = node.adj, l = neighbors.length;
    for (let i = 0; i < l; i++) route(neighbors[i]);
    return order;
  }
}
console.log(route(a));
