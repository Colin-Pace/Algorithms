class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Tree one
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);

a.left = b;
a.right = c;

// Tree two
const d = new Node(-10);
const e = new Node(9);
const f = new Node(20);
const g = new Node(15);
const h = new Node(7);

d.left = e;
d.right = f;
f.left = g;
f.right = h;

function maximumPathInBinaryTree(node) {
  let maximum = Number.MIN_VALUE;
  const dfs = function(node) {
    if (!node) return null;
    else {
      let leftMax = Math.max(0, dfs(node.left));
      let rightMax = Math.max(0, dfs(node.right));
      maximum = Math.max(maximum, (leftMax + rightMax + node.data));
      return Math.max(leftMax, rightMax) + node.data;
    }
  }
  dfs(node);
  return maximum;
}

console.log(maximumPathInBinaryTree(a));
console.log(maximumPathInBinaryTree(d));
