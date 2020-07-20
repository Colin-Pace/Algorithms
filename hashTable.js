class HashTable {
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

  set(key, value) {
    const index = this.hash(key);
    const item = [key, value];
    const subArray = this.array[index];

    if (!subArray) this.array[index] = item;
    else {
      let keyExists = false;
      const l = subArray.length;
      for (let i = 0; i < l; i++) {
        if (subArray[i] === key) {
          key = true;
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
      const l = subArray.length;
      for (let i = 0; i < l; i++) {
        if (subArray[i] === key) {
          return subArray[1];
        }
      }
      return null;
    }
  }
}

let hashTable = new HashTable();

hashTable.set("Fortran", 123);
hashTable.set("Fortran", 321);
console.log(hashTable);
console.log(hashTable.get("Fortran"))
