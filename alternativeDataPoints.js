// Given a singly linked list, return an array that includes the data point of every other node in the list, starting from the last and moving toward the first. Iterate the linked list with recursion.

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  alternativeDataPoints() {
    if (!this.head) return null;
    else if (this.head === this.tail) return this.head.data;
    else {
      let result = [];
      const len = this.findLength_();
      let isEven = (len % 2) === 0;
      let collect = true;

      const collectData = function(node) {
        if (!node.next) {
          if (collect) result.push(node.data);
          return;
        } else {
          if (collect) {
            collect = false;
            result.push(node.data);
            collectData(node.next);
          } else {
            collect = true;
            collectData(node.next);
          }
        }
      }

      if (isEven) collectData(this.head.next);
      else collectData(this.head);

      const temp = [];
      const len_ = result.length;
      for (let i = len_ - 1; i >= 0; i--) temp.push(result[i]);
      result = temp;

      return result;
    }
  }

  findLength_() {
    let result;
    const searchLength = function(node, count) {
      if (!node.next) {
        count++;
        return count;
      } else {
        count++;
        return searchLength(node.next, count);
      }
    }
    result = searchLength(this.head, this.count);
    return result;
  }
}

const integers = new LinkedList;

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(7);
const h = new Node(8);
const i = new Node(9);
const j = new Node(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;
i.next = j;

integers.head = a;

console.log(integers.alternativeDataPoints());