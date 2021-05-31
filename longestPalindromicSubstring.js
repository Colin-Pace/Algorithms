// Find the longest, palindromic substring

function expand(str, low, high) {
  const len = str.length;
  
  while (low >= 0 && high < len && (str[low] === str[high])) {
    low--;
    high++;
  }
 
  return str.substr(low + 1, high - low - 1);
}

function findLongestPalindromicSubstring(str, len) {
  let maxStr = "";
  let currStr;
  let maxLength = 0;
  let currLength;

  const setMaxLengthAndStr = function() {
    if (currLength > maxLength) {
      maxLength = currLength;
      maxStr = currStr;
    }
  }
  
  for (let i = 0; i < len; i++) {
    currStr = expand(str, i, i);
    currLength = currStr.length;
    setMaxLengthAndStr();
    
    currStr = expand(str, i, i + 1);
    currLength = currStr.length;
    setMaxLengthAndStr();
  }

  return maxStr;
}

const str = "ABDCBCDBDCBBC";
const strTwo = "bananas";
console.log(findLongestPalindromicSubstring(str, str.length - 1));
console.log(findLongestPalindromicSubstring(strTwo, strTwo.length - 1));