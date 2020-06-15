// Search a graph by depth and return the search order

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
c.adj = [b];
d.adj = [b, e];
e.adj = [c, d];

let visited = [];
let order = [];
function search(node) {
  if (visited.includes(node)) return;
  else {
    visited.push(node);
    order.push(node.data);
    const neighbors = node.adj;
    for (let i = 0; i < neighbors.length; i++) {
      search(neighbors[i]);
    }
    return order;
  }
}

console.log(search(a));
