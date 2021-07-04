/* Is a binary tree symmetric?

Big O
1. Time: O(b), where b is the number of nodes in the tree
2. Space: O(h), where h is the number of nodes in the height of the tree 
                that are put on the call stack 
                
https://www.techiedelight.com/check-given-binary-tree-symmetric-structure-not/                */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


function isSymmetric(x, y) {
  if (x === undefined && y === undefined) {
    return true;
  }

  return (x !== undefined && y !== undefined) &&
          isSymmetric(x.left, y.right) &&
          isSymmetric(x.right, y.left);
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(5);

console.log(isSymmetric(root.left, root.right));