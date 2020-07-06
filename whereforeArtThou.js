// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.


function whereforeArtThou(array, object) {
  const l = array.length, result = [];
  let count = 0, count_ = 0;

  for (let i in object) count++;

  for (let i = 0; i < l; i++) {
    for (let j in array[i]) {
      if (j in object && array[i][j] === object[j]) count_++;
      if (count_ === count) {
        result.push(array[i]);
        count_ = 0;
      }
    }
    count_ = 0;
  }

  return result;
}

const inputOne = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
const inputOne_ = { last: "Capulet" };

const inputTwo = [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }];
const inputTwo_ = { "apple": 1 };

const inputThree = [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }];
const inputThree_ = { "apple": 1, "bat": 2 };

const inputFour = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }];
const inputFour_ = { "apple": 1, "cookie": 2 };

const inputFive = [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }];
const inputFive_ = { "apple": 1, "bat": 2 };

const inputSix = [{"a": 1, "b": 2, "c": 3}];
const inputSix_ = {"a": 1, "b": 9999, "c": 3};

console.log(whereforeArtThou(inputOne, inputOne_));
console.log(whereforeArtThou(inputTwo, inputTwo_));
console.log(whereforeArtThou(inputThree, inputThree_));
console.log(whereforeArtThou(inputFour, inputFour_));
console.log(whereforeArtThou(inputFive, inputFive_));
console.log(whereforeArtThou(inputSix, inputSix_));
