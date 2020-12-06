/*  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL. */

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
  constructor(data, left, right, next) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

class BinaryTree {
  constructor() {
    this.root = null;
  }

  populateNext() {
    if (!this.root) return null;
    else if (!this.root.left) return this.root.next = null;
    else {
      let node = this.root, count = 1, count_ = 3;
      queue.enqueue(node.left);
      queue.enqueue(node.right);
      while (queue.head) {
        const node_ = queue.dequeue();

        if (count === 1) {
          node.next = null;
          count++;
        } else if (count === count_) {
          node.next = null;
          count_ = count + count + 1;
          count++;
        } else {
          node.next = node_;
          count++;
        }

        if (node_.left) queue.enqueue(node_.left);
        if (node_.right) queue.enqueue(node_.right);

        node = node_;
      }

      node.next = null;
    }
  }

  levelOrder() {
    if (!this.root) return null;
    else {
      const result = [], result_ = [];
      queue.enqueue(this.root);

      while (queue.head) {
        const node = queue.dequeue();
        result.push(node.next);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
      }

      const l = result.length;
      for (let i = 0; i < l; i++) {
        if (result[i] === null) result_.push(`Node: ${i + 1}, next: null`);
        else result_.push(`Node: ${i + 1}, next: ${result[i].data}`);
      }

      return result_;
    }
  }
}

const queue = new Queue;
const integers = new BinaryTree;

integers.root = a;

integers.populateNext();
console.log(integers.levelOrder());
