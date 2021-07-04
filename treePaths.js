/* Tree paths from root to leaf

Big O
1. Recursive
    1. Time: O(b), where b is the number of nodes in the tree
    2. Space: O(b) 
2. Iterative
    1. Time: O(b)
    2. Space: O(b)

Tree
          1
       /     \
      4       4
       \      /
       2     2
      /    /  \   
     1    6    8
              /  \
             1    3       */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let root = new Node(1);
let firstLeft = new Node(4);
let firstRight = new Node(4);
let secondLeft = new Node(2);
let secondRight = new Node(2);
let thirdLeft = new Node(1);
let thirdRightOne = new Node(6);
let thirdRightTwo = new Node(8);
let fourthRightOne = new Node(1);
let fourthRightTwo = new Node(3);

root.left = firstLeft;
root.right = firstRight;
firstLeft.right = secondLeft;
firstRight.left = secondRight;
secondLeft.left = thirdLeft;
secondRight.left = thirdRightOne;
secondRight.right = thirdRightTwo;
thirdRightTwo.left = fourthRightOne;
thirdRightTwo.right = fourthRightTwo;


class TreePaths {
  constructor() {
    this.paths = [];
  }

  treePaths(root) {
    let temp = [];
    temp.push(root.data);
    if (!root.left && !root.right) {
      this.paths.push(temp);
    
    } else {
      if (root.left) {
        this.search(root.left, temp.slice());
      
      } if (root.right) {
        this.search(root.right, temp);
      }
    }
    
    return this.paths;
  }

  search(node, temp) {
    temp.push(node.data);
    if (!node.left && !node.right) {
      return this.paths.push(temp);
    
    } else {
      if (node.left) {
        this.search(node.left, temp.slice());
      
      } if (node.right) {
        this.search(node.right, temp.slice());
      }
    }
  }

  iterative(node) {
    const stack = [];
    const lists = [[]];
    let idx = 0;

    stack.push(node);
    while (stack.length) {
      const vertex = stack.pop();
      lists[idx].push(vertex.data);

      if (vertex.left === undefined && vertex.right === undefined) {
        idx++;
        continue;
      }

      if (vertex.left && vertex.right) {
        const list = lists[idx].slice();
        lists.push(list);
      }

      if (vertex.right) {
        stack.push(vertex.right);
      }

      if (vertex.left) {
        stack.push(vertex.left);
      }
    }

    return lists;
  }
}


let tree = new TreePaths;

console.log(tree.treePaths(root));
console.log(tree.iterative(root));