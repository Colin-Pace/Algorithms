/* Big O
1. Push
    a. Time: O(1)
    b. Space: O(1)
2. Pop
    a. Time: O(1)
    b. Space: O(1)
3. Enqueue
    a. Time: O(1)
    b. Space: O(1)
4. Dequeue
    a. Time: O(1)
    b. Space: O(1) */

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    
    } else {
      const node = new Node(data);
      node.next = this.tail;
      this.tail = node;
    }
  }

  pop() {
    let node;
    if (!this.head) {
      return null;
    
    } else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      const data = node.data;
      node = null;
      return data;
    
    } else {
      node = this.tail;
      this.tail = this.tail.next;
      const data = node.data;
      node = null;
      return data;
    }
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
    if (!this.head) {
      return null;
    
    } else if (this.head === this.tail) {
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

const stack = new Stack;
const queue = new Queue;
