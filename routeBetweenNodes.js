// Find if there is a route between two nodes in a graph

class Node {
  constructor(data, adj = null) {
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
function route(start, end) {
  if (start === end) return true;
  let q = [], node = undefined;
  q.push(start);
  visited.push(start);

  while (q.length) {
    node = q.shift();
    const l = node['adj'].length;
    for (let i = 0; i < l; i++) {
      const neighbor = node['adj'][i];
      if (!visited.includes(neighbor)) {
        if (neighbor === end) return true;
        else {
          visited.push(neighbor);
          q.push(neighbor);
        }
      }
    }
    visited.push(node);
  }
  return false;
}

console.log(route(a, e));
