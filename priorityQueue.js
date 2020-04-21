class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    let node = new Node(data);
    if (this.head === null || this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      throw "No items in queue."
    } else {
      let runner = this.head;
      let minimum = this.head;

      while (runner.next !== undefined) {
        runner = runner.next;
        if (minimum.data > runner.data) {
          minimum = runner;
        }
      }

      if (minimum === this.head) {
        this.head = this.head.next;
        minimum.next = null;
        return minimum;
      } else if (minimum.next === undefined) {
        runner = this.head
        while (runner.next !== minimum) {
          runner = runner.next;
        }
        this.tail = runner;
        runner.next = undefined;
        return minimum;
      } else {
        runner = this.head;
        while (runner.next !== minimum) {
          runner = runner.next;
        }
        runner.next = minimum.next;
        minimum.next = null;
        return minimum;
      }
    }
  }
}

let numerical = new PriorityQueue;
numerical.enqueue(1);
numerical.enqueue(2);
numerical.enqueue(3);
numerical.enqueue(4);
numerical.enqueue(5);
numerical.enqueue(0);
numerical.dequeue();
numerical.dequeue();
console.log(numerical.head.data);
