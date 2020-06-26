class QueueNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new QueueNode(data);
    if (!this.head) {
      this.tail = node;
      this.head = this.tail;
    } else {
      this.head.next = node;
      this.head = node;
    }
  }

  dequeue() {
    if (!this.head) return null;
    else {
      let node = this.tail;
      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
      } else this.tail = this.tail.next;
      node.next = null;
      return node;
    }
  }
}

class TreeNode {
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
    if (!node) this.root = new TreeNode(data);
    else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (!node.left) node.left = new TreeNode(data);
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (!node.right) node.right = new TreeNode(data);
          else return searchTree(node.right);
        } else return null;
      }
      searchTree(node);
    }
  }

  inOrder() {
    if (!this.root) return null;
    else {
      const result = [];
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
      const result = [];
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
      const result = [];
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
    if (!this.root) return null;
    else {
      const result = [];
      queue.enqueue(this.root);
      while (queue.head) {
        const node = queue.dequeue().data;
        result.push(" " + node.data);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
      }
      return result;
    }
  }
}



const queue = new Queue;
const tree = new BinarySearchTree;

const integers = [10, 5, 2, 8, 15, 12, 20];
integers.forEach(integer => tree.add(integer));

console.log(`In order: ${tree.inOrder()}`);
console.log(`Pre order: ${tree.preOrder()}`);
console.log(`Post order: ${tree.postOrder()}`);
console.log(`Level order: ${tree.levelOrder()}`);
