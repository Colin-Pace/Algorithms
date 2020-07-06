/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"*/

function searchAndReplace(str, arg, arg_) {
  let l = str.length, len = arg.length, len_ = arg_.length, result = "";

  for (let i = 0; i < l; i++) {
    if (str[i] === arg[0]) {

      for (let j = 0; j < len; j++) {
        if (str[i + j] === arg[j]) {

          if (j === len - 1) {
            let upper = true;
            
            if (arg[0] !== arg[0].toUpperCase()) {
              result += arg_[0].toLowerCase();
            } else result += arg_[0].toUpperCase();
            j = 1;

            while (j < len_) {
              result += arg_[j];
              j++;
            }
            i += len - 1;
          }

        } else {
          result += str[i];
          break;
        }
      }

    } else {
      result += str[i];
    }
  }

  return result;
}

const inputOne = "Let us go to the store.";
const inputOne_ = "store";
const inputOne__ = "mall";

const inputTwo = "He is Sleeping on the couch.";
const inputTwo_ = "Sleeping";
const inputTwo__ = "sitting";

const inputThree = "This has a spellngi error.";
const inputThree_ = "spellngi";
const inputThree__ = "spelling";

const inputFour = "His name is Tom.";
const inputFour_ = "Tom";
const inputFour__ = "john";

console.log(searchAndReplace(inputOne, inputOne_, inputOne__));
console.log(searchAndReplace(inputTwo, inputTwo_, inputTwo__));
console.log(searchAndReplace(inputThree, inputThree_, inputThree__));
console.log(searchAndReplace(inputFour, inputFour_, inputFour__));
