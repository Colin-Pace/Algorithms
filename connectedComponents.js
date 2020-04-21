// Collect the connected components of a graph

class Node {
  constructor(data, adjacents) {
    this.data = data;
    this.adjacents = null;
  }
}

const A = new Node(0);
const B = new Node(1);
const C = new Node(2);
const D = new Node(3);
const E = new Node(4);
const F = new Node(5);
const G = new Node(6);
const H = new Node(7);
const I = new Node(8);
const J = new Node(9);
const K = new Node(10);
const L = new Node(11);
const M = new Node(12);
const N = new Node(13);
const O = new Node(14);
const P = new Node(15);
const Q = new Node(16);
const R = new Node(17);

A.adjacents = [E, I, N, O];
B.adjacents = [F];
C.adjacents = [J, P];
D.adjacents = [J];
E.adjacents = [A, I];
F.adjacents = [B, Q, R];
G.adjacents = [H, L];
H.adjacents = [G, L];
I.adjacents = [A, E, O];
J.adjacents = [C, D, P];
K.adjacents = [P];
L.adjacents = [G, H];
M.adjacents = [-1];
N.adjacents = [A, O];
O.adjacents = [A, I, N];
P.adjacents = [C, J, K];
Q.adjacents = [F];
R.adjacents = [F];

let graph = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R];
let count = 0;
let components = [];
let visited = [];
function findComponents() {
  for (let i = 0; i < graph.length - 1; i++) {
    if (!visited.includes(graph[i])) {
      let component = [];
      dfs(graph[i], component);
      components.push(component);
    }
  }
  return (components);
}

function dfs(at, component) {
  if (visited.includes(at)) {
    return;
  } else {
    component.push(at);
    visited.push(at);
  }

  if (at.adjacents) {
    let neighbors = at.adjacents;
    for (let i = 0; i < neighbors.length; i++) {
      dfs(neighbors[i], component);
    }
  }
}

console.log(findComponents());
