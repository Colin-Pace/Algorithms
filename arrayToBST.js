// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  findRoot(integers) {
    const mid = Math.floor(integers.length / 2);
    const value = integers[mid];
    const l = integers.length;
    if (value === 0) this.add(true);
    else this.add(value);
    for (let i = 0; i < l; i++) {
      if (i === mid) continue;
      this.add(integers[i]);
    }
  }

  add(data) {
    if (!data) return null;
    if (data === true) data = 0;
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
}

const integers = new BinarySearchTree;
const integers_ = new BinarySearchTree;

const input = [-10, -3, 0, 5, 9];
const input_ = [1, 6, 7, 8, 9, 10, 20, 50];

integers.findRoot(input);
integers_.findRoot(input_);

console.log(integers.root.data);
//console.log(integers_.root.data);
