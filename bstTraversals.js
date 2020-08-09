class QueueNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data) {
    if (!this.head) {
      this.head = new QueueNode(data);
      this.tail = this.head;
    } else {
      let node = new QueueNode(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) return null;
    else if (this.tail === this.head) {
      node = this.head;
      this.head = null;
      this.tail = null;
      return node;
    } else {
      node = this.head;
      this.head = this.head.next;
      node.next = null;
      return node;
    }
  }
}

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.visited = [];
    this.count = 0;
  }

  add(data) {
    let node = this.root;
    if (!node) this.root = new TreeNode(data);
    else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (!node.left) node.left = new TreeNode(data);
          else return searchTree(node.left);
        } else if (data > node.data) {
          if (!node.right) node.right = new TreeNode(data);
          else return searchTree(node.right);
        } else return null;
      }
      searchTree(node);
    }
  }

  remove(data) {
    const remove = function(node, data) {
      if (!node || !data) return null;
      else if (data === node.data) {
        if (!node.left && !node.right) return null;
        else if (!node.left) return node.right;
        else if (!node.right) return node.left;
        else {
          let temp = node.right;
          while (temp.left) temp = temp.left;
          node.data = temp.data;
          node.right = remove(node.right, temp.data);
          return node;
        }
      } else if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else {
        node.right = remove(node.right, data);
        return node;
      }
    }
    this.root = remove(this.root, data);
  }

  inOrder() {
    if (!this.root) return null;
    else {
      const result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        result.push(` ${node.data}`);
        node.right && traversal(node.right);
      }
      traversal(this.root);
      return result;
    }
  }

  preOrder() {
    if (!this.root) return null;
    else {
      const result = [];
      const traversal = function(node) {
        result.push(` ${node.data}`);
        node.left && traversal(node.left);
        node.right && traversal(node.right);
      }
      traversal(this.root);
      return result;
    }
  }

  postOrder() {
    if (!this.root) return null;
    else {
      const result = [];
      const traversal = function(node) {
        node.left && traversal(node.left);
        node.right && traversal(node.right);
        result.push(` ${node.data}`);
      }
      traversal(this.root);
      return result;
    }
  }

  levelOrder() {
    if (!this.root) return null;
    else {
      const result = [];
      queue.enqueue(this.root);
      while (queue.head) {
        const node = queue.dequeue().data;
        result.push(" " + node.data);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);
      }
      return result;
    }
  }

  findMin() {
    if (!this.root) return null;
    else {
      let current = this.root;
      while (current.left) current = current.left;
      return current;
    }
  }

  findMax() {
    if (!this.root) return null;
    else {
      let current = this.root;
      while (current.right) current = current.right;
      return current;
    }
  }

  find(value) {
    if (!this.root || !value) return null;
    else {
      let current = this.root;
      while (current.data !== value) {
        if (value < current.data) current = current.left;
        else current = current.right;
        if (current === null) return null;
      }
      return current;
    }
  }

  minHeight(node = this.root) {
    if (this.visited.includes(node)) return 0;
    else if (node === null) return;
    else {
      this.visited.push(node);
      let left = this.minHeight(node.left);
      let right = this.minHeight(node.right);
      if (left < right) return left + 1;
      else return right + 1;
    }
  }

  maxHeight(node = this.root) {
    if (this.visited.includes(node)) return 0;
    else if (node === null) return;
    else {
      this.visited.push(node);
      let left = this.maxHeight(node.left);
      let right = this.maxHeight(node.right);
      if (left > right) return left + 1;
      else return right + 1;
    }
  }

  balanced() {
    if (!this.root) return null;
    const min = this.minHeight();
    this.visited = [];
    const max = this.maxHeight();
    if (Math.abs((max - min) + 1 <= 1)) return true;
    else return false;
  }

  sum(node = this.root) {
    this.count += node.data;
    if (!node.left && !node.right) return node.data;
    else {
      const addend = node.left && this.sum(node.left);
      const addend_ = node.right && this.sum(node.right);
    }
    return this.count;
  }
}


const queue = new Queue;
const tree = new BinarySearchTree;

const integers = [10, 5, 2, 8, 15, 12, 20];
integers.forEach(integer => tree.add(integer));

console.log(`In order: ${tree.inOrder()}`);
console.log(`Pre order: ${tree.preOrder()}`);
console.log(`Post order: ${tree.postOrder()}`);
console.log(`Level order: ${tree.levelOrder()}`);
