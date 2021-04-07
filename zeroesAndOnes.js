/* LeetCode ones and zeroes: 
    1. https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3694/ 
    2. Modification: Assume an equal to or fewer than 26 number of strings in the given list

Authors:
    1. Algorithm and complexity analysis: Michael Pace
    2. Program: Colin Pace          */


const strs = ["10","0001","111001","1","0"];
const m = 5; // 0
const n = 3; // 1

const strs_ = ["10","0","1"];
const m_ = 1;
const n_ = 1;

let memo = {};

function hash(listOfStrings) {
    const l = listOfStrings.length;
    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < l; i++) {
        result += alphabet[i];
        result += listOfStrings[i];
    }
    return result;
}

function onesZeroes(o, z, strs, depth) {
    let deepest = depth;
    const l = strs.length;

    if (o < 0 || z < 0 || strs.length === 0) {
        return depth;
    
    } else if (hash(strs) in memo) {
        return memo[hash(strs)];
    
    } else {
        const stringCount = function(str, int) {
            const l = str.length;
            let count = 0;

            for (let i = 0; i < l; i++) {
                if (int === 0 && str[i] === String(0)) {
                    count++;
                } else if (int === 1 && str[i] === String(1)) {
                    count++;
                }
            }
            
            return count;
        }

        const removeString = function(strs, ind) {
            let makeList = [];
            const l = strs.length;
            for (let i = 0; i < l; i++) {
                if (i !== ind) {
                    makeList.push(strs[i]);
                } else {
                    continue;
                }
            }
            
            return makeList;
        } 

        let newO;
        let newZ;
        let newList;

        for (let i = 0; i < l; i++) {
            newO = o - stringCount(strs[i], 0);
            newZ = z - stringCount(strs[i], 1);
            newList = removeString(strs, i);
            
            if (newO < 0 || newZ < 0) {
                continue;
            } else {
                deepest = Math.max(deepest, onesZeroes(newO, newZ, newList, depth + 1));
            }
        }
    }
    
    memo[hash(strs)] = deepest;
    return deepest;
}

function onesAndZeroes(o, z, arrayOfIntegerStrings) {
    memo = {};
    return onesZeroes(o, z, arrayOfIntegerStrings, 0);
}

console.log(onesAndZeroes(m, n, strs));         // expects 4
console.log(onesAndZeroes(m_, n_, strs_));      // expects 2
console.log(memo);

/* Complexity analysis
    1. Time: O ( |k| + |v| )
    2. Space: O ( n + |v| ), where n is the number of elements in the given list and |v| is the size the memo */

/* 
Method: Iterate through a list and, after having taken out the current element, recurse on the new list, in order to create a set of all possible combinations of elements in the list


Another example with most of the recursive steps enumerated with the variables' structure
[ 00, 11, 0, 1, " ", 00000, 111 ]

o = 1s, allowance = 3
z = 0s, allowance = 3


                                          1
                                         /
                                        2 
                                      /   \
                    3                               17     
             /   \     \                           /     \
            4     9     12                       18       23 ....
          /  \     \     \    \                 /  \          
         5    7     10    13   15             19    21
        /       \     \     \    \           /         \   
       6         8     11    14   16       20           22


1.
depth   0
o       3
z       3
strs    [00, 11, 0, 1, " ", 00000, 111]
deepest 0, 5

2.
depth   1
o       3
z       1
strs    [11, 0, 1, " ", 00000, 111]
deepest 1, 5

3.
depth   2
o       1, (-2)
z       1, (-4)
strs    [0, 1, " ", 00000, 111]
deepest 2, 5

4.
depth   3
o       1, (-3)
z       0, (-5)
strs    [1, " ", 00000, 111]
deepest 3, 5

5.
depth   4
o       0, (-3)
z       0, (-5)
strs    [" ", 00000, 111]
deepest 4, 5

6.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5

___________________________
7.
depth   4
o       0, (-3)
z       0, (-5)
strs    [" ", 00000, 111]
deepest 4, 5

8.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5

___________________________
9.
depth   3
o       0, (-3)
z       1, (-4)
strs    [0, " ", 00000, 111]
deepest 3, 5

10.
depth   4
o       0, (-3)
z       0, (-5)
strs    [" ", 00000, 111]
deepest 4, 5

11.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5

___________________________
12.
depth   3
o       1, (-2)
z       1, (-4)
strs    [0, 1, 00000, 111]
deepest 3, 5

13.
depth   4
o       1, (-2)
z       0, (-5)
strs    [1, 00000, 111]
deepest 4, 5

14.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5
___________________________
15. 
depth   4
o       0, (-3)
z       1, (-4)
strs    [0, 00000, 111]
deepest 4, 5

16.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 4, 5

___________________________
17.
depth   2
o       3
z       0
strs    [11, 1, " ", 00000, 111]
deepest 2, 5

18.
depth   3
o       1, (-2)
z       0, (-5)
strs    [1, " ", 00000, 111]
deepest 3, 5

19.
depth   4
o       0, (-3)
z       0, (-5)
strs    [" ", 00000, 111]
deepest 3, 5

20.
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5

___________________________
21. 
depth   4
o       1, (-2)
z       0, (-5)
strs    [1, 00000, 111]
deepest 4, 5

22. 
depth   5
o       0, (-3)
z       0, (-5)
strs    [00000, 111]
deepest 5

___________________________
23.
depth   3
o       2
z       0
strs    [11, " ", 00000, 111]
deepest 3

.... 
*/