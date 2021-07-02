/* Remove duplicates from a linked list

Big O
1. Time: O(n)
2. Space: O(n)  */


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
    if (!data) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.itr = this.head;
    } else {
      this.itr.next = new Node(data);
      this.itr = this.itr.next;
    }
  }

  removeDuplicates() {
    if (!this.head) {
      return null;
    }

    let fast = this.head.next;
    let slow = this.head;
    const seen = {};
    seen[slow.data] = true;

    while (fast !== undefined) {
      if (!(fast.data in seen)) {
        seen[fast.data] = true;
        fast = fast.next;
        slow = slow.next;
      } else {
        slow.next = fast.next;
        fast = fast.next;
      }
    }
  }

  test() {
    if (!this.head) {
      return null;
    }

    const seen = {};
    let itr = this.head;

    while (itr !== undefined) {
      if (itr.data in seen) {
        return false;
      } else {
        seen[itr.data] = true;
        itr = itr.next;
      }
    }

    return true;
  }
}


let list = new LinkedList;
const dataOne = [1, 2, 3, 4, 2];
dataOne.forEach(integer => list.add(integer));
list.removeDuplicates();
console.log(list.test());

list = new LinkedList;
const dataTwo = [1, 1, 2, 3, 4];
dataTwo.forEach(integer => list.add(integer));
list.removeDuplicates();
console.log(list.test());

list = new LinkedList;
const dataThree = [1, 1, 2, 2, 2, 3, 4];
dataThree.forEach(integer => list.add(integer));
list.removeDuplicates();
console.log(list.test());

list = new LinkedList;
const dataFour = [1, 2, 1, 3, 4];
dataFour.forEach(integer => list.add(integer));
list.removeDuplicates();
console.log(list.test());

list = new LinkedList;
const dataFive = [1, 1, 1, 1, 1];
dataFive.forEach(integer => list.add(integer));
list.removeDuplicates();
console.log(list.test());