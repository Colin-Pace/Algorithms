/*
Given a binary tree, return all the root to leaf paths.


Tree structure

          1
    4           4
      2       2
    1       6    8
                1  3
*/

class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let treeRoot = new TreeNode(1);
let firstLeft = new TreeNode(4);
let firstRight = new TreeNode(4);
let secondLeft = new TreeNode(2);
let secondRight = new TreeNode(2);
let thirdLeft = new TreeNode(1);
let thirdRightOne = new TreeNode(6);
let thirdRightTwo = new TreeNode(8);
let fourthRightOne = new TreeNode(1);
let fourthRightTwo = new TreeNode(3);
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

  makeListOfPaths(root, listPath) {
    let temp = [];
    temp.push(root.data);

    if (!root.left && !root.right) {
      this.paths.push(temp);
    }

    if (root.left) {
      this.search(root.left, temp.slice());
    }

    if (root.right) {
      this.search(root.right, temp);
    }

    return this.paths;
  }

  search(TreeNode, temp) {
    temp.push(TreeNode.data);

    if (!TreeNode.left && !TreeNode.right) {
      this.paths.push(temp);
    }

    if (TreeNode.left) {
      this.search(TreeNode.left, temp.slice());
    }

    if (TreeNode.right) {
      this.search(TreeNode.right, temp.slice());
    }
  }
}


let searchTreeForPath = new TreePaths;

console.log(searchTreeForPath.makeListOfPaths(treeRoot));
