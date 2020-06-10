// Check if a linked list is a palindrome

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    let node = this.head;
    if (!node) this.head = new Node(data);
    else {
      let runner = this.head;
      while (runner.next) runner = runner.next;
      runner.next = new Node(data);
    }
  }

  checkPalindrome(list) {
    let letters = [];
    let runner = this.head;
    while (runner.next) {
      letters.push(runner.data);
      runner = runner.next;
    }

    letters.push(runner.data);
    let start = 0;
    let end = letters.length - 1;
    let mid = Math.floor(letters.length / 2);
    while (start < mid) {
      if (letters[start] !== letters[end]) return false;
      else {
        start++;
        end--;
      }
    }
    return true;
  }
}

const palindrome = new LinkedList;
const notPalindrome = new LinkedList;
const isPalindrome = ['r','a','c','e','c','a','r'];
const isNotPalindrome = ['n','o','t','r','a','c','e','c','a','r'];
isPalindrome.forEach(letter => palindrome.add(letter));
isNotPalindrome.forEach(letter => notPalindrome.add(letter));
console.log(palindrome.checkPalindrome(palindrome));
console.log(notPalindrome.checkPalindrome(isNotPalindrome));
