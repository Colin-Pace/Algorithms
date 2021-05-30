/* Longest common substring problem
1. Find the longest common string or strings that is or are substrings of two strings
2. https://www.techiedelight.com/longest-common-substring-problem/
*/

function longestCommonString(X, Y, m, n) {
  let maxLength = 0;
  let endingIndex = m;
  const table = new Array(m + 1).fill().map(
  () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          endingIndex = i;
        }
      }
    }
  }
  return X.substring(endingIndex - maxLength, endingIndex);
}
const X = "ABC";
const Y = "BABA";
console.log(longestCommonString(X, Y, X.length, Y.length));

/* Iterations (total of 12)
1.1.

table = [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

maxLength = 0
endingIndex = 3
i = 1, m = 3
j = 1, n = 4

X = "ABC"
Y = "BABA"

X[i - 1] = "A", Y[j - 1] = "B"

______________________________
1.2.

i = 1, m = 3
j = 2, n = 4

X[i - 1] = "A", Y[j - 1] = "A"
table = [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

maxLength = 1
endingIndex = 1

______________________________
1.3.

i = 1, m = 3
j = 3, n = 4

X[i - 1] = "A", Y[j - 1] = "B"

______________________________
1.4.

i = 1, m = 3
j = 4, n = 4

X[i - 1] = "A", Y[j - 1] = "A"
table = [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

maxLength = 1
endingIndex = 1

______________________________
2.1. 

i = 2, m = 3
j = 1, n = 4

X[i - 1] = "B", Y[j - 1] = "B"
table = [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

______________________________
2.2.

i = 2, m = 3
j = 2, n = 4

X[i - 1] = "B", Y[j - 1] = "A"

______________________________
2.3.

i = 2, m = 3
j = 3, n = 4

X[i - 1] = "B", Y[j - 1] = "B"
table = [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 0, 2, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]

endingIndex = 2
maxLength = 2
______________________________
2.4.

i = 2, m = 3
j = 4, n = 4

X[i - 1] = "B", Y[j - 1] = "A"

______________________________
3.1.

i = 3, m = 3
j = 1, n = 4

X[i - 1] = "C", Y[j - 1] = "B"

______________________________
3.2.

i = 3, m = 3
j = 2, n = 4

X[i - 1] = "C", Y[j - 1] = "A"

______________________________
3.3.

i = 3, m = 3
j = 3, n = 4

X[i - 1] = "C", Y[j - 1] = "A"

______________________________
3.4.

i = 3, m = 3
j = 4, n = 4

X[i - 1] = "C", Y[j - 1] = "A"

final table = [0, 0, 0, 0, 0],
              [0, 0, 1, 0, 1],
              [0, 1, 0, 2, 0],
              [0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0]

endingIndex = 2
maxLength = 2

substring of "ABC" from endingIndex (= 2) minus maxLength (= 2), to (but not including) endingIndex (= 2),
is the return, "AB"

*/