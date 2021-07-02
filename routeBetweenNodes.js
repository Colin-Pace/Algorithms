/* Find whether there is a route between two nodes in a directed graph

Big O
1. Time: O(v + e), where v is the number of vertices and e the number of edges
2. Space: O(v), where v is the number of vertices stored in the queue   */


class QueueNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    if (!this.head) {
      this.head = new QueueNode(data);
      this.tail = this.head;
   
    } else {
      const node = new QueueNode(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) {
      return null;
    
    } else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      return node.data;
 
    } else {
      node = this.head;
      this.head = this.head.next;
      return node.data;
    }
  }
}

class GraphNode {
  constructor(data, adj) {
    this.data = data;
    this.adj = adj;
    this.visited = false;
  }
}

const a = new GraphNode("a");
const b = new GraphNode("b");
const c = new GraphNode("c");
const d = new GraphNode("d");
const e = new GraphNode("e");
const f = new GraphNode("f");
const g = new GraphNode("g");
const h = new GraphNode("h");
const i = new GraphNode("i");
const j = new GraphNode("j");

/*
                                                        i           j

              b           d           f

        a                                         h

              c           e           g

*/

a.adj = [b, c];
b.adj = [c, d];
c.adj = [e];
d.adj = [f, g];
e.adj = [f];
f.adj = [h];
g.adj = null;
h.adj = [f];
i.adj = [h];
j.adj = [i];


function route(start, end) {
  if (!start || !end) {
    return null;
  }

  const queue = new Queue;
  queue.enqueue(start);
  start.visited = true;

  while (queue.head) {
    const node = queue.dequeue();
  
    if (node.adj === null) {
      continue;
  
    } else {
      for (let i = 0; i < node.adj.length; i++) {
        if (node.adj[i].visited === false) {
  
          if (node.adj[i] === end) {
            return true;
  
          } else {
            queue.enqueue(node.adj[i]);
            node.adj[i].visited = true;
          }
        }
      }
    }
  }

  return false;
}

console.log(route(a, h));