/* Partition a linked list around a value x; if x is in the list, it must be on the larger side, but other than the partition, order of the elements in each side does not matter

Big O
1. Time: O(b)
2. Space: O(b)    */


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
    if (!data && data !== 0) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  partition(value) {
    if (!value && value !== 0) {
      return null;
    }

    let lesser = new LinkedList;
    let greater = new LinkedList;

    let itr = this.head;
    while (itr) {
      if (itr.data < value) {
        lesser.add(itr.data);
      } else {
        greater.add(itr.data);
      }
      
      itr = itr.next;
    }

    lesser.tail.next = greater.head;
    lesser.readAnswer();
  }

  readAnswer() {
    if (!this.head) {
      return null;
    }

    let itr = this.head;
    while (itr) {
      console.log(itr.data);
      itr = itr.next;
    }
  }
}

const list = new LinkedList;
const integers = [3, 5, 8, 5, 10, 2, 1];
integers.forEach(integer => list.add(integer));
list.partition(8);