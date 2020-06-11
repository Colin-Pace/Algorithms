// Check if a binary tree is a binary search tree

/*

                 20
                /  \
              10    30
            /   \
          5     15
        /   \     \
      3      7    17

*/


class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;
    if (!node) this.root = new Node(data);
    else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (!node.left) node.left = new Node(data);
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (!node.right) node.right = new Node(data);
          else return searchTree(node.right);
        } else return null;
      }
      searchTree(node);
    }
  }

  checkBST(node, min, max) {
    if (node === null) return true;

    if ((min !== null && node.data <= min) || (max !== null && node.data > max)) return false;

    if (!this.checkBST(node.left, min, node.data) || !this.checkBST(node.right, node.data, max)) return false;

    return true;
  }
}

const numbers = new BinarySearchTree;
const integers = [20, 10, 5, 3, 7, 15, 17, 30];
integers.forEach(integer => numbers.add(integer));
console.log(numbers.checkBST(numbers.root, null, null));
