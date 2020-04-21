/*
Write a function that,
    accepts a string as input, and,
    returns as output an array that contains,
        an object,
            whose keys are the indices of the first item,
                of successive pairs of non-space items, and,
            whose values are the pairs of non-space items, and,
        a string,
            of each non-space odd character in the input, and,
                this is to be done by indexing the object, and,
        an array of objects, and,
            each object is to have one pair,
                whose key is the letter of each non-space item, and,
                whose value is its index if no spaces were in the input
*/
let input = "The HTTP object methods and status codes are fun";
function serverClientDataStructures(input) {
    let result = [];
    let string = "";
    let altItems = {};
    let oddItems = "";
    let alphanumericIndices = [];

    for (let item = 0; item < input.length; item++) {
        if (input[item] === " ") {
            continue;
        } else {
            string += input[item];
        }
    }

    for (let item = 0; item < string.length - 1; item += 2) {
        let altArray = [];
        let value = string[item];
        let nextValue = string[item+1];
        altArray.push(value, nextValue);
        altItems[item] = altArray;
    }
    result.push(altItems);

    for (let item in altItems) {
        let letter = altItems[item][1];
        oddItems += letter;
    }
    result.push(oddItems);

    for (let item = 0; item < string.length; item++) {
        let object = {};
        let index = string[item];
        object[index] = item;
        alphanumericIndices.push(object);
    }
    result.push(alphanumericIndices);

    return result;
}
console.log(serverClientDataStructures(input));
