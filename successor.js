/* Successor

1. Prompt: During an in order traversal of a binary search tree,
            find the next of a given node

Big O
1. Time: O(log n)
2. Space: O(1)    */


class Node {
  constructor(data, left, right, parent) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = undefined;
  }

  add(data) {
    if (this.root === undefined) {
      this.root = new Node(data);
    } else {
      let placeFound = false;
      let itr = this.root;

      while (placeFound === false) {
        if (data < itr.data) {
          if (itr.left === undefined) {
            itr.left = new Node(data);
            itr.left.parent = itr
            placeFound = true;
      
          } else {
            itr = itr.left;
          }
      
        } else {
          if (itr.right === undefined) {
            itr.right = new Node(data);
            itr.right.parent = itr
            placeFound = true;
         
          } else {
            itr = itr.right;
          }
        }
      }
    }
  }

  traversal(node) {
    if (node === undefined) {
      return null;
    }
  
    if (node.right !== undefined) {
      return this.leftMost(node.right);
    
    } else {
      let q = node;
      let x = q.parent;
  
      while (x !== undefined && x.left !== q) {
        q = x;
        x = x.parent;
      }

      if (x === undefined) {
        return q;
      } else {
        return x;
      }
    }
  }
  
  leftMost(node) {
    if (node === undefined) {
      return null;
    }
  
    while (node.left !== undefined) {
      node = node.left;
    }
    
    return node;
  }
}


let tree = new BinarySearchTree;
let integers = [10, 5, 6, 7, 2, 1, 15, 12, 14, 20, 25];
integers.forEach(integer => tree.add(integer));
console.log(tree.traversal(tree.root.left));

tree = new BinarySearchTree;
integers = [10, 15, 20, 25];
integers.forEach(integer => tree.add(integer));
console.log(tree.traversal(tree.root.left.right.right));