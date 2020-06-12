// Find if there is a route between two nodes in a graph

class Node {
  constructor(data, adjacents = undefined) {
    this.data = data;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.adjacents = [b];
b.adjacents = [c, d];
c.adjacents = [b, e];
d.adjacents = [b, e];
e.adjacents = [c, d];

let visited = [];
function route(start, end) {
  if (start === end) return true;

  let q = [];
  q.push(start);
  visited.push(start);

  let node = undefined;
  while (q.length) {
    node = q.shift();
    if (node) {
      for (let i = 0; i < node["adjacents"].length; i++) {
        const neighbor = node["adjacents"][i];
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
  }
  return false;
}
console.log(route(a, e));
