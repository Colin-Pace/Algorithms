/* A comparison of iterative breadth and depth first searches of a graph

1. The data structure that contains information about whether a node has been visited, enables a more efficient search algorithm
        a. O (n * m * p) versus O (n * m), where n is the graph, m is the vertices, and p is the order    

2. Graph

        a

        b     c

        d     e

        f

*/

class Node {
  constructor(data, adj) {
    this.data = data;
    this.adj = [];
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

function breadth_first_search(node) {
  const order = [];
  const q = [];

  order.push(node);
  q.push(node);

  while (q.length) {
    const node = q.shift();

    for (let i = 0; i < node.adj.length; i++) {
      const adj = node.adj[i];
  
      let visitedNode = false;
      for (let j = 0; j < order.length; j++) {
        if (order[j] === adj) {
          visitedNode = true;
        }
      }
  
      if (visitedNode === false) {
        order.push(adj);
        q.push(adj);
      }
    }
  }

  return order;
}

console.log(breadth_first_search(a));


function depth_first_search(node) {
  const order = [];
  const stack = [];

  stack.push(node);
  while (stack.length) {
    const itr = stack.pop();
    
    let visitedNode = false;
    for (let i = 0; i < order.length; i++) {
      if (order[i] === itr) {
        visitedNode = true;
      }
    }

    if (visitedNode === false) {
      order.push(itr);
    }

    for (let i = 0; i < itr.adj.length; i++) {
      let visitedAdj = false;
     
      for (let j = 0; j < order.length; j++) {
        if (order[j] === itr.adj[i]) {
          visitedAdj = true;
        }
      }
   
      if (visitedAdj === false) {
        stack.push(itr.adj[i]);
      }
    }
  }
  
  return order;
}

console.log(depth_first_search(a));


class NodeWithVisited {
  constructor(data, adj) {
    this.data = data;
    this.adj = [];
    this.visited = null;
  }
}

const a_with_visited = new NodeWithVisited("a");
const b_with_visited = new NodeWithVisited("b");
const c_with_visited = new NodeWithVisited("c");
const d_with_visited = new NodeWithVisited("d");
const e_with_visited = new NodeWithVisited("e");
const f_with_visited = new NodeWithVisited("f");

a_with_visited.adj = [b_with_visited];
b_with_visited.adj = [a_with_visited, c_with_visited, d_with_visited];
c_with_visited.adj = [b_with_visited, e_with_visited];
d_with_visited.adj = [b_with_visited, e_with_visited, f_with_visited];
e_with_visited.adj = [c_with_visited, d_with_visited];
f_with_visited.adj = [d_with_visited];

function breadth_first_search_node_with_visited(node) {
  const order = [];
  const q = [];

  order.push(node.data);
  q.push(node);
  node.visited = true;

  while (q.length) {
    const vertex = q.shift();

    for (let i = 0; i < vertex.adj.length; i++) {
      const adj = vertex.adj[i];

      if (adj.visited === null) {
        order.push(adj.data);
        q.push(adj);
        adj.visited = true;
      }
    }
  }

  return order;
}

console.log(breadth_first_search_node_with_visited(a_with_visited));


a_with_visited.visited = null;
b_with_visited.visited = null;
c_with_visited.visited = null;
d_with_visited.visited = null;
e_with_visited.visited = null;
f_with_visited.visited = null;

function depth_first_search_node_with_visited(node) {
  const order = [];
  const stack = [];
  stack.push(node);

  while (stack.length) {
    const vertex = stack.pop();
    
    if (vertex.visited === null) {
      order.push(vertex.data);
      vertex.visited = true;
    }

    const adj = vertex.adj;
    for (let i = 0; i < vertex.adj.length; i++) {
      if (adj[i].visited === null) {
        stack.push(adj[i]);
      }
    }
  }

  return order;
}

console.log(depth_first_search_node_with_visited(a_with_visited));