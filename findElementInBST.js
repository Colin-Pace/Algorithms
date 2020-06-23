// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

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

  inOrder(integer) {
    if (!this.root) return null;
    else {
      const result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        result.push(node.data);
        node.right && traversal(node.right);
      }

      traversal(this.root);
      return result[integer - 1];
    }
  }
}

const input = [3, 1, 4, 2];
const input_ = 1;

const inputTwo = [5, 3, 6, 2, 4, 1];
const inputTwo_ = 3;

const inputThree = [45, -10, 55, 65, -20, 25, 35];
const inputThree_ = 5;

const integers = new BinarySearchTree;
const integersTwo = new BinarySearchTree;
const integersThree = new BinarySearchTree;

input.forEach(element => integers.add(element));
inputTwo.forEach(element => integersTwo.add(element));
inputThree.forEach(element => integersThree.add(element));

console.log(integers.inOrder(input_));
console.log(integersTwo.inOrder(inputTwo_));
console.log(integersThree.inOrder(inputThree_));
