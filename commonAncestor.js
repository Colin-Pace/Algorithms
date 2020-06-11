// Find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. This is not necessarily a binary search tree. Assume that each node has a link to its parent.
/*

                 20
                /  \
              10    30
            /   \
          5     15
        /   \    \
      3      7    17

*/


class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;
    if (!node) this.root = new Node(data);
    else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (!node.left) node.left = new Node(data);
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (!node.right) node.right = new Node(data);
          else return searchTree(node.right);
        } else return null;
      }
      searchTree(node);
    }
  }

  commonAncestor(root, p, q) {
    if (this.covers(root.left, p) && this.covers(root.left, q)) {
      return this.commonAncestor(root.left, p, q);
    }

    if (this.covers(root.right, p) && this.covers(root.right, q)) {
      return this.commonAncestor(root.right, p, q);
    }

    return root;
  }

  covers(root, p) {
    if (root === null) return false;
    if (root === p) return true;
    return this.covers(root.left, p) || this.covers(root.right, p);
  }
}

const numbers = new BinaryTree;
const integers = [20, 10, 5, 3, 7, 15, 17, 30];
integers.forEach(integer => numbers.add(integer));
const root = numbers.root;
const p = numbers.root.left.left.right;
const q = numbers.root.left.right.right;
console.log(numbers.commonAncestor(root, p, q));
