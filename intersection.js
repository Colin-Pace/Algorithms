/* Check if two linked lists intersect and return the intersection

Big O
1. Time: O(c + p)
2. Space: O(1)     */

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
    if (!data && data !== 0) {
      return null;
    }

    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
  
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  intersection(listOne, listTwo) {
    if (!listOne || !listTwo) {
      return null;
    }

    let itrOne = listOne.head;
    let itrTwo = listTwo.head;

    let lengthOne = 0;
    let lengthTwo = 0;

    // Find the lengths of the list and the last node of each list
    while (itrOne || itrTwo) {
      if (itrOne && itrTwo) {
        lengthOne++;
        lengthTwo++;
        itrOne = itrOne.next;
        itrTwo = itrTwo.next;
 
      } else if (itrOne && !itrTwo) {
        lengthOne++;
        itrOne = itrOne.next;
 
      } else if (itrTwo && !itrOne) {
        lengthTwo++;
        itrTwo = itrTwo.next;
      }
    }

    // If the last node is different, the lists do not intersect
    if (itrOne !== itrTwo) {
      return false;
   
    } else {
      itrOne = listOne.head;
      itrTwo = listTwo.head;

      // Increment the iterator of the longer list by the difference of the lengths
      if (lengthOne > lengthTwo) {
        let difference = lengthOne - lengthTwo;
        while (difference !== 0) {
          itrOne = itrOne.next;
          difference--;
        }
    
      } else if (lengthTwo > lengthOne) {
        let difference = lengthTwo - lengthOne;
        while (difference !== 0) {
          itrTwo = itrTwo.next;
          difference--;
        }
      }

      // Return the intersecting node
      while (itrOne !== itrTwo) {
        itrOne = itrOne.next;
        itrTwo = itrTwo.next;
      }

      return itrOne;
    }
  }
}


const listOne = new LinkedList;
const listTwo = new LinkedList;
const listThree = new LinkedList;

const integersOne = [3, 1, 5, 9];
const integersTwo = [4, 6];
const integersThree = [7, 2, 1];

integersOne.forEach(integer => listOne.add(integer));
integersTwo.forEach(integer => listTwo.add(integer));
integersThree.forEach(integer => listThree.add(integer));

listOne.tail.next = listThree.head;
listTwo.tail.next = listThree.head;

console.log(listOne.intersection(listOne, listTwo));