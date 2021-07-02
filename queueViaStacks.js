/* Implement a queue via two stacks  

Big O
1. Push
    1. Time: O(b)
    2. Space: O(b)
2. Pop
    1. Time: O(b), the move of elements from one stack to the other is 2 * (b - 1),
                    where b is the number of elements in the stack,
                    and the constant is dropped
    2. Space: O(b)      */


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

  push(element) {
    if (this.head === null) {
      let node = new Node(element, null);
      this.head = node;
   
    } else {
      let node = new Node(element, this.head);
      this.head = node;
    }
  }

  pushNode(r, data) {
    if (r.head === null) {
      let node = new Node(data, null);
      r.head = node;
   
    } else {
      let node = new Node(data, r.head);
      r.head = node;
    }
  }

  pop() {
    if (this.head === null) {
      throw "Stack is empty";
    
    } else {
      const r = new Stack;
    
      while (this.head.next) {
        let node = this.head;
        this.head = node.next;
        this.pushNode(r, node.data);
      }

      const result = this.head;
      this.head = null;
    
      while (r.head) {
        let node = r.head;
        r.head = node.next;
        this.push(node.data);
      }
    
      return result.data;
    }
  }
}


let stack = new Stack;
const integers = [2, 1, 4, 3, 5];
integers.forEach(integer => stack.push(integer));

console.log(stack.pop());
console.log(stack.pop());