/* Check if a linked list is a palindrome

Big O
1. Time: O(b)
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
    this.tail = null;
  }

  push(data) {
    if (!data && data !== 0) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
   
    } else {
      const node = new Node(data);
      node.next = this.tail;
      this.tail = node;
    }
  }

  pop() {
    let answer;

    if (!this.head) {
      return null;
    
    } else if (this.head === this.tail) {
      answer = this.head.data;
      this.head = null;
      this.tail = null;
      return answer;
    
    } else {
      let node = this.tail;
      answer = this.tail.data;
      this.tail = this.tail.next;
      node = null;
      return answer;
    }
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    if (!data && data !== 0) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  palindrome() {
    const stack = new Stack;
    let fast = this.head;
    let slow = this.head;

    if (!fast.next) {
      return true;
    }

    while (slow) {
      if (!fast) {
        const comparison = stack.pop();
      
        if (!slow.next && slow.data === comparison) {
          return true;
        } else {
          if (slow.data !== comparison) {
            return false;
          }
        }

        slow = slow.next;

      } else if (!fast.next) {
        const comparison = stack.pop();
        slow = slow.next;
      
        if ((slow === fast && slow.data === comparison)) {
          return true;
        } else {
          if (slow.data !== comparison) {
            return false;
          }
        }
   
      } else {
        stack.push(slow.data);
        fast = fast.next.next;
        slow = slow.next;
      }
    }
  }
}

let list = new LinkedList;

let integers = [1, 2, 3, 2, 1];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// true

list = new LinkedList;
integers = [1, 2, 2, 1];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// true

list = new LinkedList;
integers = [1];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// true

list = new LinkedList;
integers = [3, 3];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// true

list = new LinkedList;
integers = [4, 0, 4];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// true

list = new LinkedList;
integers = [4, 0];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// false

list = new LinkedList;
integers = [4, 0, 1, 0, 5];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// false

list = new LinkedList;
integers = [4, 0, 0, 5];
integers.forEach(integer => list.add(integer));
console.log(list.palindrome());
// false