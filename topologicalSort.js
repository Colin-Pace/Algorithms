/*
File structure -- topological sort
1. Graph class declaration
2. Sort class declaration
3. Instance implementation
*/

class Node {
  constructor(data, edges, inbound=0) {
    this.data = data;
    this.edges = edges;
    this.inbound = inbound;
  }
}

let graph = [];
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');
let f = new Node('F');
let g = new Node('G');
let h = new Node('H');
let i = new Node('I');
let j = new Node('J');
let k = new Node('K');
let l = new Node('L');
let m = new Node('M');

a.edges = [d];
b.edges = [d];
c.edges = [a, b];
d.edges = [h, g];
e.edges = [a, d, f];
f.edges = [j, k];
g.edges = [i];
h.edges = [i, j];
i.edges = [l];
j.edges = [l, m];
k.edges = [j];
l.edges = undefined;
m.edges = undefined;

graph.push(a);
graph.push(b);
graph.push(c);
graph.push(d);
graph.push(e);
graph.push(f);
graph.push(g);
graph.push(h);
graph.push(i);
graph.push(j);
graph.push(k);
graph.push(l);
graph.push(m);

class TopologicalSort {
  algorithm(graph) {
    let order = [];
    let processNext = [];

    for (let at = 0; at < graph.length; at++) {
      if (graph[at]['edges'] === undefined) {
        continue;
      } else {
        let edges = graph[at]['edges'];
        for (let ae = 0; ae < edges.length; ae++) {
          edges[ae].inbound++;
        }
      }
    }

    for (let at = 0; at < graph.length; at++) {
      if (graph[at].inbound === 0) {
        processNext.push(graph[at]);
      }
    }

    while (processNext.length) {
      let node = processNext.shift();
      if (node['edges'] === undefined) {
        order.push(node);
      } else {
        let edges = node['edges'];
        for (let ae = 0; ae < edges.length; ae++) {
          edges[ae].inbound--;
          if (edges[ae].inbound === 0) {
            processNext.push(edges[ae]);
          }
        }

        order.push(node);
      }
    }

    return order;
  }
}

let instance = new TopologicalSort;
console.log(instance.algorithm(graph));
