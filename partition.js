// Partition a linked list around a value x; if x is in the list, it must be on the larger side, but other than the partition, order of the elements in each side does not matter

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
    let node = this.head;
    if (!node) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  partition(value) {
    let lesser = [];
    let greater = [];
    let runner = this.head;
    while (runner) {
      if (value <= runner.data) greater.push(runner.data);
      else lesser.push(runner.data);
      runner = runner.next;
    }
    const partitionedLinkedList = new LinkedList;
    lesser.forEach(integer => partitionedLinkedList.add(integer));
    greater.forEach(integer => partitionedLinkedList.add(integer));
    return partitionedLinkedList;
  }
}

const numbers = new LinkedList;
const data = [3, 5, 8, 5, 10, 2, 1];
data.forEach(datum => numbers.add(datum));
let result = numbers.partition(5);
console.log(result.head);
