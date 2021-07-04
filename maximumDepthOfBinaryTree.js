// Given a binary tree, find its maximum depth or the number of nodes along the longest path from the root node to its farthest leaf node

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const a = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);
const f = new Node(30);
const g = new Node(31);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

function maximumDepth(node) {
  if (!node) return null;
  let maximum = 0;
  
  const dfs = function(node) {
    if (!node) return 0;
  
    else {
      let left = Math.max(0, dfs(node.left) + 1);
      let right = Math.max(0, dfs(node.right) + 1);
      maximum = Math.max(left, right);
      return Math.max(left, right);
    }
  }
  
  dfs(node);
  return maximum;
}


console.log(maximumDepth(a));