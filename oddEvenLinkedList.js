// Given a singly linked list, group all odd nodes together followed by the even nodes. Odd and even is determined by order in the list and not by the values in the nodes. 

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

  oddEven() {
    if (!this.head) return null;
    else {
      let fast = this.head.next;
      let link = this.head.next;
      let slow = this.head;
      while (fast.next) {
        slow.next = fast.next;
        slow = fast;
        fast = fast.next;
      }
      fast.next = link;
      slow.next = null;
    }
  }

  collectNodalData() {
    const result = [];
    let runner = this.head;
    while (runner.next) {
      result.push(runner.data);
      runner = runner.next;
    }
    result.push(runner.data);
    return result;
  }
}

const array = [1, 2, 3, 4, 5];
const array_ = [2, 1, 3, 5, 6, 4, 7];
const integers = new LinkedList;
const integers_ = new LinkedList;
array.forEach(integer => integers.add(integer));
array_.forEach(integer => integers_.add(integer));
integers.oddEven();
integers_.oddEven();
console.log(integers.collectNodalData());
console.log(integers_.collectNodalData());
