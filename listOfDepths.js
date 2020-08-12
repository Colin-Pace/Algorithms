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

root.left = b; root.right = g;
b.left = a; b.right = c;
c.right = d;
g.left = f; g.right = i;
f.left = e;
i.right = j;

function listOfDepths(root) {
  let result = [];
  let current = [];
  if (root !== null) current.push(root);

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
      let temp = parents.pop();
      if (temp.left !== null) current.push(temp.left);
      if (temp.right !== null) current.push(temp.right);
    }
  }
  return makeArray(result);
}

function makeArray(array) {
  let result = [], temp = [];
  for (let s = 0; s < array.length; s++) {
    if (array[s] === " ") result.push(temp), temp = [];
    else temp.push(array[s]);
  }
  return result
}

console.log(listOfDepths(root));
