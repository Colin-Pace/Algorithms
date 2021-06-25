/* Big O of the methods
1. Hash
    a. Time: O(n)
    b. Space: O(n)
2. Set
    a. Time: O(n)
    b. Space: O(n)
3. Get
    a. Time: O(n)
    b. Space: O(n) */

class HashTable {
  constructor(size = 200) {
    this.size = size;
    this.array = [];
  }

  hash(str) {
    let resultString = "";
    for (let i = 0; i < str.length; i++) {
      resultString += str.charCodeAt(i);
    }
    return resultString % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const item = [key, value];
    const subArray = this.array[index];

    if (!subArray) this.array[index] = item;
    else {
      let keyExists = false;
      for (let i = 0; i < subArray.length; i++) {
        if (subArray[i] === key) {
          keyExists = true;
          subArray[1] = value;
        }
      }

      if (!keyExists) {
        subArray.push(item);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const subArray = this.array[index];

    if (!subArray) return null;
    else {
      for (let i = 0; i < subArray.length; i++) {
        if (subArray[i] === key) {
          return subArray[1];
        }
      }

      return null;
    }
  }
}

let hashTable = new HashTable();

hashTable.set("abcd", 1234);
hashTable.set("efgh", 5678);
console.log(hashTable.get("abcd"));
console.log(hashTable.get("efgh"));

hashTable.set("efgh", 1234);
console.log(hashTable.get("efgh"));
