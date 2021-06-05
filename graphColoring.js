// Graph coloring: color the vertices of a graph so that no two adjacent vertices have the same color; minimize the total number of colors used

class Edge {
  constructor(source, dest) {
    this.source = source;
    this.dest = dest;
  }
}

class Graph {
  constructor(edges, N) {
    this.adjList = [];
    for (let i = 0; i < N; i++) {
      this.adjList.push(new Array());
    }

    for (let i = 0; i < edges.length; i++) {
      const src = edges[i].source;
      const dest = edges[i].dest;

      this.adjList[src].push(dest);
      this.adjList[dest].push(src);
    }
  }

  colorGraph(graph, N) {
    const result = {};
    for (let i = 0; i < N; i++) {
      let assigned = [];
      for (let j = 0; j < graph.adjList[i].length; j++) {
        if (graph.adjList[i][j] in result) {
          assigned.push(result[graph.adjList[i][j]]);
        }
      }
      
      assigned = assigned.sort();
      assigned = new Set(assigned); 
      let color = 1;
      for (let c of assigned) {
        if (color !== c) {
          break;
        }
        color++;
      }

      result[i] = color;
    }

    for (let i = 0; i < N; i++) {
      console.log("The color assigned to vertex " + i + " is " + colors[result[i]]);
    }
  }
}


const colors = ["", "BLUE", "GREEN", "RED", "YELLOW", "ORANGE", "PINK", "BLACK", "BROWN", "WHITE", "PURPLE", "VOILET"];
const edges = [
  new Edge(0, 1), new Edge(0, 4),
  new Edge(0, 5), new Edge(4, 5),
  new Edge(1, 4), new Edge(1, 3),
  new Edge(2, 3), new Edge(2, 4)
];
const N = 6;
const graph = new Graph(edges, N);
graph.colorGraph(graph, N);