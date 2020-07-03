// Delete the middle node of a singly linked list,
//    given access only to that node

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.runner = this.head;
    } else {
      let node = new Node(data);
      this.runner.next = node;
      this.runner = this.runner.next;
    }
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
letters.add("A");
letters.add("B");
letters.add("C");
letters.add("D");
letters.add("E");
console.log(letters.collectNodalData());

let middleNode = letters.head.next.next;
letters.deleteMiddleNode(middleNode);
console.log(letters.collectNodalData());
