class Node {
  constructor(data) {
    this.data = data;
    this.adj = [];
    this.visited = false;
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

const order = [];
function depthFirstSearch(node) {
  node.visited = true;
  order.push(node.data);
  for (let i = 0; i < node.adj.length; i++) {
    if (node.adj[i].visited === false) {
      depthFirstSearch(node.adj[i]);
    }
  }
  return order;
}
console.log(depthFirstSearch(a));