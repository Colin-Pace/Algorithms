/*
Given a binary tree, return all the root to leaf paths.


Tree structure

          1
    4           4
      2       2
    1       6    8
                1  3
*/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let treeRoot = new Node(1);
let firstLeft = new Node(4);
let firstRight = new Node(4);
let secondLeft = new Node(2);
let secondRight = new Node(2);
let thirdLeft = new Node(1);
let thirdRightOne = new Node(6);
let thirdRightTwo = new Node(8);
let fourthRightOne = new Node(1);
let fourthRightTwo = new Node(3);

treeRoot.left = firstLeft;
treeRoot.right = firstRight;
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

  fromRoot(root, listPath) {
    let temp = [];
    temp.push(root.data);

    if (!root.left && !root.right) return this.paths.push(temp);
    else {
      if (root.left) this.search(root.left, temp.slice());
      if (root.right) this.search(root.right, temp);
      return this.paths;
    }
  }

  search(Node, temp) {
    temp.push(Node.data);

    if (!Node.left && !Node.right) this.paths.push(temp);
    else {
      if (Node.left) this.search(Node.left, temp.slice());
      if (Node.right) this.search(Node.right, temp.slice());
    }
  }
}

let searchTreeForPath = new TreePaths;

console.log(searchTreeForPath.fromRoot(treeRoot));
