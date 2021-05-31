// Find the longest, palindromic substring

function expand(str, low, high) {
  const len = str.length;
  let temp = low;
  const tempTwo = high;
  
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

  const setMaxLength = function() {
    if (currLength > maxLength) {
      maxLength = currLength;
      maxStr = currStr;
    }
  }
  
  for (let i = 0; i < len; i++) {
    currStr = expand(str, i, i);
    currLength = currStr.length;
    setMaxLength();
    
    currStr = expand(str, i, i + 1);
    currLength = currStr.length;
    setMaxLength();
  }

  return maxStr;
}

const str = "ABDCBCDBDCBBC";
const strTwo = "bananas";
console.log(findLongestPalindromicSubstring(str, str.length - 1));
console.log(findLongestPalindromicSubstring(strTwo, strTwo.length - 1));