/*
Implement a node class, collect them in an array,
  and then set their next attributes to the next node
*/
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
function collectionOfNodes(number) {
  let result = [];
  for (let i = 0; i < number; i++) {
    result.push(new _Node(i, null, null));
  }
  return linkNodes(result);
}
function linkNodes(collection) {
  for (let i = 0; i < collection.length - 1; i++) {
    let setNext = collection[i]['next'] = collection[i+1];
  }
  console.log(collection);
}
collectionOfNodes(5);
