/* Create a binary search tree with minimal height,
from a sorted list of increasing order 

Big O
1. Time: O(b), where b is size of the given list
2. Space: O(b)    */


class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


function minimalTreeRecursive(list, start, end) {
  if (end < start) {
    return null;
  } else {
    let mid = Math.floor((start + end) / 2);
    let n = new Node(list[mid]);
    n.left = minimalTreeRecursive(list, start, mid - 1);
    n.right = minimalTreeRecursive(list, mid + 1, end);
  }
}


let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
minimalTreeRecursive(input, 0, input.length - 1);