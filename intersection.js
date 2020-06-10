// Find the intersecting node between two linked lists, if there is one

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

  intersection(list, list_) {
    let runner = list.head;
    let runner_ = list_.head;
    let listLength = 1;
    let list_Length = 1;
    while (runner.next) {
      runner = runner.next;
      listLength++
    }
    while (runner_.next) {
      runner_ = runner_.next;
      list_Length++;
    }
    if (runner !== runner_) return false;
    else {
      let difference = Math.abs(listLength - list_Length);
      if (listLength > list_Length) {
        runner = list.head;
        runner_ = list_.head;
        while (difference > 0) {
          runner = runner.next;
          difference--;
        }
      } else {
        runner = list.head;
        runner_ = list_.head;
        while (difference > 0) {
          runner_ = runner_.next;
          difference--;
        }
      }
      while (runner !== runner_) {
        runner = runner.next;
        runner_ = runner_.next;
      }
      return runner;
    }
  }
}

const listOne = new LinkedList;
const listTwo = new LinkedList;
const integersOne = [3, 1, 5, 9, 7, 2, 1];
integersOne.forEach(integer => listOne.add(integer));
listTwo.add(4);
listTwo.add(6);
listTwo.head.next.next = listOne.head.next.next.next.next;
console.log(listOne.intersection(listOne, listTwo));
