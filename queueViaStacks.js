/* Implement a queue via two stacks  */


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


let stack = new Stack;
const integers = [2, 1, 4, 3, 5];
integers.forEach(integer => stack.push(integer));
let result = stack.pop();
console.log(result);
