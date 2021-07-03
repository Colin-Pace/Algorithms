/* Check balanced

Prompt: 
1. Check to see if a binary tree is balanced. 
2. In a balanced tree, the subtrees of each node have heights 
   that differ by, no more than one. 
3. Return true if balanced, false if not


Big O
1. Time: O(b)
2. Space: O(c)   */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let root = new Node(5, null, null);
let a = new Node(1, null, null);
let b = new Node(2, null, null);
let c = new Node(3, null, null);
let d = new Node(4, null, null);
let e = new Node(6, null, null);
let f = new Node(7, null, null);
let g = new Node(8, null, null);
let i = new Node(9, null, null);
let j = new Node(10, null, null);
let k = new Node(0, null, null);

// Balanced implementation
root.left = b; 
root.right = g;
b.left = a; 
b.right = c;
c.right = d;
g.left = f; 
g.right = i;
f.left = e;
i.right = j;

// Unbalanced implementation
// root.left = b; 
// root.right = g;
// b.left = a; 
// b.right = c;
// c.right = d;
// g.left = f; 
// g.right = i;
// f.left = e;
// i.right = j;
// d.right = k;


/*

  Balanced
                                5
                          2           8
                        1   3       7   9
                              4   6      10

  Unbalanced
                                5
                        2             8
                      1   3         7   9
                            4      6      10
                              0

*/

function checkBalanced(root) {
  if (root === null) {
    return -1;
  }

  const leftHeight = checkBalanced(root.left);
  if (leftHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  const rightHeight = checkBalanced(root.right);
  if (rightHeight === Number.MIN_VALUE) {
    return Number.MIN_VALUE;
  }

  const heightDiff = leftHeight - rightHeight;

  if (Math.abs(heightDiff) > 1) {
    return Number.MIN_VALUE;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}


function booleanCheck(root) {
  return checkBalanced(root) !== Number.MIN_VALUE;
}

console.log(booleanCheck(root));