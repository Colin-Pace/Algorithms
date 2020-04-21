/*
Given an arrayay with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

function mergeSort (array) {
    if (array.length < 2) {
      return array;
    }

    let mid = Math.floor(array.length / 2);
    let subLeft = mergeSort(array.slice(0, mid));
    let subRight = mergeSort(array.slice(mid));

    function merge (left, right) {
        let result = [];

        while (left.length > 0 && right.length > 0) {
            result.push(left[0] < right[0] ? left.shift() : right.shift());
        }

        return result.concat(left.length ? left : right);
    }

    return merge(subLeft, subRight);
}

let array = [2,0,2,1,1,0];
console.log(mergeSort(array))
