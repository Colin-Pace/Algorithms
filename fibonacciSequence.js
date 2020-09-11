/* Class methods
1. Using recursion and memoization, return the fibonacci number of an integer
2. Iteratively, return the fibonacci number of an integer
3. Return the sum of all odd Fibonacci numbers less than or equal to an integer
4. Return the sum of all odd Fibonacci numbers for those less than or equal to the Fibonacci number of an integer */

class FibonacciSequence {
    recursive(int, memo) {
        memo = memo || {};
        if (typeof int !== typeof 1 || !int) return null;
        else if (memo[int]) return memo[int];
        else if (int < 1) return 0;
        else if (int <= 2) return 1;
        else {
            memo[int] = this.recursive(int - 1, memo) +
                        this.recursive(int - 2, memo);
            return memo[int];
        }
    }

    iterative(int) {
        if (typeof int !== typeof 1 || !int) return null;
        if (int <= 0) return 0;
        else if (int <= 2) return 1;
        else {
            let slow = 1, fast = 1;
            for (let i = 3; i <= int; i++) {
                let next = slow + fast;
                if (i === int) return next;
                else {
                    slow = fast;
                    fast = next;
                }
            }
        }
    }

    sumOfOddIntegersToInteger(int) {
        if (typeof int !== typeof 1 || !int) return null;
        else if (int <= 0) return 0;
        else if (int === 1) return 1;
        else if (int === 2) return 2;
        else {
            let fast = 1, slow = 1, next = 2;
            let oddSum = 2;
            while (next <= int) {
                next = fast + slow;
                slow = fast, fast = next;
                if (next > int) return oddSum;
                else if (next % 2 !== 0) oddSum += next;
            }
        }
    }

    sumOfOddIntegersToFibonacciNumber(int) {
        if (typeof int !== typeof 1 || !int) return null;
        else if (int <= 0) return 0;
        else if (int === 1) return 1;
        else if (int === 2) return 2;
        else {
            let fast = 1, slow = 1, next = 2;
            let oddSum = 2;
            for (let i = 3; i <= int; i++) {
                next = fast + slow;
                slow = fast, fast = next;
                if (next % 2 !== 0) oddSum += next;
                if (i === int) return oddSum;
            }
        }
    }

    verifyResults(results) {
        const l = results.length;
        for (let i = 0; i < l; i++) if (results[i] !== true) return false;
        return true;
    }
}

const sequence = new FibonacciSequence;
const results = [];

// Method one
results.push(sequence.recursive(10) === 55);

// Method two
results.push(sequence.iterative(10) === 55);

// Method three
results.push(typeof sequence.sumOfOddIntegersToInteger(1) === typeof 1);
results.push(sequence.sumOfOddIntegersToInteger(1000) === 1785);
results.push(sequence.sumOfOddIntegersToInteger(4000000) === 4613732);
results.push(sequence.sumOfOddIntegersToInteger(4) === 5);
results.push(sequence.sumOfOddIntegersToInteger(75024) === 60696);
results.push(sequence.sumOfOddIntegersToInteger(75025) === 135721);

// // Method four
results.push(sequence.sumOfOddIntegersToFibonacciNumber(10) === 99);

// Test class
console.log("All tests pass: " + sequence.verifyResults(results));
