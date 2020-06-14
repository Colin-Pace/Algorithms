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

  add(letters) {
    for (let i = 0; i < letters.length - 1; i++) this.add_(letters[i]);
    this.addLast(letters[letters.length - 1]);
  }

  add_(data) {
    if (!this.head) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  addLast(data){
    let count = 1;
    let fast = this.head;
    let slow = this.head;
    while (fast.next) {
      fast = fast.next;
      count++;
    }
    fast.next = new Node(data);

    let mid = Math.floor((count / 2) + 1);
    while (mid != 1) {
      slow = slow.next;
      mid--;
    }
    fast.next.next = slow;
  }

  loopDetection() {
    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
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
alphabetical.add(letters);
console.log(alphabetical.loopDetection());
