// Write a stack with a method that returns its minimum node

class _Node {
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
      let node = new _Node(item, null);
      this.head = node;
    } else {
      let node = new _Node(item, this.head);
      this.head = node;
    }
  }

  pop() {
    if (this.head === null) {
      return "Stack is empty";
    } else {
      let node = this.head;
      this.head = node.next;
    }
  }

  min() {
    let minNode = this.head;
    let pointer = this.head;

    while (pointer) {
      if (pointer.data < minNode.data) {
        minNode = pointer;
        pointer = pointer.next;
      } else {
        pointer = pointer.next;
      }
    }

    return minNode;
  }
}

let numbers = new Stack;
numbers.push(2);
numbers.push(1);
numbers.push(4);
numbers.push(3);
numbers.push(5);
numbers.pop();
numbers.pop();
console.log(numbers.min());
