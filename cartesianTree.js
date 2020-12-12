/* Works cited
1. Prompt
    1.1 Site and title: InterviewBit, in order traversal of a Cartesian tree
    1.2. Given an inorder traversal of a cartesian tree, construct the tree.
2. Algorithm
    2.1. https://en.wikipedia.org/wiki/Cartesian_tree */

class Node {
  constructor(data, left, right, sup) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.sup = sup;
  }
}

class CartesianTree {
  constructor() {
    this.root = null;
    this.prev = null;
  }

  add(data) {
    if (!this.root) {
      const node = new Node(data);
      this.root = node;
      this.prev = this.root;

    } else {
      const node = new Node(data);
      let itr = this.prev;

      if (data > itr.data) {
        if (itr.right) {
          node.left = itr.right;
          itr.right = node;
          node.sup = itr;

        } else {
          itr.right = node;
          node.sup = itr;
        }

      } else {

        while (data < itr.data) {
          if (itr === this.root) {

            if (data < itr.data) {
              this.root = node;
              itr.sup = node;
              this.prev = node;
              return node.left = itr;

            } else {
              node.left = this.root.right;
              this.root.right = node;
              node.sup = this.root;
              return this.prev = node;
            }

          } else {
            itr = itr.sup;
          }
        }

        node.left = itr.right;
        node.left.sup = node;
        itr.right = node;
        node.sup = itr;
      }

      this.prev = node;
    }
  }

  test() {
    const result = [];

    const traversal = function(node) {
      node.left && traversal(node.left);
      result.push(node.data);
      node.right && traversal(node.right);
    }
    traversal(this.root);

    let i = 0;
    result.forEach(integer => {
      if (inOrder[i] != integer) return false;
      else i++;
    });

    return true;
  }
}

const inOrder = [9, 3, 7, 1, 8, 12, 10, 20, 15, 18, 5];
const tree = new CartesianTree;

inOrder.forEach(integer => tree.add(integer));
console.log("Test passes: " + tree.test());
