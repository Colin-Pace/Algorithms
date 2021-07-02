/* Sort a stack such that the smallest item is on top; use an additional, temporary stack

Big O
1. Time: O(b ^ 2)
2. Space: O(b)    */


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

  sort(r) {
    if (!this.head) {
      return;
    
    } else {
      if (!r.head) {
        let data = this.pop();
        let node = new Node(data, null);
        r.head = node;

      } else {
        let temp = this.pop();
        if (temp > r.head.data) {
          let node = new Node(temp, r.head);
          r.head = node;

        } else {
          while (temp < r.head.data) {
            let node = r.pop();
            this.push(node);
          }
       
          let node = new Node(temp, r.head);
          r.head = node;
        }
      }
    }

    while (r.head) {
      let node = r.pop();
      this.push(node);
    }
  }
}


let stack = new Stack;
let r = new Stack;
const integers = [7, 10, 5, 12, 8, 3, 1];
integers.forEach(integer => stack.push(integer));
stack.sort(r);
console.log(stack.head.data);
