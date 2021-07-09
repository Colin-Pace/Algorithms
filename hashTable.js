/* Big O of the methods
1. Hash
    a. Time: O(n)
    b. Space: O(n)
2. Set
    a. Time: O(n)
    b. Space: O(1)
3. Get
    a. Time: O(n)
    b. Space: O(1) */

    class HashTable {
      constructor(size = 200) {
        this.size = size;
        this.array = [];
      }
    
      hash(str) {
        let res = "";
        for (let i = 0; i < str.length; i++) {
          res += str.charCodeAt(i);
        }
        return Number(res) % this.size;
      }
    
      set(key, value) {
        const index = this.hash(key);
        const element = [key, value];
        const subArray = this.array[index];
    
        if (!subArray) {
          this.array[index] = element;
        
        } else {
          let keyExists = false;
        
          for (let i = 0; i < subArray.length; i++) {
            if (subArray[i] === key) {
              keyExists = true;
              subArray[1] = value;
            }
          }
    
          if (!keyExists) {
            subArray.push(element);
          }
        }
      }
    
      get(key) {
        const index = this.hash(key);
        const subArray = this.array[index];
    
        if (!subArray) {
          return null;
       
        } else {
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