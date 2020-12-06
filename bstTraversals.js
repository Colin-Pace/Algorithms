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
      const node = new QueueNode(data);
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    let node;
    if (!this.head) return null;
    else if (this.head === this.tail) {
      node = this.head;
      this.head = null;
      this.tail = null;
      const data = node.data;
      node = null;
      return data;
    } else {
      node = this.head;
      this.head = this.head.next;
      const data = node.data;
      node = null;
      return data;
    }
  }
}

class GraphNode {
  constructor(data, adj) {
    this.data = data;
    this.adj = adj;
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
    if (!data) return null;
    else {
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
  }

  remove(data) {
    if (!data || !this.root) return null;
    else {
      const remove = function(node, data) {
        if (!node || !data) return null;

        else if (data === node.data) {
          if (!node.left && !node.right) return null;
          else if (!node.right) return node.left;

          else {
            let temp = node.right;
            let itr = temp;
            while (temp.left) {
              itr = temp;
              temp = temp.left;
            }

            node.data = temp.data;
            if (itr === temp && (!temp.left && !temp.right)) {
              node.right = null;

            } else if (!temp.left && !temp.right) itr.left = null;
            else node.right = remove(node.right, temp.data);
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
    if (!this.root) return null;
    else {
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
  }

  maxHeight(node = this.root) {
    if (!this.root) return null;
    else {
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
  }

  balanced() {
    if (!this.root) return null;
    else {
      const min = this.minHeight();
      this.visited = [];
      const max = this.maxHeight();
      if (Math.abs((max - min) + 1 <= 1)) return true;
      else return false;
    }
  }

  sum(node = this.root) {
    if (!this.root) return null;
    else {
      this.count += node.data;
      if (!node.left && !node.right) return node.data;
      else {
        node.left && this.sum(node.left);
        node.right && this.sum(node.right);
      }
      return this.count;
    }
  }
}

const queue = new Queue;
const tree = new BinarySearchTree;

const integers = [100, 150, 80, 50, 90, 130, 200, 110, 120, 115];
integers.forEach(integer => tree.add(integer));

console.log(tree.root.data);
