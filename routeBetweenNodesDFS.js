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
function search(start, end) {
  if (start === end) return true;
  if (visited.includes(start)) return;

  visited.push(start);
  const neighbors = start.adj;
  for (let i = 0; i < neighbors.length; i++) {
    if (search(neighbors[i], end) === true) return true;
    else search(neighbors[i], end);
  }

  return false;
}

console.log(search(a, e));
