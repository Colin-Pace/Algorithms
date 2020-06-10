// Implement a queue via two stacks

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

  pushNode(buffer, data) {
    if (buffer.head === null) {
      let node = new Node(data, null);
      buffer.head = node;
    } else {
      let node = new Node(data, buffer.head);
      buffer.head = node;
    }
  }

  pop() {
    if (this.head === null) {
      throw "Stack is empty";
    } else {
      const buffer = new Stack;
      while (this.head.next) {
        let node = this.head;
        this.head = node.next;
        this.pushNode(buffer, node.data);
      }

      const result = this.head;
      this.head = null;
      while (buffer.head) {
        let node = buffer.head;
        buffer.head = node.next;
        this.push(node.data);
      }
      return result.data;
    }
  }
}


let numeric = new Stack;
numeric.push(2);
numeric.push(1);
numeric.push(4);
numeric.push(3);
numeric.push(5);
let result = numeric.pop();
console.log(result);
