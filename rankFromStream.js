/*
Implement two BST methods
1. Track that during nodal creation stores in each node the number of nodes in its left subtree
2. getRankOfNumber that returns the number of values less than x
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.leftSize = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  track(data) {
    let node = this.root;
    if (!node) this.root = new Node(data);
    else {
      const searchTree = function(node) {
        if (data < node.data) {
          node.leftSize++;
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

  getRankOfNumber(node, data) {
    if (!node || !data) return null;
    else if (node.data === data) return node.leftSize;
    else if (data < node.data) {
      if (node.left === null) return -1;
      else return this.getRankOfNumber(node.left, data);
    } else {
      let rightRank = node.right === null ?
        -1 : this.getRankOfNumber(node.right, data);
      if (rightRank === -1) return -1;
      else return node.leftSize + 1 + rightRank;
    }
  }
}

const integers = new BinarySearchTree;
const ints = [20, 15, 10, 5, 13, 25, 23, 24];
ints.forEach(int => integers.track(int));
console.log(integers.getRankOfNumber(integers.root, 24));
