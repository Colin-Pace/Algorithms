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

  loopDetection() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== undefined && fast.next !== undefined) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) break;
    }
    if (fast === undefined || fast.next === undefined) return null;
    else {
      fast = this.head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast.data;
    }
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

const list = new LinkedList;
list.head = a;

console.log(list.loopDetection());
