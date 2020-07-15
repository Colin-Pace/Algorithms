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

  intersection(list, list_) {
    let tail = list.head;
    let tail_ = list_.head;
    let listLength = 1;
    let list_Length = 1;
    while (tail.next) {
      tail = tail.next;
      listLength++
    }
    while (tail_.next) {
      tail_ = tail_.next;
      list_Length++;
    }
    if (tail !== tail_) return false;
    else {
      let difference = Math.abs(listLength - list_Length);
      if (listLength > list_Length) {
        tail = list.head;
        tail_ = list_.head;
        while (difference > 0) {
          tail = tail.next;
          difference--;
        }
      } else {
        tail = list.head;
        tail_ = list_.head;
        while (difference > 0) {
          tail_ = tail_.next;
          difference--;
        }
      }
      while (tail !== tail_) {
        tail = tail.next;
        tail_ = tail_.next;
      }
      return tail;
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
