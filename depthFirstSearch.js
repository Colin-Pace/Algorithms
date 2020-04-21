// Search a graph by depth

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

A.adjacents = [B, J];
B.adjacents = [A, I];
C.adjacents = [D];
D.adjacents = [H, F, E, C];
E.adjacents = [D];
F.adjacents = [G, D];
G.adjacents = [H, F];
H.adjacents = [I, K, L, G, D];
I.adjacents = [B, J, H];
J.adjacents = [A, I];
K.adjacents = [H, L];
L.adjacents = [K, H];


let visited = [];
let traversalOrder = [];
function depthFirstSearch(at) {
  if (visited.includes(at)) {
    return;
  } else {
    visited.push(at);
    traversalOrder.push(at.data);
  }

  let neighbors = at.adjacents;
  for (let i = 0; i < neighbors.length; i++) {
    depthFirstSearch(neighbors[i]);
  }

}

const startNode = A;
depthFirstSearch(startNode);
console.log(traversalOrder);
