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

a.edges = [[b, 3], [c, 6]];
b.edges = [[c, 4], [d, 4], [e, 11]];
c.edges = [[d, 8], [g, 11]];
d.edges = [[e, -4], [f, 5], [g, 2]];
e.edges = [[h, 9]];
f.edges = [[h, 1]];
g.edges = [[h, 2]];

graph.push(a);
graph.push(b);
graph.push(c);
graph.push(d);
graph.push(e);
graph.push(f);
graph.push(g);
graph.push(h);

class DirectedAcyclicGraphShortestPath {
  topSort(graph) {
    let order = [];
    let processNext = [];

    for (let i = 0; i < graph.length; i++) {
      if (graph[i]['edges'] === undefined) {
        continue;
      } else {
        let edges = graph[i]['edges'];
        for (let j = 0; j < edges.length; j++) {
          edges[j][0].inbound++;
        }
      }
    }

    for (let i = 0; i < graph.length; i++) {
      if (graph[i].inbound === 0) {
        processNext.push(graph[i]);
      }
    }

    while (processNext.length) {
      let node = processNext.shift();
      if (node['edges'] === undefined) {
        order.push(node);
      } else {
        let edges = node['edges'];
        for (let i = 0; i < edges.length; i++) {
          edges[i][0].inbound--;
          if (edges[i][0].inbound === 0) {
            processNext.push(edges[i][0]);
          }
        }
        order.push(node.data);
      }
    }

    for (let i = 0; i < order.length; i++) {
      if (typeof(order[i]) === 'object') {
        order[i] = order[i].data;
      }
    }

    const distances = this.shortestPath(order, graph);
    return distances;
  }

  shortestPath(order, graph) {
    let distances = {};
    for (let i = 0; i < order.length; i++) {
      if (graph[i].edges !== undefined && graph[i].data === order[i]) {
        let node = graph[i];
        let edges = graph[i].edges;
        for (let j = 0; j < edges.length; j++) {
          if (distances[edges[j][0].data]) {
            const pathCost = distances[node.data];
            if ((pathCost + edges[j][1]) < distances[edges[j][0].data]) {
              distances[edges[j][0].data] = pathCost + edges[j][1];
            } else {
              continue;
            }
          } else {
            if (i === 0) {
              distances[edges[j][0].data] = edges[j][1];
            } else {
              const pathCost = distances[node.data];
              distances[edges[j][0].data] = edges[j][1] + pathCost;
            }
          }
        }
      }
    }

    return distances;
  }
}
let letters = new DirectedAcyclicGraphShortestPath;
console.log(letters.topSort(graph));
