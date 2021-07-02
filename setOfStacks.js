/* Implement a class that creates a new stack if the current one reaches a capacity and recalls a previous one if the current one becomes empty

Big O
1. Time: O(b), where b is the length of the given list of integers
2. Space: O(b), where b is the length of the list of stacks; 
                the size of the stacks is a constant and can be dropped */


class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(item) {
    if (this.head === null) {
      this.head = new Node(item, null);
      this.length++;
  
    } else {
      let node = new Node(item, this.head);
      this.head = node;
      this.length++;
    }
  }

  pop() {
    if (this.head === null) {
      return "The stack is empty";
 
    } else {
      let node = this.head.next;
      this.head = node;
      this.length--;
    }
  }
}


class SetOfStacks {
  constructor() {
    this.array = [];
  }

  navigation(operation, item) {
    if (operation === "push") {
     
      if (this.array.length === 0) {
        let stack = new Stack;
        stack.push(item)
        this.array.push(stack);
     
      } else {
        let stack = this.array[this.array.length - 1];
   
        if (stack.length >= 3) {
          let stack = new Stack;
          stack.push(item)
          this.array.push(stack);
   
        } else {
          stack.push(item);
        }
      }
    
    } else {
      if (this.array.length === 0) {
        return "The set of stacks is empty";
    
      } else {
        let stack = this.array[this.array.length - 1];
       
        if (stack.length > 1) {
          stack.pop();
      
        } else {
          stack.pop();
          this.array.pop();
        }
      }
    }
  }
}

let stacks = new SetOfStacks;
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

integers.forEach(integer => stacks.navigation("push", integer));
stacks.navigation("pop");
stacks.navigation("pop");
stacks.navigation("pop");

console.log(stacks.array);