// Merge m sorted linked lists

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

  merge(list, array) {
    const firstList = array.shift();
    let fast = firstList.head;
    let slow = firstList.head;

    while (array.length) {
      fast = firstList.head;
      slow = firstList.head;
      let currentList = array.shift();
      let current = currentList.head;
      let last = false;

      while (current) {
        if (current.data < fast.data) {
          const node = new Node(current.data);
          node.next = fast;
          if (fast === slow) firstList.head = node;
          if (slow === fast) current = current.next;
          else {
            while (slow.next !== fast) slow = slow.next;
            slow.next = node;
            current = current.next;
          }

        } else if (current.data === fast.data) {
          if (last === true) break;
          const node = new Node(current.data);
          node.next = fast.next;
          fast.next = node;
          current = current.next;
        } else {
          while (fast.data < current.data) {
            if (fast.next) fast = fast.next;
            else {
              fast.next = new Node(current.data);
              last = true;
            }
          }

          while (slow.next !== fast) slow = slow.next;

        }
      }
    }

    list = firstList;
    return list;
  }

  collectNodalData(list) {
    const result = [];
    let runner = list.head;
    while (runner) {
      result.push(runner.data);
      runner = runner.next;
    }
    return result;
  }
}

const listA = new LinkedList;
const listB = new LinkedList;
const listC = new LinkedList;

const integersA = [1, 4, 5];
const integersB = [1, 3, 4];
const integersC = [2, 6];

// Another set of lists for input
// const integersA = [2, 3, 10, 12];
// const integersB = [0, 3, 4];
// const integersC = [1, 6];

integersA.forEach(int => listA.add(int));
integersB.forEach(int => listB.add(int));
integersC.forEach(int => listC.add(int));

const listsToMerge = [listA, listB, listC];
const resultList = new LinkedList;

const result = resultList.merge(resultList, listsToMerge);
console.log(resultList.collectNodalData(result));
