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
    if (!value) return null;
    else if (!this.head) return null;
    else if (!this.head.next.next) {
      let node;
      if (this.head.data === value) {
        node = this.head;
        this.head = this.head.next;
        node = null;
        node = null;
      } else if (this.head.next.data === value) {
        node = this.head.next;
        node = null;
        this.head.next = null;
      }
    } else {
      let slow = this.head;
      let fast = this.head.next;
      while (fast) {
        if (slow.data === value) {
          this.head = slow.next;
          return slow = null;
        } else if (fast.data === value) {
          slow.next = fast.next;
          return fast = null;
        } else {
          fast = fast.next;
          slow = slow.next;
        }
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
