// Given a preOrder and inOrder traversal, construct a unique binary tree

const preOrder = ["a", "b", "d", "g", "h", "e", "c", "f", "j"];
const inOrder = ["g", "d", "h", "b", "e", "a", "f", "j", "c"];

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.leftSub = [];
    this.rightSub = [];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.itr = null;
  }

  createTree(pre, in_) {
    // Create the tree
    this.root = new Node(pre[0]);
    const [left, right] = this.findSubTrees(this.root.data, in_);
    this.root.leftSub = left;
    this.root.rightSub = right;

    // Iterate the pre order
    const l = pre.length;
    for (let i = 1; i < l; i++) {
      let foundLeft = true;
      let search = this.findIterable(i, pre);

      // Find the iterable in the sub trees
      if ( !search[0].leftSub && !search[0].rightSub ) continue;
      else if (search[2] && search[2].includes(pre[i])) foundLeft = false;
      else if (search[1] && !search[1].includes(pre[i])) foundLeft = false;

      if (foundLeft) {
        // Get the previous node
        this.itr = search[0];
        this.itr.left = new Node(pre[i]);

        // Create the left node
        const [left, right] = this.findSubTrees(this.itr.left.data, this.itr.leftSub);
        this.itr.left.leftSub = left;
        this.itr.left.rightSub = right;

        // Clear the parent sub tree
        this.itr.leftSub = null;

      } else {
        // Get the previous node
        this.itr = search[0];
        this.itr.right = new Node(pre[i]);

        // Create the right node
        const [left, right] = this.findSubTrees(this.itr.right.data, this.itr.rightSub);
        this.itr.right.leftSub = left;
        this.itr.right.rightSub = right;

        // Clear the parent sub tree
        this.itr.rightSub = null;
      }
    }
  }

  findSubTrees(itr, in_) {
    const l = in_.length;
    let partition;

    for (let i = 0; i < l; i++) {
      if (in_[i] === itr) partition = i;
    }

    const leftSub = in_.slice(0, partition);
    const rightSub = in_.slice(partition + 1);

    return [leftSub, rightSub];
  }

  findIterable(i, pre) {
    let result = [];

    const createResult = function(node) {
      result.push(
        node,
        node.leftSub,
        node.rightSub
      );
      return result;
    }

    const traversal = function(node) {
      if (node.leftSub && node.leftSub.includes(pre[i])) {
        result = createResult(node);

      } else if (node.rightSub && node.rightSub.includes(pre[i])) {
        result = createResult(node);

      } else {
        node.left && traversal(node.left);
        node.right && traversal(node.right);
      }
    }

    traversal(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    const traversal = function(node) {
      node.left && traversal(node.left);
      result.push(`${node.data}`);
      node.right && traversal(node.right);
    }

    traversal(this.root);
    return result;
  }

  test(created, in_) {
    const l = created.length;
    for (let i = 0; i < l; i++) {
      if (created[i] != in_[i]) return false;
    }

    return true;
  }
}

const tree = new BinaryTree;
tree.createTree(preOrder, inOrder);
console.log(`Test passes: ${tree.test(tree.inOrder(), inOrder)}`);
