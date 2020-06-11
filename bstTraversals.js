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

  inOrder() {
    if (!this.root) return null;
    else {
      let result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        result.push(` ${node.data}`);
        node.right && traversal(node.right);
      }
      traversal(this.root);
      return result;
    }
  }

  preOrder() {
    if (!this.root) return null;
    else {
      let result = [];
      const traversal = function(node) {
        result.push(` ${node.data}`);
        node.left && traversal(node.left);
        node.right && traversal(node.right);
      }
      traversal(this.root);
      return result;
    }
  }

  postOrder() {
    if (!this.root) return null;
    else {
      let result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        node.right && traversal(node.right);
        result.push(` ${node.data}`);
      }
      traversal(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = [];
    let q = [];
    if (this.root) {
      q.push(this.root);
      while(q.length) {
        const node = q.shift();
        result.push(` ${node.data}`);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      return result;
    } else return null;
  }
}

const numbers = new BinarySearchTree;
let integers = [10, 5, 2, 8, 15, 12, 20];
integers.forEach(integer => numbers.add(integer));
console.log(`In order: ${numbers.inOrder()}`);
console.log(`Pre order: ${numbers.preOrder()}`);
console.log(`Post order: ${numbers.postOrder()}`);
console.log(`Level order: ${numbers.levelOrder()}`);
