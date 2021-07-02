/* Add integers

1. Prompt: 
  Given two non-empty linked lists representing two non-negative integers, 
  add the two numbers and return it as a linked list. The digits are stored 
  in reverse order and each of their nodes contain a single digit. Assume the 
  two numbers do not contain any leading zero, except the number 0 itself.

2. Example:
    1. Lists: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    2. Answer: 7 -> 0 -> 8
    3. Explanation: 342 + 465 = 807 

3. Big O
    1. Time = O(n)
        where n is equal to the iterative time for the longest list between the given lists,
        or one iterative unit longer than the time for the longest list because of a remainder;
        since the relation between the answer and the two lists is known,
        the time for the given lists can be dropped from the equation as non dominant terms
    2. Space = O(n)
        where n is equal to the longest of the given lists
        or the worst case scenario is if the last integers of the lists have a remainder
        and n is one longer than the longest of the given lists  */


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

  addVertex(data) {
    if (!data && data !== 0) {
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

  addIntegers(listOne, listTwo) {
    if (!listOne || !listTwo) {
      return null;
    }
    
    let itrOne = listOne.head;
    let itrTwo = listTwo.head;
    let remainder = false;
    const answer = new LinkedList;

    while (itrOne || itrTwo) {
      let integer;
      
      if (itrOne === undefined && itrTwo !== undefined) {
        this.completeList(itrTwo, answer, remainder);
        remainder = false;
        break;
      } else if (itrTwo === undefined && itrOne !== undefined) {
        this.completeList(itrOne, answer, remainder);
        remainder = false;
        break;
      }

      if (remainder === false) {
        if (itrOne.data + itrTwo.data < 10) {
          integer = itrOne.data + itrTwo.data;
          answer.addVertex(integer);
        } else {
          integer = (itrOne.data + itrTwo.data) % 10;
          answer.addVertex(integer);
          remainder = true;
        }
      
      } else {
        if (itrOne.data + itrTwo.data + 1 < 10) {
          integer = itrOne.data + itrTwo.data + 1;
          answer.addVertex(integer);
          remainder = false;
        } else {
          integer = (itrOne.data + itrTwo.data + 1) % 10;
          answer.addVertex(integer);
        }
      }

      itrOne = itrOne.next;
      itrTwo = itrTwo.next;
    }

    if (remainder === true) {
      answer.addVertex(1);
    }

    answer.readAnswer();
  }

  completeList(itr, answer, remainder) {
    if (!itr || !answer) {
      return null;
    }

    while (itr) {
      if (remainder === true) {
        answer.addVertex(itr.data + 1);
        itr = itr.next;
        remainder = false;
      } else {
        answer.addVertex(itr.data);
        itr = itr.next;
      }
    }
  }

  readAnswer() {
    if (!this.head) {
      return null;
    }

    let itr = this.head;
    while (itr) {
      console.log(itr.data);
      itr = itr.next;
    }
  }
}


// 1.
let listOne = new LinkedList;
let listTwo = new LinkedList;

let dataOne = [2, 4, 3];
let dataTwo = [5, 6, 4];

dataOne.forEach(integer => listOne.addVertex(integer));
dataTwo.forEach(integer => listTwo.addVertex(integer));

listOne.addIntegers(listOne, listTwo);
console.log("");

// answer: 7 0 8


// 2.
listOne = new LinkedList;
listTwo = new LinkedList;

dataOne = [2];
dataTwo = [5, 6, 4];

dataOne.forEach(integer => listOne.addVertex(integer));
dataTwo.forEach(integer => listTwo.addVertex(integer));

listOne.addIntegers(listOne, listTwo);
console.log("");

// answer: 7 6 4


// 3.
listOne = new LinkedList;
listTwo = new LinkedList;

dataOne = [8, 8, 8, 1];
dataTwo = [5, 4, 2];

dataOne.forEach(integer => listOne.addVertex(integer));
dataTwo.forEach(integer => listTwo.addVertex(integer));

listOne.addIntegers(listOne, listTwo);
console.log("");

// answer: 3 3 1 2


// 4.
listOne = new LinkedList;
listTwo = new LinkedList;

dataOne = [0, 6, 0, 1];
dataTwo = [5, 4, 2];

dataOne.forEach(integer => listOne.addVertex(integer));
dataTwo.forEach(integer => listTwo.addVertex(integer));

listOne.addIntegers(listOne, listTwo);
console.log("");

// answer: 5 0 3 1


// 5.
listOne = new LinkedList;
listTwo = new LinkedList;

dataOne = [0, 6, 7];
dataTwo = [5, 4, 8];

dataOne.forEach(integer => listOne.addVertex(integer));
dataTwo.forEach(integer => listTwo.addVertex(integer));

listOne.addIntegers(listOne, listTwo);

// answer: 5 0 6 1