/* Return the kTh to last element of a linked list

Big O
1. Time: O(n)
2. Space: O(1)      */

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.itr = null;
  }

  add(data) {
    if (!data) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.itr = this.head;
    } else {
      this.itr.next = new Node(data);
      this.itr = this.itr.next;
    }
  }

  kThToLast(integer) {
    if (!this.head || (!integer && integer !== 0)) {
      return null;
    }

    let fast = this.head;
    let slow = this.head;

    while (fast.next) {
      if (integer === 0) {
        fast = fast.next;
        slow = slow.next;
      } else {
        fast = fast.next;
        integer--;
      }
    }

    if (integer !== 0) {
      return null;
    } else {
      return slow.data;
    }
  }
}

const list = new LinkedList;
const integers = [1, 2, 3, 4, 5, 6];
integers.forEach(integer => list.add(integer));

console.log(list.kThToLast(2));