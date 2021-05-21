class Node {
  constructor(data, adj, visited) {
    this.data = data;
    this.adj = [];
    this.visited = false;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data);
    } else {
      let itr = this.root;
      let placeFound = false;
      while (placeFound === false) {
        if (data < itr.data) {
          if (!itr.left) {
            placeFound = true;
            itr.left = new Node(data);
          } else {
            itr = itr.left;
          }
        } else {
          if (!itr.right) {
            placeFound = true;
            itr.right = new Node(data);
          } else {
            itr = itr.right;
          }
        }
      }
    }
  }

  preOrder() {
    const order = [];
    const stack = [];
    stack.push(this.root);
    while (stack.length) {
      const vertex = stack.pop();
      order.push(vertex.data);
      if (vertex.right) {
        stack.push(vertex.right);
      }
      if (vertex.left) {
        stack.push(vertex.left);
      }
    }
    return order;
  }

  inOrder() {
    const order = [];
    const stack = [];
    let fast = this.root;
    while (true) {
      while (fast) {
        stack.push(fast);
        fast = fast.left;
      }
      if (!stack.length) {
        break;
      } else {
        const slow = stack.pop();
        order.push(slow.data);
        fast = slow.right;
      }
    }
    return order;
  }

  postOrder() {
    const order = [];
    const stack = [];
    let fast = this.root;
    let slow = this.root;
    while (fast) {
      while (fast.left) {
        stack.push(fast);
        fast = fast.left;
      }
      while (!fast.right || fast.right === slow) {
        order.push(fast.data);
        slow = fast;
        if (!stack.length) {
          return order;
        } else {
          fast = stack.pop();
        }
      }
      stack.push(fast);
      fast = fast.right;
    }
    return order;
  }

  levelOrder() {
    const order = [];
    const q = [];
    q.push(this.root);
    while (q.length) {
      const vertex = q.shift();
      order.push(vertex.data);
      if (vertex.left) {
        q.push(vertex.left);
      }
      if (vertex.right) {
        q.push(vertex.right);
      }
    }
    return order;
  }

  height() {
    let height = 0;
    let nodesInLevel = 1;
    const q = [];
    q.push(this.root);
    while (q.length) {
      const vertex = q.shift();
      nodesInLevel--;
      if (vertex.left) {
        q.push(vertex.left);
      }
      if (vertex.right) {
        q.push(vertex.right);
      }
      if (nodesInLevel === 0) {
        height++;
        nodesInLevel = q.length;
      }
    }
    return height;
  }

  recursivePreOrder() {
    const order = [];
    const traversal = function(node) {
      order.push(node.data);
      node.left && traversal(node.left);
      node.right && traversal(node.right);
    }
    traversal(this.root);
    return order;
  }
  
  recursivePreOrder() {
    const order = [];
    const traversal = function(node) {
      order.push(node.data);
      node.left && traversal(node.left);
      node.right && traversal(node.right);
    }
    traversal(this.root);
    return order;
  }

  recursiveInOrder() {
    const order = [];
    const traversal = function(node) {
      node.left && traversal(node.left);
      order.push(node.data);      
      node.right && traversal(node.right);
    }
    traversal(this.root);
    return order;
  }
  
  recursivePostOrder() {
    const order = [];
    const traversal = function(node) {
      node.left && traversal(node.left);
      node.right && traversal(node.right);
      order.push(node.data);
    }
    traversal(this.root);
    return order;
  }

  recursiveHeight(node = this.root) {
    if (!node) {
      return;
    } else if (node.visited === true) {
      return 0;
    } else {
      node.visited = true;
      const left = this.recursiveHeight(node.left);
      const right = this.recursiveHeight(node.right);
      if (left < right) {
        return right + 1;
      } else {
        return left + 1;
      }
    }
  }
}

const tree = new BinarySearchTree;
const integers = [10, 5, 7, 6, 2, 1, 15, 12, 14, 20, 25];
integers.forEach(integer => tree.add(integer));
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
console.log(tree.levelOrder());
console.log(tree.height());
console.log(tree.recursivePreOrder());
console.log(tree.recursiveInOrder());
console.log(tree.recursivePostOrder());
console.log(tree.recursiveHeight());