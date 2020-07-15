// Make a binary search tree with minimal height,
//    from an array of unique, increasing integers

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  createTree(array, start, end) {
    if (end < start) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = this.createTree(array, start, mid - 1);
    node.right = this.createTree(array, mid + 1, end);

    return node;
  }
}

let input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let BST = new BinarySearchTree;
console.log(BST.createTree(input, 0, input.length - 1));
