// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

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
    if (!this.head) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  merge(integers, integers_) {
    if (integers.length === 0 || integers_.length === 0) return null;

    let fast = integers.head.next;
    let slow = integers.head;
    let runner = integers_.head;
    let last = false;

    while (runner) {

      if (runner.data < slow.data && slow === this.head) {
        const node = new Node(runner.data);
        node.next = slow;
        integers.head = node;
        slow = this.head;
        runner = runner.next;

      } else if (runner.data < fast.data) {
        const node = new Node(runner.data);
        if (runner.data > slow.data) {
          while (slow.next.data < runner.data) slow = slow.next;
          slow.next = node;
          node.next = fast;
          runner = runner.next;
        } else {
          while (slow.next !== fast) slow = slow.next;
          slow.next = node;
          node.next = fast;
          runner = runner.next;
        }

      } else if (runner.data === fast.data) {
        const node = new Node(runner.data);
        while (slow.next !== fast) slow = slow.next;
        slow.next = node;
        node.next = fast;
        runner = runner.next;

      } else {
        while (fast.data < runner.data && fast.next) fast = fast.next;
        if (!fast.next && runner.data > fast.data) {
          fast.next = new Node(runner.data);
          if (!runner.next) break;
          else runner = runner.next;
        }
      }
    }
  }

  collectNodalData(integers) {
    const result = [];
    let runner = integers.head;
    while (runner) {
      result.push(runner.data);
      runner = runner.next;
    }
    console.log(result);
  }
}

const input = [1, 2, 4, 10];
const input_ = [-3, -2, -1, 0, 1, 3, 4, 20, 30, 40];

const integers = new LinkedList;
const integers_ = new LinkedList;

input.forEach(integer => integers.add(integer));
input_.forEach(integer => integers_.add(integer));

integers.merge(integers, integers_);
integers.collectNodalData(integers);
