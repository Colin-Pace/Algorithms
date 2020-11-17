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


const f = new Node("f");
const b = new Node("b");
const g = new Node("g");
const a = new Node("a");
const d = new Node("d");
const i = new Node("i");
const c = new Node("c");
const e = new Node("e");
const h = new Node("h");

f.left = b;
f.right = g;
b.left = a;
b.right = d;
d.left = c;
d.right = e;
g.right = i;
i.left = h;


const stack = new Stack;
const tree = new Tree;
tree.root = f;


console.log(`Pre order: ${tree.preOrder()}`);
console.log(`In order: ${tree.inOrder()}`);
console.log(`Post order: ${tree.postOrder()}`);
