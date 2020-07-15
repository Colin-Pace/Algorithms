// Write a function to delete a node that is not the tail, given access only to that node.

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

  deleteNode(data) {
    if (!data || !this.head) return null;
    let tail = this.head;
    while (tail.data !== data) tail = tail.next;
    tail.data = tail.next.data;
    tail.next = tail.next.next;
  }

  collectNodalData() {
    if (!this.head) return null;
    const result = [];
    let tail = this.head;
    while (tail) {
      result.push(tail.data);
      tail = tail.next;
    }
    return result;
  }
}

const integers = new LinkedList;
const inputOne = [4, 5, 1, 9];
inputOne.forEach(integer => integers.add(integer));
integers.deleteNode(5);
//integers.deleteNode(1);
console.log(integers.collectNodalData());
