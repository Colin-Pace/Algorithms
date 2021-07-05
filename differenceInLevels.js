/* Difference of sum in odd and even levels

Big O
1. Iterative
    1. Time: O(b), where b is the number of nodes in the tree
    2. Space: O(b)
2. Recursive
    1. Time: O(b)
    2. Space: O(h), where h is the height of the tree   
    

https://www.techiedelight.com/difference-between-sum-nodes-odd-even-levels/    */


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

  iterative() {
    if (this.root === undefined) {
      return null;
    } else if (this.root.left === undefined && this.root.right === undefined) {
      return null;
    }

    const q = [];
    q.push(this.root);

    let nodesInLevel = 1
    let height = 1;
    let odds = 0;
    let evens = 0;
    let level = "odd";

    while (q.length) {
      const node = q.shift();
      nodesInLevel--;

      if (level === "odd") {
        odds += node.data;
      } else {
        evens += node.data;
      }

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

      if (nodesInLevel === 0) {
        height++;
        
        if (height % 2 === 0) {
          level = "even";
        } else {
          level = "odd";
        }

        nodesInLevel = q.length;
      }
    }

    return odds - evens;
  }

  recursive(node, diff, level) {
    if (node === undefined) {
      return diff;
    }

    if (level % 2 === 1) {
      diff = diff + node.data;
    } else {
      diff = diff - node.data;
    }

    diff = this.recursive(node.left, diff, level + 1);
    diff = this.recursive(node.right, diff, level + 1);

    return diff;
  }
}


/*
            1
          /   \
         2     3
        /     /  \
       4     5    6
            / \
           7   8

difference = -4                */


const root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);

const tree = new BinaryTree;
tree.root = root;

console.log(tree.iterative());
console.log(tree.recursive(tree.root, 0, 1));