// Impementation adapted from https://hackernoon.com/how-to-implement-dijkstras-algorithm-in-javascript-abdfd1702d04
const graph = {
  start: {A: 5, B: 2},
  A: {C: 4, D: 2},
  B: {A: 8, D: 7},
  C: {D: 6, finish: 3},
  D: {finish: 1},
  finish: {}
};

function dijkstra(graph) {
  const costs = Object.assign({finish: Infinity}, graph.start)
  const visited = [];
  const parents = {finish: null};
  for (let child in graph.start) parents[child] = 'start';

  const findLow = function(costs, visited) {
    const known = Object.keys(costs);
    const lowCost = known.reduce((low, node) => {
      if (!low && !visited.includes(node)) low = node;
      if (costs[low] > costs[node] && !visited.includes(node)) low = node;
      return low;
    }, null);
    return lowCost;
  }

  let node = findLow(costs, visited);
  while (node) {
    const costToNode = costs[node], children = graph[node];
    for (let child in children) {
      const fromNodeToChild = children[child];
      const costToChild = costToNode + fromNodeToChild;
      if (!costs[child] || costs[child] > costToChild) {
        costs[child] = costToChild;
        parents[child] = node;
      }
    }
    visited.push(node);
    node = findLow(costs, visited);
  }

  const optimalPath = ['finish'];
  let parent = parents.finish;
  while (parent) {
    optimalPath.push(parent);
    parent = parents[parent];
  }
  optimalPath.reverse();

  const result = {distance: costs.finish, path: optimalPath};
  return result;
}

console.log(dijkstra(graph));
