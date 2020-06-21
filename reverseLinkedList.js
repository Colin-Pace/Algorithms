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

  reverse() {
    if (!this.head) return null;
    else {
      let values = [], end, temp;
      let runner = this.head;

      while (runner.next) {
        values.push(runner.data);
        runner = runner.next;
      }

      values.push(runner.data);
      runner = this.head;
      end = values.length - 1;

      while (end > -1) {
        runner.data = values[end];
        runner = runner.next;
        end--;
      }

      runner = this.head;
    }
  }

  recursive() {
    if (!this.head) return null;
    const values = [];
    let node = this.head;
    const traversal = function(node) {
      if (!node.next) {
        values.push(node.data);
        return;
      } else {
        values.push(node.data);
        traversal(node.next);
      }
    }
    traversal(node);

    node = this.head;
    let end = values.length - 1;
    const reverse = function(node) {
      if (!node.next) {
        node.data = values[end];
        return;
      } else {
        node.data = values[end];
        end--;
        reverse(node.next);
      }
    }
    reverse(node);
  }

  collectNodalData() {
    if (!this.head) return null;
    else {
      const result = [];
      let runner = this.head;
      while (runner) {
        result.push(runner.data);
        runner = runner.next;
      }
      return result;
    }
  }
}

const integers = new LinkedList;
const integers_ = new LinkedList;
const inputOne = [1, 2, 3, 4, 5];
const inputTwo = [1, 2, 3, 4, 5, 6];

inputOne.forEach(integer => integers.add(integer));
inputTwo.forEach(integer => integers_.add(integer));

integers.reverse();
integers_.reverse();

// integers.recursive();
// integers_.recursive();

console.log(integers.collectNodalData());
console.log(integers_.collectNodalData());
