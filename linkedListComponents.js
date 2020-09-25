/* LeetCode: linked list components

We are given head, the head node of a linked list containing unique integer values. We are also given the list G, a subset of the values in the linked list. Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list. */

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

  components(subset) {
    if (!this.head || !this.head.next) return null;
    let node = this.head;
    let count = 0;
    while (node.next) {
      if (subset.includes(node.data) &&
          subset.includes(node.next.data)) count++;
      node = node.next
    }
    return count;
  }
}

const listOne = new LinkedList;
const listTwo = new LinkedList;

const inputOne = [0, 1, 2, 3];
const subsetOne = [0, 1, 3];
inputOne.forEach(input => listOne.add(input));
const answerOne = listOne.components(subsetOne);

const inputTwo = [0, 1, 2, 3, 4];
const subsetTwo = [0, 3, 1, 4];
inputTwo.forEach(input => listTwo.add(input));
const answerTwo = listTwo.components(subsetTwo);

let answer = true;
if (answerOne !== 1 || answerTwo !== 2) answer = false;
console.log("Tests pass: " + answer);
