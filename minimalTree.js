/* Create a binary search tree with minimal height,
from a sorted array of increasing order */

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function minimalTree(array, start, end) {
  if (end < start) {
    return null;
  } else {
    let mid = Math.floor((start + end) / 2);
    let n = new Node(array[mid]);
    console.log(mid+1);
    n.left = minimalTree(array, start, mid - 1);
    n.right = minimalTree(array, mid + 1, end);
  }
}

minimalTree(input, 0, input.length - 1);
