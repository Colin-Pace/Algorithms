class MyDictionary {

    constructor(size=200) {
        this.size = size;
        this.array = [];
    }

    hash(str) {
        var resultString = "";
        for (var i = 0; i < str.length; i++) {
            resultString += str.charCodeAt(i);
        }
        return Number(resultString) % this.size;
    }

    get(key) {
        let index = this.hash(key);
        let subArray = this.array[index];
        if (subArray == undefined) {
            return undefined;
        }
        for (var i = 0; i < subArray.length; i++) {
            let subArrayItem = subArray[i];
            if (subArrayItem[0] == key) {
                return subArrayItem[1];
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
            for (var i = 0; i < subArray.length; i++) {
                if (subArray[i][0] === key) {
                    keyAlreadyExists = true;
                    subArray[i][1] = value;
                }
            }
            if (!keyAlreadyExists) {
                this.array[index].push(subArrayItem);
            }
        }
    }
}

let myDictionary = new MyDictionary();

myDictionary.set('abcde', 123);
myDictionary.set('fghij', 456);
//console.log(myDictionary.get('employeeId'))

myDictionary.set('klmno', 789);
myDictionary.set('pqrst', 123);
//console.log(myDictionary.get('laksdjf'));

console.log(myDictionary);
