/*
Check if a binary tree is a binary search tree

Example graphs

  Binary search tree
                                5
                          2           8
                        1   3       7   9
                              4   6      10


  Not binary search tree
                                5
                        1             8
                      2   3         7   9
                            4      6      10
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

// BST implementation
root.left = b; root.right = g;
b.left = a; b.right = c;
c.right = d;
g.left = f; g.right = i;
f.left = e;
i.right = j;

// Not BST implementation
// root.left = a; root.right = g;
// a.left = b; a.right = c;
// c.right = d;
// g.left = f; g.right = i;
// f.left = e;
// i.right = j;


function booleanCheck(root) {
    return checkBinarySearchTree(root, null, null);
}

function checkBinarySearchTree(node, min, max) {
    if (node === null) {
        return true;
    }

    if ((min !== null && node.data <= min) ||
        (max !== null) && node.data > max) {
        return false;
    }

    if (!checkBinarySearchTree(node.left, min, node.data) ||
        !checkBinarySearchTree(node.right, node.data, max)) {
        return false;
    }

    return true;
}
console.log(booleanCheck(root));
