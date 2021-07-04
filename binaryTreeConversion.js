/* Can a binary tree be converted into another by swapping branches?

Big O
1. Time: O(b), where b is the number of nodes in the tree
2. Space: O(h), where h is the height of the tree,
                which takes space on the call stack

https://www.techiedelight.com/determine-binary-tree-can-converted-another-number-swaps-left-right-child/  */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


function equal(x, y) {
  if (x === y) {
    return true;
  }

  return (x !== undefined && y !== undefined) && 
         (x.data === y.data) &&
         ((equal(x.left, y.left) && equal(x.right, y.right)) ||
         (equal(x.right, y.left) && equal(x.left, y.right)));
}


const x = new Node(6);
x.left = new Node(3);
x.right = new Node(8);
x.left.left = new Node(1);
x.left.right = new Node(7);
x.right.left = new Node(4);
x.right.right = new Node(2);
x.right.left.left = new Node(1);
x.right.left.right = new Node(7);
x.right.right.right = new Node(3);

const y = new Node(6);
y.left = new Node(8);
y.right = new Node(3);
y.left.left = new Node(2);
y.left.right = new Node(4);
y.right.left = new Node(7);
y.right.right = new Node(1);
y.left.left.left = new Node(3);
y.left.right.left = new Node(1);
y.left.right.right = new Node(7);

console.log(equal(x, y));