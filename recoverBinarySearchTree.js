/* InterviewBit: recover binary search tree. Two elements of a binary search
tree (BST) are swapped by mistake. Tell us the 2 values swapping which the tree
will be restored and then swap them so that the binary search tree is recovered. */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.elements = [];
    this.elementOne = null;
    this.elementTwo = null;
    this.itr = null;
    this.previous = null;
  }

  createElements(integer) {
    let i = 0;
    while (i < integer) {
      const element = Math.floor(Math.random() * 100);

      if (!this.elements.includes(element)) {
        tree.add(element);
        this.elements.push(element);
        i++;
      }
    }
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

  inOrder() {
    const result = [];

    const traversal = function(node) {
      node.left && traversal(node.left);
      result.push(` ${node.data}`);
      node.right && traversal(node.right);
    }

    traversal(this.root);
    return result;
  }

  swap() {
    let count = this.elements.length;
    this.elementOne = Math.floor(Math.random() * count + 1);
    this.elementTwo = Math.floor(Math.random() * count + 1);

    while (this.elementTwo === this.elementOne) {
      this.elementTwo = Math.floor(Math.random() * count + 1);
    }

    const searchTree = function(node) {
      if (tree.itr < 0) return;

      node.left && searchTree(node.left);

      if (tree.itr === 1) {
        tree.elementOne ? tree.elementTwo = node : tree.elementOne = node;
      }

      tree.itr--;

      node.right && searchTree(node.right);
    }

    this.itr = this.elementOne;
    this.elementOne = null;
    searchTree(this.root);

    this.itr = this.elementTwo;
    this.elementTwo = null;
    searchTree(this.root);

    const temp = this.elementOne.data;
    this.elementOne.data = this.elementTwo.data;
    this.elementTwo.data = temp;
  }

  findSwap() {
    const toSwap = [];

    const traversal = function(node) {
      node.left && traversal(node.left);

      if (tree.previous) {
        if ( toSwap.length > 0 &&
             tree.previous.data > node.data) {
               toSwap.push(node);

        } else if (tree.previous.data > node.data) {
          toSwap.push(tree.previous);
        }
      }

      tree.previous = node;
      node.right && traversal(node.right);
    }

    traversal(this.root);
    return toSwap;
  }

  recoverTree(elements) {
    if (elements.length === 1) this.swapAdjacents(elements);
    else this.nonAdjacents(elements);
  }

  swapAdjacents(elements) {
    this.previous = null;
    let nodeFound = false;

    const traversal = function(node) {
      node.left && traversal(node.left);

      if (nodeFound === true) {
        const temp = tree.previous.data;
        tree.previous.data = node.data;
        node.data = temp;

        nodeFound = false;                    // how to optimize?
        return;
      }

      else if (node === elements[0]) {
        nodeFound = true;
      }

      tree.previous = node;
      node.right && traversal(node.right);
    }

    traversal(this.root);
  }

  nonAdjacents(elements) {
    this.previous = null;

    let temp;
    const traversal = function(node) {
      node.left && traversal(node.left);

      if (node === elements[0]) {
        temp = elements[0];

      } else if (node === elements[1]) {
        const data = node.data
        node.data = temp.data;
        temp.data = data;

      }

      node.right && traversal(node.right);
    }

    traversal(this.root);
  }

  quickSort(integers) {
    if (integers.length < 2) return integers;
    else {
      const left = [];
      const right = [];
      const sorted = [];
      const pivot = integers.pop();
      const length = integers.length;

      for (let i = 0; i < length; i++) {
        if (integers[i] <= pivot) {
          left.push(integers[i]);
        } else right.push(integers[i]);
      }

      return sorted.concat(
        this.quickSort(left),
        pivot,
        this.quickSort(right)
      );
    }
  }

  test() {
    this.createElements(10);
    const sorted = this.quickSort(tree.elements);
    const elementsToSwap = tree.findSwap();
    const length = this.elements.length;
    tree.recoverTree(elementsToSwap);

    this.itr = 0;
    const inOrder = function(node) {
      node.left && inOrder(node.left);

      if (node.data != sorted[tree.itr]) return false;
      else tree.itr++;

      node.right && inOrder(node.right);
    }

    inOrder(this.root);

    return true;
  }
}


let tree;
let test = true;
function testRecoverBST() {
  let i = 0;

  while (i < 10) {
    tree = new BinarySearchTree;
    if (tree.test() != true) test = false;
    i++;
  }

  return test;
}

console.log("Tests pass: " + testRecoverBST());
