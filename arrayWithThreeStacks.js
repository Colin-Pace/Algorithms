// Implement three stacks in a single array

class Stack {
  constructor() {
    this.array = [];
    this.stackOneSize = 0;
    this.stackTwoSize = 0;
    this.stackThreeSize = 0;
  }

  push(stack, data) {
    if (stack === 3) {
      this.array.push(data);
      this.stackThreeSize += 1;
    } else if (stack === 2) {
      let location = this.array.length - (this.stackThreeSize);
      this.array.splice(location, 0, data)
      this.stackTwoSize += 1;
    } else {
      let location = this.array.length - (this.stackTwoSize + this.stackThreeSize);
      this.array.splice(location, 0, data)
    }
  }

  pop(stack, data) {
    if (stack === 3) {
      if (this.stackThreeSize === 0) {
        return "Stack empty";
      } else {
        this.stackThreeSize -= 1;
        return this.array.pop();
      }
    } else if (stack === 2) {
      if (this.stackTwoSize === 0) {
        return "Stack empty";
      } else {
        this.stackTwoSize -= 1;
        let location = this.array.length - (this.stackThreeSize + 1);
        return this.array.splice(location, 1);
      }
    } else {
      if (this.StackOneSize === 0) {
        return "Stack empty";
      } else {
        this.stackOneSize -= 1;
        let location = this.array.length - (this.stackTwoSize + 1);
        return this.array.splice(location, 1)
      }
    }
  }
}

let ThreeStacks = new Stack();
ThreeStacks.push(3, "A");
ThreeStacks.push(3, "A");
ThreeStacks.push(3, "A");
ThreeStacks.push(2, "B");
ThreeStacks.push(1, "C");
console.log(ThreeStacks.pop(2));
console.log(ThreeStacks.pop(2));
console.log(ThreeStacks.pop(3));
console.log(ThreeStacks.array);
