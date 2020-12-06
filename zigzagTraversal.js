// Given a binary tree, return the zigzag level order traversal of its nodes' values. A zigzag level order traversal goes from left to right, then right to left for the next level.

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
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data);
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

const root = new Node(3);
const b = new Node(9);
const c = new Node(20);
const d = new Node(15);
const e = new Node(7);

root.left = b;
root.right = c;
c.left = d;
c.right = e;

function zigzagTraversal(node) {
  const queue = new Queue;
  if (!node) return null;
  else {
    const result = [];
    let normal = false;
    queue.enqueue(node);

    while (queue.head) {
      const node = queue.dequeue();
      result.push(node.data);
      if (normal) {
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
        normal = false;

      } else {
        if (node.right) queue.enqueue(node.right);
        if (node.left) queue.enqueue(node.left);
        normal = true;
      }
    }
    return result;
  }
}

console.log(zigzagTraversal(root));
