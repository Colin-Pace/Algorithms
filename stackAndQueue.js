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
    if (!this.head) {
      let node = new Node(item, null);
      this.head = node;
    } else {
      let node = new Node(item, this.head);
      this.head = node;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    } else {
      let node = this.head;
      this.head = node.next;
      return node;
    }
  }
}

let integers = new Stack;
integers.push(2);
integers.push(1);
integers.push(4);
integers.push(3);
integers.push(5);
integers.pop();
integers.pop();
console.log(integers);



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

const letters = new Queue;
letters.enqueue("a");
letters.enqueue("b");
letters.enqueue("c");
letters.enqueue("d");
letters.enqueue("e");
letters.dequeue();
letters.dequeue();
console.log(letters);
