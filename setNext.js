/* Set next pointer to the in order successor


Big O
1. Iterative
    1. Time: O(b), where b is the number of nodes in the tree
    2: Space: O(b)

2. Recursive one
    1. Time: O(b)
    2: Space: O(h), where h is the height of the tree in the call stack

3. Recursive two
    1. Time: O(b)
    2: Space: O(h)


            1
          /   \
         2     3
       /      / \
      4      5   6
            / \
           7   8        
           
           
https://www.techiedelight.com/set-next-pointer-inorder-successor-binary-tree/   */


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

  setNext() {
    if (this.root === undefined) {
      return null;
    }

    const stack = [];
    let fast = this.root;
    let previous = undefined;

    while (true) {
      while (fast) {
        stack.push(fast);
        fast = fast.left;
      }

      if (!stack.length) {
        break;
      
      } else {
        const slow = stack.pop();

        if (previous !== undefined) {
          previous.next = slow;
        }

        previous = slow;
        fast = slow.right;
      }
    }

    this.checkAnswer();
  }

  recursiveOne() {
    if (this.root === undefined) {
      return null;
    }

    const node = this.root;
    let previous = undefined;
    
    const traversal = function(node) {
      node.left && traversal(node.left);

      if (previous !== undefined) {
        previous.next = node;
      }

      previous = node;
      
      node.right && traversal(node.right);
    }
    
    return traversal(node);
  }

  recursiveTwo(current, previous) {
    if (current === undefined) {
      return previous;
    }

    previous = this.recursiveTwo(current.left, previous);

    if (previous !== undefined) {
      previous.next = current;
    }

    previous = current;

    return this.recursiveTwo(current.right, previous);
  }

  checkAnswer() {
    const node = this.root;
    
    const traversal = function(node) {
      node.left && traversal(node.left);
      
      if (node.next !== undefined) {
        console.log(node.data, node.next.data);
      }
      
      node.right && traversal(node.right);
    }
    
    traversal(node);
  }
}

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

tree.setNext();
console.log("");

tree.recursiveOne();
tree.checkAnswer();
console.log("");

tree.recursiveTwo(tree.root, undefined);
tree.checkAnswer();