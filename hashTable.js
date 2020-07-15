class Dictionary {
  constructor(size = 200) {
    this.size = size;
    this.array = [];
  }

  hash(str) {
    let resultString = "";
    const l = str.length;
    for (let i = 0; i < l; i++) {
      resultString += str.charCodeAt(i);
    }
    return Number(resultString) % this.size;
  }

  get(key) {
    let index = this.hash(key);
    let subArray = this.array[index];
    if (subArray === undefined) return undefined;
    const l = subArray.length;
    for (let i = 0; i < l; i++) {
      if (subArray[i] === key) {
        return subArray[1];
      }
    }
    return undefined;
  }

  set(key, value) {
    let index = this.hash(key);
    let subArrayItem = [key, value];
    let subArray = this.array[index];
    if (subArray === undefined) {
      this.array[index] = subArrayItem;
    } else {
      let keyAlreadyExists = false;
      const l = subArray.length;
      for (let i = 0; i < l; i++) {
        if (subArray[i] === key) {
          keyAlreadyExists = true;
          subArray[1] = value;
        }
      }
      if (!keyAlreadyExists) {
        this.array[index].push(subArrayItem);
      }
    }
    return index;
  }
}

let dictionary = new Dictionary();

const a = dictionary.set('abcde', 123);
const b = dictionary.set('abcde', 321);
console.log(dictionary);
