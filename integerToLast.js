// Return the integer-to-last node of a linked list;
//    for example, the end item is last,
//    the one before it first-to-last, etc.


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
      let node = new Node(data);
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  integerToLast(integer) {
    let fast = this.head;
    let slow = this.head;

    while (integer > 0) {
      fast = fast.next;
      integer--;
    }

    while (fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }

  collectNodalData() {
    let storage = [];
    let pointer = this.head;
    while (pointer.next !== null) {
      storage.push(pointer.data);
      pointer = pointer.next;
    }
    storage.push(pointer.data);
    return storage;
  }
}

let letters = new LinkedList;
letters.add(1);
letters.add(2);
letters.add(3);
letters.add(4);
letters.add(5);
console.log(letters.integerToLast(3));
