/* Snakes and ladders
1. Find the minimum number of throws to win a game of snakes and ladders
2. https://www.techiedelight.com/min-throws-required-to-win-snake-and-ladder-game/ */

class Graph {
  constructor() {
    this.graph = new Array(100).fill().map(() => new Array());
    this.create = function(snakes, ladders) {
      const N = 100;
      for (let i = 0; i <= N ; i++) {
        for (let j = 0; j < 6; j++) {
          if ((1 + i + j) <= N) {
            if ((1 + i + j) in snakes) {
              this.graph[i].push(snakes[1 + i + j]);
            } else if ((1 + i + j) in ladders) {
              this.graph[i].push(ladders[1 + i + j]);
            } else {
              this.graph[i].push(1 + i + j);
            }
          }
        }
      }
    }
  }

  breadthFirstSearch(graph, source, N) {
    const q = [];
    const discovered = new Array(101).fill().map(() => new Array());
    for (let i = 1; i < 101; i++) {
      discovered[i].push(false);
    }
    discovered[0].push(true);
    q.push([source, 0]);
    while (q.length) {
      const [vertex, minDist] = q.shift();
      if (vertex === N) {
        return minDist;
      } else {
        for (let i = 0; i < graph[vertex].length; i++) {
          const adj = graph[vertex][i];
          if (discovered[adj][0] === false) {
            discovered[adj][0] = true;
            const n = [adj, minDist + 1];
            q.push(n);
          }
        }
      }
    }
  }
}

const graph = new Graph;
const snakes = {};
const ladders = {};

snakes[17] = 7;
snakes[54] = 34;
snakes[62] = 19;
snakes[64] = 60;
snakes[87] = 36;
snakes[93] = 73;
snakes[95] = 75;
snakes[98] = 79;

ladders[1] = 38;
ladders[4] = 14;
ladders[9] = 31;
ladders[21] = 42;
ladders[28] = 84;
ladders[51] = 67;
ladders[72] = 91;
ladders[80] = 99;

graph.create(snakes, ladders);
console.log(graph.breadthFirstSearch(graph.graph, 0, 100));