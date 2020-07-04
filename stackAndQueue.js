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
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) return null;
    else if (this.tail === this.head) {
      node = this.head;
      this.head = null;
      this.tail = null;
      return node;
    } else {
      node = this.head;
      this.head = this.head.next;
      node.next = null;
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
