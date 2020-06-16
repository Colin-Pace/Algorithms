// Remove duplicates from a linked list

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
    if (pointer.next === null) {
      pointer.next = new _Node(item, null);
    } else {
      while (pointer.next !== null) {
        pointer = pointer.next
      }
      pointer.next = new _Node(item ,null);
    }
  }

  removeDuplicates() {
    let fast = this.head.next;
    let slow = this.head;
    let storage = {};
    storage[slow.data] = 1;
    while (fast) {
      if (fast.data in storage) {
        if (fast.next === null) {
          slow.next = null;
          break;
        } else if (fast.next.next === null) {
          if (fast.next.data in storage) {
            slow.next = null;
            break;
          } else {
            slow.next = fast.next;
            break;
          }
        } else {
          slow.next = fast.next;
          fast = slow.next;
        }
      } else {
        if (fast.next === null) {
          break;
        } else if (fast.next.next === null) {
          if (fast.next.data in storage || fast.next.data === fast.data) {
            fast.next = null;
            break;
          } else {
            break;
          }
        } else {
          storage[fast.data] = 1;
          fast = fast.next;
          slow = slow.next;
        }
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
letters.insertFirst("A");
letters.insertLast("B");
letters.insertLast("C");
letters.insertLast("D");
letters.insertLast("E");
letters.removeDuplicates();
console.log(letters.collectNodalData());
