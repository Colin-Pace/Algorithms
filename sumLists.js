// If two numbers are stored in reversed order in two linked lists, return a linked list of their sum

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
    let node = this.head;
    if (!node) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  sumLists(list, list_) {
    let firstList = [];
    let secondList = [];
    let firstRunner = list.head;
    let secondRunner = list_.head;
    while (firstRunner.next) {
      firstList.push(firstRunner.data);
      firstRunner = firstRunner.next;
    }

    firstList.push(firstRunner.data);
    while (secondRunner.next) {
      secondList.push(secondRunner.data);
      secondRunner = secondRunner.next;
    }

    secondList.push(secondRunner.data);
    let firstReversed = firstList.reverse();
    let secondReversed = secondList.reverse();
    let firstStr = "";
    let secondStr = "";

    for (let i = 0; i < firstReversed.length; i++) {
      firstStr += firstReversed[i];
    }

    for (let i = 0; i < secondReversed.length; i++) {
      secondStr += secondReversed[i];
    }

    let firstNumber = parseInt(firstStr);
    let secondNumber = parseInt(secondStr);
    let reversedResult = firstNumber + secondNumber;
    let resultArray = Array.from(String(reversedResult), Number);
    resultArray.reverse();

    const resultList = new LinkedList;
    resultArray.forEach(integer => resultList.add(integer));
    return resultList;
  }
}

const firstNumber = new LinkedList;
const integersOne = [7, 1, 6];
const secondNumber = new LinkedList;
const integersTwo = [5, 9, 2];

integersOne.forEach(integer => firstNumber.add(integer));
integersTwo.forEach(integer => secondNumber.add(integer));
let sumList = firstNumber.sumLists(firstNumber, secondNumber);

console.log(sumList.head);
