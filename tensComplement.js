/* Given an array of integers, write a function that returns true if every integer has a ten's complement present in the array, i.e., another element that, when added to this element, sums to 10. Two elements cannot share a ten's complement. */


function tensComplement(integers) {
    const seen = {};
    const l = integers.length;
    
    if (l % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < l; i++) {
        const complement = 10 - integers[i];
       
        if (integers[i] in seen) {
            if (seen[integers[i]] === 0) {
                seen[integers[i]]++;
            } else {
                seen[integers[i]]--;
            }
        
            continue;
        }
        
        if (!(complement in seen)) {
            seen[complement] = 1;
        }

    }
    
    for (let element in seen) {
        if (seen[element] !== 0) {
            return false;
        }
    }

    return true;
}

/* Examples
    1. True: [3, 100, -90, 7], [5, 5, 5, 5]
    2. False: [5, 5, 5], [3, 7, 2, 8, 1, 5] */

console.log(tensComplement([3, 100, -90, 7]));
console.log(tensComplement([5, 5, 5, 5]));
console.log(tensComplement([5, 5, 5]));
console.log(tensComplement([3, 7, 2, 8, 1, 5]));