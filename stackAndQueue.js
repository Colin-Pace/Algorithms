// Implement a stack and queue class

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}


class Stack {
  constructor() {
    this.head = null;
  }

  push(item) {
    if (this.head === null) {
      let node = new Node(item, null);
      this.head = node;
    } else {
      let node = new Node(item, this.head);
      this.head = node;
    }
  }

  pop() {
    if (this.head === null) {
      throw "Stack is empty";
    } else {
      let node = this.head;
      this.head = node.next;
      return node;
    }
  }
}

let numeric = new Stack;
numeric.push(2);
numeric.push(1);
numeric.push(4);
numeric.push(3);
numeric.push(5);
numeric.pop();
numeric.pop();
console.log(numeric);


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.head === null || this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      throw "No items in queue."
    } else {
      let node = this.head;
      this.head = node.next;
      return node;
    }
  }
}

const alphabetic = new Queue;
alphabetic.enqueue("a");
alphabetic.enqueue("b");
alphabetic.enqueue("c");
alphabetic.enqueue("d");
alphabetic.enqueue("e");
alphabetic.dequeue();
alphabetic.dequeue();
console.log(alphabetic);
