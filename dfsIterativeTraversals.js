/*               Iterative tree traversals

Works cited
  1.Algorithms
      1.1. Pre order: https://leetcode.com/problems/binary-tree-preorder-traversal/discuss/177117/Simple-Iterative-Javascript-Solution
      1.2. In order: https://medium.com/@amyhuajs/the-iterative-solution-to-inorder-tree-traversal-easily-explained-f25f09e5435b
      1.3. Post order: https://medium.com/@sabahat.usman.su/iterative-postorder-traversal-of-a-binary-tree-9f7f397de767
  2. Tree structure and traversal order
      2.1. https://en.wikipedia.org/wiki/Tree_traversal    */


class StackNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(data) {
    if (!this.head) {
      this.head = new StackNode(data);
      this.tail = this.head;
    } else {
      const node = new StackNode(data);
      node.next = this.head;
      this.head = node;
    }
  }

  pop(data) {
    let node;
    if (!this.head) return null;
    else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      return node.data;
    } else {
      node = this.head;
      this.head = this.head.next;
      return node.data;
    }
  }
}


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  add(data) {
    if (!data) throw "No data to put in tree";

    let node = this.root;
    if (!node) this.root = new Node(data);
    else {
      while (true) {
        if (data === node.data) throw "Data already in tree";
        else if (data < node.data) {
          if (node.left) node = node.left;
          else {
            node.left = new Node(data);
            break;
          }

        } else if (data > node.data) {
          if (node.right) node = node.right;
          else {
            node.right = new Node(data);
            break;
          }
        }
      }
    }
  }

  preOrder() {
    if (!this.root) throw "No tree root";
    const result = [];
    stack.push(this.root);

    while (stack.head) {
      const node = stack.pop();
      result.push(" " + node.data);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return result;
  }

  inOrder() {
    if (!this.root) throw "No tree root";
    const result = [];
    let fast = this.root;

    while (true) {
      while (fast) {
        stack.push(fast);
        fast = fast.left;
      }

      if (!stack.head) break;
      else {
        const slow = stack.pop();
        result.push(" " + slow.data);
        fast = slow.right;
      }
    }

    return result;
  }

  postOrder() {
    if (!this.root) throw "No tree root";
    const result = [];
    let fast = this.root;
    let slow = this.root;

    while (fast) {
      while (fast.left) {
        stack.push(fast);
        fast = fast.left;
      }

      while (!fast.right || fast.right === slow) {
        result.push(" " + fast.data);
        slow = fast;
        if (!stack.head) return result;
        fast = stack.pop();
      }

      stack.push(fast);
      fast = fast.right;
    }

    return result;
  }
}

const stack = new Stack;
const tree = new Tree;

const integers = [100, 50, 20, 80, 150, 120, 200];
integers.forEach(integer => tree.add(integer));

console.log(`Pre order: ${tree.preOrder()}`);
console.log(`In order: ${tree.inOrder()}`);
console.log(`Post order: ${tree.postOrder()}`);
