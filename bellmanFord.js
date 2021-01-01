/* A JavaScript implementation of this Java implementation: https://github.com/williamfiset/Algorithms/blob/master/src/main/java/com/williamfiset/algorithms/graphtheory/BellmanFordAdjacencyList.java */

class Edge {
    constructor(from, to, cost) {
        this.from = from;
        this.to = to;
        this.cost = cost;
    }   
}

class ShortestPath {
    createGraph(V) {
        const graph = [];
        for (let i = 0; i < V; i++) {
            graph.push([]);
        }
        return graph;
    }
    
    addEdge(graph, from, to, cost) {
        graph[from].push(new Edge(from, to, cost));
    }
    
    search(graph, start) {
        const distance = [];
        for (let i = 0; i < V; i++) {
            if (i === 0) {
                distance.push(0);
            } else {
                distance.push(Infinity);
            }
        }
    
        for (let int = 0; int < V - 1; int++) {
            
            for (let i = 0; i < V - 1; i++) {
                if (i >= graph.length) {
                    continue;
                }

                const array = graph[i];
                const len = array.length;
        
                for (let j = 0; j < len; j++) {
                    const edge = array[j]
        
                    if (distance[edge.from] + edge.cost < distance[edge.to]) {
                        distance[edge.to] = distance[edge.from] + edge.cost;
                    }
                }
            }
        }
        
        for (let int = 0; int < V - 1; int++) {
            
            for (let i = 0; i < V - 1; i++) {
                if (i >= graph.length) {
                    continue;
                }

                const array = graph[i];
                const len = array.length;
        
                for (let j = 0; j < len; j++) {
                    const edge = array[j]
        
                    if (distance[edge.from] + edge.cost < distance[edge.to]) {
                        distance[edge.to] = Number.NEGATIVE_INFINITY;
                    }
                }
            }
        }
    
        return distance;
    }
}


const bellmanFord = new ShortestPath;
const V = 9;
let graph = bellmanFord.createGraph(V);
const start = 0;

function addEdges() {
    bellmanFord.addEdge(graph, 0, 1, 1);
    bellmanFord.addEdge(graph, 1, 2, 1);
    bellmanFord.addEdge(graph, 2, 4, 1);
    bellmanFord.addEdge(graph, 4, 3, -3);
    bellmanFord.addEdge(graph, 3, 2, 1);
    bellmanFord.addEdge(graph, 1, 5, 4);
    bellmanFord.addEdge(graph, 1, 6, 4);
    bellmanFord.addEdge(graph, 5, 6, 5);
    bellmanFord.addEdge(graph, 6, 7, 4);
    bellmanFord.addEdge(graph, 5, 7, 3);

    const temp = [];
    for (let i = 0; i < graph.length; i++) {
        if (graph[i].length != 0) {
            temp.push(graph[i]);
        }
    }
    
    graph = temp;
}

function print() {
    const distance = bellmanFord.search(graph, V, start);
    for (let i = 0; i < distance.length; i++) {
        console.log(
            "The cost of getting from node " + start + " to " + i + " is " + distance[i]
        );
    }
}

addEdges();
print();