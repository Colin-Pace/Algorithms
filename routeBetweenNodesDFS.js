// Use a depth first search to find if a graph has a route between two nodes

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

let visited = [];
let result = [];
function route(start, end) {
  if (start === end) return true;
  else if (visited.includes(start)) return;
  else {
    visited.push(start);
    const neighbors = start.adj;
    for (let i = 0; i < neighbors.length; i++) {
      result.push(neighbors[i].data);
      route(neighbors[i], end);
    }
  }
  if (result.includes(end.data)) return true;
  else return false;
}

console.log(route(a, e));
