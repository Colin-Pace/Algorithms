/* List of depths

Prompt: Given a binary tree, create a two dimensional array. 
        Each sub array is to contain the nodal data at each depth
Big O
1. Time: O(n)
2. Space: O(n)    */


class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.itr = undefined;
  }

  add(data) {
    if (this.head === undefined) {
      this.head = new Node(data);
      this.itr = this.head;
   
    } else {
      this.itr.next = new Node(data);
      this.itr = this.itr.next;
    }
  }
}


class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(data) {
    if (this.head === undefined) {
      this.head = new Node(data);
      this.tail = this.head;
  
    } else {
      this.tail.next = new Node(data);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    let node;
    if (!this.head) {
      return null;
   
    } else if (this.head === this.tail) {
      node = this.head;
      this.head = undefined;
      this.tail = undefined;
      return node.data;
    
    } else {
      node = this.head;
      this.head = this.head.next;
      return node.data;
    }
  }
}


class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constrcutor() {
    this.root = undefined;
  }

  add(data) {
    if (this.root === undefined) {
      this.root = new TreeNode(data);
  
    } else {
      let placeFound = false;
      let itr = this.root;

      while (placeFound === false) {
        if (data < itr.data) {
          if (!itr.left) {
            placeFound = true;
            itr.left = new TreeNode(data);
          } else {
            itr = itr.left;
          }
    
        } else {
          if (!itr.right) {
            placeFound = true;
            itr.right = new TreeNode(data);
          } else {
            itr = itr.right;
          }
        }
      }
    }
  }

  listOfDepths() {
    const lists = [];
    const queue = new Queue;
    let list = new LinkedList;
    let nextLevel = undefined;
    queue.enqueue(this.root);
    
    while (queue.head) {
      const node = queue.dequeue();
  
      if (node === nextLevel) {
        lists.push(list);
        list = new LinkedList;
        nextLevel = undefined;
      }

      list.add(node.data);

      if (node.left) {
        queue.enqueue(node.left);
        if (nextLevel === undefined) {
          nextLevel = node.left;
        }
      }

      if (node.right) {
        queue.enqueue(node.right);
        if (nextLevel === undefined) {
          nextLevel = node.right;
        }
      }
    }

    lists.push(list);

    return lists;
  }

  readAnswer(lists) {
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      let itr = list.head;
      while (itr) {
        console.log(itr.data);
        itr = itr.next;
      }
      console.log("");
    }
  }
}


const tree = new BinarySearchTree;

const integers = [10, 5, 6, 7, 2, 1, 15, 12, 14, 20, 25];
integers.forEach(integer => tree.add(integer));

const lists = tree.listOfDepths();
tree.readAnswer(lists);

/*           10
      5                15

  2     6         12       20  

1         7        14         25     */