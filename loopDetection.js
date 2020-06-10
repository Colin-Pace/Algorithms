// Given a circular linked list, find the node of the beginning of the loop

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

  loopDetection(list) {
    let fast = list.head.next.next;
    let slow = list.head;

    while (fast !== slow) {
      fast = fast.next.next;
      slow = slow.next;
    }

    slow = list.head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }

    return fast;
  }
}

const circle = new LinkedList;
circle.add('A');
circle.add('B');
circle.add('C');
circle.add('D');
circle.add('E');
circle.head.next.next.next.next = circle.head.next.next;
console.log(circle.loopDetection(circle));
