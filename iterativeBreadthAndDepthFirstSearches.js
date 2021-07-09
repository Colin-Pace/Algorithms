/* A comparison of iterative breadth and depth first searches of a graph
1. Graph

        a

        b    c

        d    e

        f

*/

class Node {
  constructor(data, adj) {
    this.data = data;
    this.adj = [];
    this.visited = false;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.adj = [b];
b.adj = [a, c, d];
c.adj = [b, e];
d.adj = [b, e, f];
e.adj = [c, d];
f.adj = [d];

function breadthFirstSearch(node) {
  const order = [];
  const q = [];

  order.push(node.data);
  q.push(node);
  node.visited = true;

  while (q.length) {
    const vertex = q.shift();
    for (let i = 0; i < vertex.adj.length; i++) {

      if (vertex.adj[i].visited === false) {
        order.push(vertex.adj[i].data);
        q.push(vertex.adj[i]);
        vertex.adj[i].visited = true;
      }
    }
  }

  return order;
} 

console.log(breadthFirstSearch(a));



a.visited = false;
b.visited = false;
c.visited = false;
d.visited = false;
e.visited = false;
f.visited = false;

function depthFirstSearch(node) {
  if (node === undefined) {
    return null;
  }

  const order = [];
  const stack = [];

  stack.push(node);
  while (stack.length) {
    const vertex = stack.pop();
    
    if (vertex.visited === false) {
      order.push(vertex.data);
      vertex.visited = true;
    }

    for (let i = 0; i < vertex.adj.length; i++) {
      if (vertex.adj[i].visited === false) {
        stack.push(vertex.adj[i]);
      }
    }
  }

  return order;
}

console.log(depthFirstSearch(a));