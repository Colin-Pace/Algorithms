/*

File structure
1. Discussion of a Google example coding interview
2. Fail and pass code implementation



Collection of numbers _______

1. Prompt: Given a collection of ascending negative and positive
    integers, including repetitions, find a pair whose sum matches
      a given search number (later: ... return a Boolean)


2. E.g.,

  a. Failing

    Input: [1, 2, 3, 9]
    Output: 8

  b. Passing

    Input: [1, 2, 4, 4]
    Output: 8


3. Analysis and synthesis
    a. Nested for loops has a quadratic runtime
    b. Iterate and binary search for complement
        1. Binary search is logarithmic for a loop in a sorted list
    c. Start with a pair of numbers and work in - 'bounding'
        1. Largest possible sum is last two values
        2. Smallest possible sum is first two
        3. Range of possible values are bounds ...
            1. Their difference gives the smallest possible sum
            2. If it's not the given search integer ...
                1. If the sum is larger, move r one index less
                2. If it's smaller, move l one index greater
                3. Moving just one pointer makes this linear
            3. The iteration could end either if the pair is found
                  or if the pointers cross a strict comparison of
                  if the low is lower than the high pointer
                      1. I.e., as soon as the pointers are at
                          the same element, then their
                          difference cannot be guaranteed
                      2. If by this point, the sum is not found,
                          return a negative Boolean
    d. Interviewer: Compare pair iteration to binary search
        1. With binary search, it was a log operation for finding
            every element
        2. With iteration, the scan happens once -- it's linear


4. Coding
    a. What to return?
        1. Boolean
            1. Build a data structure to denote found or not
            2. Return an object of {Boolean:'found', pair:[i, j]}
    b.
      function hasPairWithSum(array, sum) {
        let low = 0
        let high = array.length - 1
        while (low < high) {  // this also precludes empty search
            let s = data[low] + data[high]
            if (s === sum) {
              return true
            } else {

            }
        }
      }
    c. Interviewer: a wrench in the problem arose ...
          1. There is no longer a guarantee of sorted collection
    d. New method:
        1. To sort it would require O(n log n)
        2. Instead, iterate and compare and store complements
            1. 'as I go, ask ...
                  have I seen the complement in the past'
            2. To achieve this
                1. With iteration
                    1. Store complement of current
                        2. A hash table has a constant look up time
                            1. Interviewer: Is a key needed?
                            2. No. So, a hash set could be better
                    3. Being careful about repeated elements
                        1. Check for complement before insertion
                            1. Finds repetition that achieves sum
*/
let one = [1, 2, 3, 9];
let two = [1, 2, 4, 4];
function hasPairWithSum(collection, searchInteger) {
  let hashSet = new Set();
  for (let i = 0; i < collection.length; i++) {
    if (hashSet.has(collection[i])) {
      return true;
    } else {
    hashSet.add(searchInteger - collection[i]);
    }
  }
  return false;
}
console.log(hasPairWithSum(one, 8));
console.log(hasPairWithSum(two, 8));
