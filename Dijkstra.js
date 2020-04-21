/*
Dijkstra's algorithm:

Calculate the least costly path,
  between any two nodes,
  without editing the graph

Prevent the algorithm,
  from returning to start node,
  if loops exist in the graph



Example graph:

Start <->  A  ->  C  ->  Finish

                        ^
  |      /    \   |    /
  v           v   v

    B     ->      D


*/
let graph = {
    start: {
      A: Math.floor(Math.random() * 10) + 1,
      B: Math.floor(Math.random() * 10) + 1
    },
    A: {
      start: Math.floor(Math.random() * 10) + 1,
      C: Math.floor(Math.random() * 10) + 1,
      D: Math.floor(Math.random() * 10) + 1
    },
    B: {
      A: Math.floor(Math.random() * 10) + 1,
      D: Math.floor(Math.random() * 10) + 1
    },
    C: {
      D: Math.floor(Math.random() * 10) + 1,
      finish: Math.floor(Math.random() * 10) + 1
    },
    D: {
      finish: Math.floor(Math.random() * 10) + 1
    },
    finish: {}
};

class Dijkstra {
  algorithm(graph, startNodeName, endNodeName) {
    let pathCosts = {};
    pathCosts = Object.assign(pathCosts, graph[startNodeName]);

    let ancestors = {endNodeName: null};
    for (let key in graph[startNodeName]) {
      ancestors[key] = startNodeName;
    }

    let processed = [];
    processed.push(startNodeName);
    let node = this._lowestCostNode(pathCosts, processed);

    while (node) {
      let cost = pathCosts[node];
      let descendants = graph[node];
      for (let descendant in descendants) {
        if (String(descendant) !== String(startNodeName)) {
          let newCost = cost + descendants[descendant];
          if (!pathCosts[descendant] || pathCosts[descendant] > newCost) {
            pathCosts[descendant] = newCost;
            ancestors[descendant] = node;
          }
        }
      }
      processed.push(node);
      node = this._lowestCostNode(pathCosts, processed);
    }

    let optimalPath = [endNodeName];
    let ancestor = ancestors[endNodeName];

    while (ancestor) {
      optimalPath.push(ancestor);
      ancestor = ancestors[ancestor];
    }
    optimalPath.reverse();

    let results = {
      distance: pathCosts[endNodeName],
      path: optimalPath
    };

    return results;
  };

  _lowestCostNode (pathCosts, processed) {
    return Object.keys(pathCosts).reduce((lowest, node) => {
      if (lowest === null || pathCosts[node] < pathCosts[lowest]) {
        if (!processed.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };
}
let instance = new Dijkstra;


console.log(instance.algorithm(graph, "start", "finish"));
//console.log(instance.algorithm(graph, "A", "B"));
//console.log(instance.algorithm(graph, "A", "start"));
