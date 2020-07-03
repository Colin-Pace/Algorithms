/*
Given three things,
  1) a two dimensional array,
      in which each item is,
      a pair of coordinate points, x and y,
  2) a target point, x and y,
  3) and a letter, P,
find the Pth closest point,
  in the array,
  to the target point */


class Node {
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

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.runner = this.head;
    } else {
      let node = new Node(data);
      this.runner.next = node;
      this.runner = this.runner.next;
    }
  }
}

let distances = new LinkedList;
let inputOne = [ [1, 4], [-5, -2], [65, 0], [10, -10], [-43, 100], [35, 35], [83, 38], [0, 100], [-33, 0], [-4, 27]];
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
      distances.add(object[a]);
      count++;
    } else {
      distances.add(object[a]);
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
