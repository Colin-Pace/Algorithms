// Given a nested list of integers, implement an iterator to flatten it. Each element is either an integer, or a list -- whose elements may also be integers or other lists.

let result = [];
function flattenLists(list) {
  const l = list.length;
  for (let i = 0; i < l; i++) {
    if (Array.isArray(list[i])) flattenLists(list[i]);
    else result.push(list[i]);
  }
  return result;
}

const input = [[1, 1], 2, [1, 1]];
const input_ = [1, [4, [6]]];
console.log(flattenLists(input));
result = [];
console.log(flattenLists(input_));
