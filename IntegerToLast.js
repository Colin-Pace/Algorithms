// Return the integer-to-last node of a linked list;
//    e.g., the end item is first-to-last,
//          the one before it second-to-last, etc.


class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, null);
  }

  insertLast(item) {
    let pointer = this.head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = new _Node(item, null);
  }

  integerToLast(integer) {
    let fast = this.head;
    let slow = this.head;

    while (integer > 1) {
      fast = fast.next;
      integer--;
    }

    while (fast.next !== null) {
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
letters.insertFirst(1);
letters.insertLast(2);
letters.insertLast(3);
letters.insertLast(4);
letters.insertLast(5);
console.log(letters.integerToLast(3));
