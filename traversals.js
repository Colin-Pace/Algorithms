/*
File structure
1. Node class declaration
2. Binary search tree declaration and graph
3. Traversals
    1. Depth: in, pre, and post order
    2. Breadth
*/
class _Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let root = new _Node(10, null, null);
let a = new _Node(1, null, null);
let b = new _Node(2, null, null);
let c = new _Node(3, null, null);
let d = new _Node(4, null, null);
let e = new _Node(5, null, null);
let f = new _Node(6, null, null);
let g = new _Node(7, null, null);
let h = new _Node(8, null, null);
let i = new _Node(9, null, null);
let j = new _Node(11, null, null);
let k = new _Node(12, null, null);
let l = new _Node(13, null, null);
let m = new _Node(14, null, null);
let n = new _Node(15, null, null);
let o = new _Node(16, null, null);
let p = new _Node(17, null, null);
let q = new _Node(18, null, null);
let r = new _Node(19, null, null);
let s = new _Node(20, null, null);
root.left = e; root.right = n;
e.left = c; e.right = f;
n.left = l; n.right = p;
c.left = a; c.right = d;
f.left = g; f.right = i;
i.left = h;
l.left = k; l.right = m;
k.left = j;
p.left = q; p.right = r;
r.right = s;

/*
              10
        5               15
    3      6         13     17
1     4   7  9     12 14  18  19
            8     11            20

*/

let visitedOne = [];
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        visitedOne.push(node.data);
        inOrderTraversal(node.right);
    }
}
inOrderTraversal(root);
console.log(visitedOne);

let visitedTwo = [];
function preOrderTraversal(node) {
    if (node) {
        visitedTwo.push(node.data);
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
}
preOrderTraversal(root);
console.log(visitedTwo);

let visitedThree = [];
function postOrderTraversal(node) {
    if (node) {
        postOrderTraversal(node.left);
        postOrderTraversal(node.right);
        visitedThree.push(node.data);
    }
}
postOrderTraversal(root);
console.log(visitedThree);

function breadthFirstSearch(node) {
  let queue = [];
  let result = [];
  if (node) {
    queue.push(node);
  }
  while (queue.length) {
    let current = queue.shift();
    result.push(current.data);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}
console.log(breadthFirstSearch(root));
