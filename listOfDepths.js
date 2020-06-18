/*
Given a binary tree, create a two dimensional array. Each sub array is to contain the nodal data at each depth

Example,

Input
                5
          2           8
        1   3       7   9
              4   6      10


Output
[ [ 5 ], [ 2, 8 ], [ 7, 9, 1, 3 ], [ 4, 10, 6 ] ]
*/
class _TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

let root = new _TreeNode(5, null, null);
let a = new _TreeNode(1, null, null);
let b = new _TreeNode(2, null, null);
let c = new _TreeNode(3, null, null);
let d = new _TreeNode(4, null, null);
let e = new _TreeNode(6, null, null);
let f = new _TreeNode(7, null, null);
let g = new _TreeNode(8, null, null);
let i = new _TreeNode(9, null, null);
let j = new _TreeNode(10, null, null);

root.left = b; root.right = g;
b.left = a; b.right = c;
c.right = d;
g.left = f; g.right = i;
f.left = e;
i.right = j;

function listOfDepths(root) {
    let result = [];
    let current = [];
    if (root !== null) {
        current.push(root);
    }

    while (current.length) {
        let parents = [];
        for (let s = 0; s < current.length; s++) {
            parents.push(current[s]);
        }

        while (current.length) {
            let temp = current.shift();
            result.push(temp.data);
        }

        result.push(" ");
        while (parents.length) {
            let temp = parents.pop()
            if (temp.left !== null) {
                current.push(temp.left);
            }
            if (temp.right !== null) {
                current.push(temp.right);
            }
        }
    }
    return makeTwoDimensionalArray(result);
}

function makeTwoDimensionalArray(array) {
    let result = [];
    let temp = [];
    for (let s = 0; s < array.length; s++) {
        if (array[s] === " ") {
            result.push(temp);
            temp = [];
        } else {
            temp.push(array[s]);
        }
    }
    return result
}
console.log(listOfDepths(root));
