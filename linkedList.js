// Singly linked list

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

  remove(value) {
    let slow = this.head;
    let fast = this.head.next;
    while (fast) {
      if (slow.data === value) {
        this.head = slow.next;
        return slow.next = null;
      } else if (fast.data === value) {
        return slow.next = fast.next;
      } else {
        fast = fast.next;
        slow = slow.next;
      }
    }
  }
}

const list = new LinkedList;

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.remove(3);

console.log(list.head.next.next.data);
