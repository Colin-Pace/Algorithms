/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(data) {
    if (!data) return null;
    else if (!this.head) this.head = new Node(data);
    else {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    if (!this.head) return null;
    else {
      let node = this.head;
      this.head = this.head.next;
      node.next = null;
      return node;
    }
  }

  validate(array) {
    if (array.length === 0) return null;
    const l = array.length;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '(' || array[i] === '[' || array[i] === '{') {

        this.push(array[i]);
      } else {
        const node = this.pop();

        if (array[i] === ')' && node.data === '(') continue;
        else if (array[i] === ']' && node.data === '[') continue;
        else if (array[i] === '}' && node.data === '{') continue;
        else return false;
      }
    }
    return true;
  }
}

const inputOne = ['(', ')'];
const inputTwo = ['(', ')', '[', ']', '{', '}'];
const inputThree = ['(', ']'];
const inputFour = ['(', '[', ')', ']'];
const inputFive = ['{', '[', ']', '}'];

const parentheses = new Stack;

console.log(parentheses.validate(inputOne));
console.log(parentheses.validate(inputTwo));
console.log(parentheses.validate(inputThree));
console.log(parentheses.validate(inputFour));
console.log(parentheses.validate(inputFive));
