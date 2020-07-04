/*
During an in order traversal of a binary search tree,
  find the next of a given node


Example graph

                        50
                    30      70
                  20  40      80
                10           90 100
                                  110
                                    120
                                  125  130
                                      132 133
                                            135
*/
class _Node {
  constructor(data, left, right, parent) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

// Tree implementation
let root = new _Node(50, null, null, null);
let a = new _Node(10, null, null, null);
let b = new _Node(20, null, null, null);
let c = new _Node(30, null, null, null);
let d = new _Node(40, null, null, null);
let e = new _Node(60, null, null, null);
let f = new _Node(70, null, null, null);
let g = new _Node(80, null, null, null);
let h = new _Node(90, null, null, null);
let i = new _Node(100, null, null, null);
let j = new _Node(110, null, null, null);
let k = new _Node(120, null, null, null);
let l = new _Node(125, null, null, null);
let m = new _Node(130, null, null, null);
let n = new _Node(132, null, null, null);
let o = new _Node(133, null, null, null);
let p = new _Node(135, null, null, null);


root.left = c; root.right = f;
c.left = b; c.right = d; c.parent = root;
b.left = a; b.parent = c;
a.parent = b;
d.parent = c;
f.right = g; f.parent = root;
g.left = h; g.right = i; g.parent = f;
h.parent = g;
i.right = j; i.parent = g;
j.right = k; j.parent = i;
k.left = l; k.right = m; k.parent = j;
l.parent = k;
m.left = n; m.right = o; m.parent = k;
n.parent = m;
o.right = p; o.parent = m;
p.parent = o;


function traversal(node) {
  if (node === null) {
    return null;
  }

  if (node.right !== null) {
    return leftMost(node.right);
  } else {
    let q = node;
    let x = q.parent;

    while (x !== null && x.left !== q) {
      q = x;
      x = x.parent;
    }
    return x;
  }
}

function leftMost(node) {
  if (node === null) {
    return null;
  }

  while (node.left !== null) {
    node = node.left;
  }
  
  return node;
}

console.log(traversal(root));
