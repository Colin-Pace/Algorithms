/* LeetCode ones and zeroes: 
    1. https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3694/ 
    2. Modification: Assume an equal to or fewer number of strings in the given list

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
    2. Space: O ( ( |k| + |v| ) * 2 )
*/