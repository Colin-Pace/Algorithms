/* Longest common prefix
1. Find the longest common prefix between two strings
2. https://www.techiedelight.com/find-longest-common-prefix-lcp-strings/ */

function longestCommonPrefix(X, Y) {
  let i = 0;
  let j = 0;
  
  while (i < X.length && j < Y.length) {
    if (X[i] !== Y[j]) {
      break;
    }
    i++;
    j++;
  }

  return X.substr(0, i);
}

function findLCP(words) {
  let prefix = words[0];
  for (let i = 0; i < words.length; i++) {
    prefix = longestCommonPrefix(prefix, words[i]);
  }

  return prefix;
}

const words = ["techie delight", "tech", "techie", "technology", "technical"];
console.log(findLCP(words));