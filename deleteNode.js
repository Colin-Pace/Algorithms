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
  }

  add(data) {
    if (this.head === null) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  deleteNode(data) {
    if (!data || !this.head) return null;
    let runner = this.head;
    while (runner.data !== data) runner = runner.next;
    runner.data = runner.next.data;
    runner.next = runner.next.next;
  }

  collectNodalData() {
    if (!this.head) return null;
    const result = [];
    let runner = this.head;
    while (runner) {
      result.push(runner.data);
      runner = runner.next;
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
