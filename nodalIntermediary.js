/*
Write a function that, given a graph whose nodes represent profiles, and whose edges represent friendships returns whether two users who aren't friends have a mutual friend

Example: if rows and columns represent edges among nodes of friends in a network, then 19 and 20 are friends, but 1 and 24 are not

    1        5      9        13        17        21       25
    2        6      10       14        18        22       26
    3        7      11       15        19        23
    4        8      12       16        20        24
*/

class _Node {
  constructor(data, neighbors) {
    this.data = data;
    this.neighbors = neighbors;
  }
}

let a = new _Node(1);
let b = new _Node(2);
let c = new _Node(3);
let d = new _Node(4);
let e = new _Node(5);
let f = new _Node(6);
let g = new _Node(7);
let h = new _Node(8);
let i = new _Node(9);
let j = new _Node(10);
let k = new _Node(11);
let l = new _Node(12);
let m = new _Node(13);
let n = new _Node(14);
let o = new _Node(15);
let p = new _Node(16);
let q = new _Node(17);
let r = new _Node(18);
let s = new _Node(19);
let t = new _Node(20);
let u = new _Node(21);
let v = new _Node(22);
let w = new _Node(23);
let x = new _Node(24);
let y = new _Node(25);
let z = new _Node(26);

a.neighbors = [b, e];
b.neighbors = [a, c, f];
c.neighbors = [b, d, g];
d.neighbors = [c, h];
e.neighbors = [a, f, i];
f.neighbors = [b, e, g, j];
g.neighbors = [c, f, h, k];
h.neighbors = [d, g, l];
i.neighbors = [e, j, m];
j.neighbors = [f, i, k, n];
k.neighbors = [g, j, l, o];
l.neighbors = [h, k, p];
m.neighbors = [i, n, q];
n.neighbors = [j, m, o, r];
o.neighbors = [k, n, p, s];
p.neighbors = [l, o, t];
q.neighbors = [m, r, u];
r.neighbors = [n, q, s, v];
s.neighbors = [o, r, t, w];
t.neighbors = [p, s, x];
u.neighbors = [q, v, y];
v.neighbors = [r, u, w, z];
w.neighbors = [s, v, x];
x.neighbors = [t, w];
y.neighbors = [u, z];
z.neighbors = [v, y];

function findIfMutualFriend(nodeOne, nodeTwo) {
  for (let i = 0; i < nodeOne.neighbors.length - 1; i++) {
    if (nodeOne.neighbors[i] === nodeTwo) {
      return false;
    }
    for (let j = 0; j < nodeTwo.neighbors.length - 1; j++) {
      if (nodeTwo.neighbors[j] === nodeOne) {
        return false;
      }
      if (nodeOne.neighbors[i] === nodeTwo.neighbors[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(findIfMutualFriend(a, b));
console.log(findIfMutualFriend(a, c));
console.log(findIfMutualFriend(a, m));
