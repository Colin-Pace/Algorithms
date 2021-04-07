/* Write a function that, given a list of strings, batches them into lists where each output list doesn't contain any duplicate strings. Minimize the number of output lists generated, and wrap them in a single list. So the output is a list of lists, where each sub-list doesn't have any duplicates. For instance, given the input ['a', 'b', 'c', 'b'], the function might return [['a', 'b', 'c'], ['b']]. Given the input ['a', 'b', 'c'], the function would return [['a', 'b', 'c']]. And given the input ['a', 'b', 'c', 'b', 'c', 'b'], the function might return [['a', 'b', 'c'], ['b', 'c'], ['b']]. */


function uniqueLists(letters) {
    letterCount = {};
    const l = letters.length;
    let largest = 0;
    let result = [];

    for (let i = 0; i < l; i++) {
        if (!letterCount[letters[i]]) {
            letterCount[letters[i]] = 1;
        } else {
            letterCount[letters[i]]++;
        }
    }

    for (let element in letterCount) {
        if (letterCount[element] > largest) {
            largest = letterCount[element];
        }
    }

    for (let i = 0; i < largest; i++) {
        result.push([]);
    }

    for (let element in letterCount) {
        let i = 0;
        while (letterCount[element] > 0) {
            result[i].push(element);
            letterCount[element]--;
            i++;
        }
    }

    return result;
}


console.log(uniqueLists(['a', 'b', 'c', 'b']));
console.log(uniqueLists(['a', 'b', 'c']));
console.log(uniqueLists(['a', 'b', 'c', 'b', 'c', 'b']));