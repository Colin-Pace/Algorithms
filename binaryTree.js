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
    if (!this.head) {
      this.head = new QueueNode(data);
      this.tail = this.head;
    } else {
      const node = new QueueNode(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) return null;
    else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      const data = node.data;
      node = null;
      return data;
    } else {
      node = this.head;
      this.head = this.head.next;
      const data = node.data;
      node = null;
      return data;
    }
  }
}

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
  }

  inOrder() {
    if (!this.root) return null;
    else {
      const result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        result.push(" " + node.data);
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
        result.push(" " + node.data);
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
        result.push(" " + node.data);
      }
      traversal(this.root);
      return result;
    }
  }

  levelOrder() {
    const queue = new Queue;
    if (!this.root) return null;
    else {
      const order = [];
      queue.enqueue(this.root);
      while (queue.head) {
        const node = queue.dequeue();
        order.push(` ${node.data}`);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
      }
      return order;
    }
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

const binaryTree = new BinaryTree;

binaryTree.root = a;

console.log("In order: " + binaryTree.inOrder());
console.log("Pre order: " + binaryTree.preOrder());
console.log("Post order: " + binaryTree.postOrder());
console.log("Level order: " + binaryTree.levelOrder());
