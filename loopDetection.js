// Given a circular linked list, find the node of the beginning of the loop

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (!this.head) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);

      if (runner.next.data === 'e') {
        let fast = this.head;
        let slow = this.head;
        while (fast.next) fast = fast.next;
        if (fast.data === 'e') {
          while (slow.data != 'c') slow = slow.next;
          fast.next = slow;
        }
      }
    }
  }

  loopDetection() {
    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next
      if (slow === fast) break;
    }

    if (fast === null || fast.next === null) return null;
    else {
      slow = this.head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast.data;
    }
  }
}

const alphabetical = new LinkedList;
let letters = ['a', 'b', 'c', 'd', 'e'];
letters.forEach(letter => alphabetical.add(letter));
console.log(alphabetical.loopDetection());
