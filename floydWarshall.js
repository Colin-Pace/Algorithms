/* A JavaScript implementation of this Java implementation: https://github.com/williamfiset/Algorithms/blob/master/src/main/java/com/williamfiset/algorithms/graphtheory/FloydWarshallSolver.java*/

class ShortestPathAllPairs {
    createGraph(int) {
        for (let i = 0; i < int; i++) {
            graph.push([]);
            next.push([]);
            
            for (let j = 0; j < int; j++) {
                graph[i].push([]);
                next[i].push([]);

                if (i === j) {
                    graph[i][j] = 0;
                    next[i][j] = null;
                
                } else {
                    graph[i][j] = Infinity;
                    next[i][j] = j;
                }
            }
        }
    }

    update() {
        for (let i = 0; i < int; i++) {

            for (let j = 0; j < int; j++) {

                if (graph[i][j] != Infinity) {
                    next[i][j] = j;
               
                } else {
                    next[i][j] = null;
                
                }
            }
        }
    }
    
    search() {
        for (let k = 0; k < int; k++) {
            for (let i = 0; i < int; i++) {
                for (let j = 0; j < int; j++) {

                    if (graph[i][k] + graph[k][j] < graph[i][j]) {
                        graph[i][j] = graph[i][k] + graph[k][j];
                        next[i][j] = next[i][k];
                    }

                }
            }
        }

        for (let k = 0; k < int; k++) {
            for (let i = 0; i < int; i++) {
                for (let j = 0; j < int; j++) {

                    if (graph[i][k] + graph[k][j] < graph[i][j]) {
                        graph[i][j] = Number.NEGATIVE_INFINITY;
                        next[i][j] = Number.NEGATIVE_INFINITY;
                    }

                }
            }
        }
    }

    print() {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                console.log(
                    "The shortest path from node " + i + " to node " + j + " is: " + graph[i][j]
                    );
            }
        }
    }

    reconstructShortestPath(start, end) {
        const path_ = [];
        if (graph[start][end] === Infinity) {
            return undefined;
        }
        
        let at = start
        for (; at != end; at = next[at][end]) {
            if (at == Number.NEGATIVE_INFINITY) {
                return null;
            }
            path_.push(at);
        }

        if (next[at][end] === Number.NEGATIVE_INFINITY) {
            return null;
        }

        path_.push(end);
        return path_;
    }

    printReconstructedPath() {
        let path = [];
        for (let i = 0; i < int; i++) {
            for (let j = 0; j < int; j++) {
                path = floydWarshall.reconstructShortestPath(i, j);
                let str;
                if (path === null) {
                    str = "HAS AN ∞ NUMBER OF SOLUTIONS! (negative cycle case)";
                } else if (path === undefined) {
                    str = "A route does not exist between " + i + " and " + j; 
                } else {
                    str = "The shortest path from " + i + " to " + j + " is: [";
                    for (let k = 0; k < path.length; k++) {
                        if (k === path.length - 1) {
                            str += path[k] + "]";
                        } else {
                            str += path[k] + " -> ";
                        }
                    }
                }
        
                console.log(str);
            }
        }
    }
}

const int = 7;
const floydWarshall = new ShortestPathAllPairs;
let graph = [];
let next = [];
floydWarshall.createGraph(int);

graph[0][1] = 2;
graph[0][2] = 5;
graph[0][6] = 10;
graph[1][2] = 2;
graph[1][4] = 11;
graph[2][6] = 2;
graph[6][5] = 11;
graph[4][5] = 1;
graph[5][4] = -2;

floydWarshall.update();
floydWarshall.search();

//floydWarshall.print();
floydWarshall.printReconstructedPath();
