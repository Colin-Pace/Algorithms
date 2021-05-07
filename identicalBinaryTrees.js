/* 1. Prompt: Check if two binary trees are identical or not – Iterative and Recursive
  2. Source: https://www.techiedelight.com/check-if-two-binary-trees-are-identical-not-iterative-recursive/ */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function recursiveCompareBinaryTrees(x, y) {
  if (!x && !y) {
    return true;
  } else if ((!x && y) || (x && !y)) {
    return false;
  } else {
    return (x.data === y.data) && 
            recursiveCompareBinaryTrees(x.left, y.left) && 
            recursiveCompareBinaryTrees(x.right, y.right);
  }
}

function iterativeCompareBinaryTrees(x, y) {
  if (!x && !y) {
    return true;
  } else if (!x) {
    return false;
  } else if (!y) {
    return false;
  } else {
    const stack = [];
    stack.push([x, y]);
    while (stack.length) {
      const vertices = stack.pop();
      if (vertices[0] === undefined || vertices[1] === undefined) {
        return false;
      } else if (vertices[0] === undefined && vertices[1] === undefined) {
        continue;
      } else {
        if (vertices[0].data !== vertices[1].data) {
          return false;
        } else { 
          if ((vertices[0].left && !vertices[1].left) || 
              (!vertices[0].left && vertices[1].left) || 
              (vertices[0].right && !vertices[1].right) || 
              (!vertices[0].right && vertices[1].right)) {
            return false;
          } else {
            if (vertices[0].left && vertices[1].left) {
              stack.push([vertices[0].left, vertices[1].left]);
            }
            if (vertices[0].right && vertices[1].right) {
              stack.push([vertices[0].right, vertices[1].right]);
            }
          }
        }
      }
    }
    return true;
  }
}

const x = new Node(15);
x.left = new Node(10);
x.right = new Node(20);
x.left.left = new Node(8);
x.left.right = new Node(12);
x.right.left = new Node(16);
x.right.right = new Node(25);

const y = new Node(15);
y.left = new Node(10);
y.right = new Node(20);
y.left.left = new Node(8);
y.left.right = new Node(12);
y.right.left = new Node(16);
y.right.right = new Node(25);

console.log(recursiveCompareBinaryTrees(x, y));
console.log(iterativeCompareBinaryTrees(x, y));