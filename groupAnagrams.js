// Sort an terms of strings such that all the anagrams are next to each other

function bucketSort(terms) {
  let bucket = {}, result = [];
  for (let i = 0; i < terms.length; i++) {
    let word = terms[i];
    let letters = [], sorted = "";
    //let sorted = terms[i].split('').sort().join(''); short form

    for (let j = 0; j < word.length; j++) {
      letters.push(word[j]);
    }

    letters.sort();

    for (let j = 0; j < letters.length; j++) {
      sorted += letters[j];
    }

    if (sorted in bucket) {
      bucket[sorted].push(terms[i]);
    } else {
      bucket[sorted] = [terms[i]];
    }
  }

  for (let i in bucket) {
    for (let j in bucket[i]) {
      result.push(bucket[i][j]);
    }
  }

  return result;
}
const terms = ['tea', 'car', 'eat', 'arc', 'pi', 'rac', 'ate', 'ip'];
console.log(bucketSort(terms));
