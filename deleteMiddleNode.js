// Delete the middle node of a singly linked list,
//    given access only to that node

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

  deleteMiddleNode(node) {
    node.data = node.next.data;
    node.next = node.next.next;
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
console.log(letters.collectNodalData());

let middleNode = letters.head.next.next;
letters.deleteMiddleNode(middleNode);
console.log(letters.collectNodalData());
