/* Quicksort iterative implementation

Big O
1. Time: O(n logn)
2. Space: O(n logn)   


https://www.techiedelight.com/iterative-implementation-of-quicksort/    */


class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = undefined;
  }

  push(data) {
    if (this.head === undefined) {
      this.head = new Node(data);

    } else {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if (this.head === undefined) {
      return null;
    
    } else if (this.head.next === undefined) {
      const node = this.head;
      this.head = undefined;
      return node.data;
    
    } else {
      const node = this.head;
      this.head = this.head.next;
      return node.data;
    }
  }
}


class Quicksort {
  swap(list, i, j) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }

  partition(list, start, end) {
    const pivot = list[end];
    let pIndex = start;
    
    for (let i = start; i < end; i++) {
      if (list[i] <= pivot) {
        this.swap(list, i, pIndex);
        pIndex++;
      }
    }

    this.swap(list, pIndex, end);
    return pIndex;
  }

  sort(list) {
    const stack = new Stack;
    let start = 0;
    let end = list.length - 1;

    stack.push([start, end]);
    while (stack.head) {
      const pair = stack.pop();
      start = pair[0];
      end = pair[1];
      const pivot = this.partition(list, start, end);
    
      if (pivot - 1 > start) {
        stack.push([start, pivot - 1]);
      }
     
      if (pivot + 1 < end) {
        stack.push([pivot + 1, end]);
      }
    }

    return list;
  }
}


const quicksort = new Quicksort;
const list = [5, 2, 1, 4, 3];
console.log(quicksort.sort(list));