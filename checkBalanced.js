/*
Check to see if a binary tree is balanced. In a balanced tree, the subtrees of each node have heights that differ by, no more than one. Return true if balanced, false if not


Example graphs

  Balanced tree
                                5
                          2           8
                        1   3       7   9
                              4   6      10


  Unbalanced tree
                                5
                        2             8
                      1   3         7   9
                            4      6      10
                              0
*/

class _TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let root = new _TreeNode(5, null, null);
let a = new _TreeNode(1, null, null);
let b = new _TreeNode(2, null, null);
let c = new _TreeNode(3, null, null);
let d = new _TreeNode(4, null, null);
let e = new _TreeNode(6, null, null);
let f = new _TreeNode(7, null, null);
let g = new _TreeNode(8, null, null);
let i = new _TreeNode(9, null, null);
let j = new _TreeNode(10, null, null);
let k = new _TreeNode(0, null, null);

// Balanced implementation
root.left = b; root.right = g;
b.left = a; b.right = c;
c.right = d;
g.left = f; g.right = i;
f.left = e;
i.right = j;

// Unbalanced implementation
// root.left = b; root.right = g;
// b.left = a; b.right = c;
// c.right = d;
// g.left = f; g.right = i;
// f.left = e;
// i.right = j;
// d.right = k;

function checkBalanced(root) {
  if (root === null) {
    return -1;
  }

  let leftHeight = checkBalanced(root.left);
  if (leftHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  let rightHeight = checkBalanced(root.right);
  if (rightHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  let heightDiff = leftHeight - rightHeight;

  if (Math.abs(heightDiff) > 1) {
    return Number.MIN_VALUE;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

function booleanCheck(root) {
    return checkBalanced(root) !== Number.MIN_VALUE;
}
console.log(booleanCheck(root));
