// Find if a graph has a route between two nodes

class _Node {
  constructor(data, adjacents=undefined) {
    this.data = data;
  }
}

let A = new _Node("A");
let B = new _Node("B");
let C = new _Node("C");
let D = new _Node("D");
let E = new _Node("E");
let F = new _Node("F");
let G = new _Node("G");
let H = new _Node("G");
let I = new _Node("I");
let J = new _Node("J");
let K = new _Node("K");
let L = new _Node("L");
let M = new _Node("M");
let N = new _Node("N");
let O = new _Node("O");
let P = new _Node("P");

A.adjacents = [B, E];
B.adjacents = [A, C, F];
C.adjacents = [B, D, G];
D.adjacents = [C, H];
E.adjacents = [F, I];
F.adjacents = [E, G, J];
G.adjacents = [F, H, K];
H.adjacents = [G, L];
I.adjacents = [J, M];
J.adjacents = [I, K, N];
K.adjacents = [J, L, O];
L.adjacents = [K, P];
M.adjacents = [N];
N.adjacents = [M, O];
O.adjacents = [N, P];
P.adjacents = [O];

let visited = [];
function routeBetweenNodes(start, end) {
  if (start === end) {
    return true;
  }

  let q = [];
  q.push(start);
  visited.push(start);

  let node = undefined;
  while (q.length > 0) {
    node = q.shift();
    if (node !== null) {
      for (let itr = 0; itr < node["adjacents"].length; itr++) {
        let neighbor = node["adjacents"][itr];
        if (!visited.includes(neighbor)) {
          if (neighbor === end) {
            return true;
          } else {
            visited.push(neighbor);
            q.push(neighbor)
          }
        }
      }

      visited.push(node)
    }
  }

  return false;
}

console.log(routeBetweenNodes(A, P));
console.log(routeBetweenNodes(P, A));
