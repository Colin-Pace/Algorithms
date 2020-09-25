/* LeetCode: Next greater node

We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

Return an array of integers answer, where answer[i] = next_larger(node_{i+1}). */

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

  nextGreaterNode() {
    const container = [];
    let fast = this.head;
    let slow = this.head;
    let count = 0;
    let current = 0;
    container.push([slow.data, null, false]);

    while (fast.next) {
      fast = fast.next;
      if (!fast.next) container.push([fast.data, 0, false]);
      else container.push([fast.data, null, false]);
      current = fast.data;
      while (slow !== fast) {
        if (current > slow.data && container[count][2] === false) {
          container[count][1] = current;
          container[count][2] = true;
        } else if (current > slow.data && container[count][2] === false) {
          container[count][1] = 0;
          container[count][2] = true;
        }
        slow = slow.next;
        count++;
      }
      slow = this.head;
      count = 0;
    }

    const result = [];
    for (let i = 0; i < container.length; i++) {
      if (container[i][2] === false) result.push(0);
      else result.push(container[i][1]);
    }

    return result
  }

  test(answer, expectation) {
    const l = answer.length;
    for (let i = 0; i < l; i++) {
      if (answer[i] !== expectation[i]) return false;
    }
    return true;
  }
}

const listOne = new LinkedList;
const listTwo = new LinkedList;
const listThree = new LinkedList;

const answerContainer = [];
const inputOne = [2, 1, 5];
inputOne.forEach(input => listOne.add(input));
const listOneExpectedOutput = [5, 5, 0];
const listOneAnswer = listOne.nextGreaterNode();
answerContainer.push(listOne.test(listOneAnswer, listOneExpectedOutput));

const inputTwo = [2, 7, 4, 3, 5];
inputTwo.forEach(input => listTwo.add(input));
const listTwoExpectedOutput = [7, 0, 5, 5, 0];
const listTwoAnswer = listTwo.nextGreaterNode();
answerContainer.push(listTwo.test(listTwoAnswer, listTwoExpectedOutput));

const inputThree = [1, 7, 5, 1, 9, 2, 5, 1];
inputThree.forEach(input => listThree.add(input));
const listThreeExpectedOutput = [7, 9, 9, 9, 0, 5, 0, 0];
const listThreeAnswer = listThree.nextGreaterNode();
answerContainer.push(listThree.test(listThreeAnswer, listThreeExpectedOutput));

let answer = true;
const l = answerContainer.length;
for (let i = 0; i < l; i++) if (answerContainer[i] !== true) answer = false;
console.log("Tests pass: " + answer);
