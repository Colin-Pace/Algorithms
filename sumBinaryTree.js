/* InterviewBit: sum binary tree. Given a binary search tree T, where each node
contains a positive integer, and an integer key, you have to find whether or
not there exist two different nodes A and B such that A.value + B.value = key.
Return 1 to denote that two such nodes exist. Return 0, otherwise. */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.addends = {};
    this.key = null;
  }

  sumExists(key) {
    this.key = key;
    return this.traversal(this.root) ? true : false;
  }

  checkAddends(data) {
    for (let i in this.addends) {
      if (Number(i) === data) return true;
    }

    return false;
  }

  traversal(node) {
    this.addends[ Math.abs(node.data - this.key) ] = true;

    node.left && this.traversal(node.left);
    if (this.checkAddends(node.data)) return true;
    node.right && this.traversal(node.right);

    return this.checkAddends(node.data);
  }

  test(inputOne, inputTwo) {
    if (inputOne === true && inputTwo === false) return true;
    else return false;
  }
}

const tree = new BinaryTree;
const a = new Node(10);
const b = new Node(9);
const c = new Node(20);

tree.root = a;
a.left = b;
a.right = c;

const inputOne = tree.sumExists(19);

tree.addends = {};
tree.key = null;
const inputTwo = tree.sumExists(40);

console.log(`Test passes: ${tree.test(inputOne, inputTwo)}`);
