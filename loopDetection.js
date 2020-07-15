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
    this.tail = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      const node = new Node(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  loopDetection() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
    }

    if (fast === null || fast.next === null) return null;
    else {
      slow = this.head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return fast.data;
    }
  }
}

const letters = new LinkedList;
const input = ['a', 'b', 'c', 'd', 'e'];
input.forEach(item => letters.add(item));
letters.head.next.next.next.next.next = letters.head.next.next;
console.log(letters.loopDetection());
