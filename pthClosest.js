/*
Given three things,
  1) a two dimensional array,
      in which each item is,
      a pair of coordinate points, x and y,
  2) a target point, x and y,
  3) and a letter, P,
find the Pth closest point,
  in the array,
  to the target point
*/
// Linked list implementation
class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head, this.head);
    this.tail = this.head;
  }
  insertLast(item) {
    if (item < this.head.data) {
      this.insertFirst(item);
    } else if (!this.head.next) {
      this.head.next = new _Node(item, null, this.head);
      this.tail = this.head.next
    } else {
      let fast = this.head;
      let slow = this.head;
      while (fast.next && fast.value < item) {
        slow = fast;
        fast = fast.next;
      }
      if (fast.value < item) {
        fast.next = new _Node(item, null, fast);
      } else {
        slow.next = new _Node(item, fast, slow);
      }
    }
  }
}
let distances = new LinkedList;
// Pth closest function
let inputOne = [ [1, 4], [-5, -2], [65, 0], [10, -10],
                 [-43, 100], [35, 35], [83, 38],
                 [0, 100], [-33, 0], [-4, 27]];
let inputTwo = [10, 10];
let inputThree = 5;
function pthClosest(array, point, p) {
  let object = {};
  for (let a = 0; a < array.length; a++) {
    let distance = Math.sqrt(Math.pow((point[0] - array[a][0]), 2) + Math.pow((point[1] - array[a][1]), 2));
    object[a] = distance;
  }
  let count = 0;
  for (let a in object) {
    if (count === 0) {
      distances.insertFirst(object[a]);
      count++;
    } else {
      distances.insertLast(object[a]);
    }
  }
  let runner = distances.head;
  while (p > 1) {
    runner = runner.next;
    p--;
  }
  for (let a = 0; a < array.length; a++) {
    let distanceComparison = Math.sqrt(Math.pow((point[0] - array[a][0]), 2) + Math.pow((point[1] - array[a][1]), 2));
    if (distanceComparison === runner.value) {
      return array[a];
    }
  }
}
console.log(pthClosest(inputOne, inputTwo, inputThree));
