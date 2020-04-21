// Implement a class that creates a new stack if the current one reaches a capacity and recalls a previous one if the current one becomes empty


class _Node {
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
      this.head = new _Node(item, null);
      this.length++;
    } else {
      let node = new _Node(item, this.head);
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
          let stack = this.array[this.array.length - 1];
          stack.pop();
        } else {
          let stack = this.array[this.array.length - 1];
          stack.pop();
          this.array.pop();
        }
      }
    }
  }
}

let dashboard = new SetOfStacks;
dashboard.navigation("push", 1);
dashboard.navigation("push", 2);
dashboard.navigation("push", 3);
dashboard.navigation("push", 4);
dashboard.navigation("push", 5);
dashboard.navigation("push", 6);
dashboard.navigation("push", 7);
dashboard.navigation("push", 8);
dashboard.navigation("push", 9);
dashboard.navigation("push", 10);
dashboard.navigation("pop");
dashboard.navigation("pop");
dashboard.navigation("pop");
console.log(dashboard.array);
