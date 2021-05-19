/* Word break
1. Given a string and a list of words, determine if the string can be segmented into a space separated sequence of one or more of the list of words
2. https://www.techiedelight.com/word-break-problem/#:~:text=Word%20Break%20Problem%3A%20Given%20a,one%20or%20more%20dictionary%20words.&text=The%20idea%20is%20to%20use%20recursion%20to%20solve%20this%20problem.
*/

const dict = ["this", "th", "is", "famous", "Word", "break", "b", "r", "e", "a", "k", "br", "bre", "brea", "ak", "problem"];
const str = "Wordbreakproblem";

function wordBreak(dict, str, out) {
  if (!str.length) {
    console.log(out);
    return;
  } else {
    for (let i = 1; i <= str.length; i++) {
      const prefix = str.substring(0, i);
      if (dict.includes(prefix)) {
        wordBreak(dict, str.substring(i), out + " " + prefix);
      }
    }
  }
}
wordBreak(dict, str, "");

/*
str.length = 16
1.4. str = Wordbreakproblem, out = ""
  2.1. str = breakproblem, out = Word
    2.1.1. str = reakproblem, out = Word b
      2.1.1.1. str = eakproblem, out = Word b r
        2.1.1.1.1. str = akproblem, out = Word b r e
          2.1.1.1.1.1. str = kproblem, out = Word b r e a
            2.1.1.1.1.1.1. str = problem, out = Word b r e a k
              ...
              2.1.1.1.1.1.16. str.length = 0, out = Word b r e a k problem, console and return
        2.1.1.1.2. str = problem, out = Word b r e ak
          ...
          2.1.1.1.16 str = 0, out = Word b r e ak problem, console and return
  2.2. str = eakproblem, out = Word br
    2.2.1. str = akproblem, out = Word br e
      2.2.1.1. str = kproblem, out = Word br e a
        2.2.1.1.1. str = problem, out =  Word br e a k
          ...
          2.2.1.1.16. str.legnth = 0, out = Word br e a k problem, console and return
    2.2.2. str = kproblem, out = Word br e ak
      ...
      2.2.2.16. str.length = 0, out = Word br e ak problem, console and return
...
*/

function wordBreakVariationMemoized(dict, str, lookup) {
  const n = str.length;
  if (str.length === 0) {
    return true;
  } else if (!(n in lookup)) {
    lookup[n] = 0;
    for (let i = 1; i <= n; i++) {
      const prefix = str.substring(0, i);
      if (dict.includes(prefix) && 
          wordBreakVariationMemoized(dict, str.substring(i), lookup)) {
            lookup[n] = 1;
            return true;
      }
    }
    return lookup[n] === 1;
  } 
}
console.log(wordBreakVariationMemoized(dict, str, {}));