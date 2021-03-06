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
      return node.data;
    
    } else {
      node = this.tail;
      this.tail = this.tail.next;
      return node.data;
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
      return node.data;
    
    } else {
      node = this.head;
      this.head = this.head.next;
      return node.data;
    }
  }
}

const stack = new Stack;
const queue = new Queue;

const integers = [1, 2, 3, 4, 5];
integers.forEach(integer => stack.push(integer));
while (stack.head) {
  console.log(stack.pop());
}

integers.forEach(integer => queue.enqueue(integer));
while (queue.head) {
  console.log(queue.dequeue());
}