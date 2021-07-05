/* Ancestor matrix from binary tree

Big O
1. Iterative
    1. Time: O(b log b), where b is the size of the binary tree ,
                          and if the binary tree is balanced
    2. Space: O(b ^ 2)
2. Recursive
    1. Time: O(b log b)
    2. Space: O(b ^ 2)
    
https://www.techiedelight.com/construct-ancestor-matrix-from-binary-tree/   */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree {
  setUp(root) {
    const n = this.size(root);
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    const ancestors = {};
    return [matrix, ancestors];
  }

  size(root) {
    if (root === undefined) {
      return 0;
    }

    return this.size(root.left) + 1 + this.size(root.right);
  }

  constructAncestorMatrix(root, ancestors, matrix) {
    if (root === undefined) {
      return;
    }

    for (let node in ancestors) {
      matrix[node][root.data] = 1;
    }

    ancestors[root.data] = true;

    this.constructAncestorMatrix(root.left, ancestors, matrix);
    this.constructAncestorMatrix(root.right, ancestors, matrix);

    delete ancestors[root.data];
  }

  matrix(root) {
    const [matrix, ancestors] = this.setUp(root);
    this.constructAncestorMatrix(root, ancestors, matrix);
    return matrix;
  }

  iterative(root) {
    if (root === undefined) {
      return null;
    }

    // Set up data structures
    const [matrix, ancestors] = this.setUp(root);
    const itrStack = [];
    itrStack.push(root);

    const branches = [];
    let count = 0;
    const ancestorStack = [];

    // Pre order traversal
    while (itrStack.length) {
      const node = itrStack.pop();
      count++;

      // Add information about ancestors to matrix
      for (let data in ancestors) {
        matrix[data][node.data] = 1;
      }

      // Find if traversal is at a leaf node
      if (node.left === undefined && node.right === undefined) {

        // Update nodes with two descendants if only traversed to the left; 
        // now traverse to the right
        if (branches[branches.length - 1][1] === "l") {
          branches[branches.length - 1][1] = "r";
          count--;
          continue;
        }

        // Update data structures for the nodes with descendants
        // whose subtrees have already been traversed
        while (branches[branches.length - 1][1] === "r") {    
          
          // Remove ancestors from ancestor object
          if (ancestorStack.length === count) {
            const ancestor = ancestorStack.pop();
            delete ancestors[ancestor.data];
          }

          // Remove nodal data from list of branches 
          // whose subtrees have already been traversed
          if (count === branches.length) {
            branches.pop();
          }

          count--;
        }

        continue;
      }

      // Add ancestor data to ancestor object
      ancestors[node.data] = true;
      ancestorStack.push(node);

      // Add node to branches if node has two descendants; 
      // start with left traversal
      if (node.left && node.right) {
        const branchCount = [count, "l"];
        branches.push(branchCount);
      }

      // Populate traversal stack
      if (node.right) {
        itrStack.push(node.right);
      }

      if (node.left) {
        itrStack.push(node.left);
      }
    }

    return matrix;
  }

  compareMatrices(first, second) {
    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        if (first[i][j] !== second[i][j]) {
          return false;
        }
      }
    }

    return true;
  }
}


/*

      4
     / \
    3   1
   / \    \
  2   0    5
   
*/

const root = new Node(4);
root.left = new Node(3);
root.right = new Node(1);
root.left.left = new Node(2);
root.left.right = new Node(0);
root.right.right = new Node(5);


/*

      4
     / \
    3   1
   / \    \
  2   0    5
     / \   
    6   7
       /
      8

*/

// const root = new Node(4);
// root.left = new Node(3);
// root.right = new Node(1);
// root.left.left = new Node(2);
// root.left.right = new Node(0);
// root.left.right.left = new Node(6);
// root.left.right.right = new Node(7);
// root.left.right.right.left = new Node(8);
// root.right.right = new Node(5);


let tree = new BinaryTree;
const ancestorMatrixRecursive = tree.matrix(root);
console.log(ancestorMatrixRecursive);
console.log("");

tree = new BinaryTree;
const ancestorMatrixIterative = tree.iterative(root);
console.log(ancestorMatrixIterative);
console.log("");

console.log("Recursive and iterative have same answer: " + 
            tree.compareMatrices(ancestorMatrixRecursive, ancestorMatrixIterative));