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
    this.tail = this.head.next;
    while (this.tail) {
      if (slow.data === value) {
        return slow.next = null;
      } else if (this.tail.data === value) {
        return slow.next = this.tail.next;
      } else {
        this.tail = this.tail.next;
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

list.remove(4);

console.log(list.head.next.next.next.data);



// Doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
