// Design a data structure that supports the following two operations
// 1. add(data), that adds an integer from an array
// 2. findMedian(), that returns the median element


// With a linked list and selection sort
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
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  findMedian() {
    let count = 0;
    let tail = this.head;

    while (tail.next) {
      count++;
      tail = tail.next;
    }
    count++;

    let median
    if (count % 2 !== 0) {
      median = Math.floor((count / 2) + 1);
      tail = this.head;
      while (median !== 1) {
        tail = tail.next;
        median--;
      }
      const result = tail.data;
      return result;

    } else {
      median = Math.floor(count / 2);
      tail = this.head;
      while (median !== 1) {
        tail = tail.next;
        median--;
      }
      const result = (tail.data + tail.next.data) / 2;
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


// _________________
// With array and merge sort

function findMedian(array) {
  const sort = function(array) {
    if (array.length < 2) return array;
    else {
      const mid = Math.floor(array.length / 2);
      const left = sort(array.slice(0, mid));
      const right = sort(array.slice(mid));

      const merge = function(left, right) {
        const result = [];
        while (left.length && right.length) {
          result.push(left[0] < right[0] ? left.shift() : right.shift())
        }
        return result.concat(left.length ? left : right);
      }

      return merge(left, right);
    }
  }

  const sorted = sort(array);
  const mid = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    const result = (sorted[mid] + sorted[mid - 1]) / 2;
    return result;
  } else return sorted[mid];
}

// const ints = [5, 10, 25, 45, 27, 30, 0];
// const ints_ = [5, 10, 25, 45, 29, 30];
// console.log(findMedian(ints));
// console.log(findMedian(ints_));
