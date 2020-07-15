// Remove duplicates from a linked list

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

  removeDuplicates() {
    let values = {}, fast = this.head, slow = this.head;

    while (fast.next) {
      values[fast.data] = (values[fast.data] || 0) + 1;
      fast = fast.next;
    }
    values[fast.data] = (values[fast.data] || 0) + 1;

    fast = this.head.next;
    while (fast) {
      if (values[fast.data] > 1) {
        values[fast.data]--;
        slow.next = fast.next;
        fast = fast.next;
      } else {
        fast = fast.next;
        slow = slow.next;
      }
    }
  }

  collectNodalData() {
    let storage = [];
    let pointer = this.head;
    while (pointer) {
      storage.push(pointer.data);
      pointer = pointer.next;
    }
    return storage;
  }
}

let letters = new LinkedList;

letters.add("e");
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");
letters.add("a");
letters.add("f");
letters.add("f");

letters.removeDuplicates();

console.log(letters.collectNodalData());
