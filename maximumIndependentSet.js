/* Maximum independent set
1. Given a binary tree, find the size of the maximum independent set
2. https://www.techiedelight.com/maximum-independent-set-problem/ */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function findMaximumIndependentSet(root, map) {
  if (root === null) {
    return 0;
  } else if (map[root] === null) {
    return map[root];
  } else {
    const excl = findMaximumIndependentSet(root.left, map) +
                    findMaximumIndependentSet(root.right, map);
    
    let incl = 1;
    if (root.left !== null) {
      incl += findMaximumIndependentSet(root.left.left, map) +
              findMaximumIndependentSet(root.left.right, map);
    }

    if (root.right !== null) {
      incl += findMaximumIndependentSet(root.right.left, map) +
              findMaximumIndependentSet(root.right.right, map);
    }

    map[root] = Math.max(excl, incl);
    return map[root];
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);
root.right.left.left = new Node(7);
root.right.left.right = new Node(8);

const map = {};
console.log(findMaximumIndependentSet(root, map));