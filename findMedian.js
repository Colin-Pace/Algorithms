// Design a data structure that supports the following two operations
// 1. add(data), that adds an integer from an array
// 2. findMedian(), that returns the median element

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
    if (data === null) return null;
    else if (!this.head) this.head = new Node(data);
    else {
      if (data < this.head.data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
      } else {
        let runner = this.head;
        while (runner.next && runner.next.data < data) runner = runner.next;
        if (!runner.next) runner.next = new Node(data);
        else {
          const node = new Node(data);
          node.next = runner.next;
          runner.next = node;
        }
      }
    }
  }

  findMedian() {
    let count = 0;
    let runner = this.head;

    while (runner.next) {
      count++;
      runner = runner.next;
    }
    count++;

    let median
    if (count % 2 !== 0) {
      median = Math.floor((count / 2) + 1);
      runner = this.head;
      while (median !== 1) {
        runner = runner.next;
        median--;
      }
      const result = runner.data;
      return result;

    } else {
      median = Math.floor(count / 2);
      runner = this.head;
      while (median !== 1) {
        runner = runner.next;
        median--;
      }
      const result = (runner.data + runner.next.data) / 2;
      return result;
    }
  }
}

const integers = new LinkedList;
const integers_ = new LinkedList;
const ints = [5, 10, 25, 45, 27, 30, 0];
const ints_ = [5, 10, 25, 45, 29, 30];
ints.forEach(int => integers.add(int));
ints_.forEach(int_ => integers_.add(int_));
console.log(integers.findMedian());
console.log(integers_.findMedian());
