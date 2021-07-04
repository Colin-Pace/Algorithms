/* Convert a binary tree to its mirror

Big O
1. Time: O(b), where b = nodes in tree
2. Space: O(h), where h = tree height for call stack

https://www.techiedelight.com/convert-binary-tree-to-its-mirror/  */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree {
  constructor() {
    this.root = undefined;
  }

  preOrder(node) {
    if (node === undefined) {
      return;
    }

    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  swap(node) {
    if (node === undefined) {
      return;
    }

    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  convertToMirror(node) {
    if (node === undefined || 
        node.left === undefined && node.right === undefined) {
      return;
    }

    this.convertToMirror(node.left);
    this.convertToMirror(node.right);
    return this.swap(node);
  }
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const tree = new BinaryTree;
tree.root = root;
tree.convertToMirror(tree.root);
tree.preOrder(tree.root);

/*
         1              1
      2    3          3   2
    4  5  6  7      7  6  5 4     */