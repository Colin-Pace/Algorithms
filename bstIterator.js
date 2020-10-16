/* InterviewBit: bst iterator. Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST. The first
call to next() will return the smallest number in BST. Calling next() again
will return the next smallest number in the BST, and so on. */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.sup = null;
    this.visited = false;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.itr = null;
    this.sup = null;
    this.step = null;
    this.max = null;
    this.end = false;
    this.elements = [];
    this.start = true;
  }

  createInput(data) {
    let i = 0;
    while (i < data) {
      const element = Math.floor(Math.random() * 100) + 1;
      if (!this.elements.includes(element)) {
        this.add(element);
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
          if (!node.left) {
            node.left = new Node(data);
            node.left.sup = node;
          }
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            node.right.sup = node;
          }
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
      result.push(node.data);
      node.right && traversal(node.right);
    }
    traversal(this.root);
    return result;
  }

  findNext(info) {
    if (this.max === null) {
      this.itr = this.root;
      this.step = 0;
      this.findMax();
    } else if (this.end === true) return "No more elements in tree";

    const order = ["left", "root", "right"];
    let answer;

    if ( this.itr === this.root &&
         !this.itr.left &&
         this.start === true) {

      answer = this.root;
      this.start = false;

    } else if (order[this.step] === "left") answer = this.findLeft();
    else if (order[this.step] === "root") answer = this.findRoot();
    else answer = this.findRight();

    if (this.step === 2) this.step = 0;
    else this.step++;

    return answer.data;
  }

  findMax() {
    let node = this.root;
    while (node.right) node = node.right;
    this.max = node;
  }

  findLeft() {
    if (!this.itr.left || this.itr.left.visited === true) {
      if (this.itr.right) return this.findRight();
      else return this.findRoot();
    }

    else while (this.itr.left) this.itr = this.itr.left;

    this.itr.visited = true;
    return this.itr;
  }

  findRoot() {
    if (this.itr.left && this.itr.left.visited === false) {
      return this.findLeft();
    }

    else if (this.itr.right) return this.findRight();

    else if (this.itr.sup.visited === true) {
      while (this.itr.visited === true) {
        this.itr = this.itr.sup;
      }

      this.itr.visited = true;
      return this.itr;

    } else {
      this.itr = this.itr.sup;
      this.itr.visited = true;
      return this.itr;
    }
  }

  findRight() {
    if (this.itr.left && this.itr.left.visited === false) {
      return this.findLeft();
    } else if (!this.itr.right) return this.findRoot();

    else {
      this.itr = this.itr.right;

      if (!this.itr.left) {
        this.itr.visited = true;

        return this.itr;

      } else return this.findLeft();
    }
  }

  test() {
    const comparison = this.inOrder();
    const l = comparison.length;
    for (let i = 0; i < l; i++) {
      if (this.findNext() != comparison[i]) return false;
    }

    return true;
  }
}

let test = true;
for (let i = 0; i < 100; i++) {
  const tree = new BinarySearchTree;
  tree.createInput(10);
  if (tree.test() != true) test = false;
}
console.log("Tests pass: " + test);
