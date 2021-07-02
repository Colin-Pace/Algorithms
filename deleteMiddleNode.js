/* Delete the middle node of a singly linked list, given access only to that node

Big O
1. Time: O(1)
2. Space: O(1)    */


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
    if (!data && data !== 0) {
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

  deleteMiddleNode(node) {
    if (!node) {
      return null;
    }

    node.data = node.next.data;
    node.next = node.next.next;
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

let list = new LinkedList;
const integers = [1, 2, 3, 4, 5];
integers.forEach(integer => list.add(integer));

list.deleteMiddleNode(list.head.next.next);
list.readAnswer();