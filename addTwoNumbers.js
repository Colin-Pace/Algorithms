/*
Given two non-empty linked lists representing two non-negative integers, add the two numbers and return it as a linked list.

The digits are stored in reverse order and each of their nodes contain a single digit.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (!this.head) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  collectNumber() {
    let number = [];
    let runner = this.head;
    while (runner.next) {
      number.push(runner.value);
      runner = runner.next;
    }
    number.push(runner.value);
    return number;
  }

  addNumbers(first, second) {
    let result = [];
    let remainder = false;

    for (let i = 0; i < first.length; i++) {
      if (first[i] + second[i] < 10 && remainder === false) {
        result.push(first[i] + second[i]);
      } else if (first[i] + second[i] < 10 && remainder === true) {
        result.push(first[i] + second[i] + remainder);
        remainder = false;
      } else if (first[i] + second[i] >= 10 && remainder === false) {
        let onesDigit = (first[i] + second[i]) % 10;
        remainder = true;
        result.push(onesDigit);
      } else if (first[i] + second[i] >= 10 && remainder === true) {
        let onesDigit = (first[i] + second[i] + remainder) % 10;
        remainder = true;
        result.push(onesDigit);
      }
    }
    return result;
  }

  createNewLinkedList(number) {
    for (let i = 0; i < number.length; i++) {
      resultList.insert(number[i]);
    }
  }
}


let first = new LinkedList;
first.insert(2);
first.insert(4);
first.insert(3);

let second = new LinkedList;
second.insert(5);
second.insert(6);
second.insert(4);


function addTwoNumbers() {
  let firstArray = first.collectNumber();
  let secondArray = second.collectNumber();
  let sum = resultList.addNumbers(firstArray, secondArray);
  resultList.createNewLinkedList(sum);
}

let resultList = new LinkedList;
addTwoNumbers();
console.log(resultList.collectNumber());
