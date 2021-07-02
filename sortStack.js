/* Sort a stack such that the smallest item is on top; use an additional, temporary stack  */

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
      return node.data;
    }
  }

  sort(buffer) {
    if (!this.head) {
      return;
    
    } else {
      if (!buffer.head) {
        let data = this.pop();
        let node = new Node(data, null);
        buffer.head = node;

      } else {
        let temp = this.pop();
      
        if (temp > buffer.head.data) {
          let node = new Node(temp, buffer.head);
          buffer.head = node;

        } else {
   
          while (temp < buffer.head.data) {
            let node = buffer.pop();
            this.push(node);
          }
     
          let node = new Node(temp, buffer.head);
          buffer.head = node;
        }
      }
    }

    this.sort(buffer);
  
    while (buffer.head) {
      let node = buffer.pop();
      this.push(node);
    }
  }
}


let stack = new Stack;
let buffer = new Stack;
const integers = [7, 10, 5, 12, 8, 3, 1];
stack.sort(buffer);

console.log(stack.head.data);