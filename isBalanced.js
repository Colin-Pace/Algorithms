/*
Is balanced: Write a function that, given a string consisting only of the characters
  <, >, (, and ), returns whether the string is balanced.

  Examples of balanced strings:
          <>, (), (<>), <<<>>>(), ()<>

  Examples of not-balanced strings:
          <<, <), (())>, ><, )(, ><>, <<<>>(>)
*/

let a = '<>';
let b = '()';
let c = '(<>)';
let d = '<<<>>>()';
let e = '()<>';
let f = '<<';
let g = '<)';
let h = '(())>';
let i = '><';
let j = ')(';
let k = '><>';

// Implementation
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {

  push(data) {
    if (!this.top) {
      this.top = new _Node(data, null);
      return this.top.data;
    } else {
      let node = new _Node(data, this.top);
      this.top = node;
      return this.top.data;
    }
  }

  pop() {
    let node = this.top;

    if (!node) {
      return null;
    }

    this.top = node.next;
    return node.data;
  }

}
function isBalanced(string) {
  let array = string.split('');
  let stack = new Stack();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '<' || array[i] === '(') {
      stack.push(array[i]);
    } else {
      let poppedValue = stack.pop();

      if (array[i] === ')' && poppedValue === '(') {
        continue;
      } else if (array[i] === '>' && poppedValue === '<') {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.pop() === null;
}

function testIsBalanced(valid, invalid) {
  for (let i = 0; i < valid.length; i++) {
    if (!isBalanced(valid[i])) {
      console.log(valid[i] + ' should have been balanced but was not');
      return false;
    }
  }
  for (let i = 0; i < invalid.length; i++) {
    if (isBalanced(invalid[i])) {
      console.log(invalid[i] + ' should not have been balanced but it was');
      return false;
    }
  }
  return true;
}

let validTests = [a,b,c,d,e];
let invalidTests = [f,g,h,i,j,k];
console.log(testIsBalanced(validTests, invalidTests));
