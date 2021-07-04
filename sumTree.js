/* In-place convert a binary tree to a sum tree

Big O
1. Time: O(b), where b is the number of nodes in the tree
2. Space: O(h), where h is the height of the tree


https://www.techiedelight.com/inplace-convert-a-tree-sum-tree/  */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree {
  constructor() {
    this.root = undefined;
  }

  preOrder(node) {
    if (node === undefined) {
      return;
    
    } else {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  convertToSumTree(node) {
    if (node === undefined) {
      return 0;
    }

    const left = this.convertToSumTree(node.left);
    const right = this.convertToSumTree(node.right);

    const old = node.data;
    node.data = left + right;

    return node.data + old;
  }
}


const root = new Node(1);
root.left = new Node(2); 
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const tree = new BinaryTree;
tree.root = root;

tree.convertToSumTree(tree.root);
tree.preOrder(tree.root);

/*
              1
            /   \
          2       3
        /   \    /  \
      4      5  6     7        
      
      
            27
          /    \
         9      13
       /  \    /   \
      0    0  0     0     */