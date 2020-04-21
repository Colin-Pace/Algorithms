class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let one = new Node("A");
let two = new Node("B");
let three = new Node("C");
let four = new Node("D");
let five = new Node("E");
one.next = two;
two.next = three;
three.next = four;
four.next = five;

let storage = [];
function recursiveTraversal(node) {
  if (node.next === undefined) {
    storage.push(node.data);
    return;
  } else {
    storage.push(node.data);
    recursiveTraversal(node.next);
  }
  return storage;
}
console.log(recursiveTraversal(one));
