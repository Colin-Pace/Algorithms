class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.itr = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.itr = this.head;
    } else {
      this.itr.next = new Node(data);
      this.itr = this.itr.next;
    }
  }

  removeFirst() {
    if (!this.head.next) {
      return this.head.data;
    } else {
      const node = this.head;
      this.head = this.head.next;
      node.next = null;
      return node.data;
    }
  }
}

class Mergesort {
  mergesort(integers) {
    if (integers.length < 2) {
      return integers;
    } else {
      const mid = Math.floor(integers.length / 2);
      
      let left = [];
      for (let i = 0; i < mid; i++) {
        left.push(integers[i]);
      }
      left = this.mergesort(left);
      
      let right = [];
      for (let i = mid; i < integers.length; i++) {
        right.push(integers[i]);
      }
      right = this.mergesort(right);
  
      return this.merge(left, right);
    }
  }

  merge(left, right) {
    const leftList = new LinkedList;
    const rightList = new LinkedList;
    let leftCount = left.length;
    let rightCount = right.length;
  
    for (let i = 0; i < left.length; i++) {
      leftList.add(left[i]);
    }
  
    for (let i = 0; i < right.length; i++) {
      rightList.add(right[i]);
    }
  
    const result = [];
    while (leftCount > 0 && rightCount > 0) {
      if (leftList.head.data < rightList.head.data) {
        result.push(leftList.removeFirst());
        leftCount--;
      } else {
        result.push(rightList.removeFirst());
        rightCount--;
      }
    }
    if (leftCount > 0) {
      while (leftCount > 0) {
        result.push(leftList.removeFirst());
        leftCount--;
      }
      return result; 
    } else {
      while (rightCount > 0) {
        result.push(rightList.removeFirst());
        rightCount--;
      }
      return result;
    }
  }

  makeIntegers() {
    const result = [];
    for (let i = 0; i < 20; i++) {
      result.push(Math.floor(Math.random() * 101) + 1);
    }
    return result;
  }

  test(result, integers) {
    if (result.length !== integers.length) {
      return false;
    } else {
      integers.sort(function(a, b) {return a - b});
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== integers[i]) {
          return false;
        }
      }
      return true;
    }
  }
}

let result = true;
const mergesort = new Mergesort;
const integers = mergesort.makeIntegers();
const mergeSorted = mergesort.mergesort(integers);
for (let i = 0; i < 20; i++) {
  if (mergesort.test(mergeSorted, integers) === false) {
    result = false;
  }
}
console.log(result);