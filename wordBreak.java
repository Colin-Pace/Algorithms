/* LeetCode word break: Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. The same word in the dictionary may be reused multiple times in the segmentation. You may assume the dictionary does not contain duplicate words. */

public class WordBreak {
  static Boolean comparison(String[] dictionary, String letters) {
    letters = letters.toLowerCase();
    int l = letters.length();
    int i = 0;                                                     // s iterator

    while (i < l) {                                         // s iteration start
      int j = 0;                                     // dictionary word iterator
      int l_ = dictionary.length;
      int count = 0;                                // dictionary iterator count
      Boolean found = false;

      for (int k = 0; k < l_; k++) {               // dictionary iteration start
        if (dictionary[k].toLowerCase().charAt(j) == letters.charAt(i)) {
          int m = i;       // s iterator for comparison; preserves i if no match
          int len = dictionary[k].length();
          String word = dictionary[k].toLowerCase();     // string in dictionary

        for (int n = 0; n < len; n++) {            // comparison iteration start
            char letter = letters.charAt(m);                      // letter in s
            char letter_ = word.charAt(n);        // letter in dictionary string

            if (letter != letter_) {
              count++;
              break;
            } else if (letter == letter_ && m == l - 1) return true;
            else if (letter == letter_ && n == len - 1) {
              found = true;
              break;
            }

            m++;
          }                                          // comparison iteration end

          if (found == true) {
            i = m;
            break;
          }
        } else {
          if (count == l_ - 1) return false;
          else count++;
        }
      }                                              // dictionary iteration end

      i++;
    }                                                         // s iteration end

    return false;
  }

  public static void main(String[] args) {
    String[] testOne = {"leet", "code"};
    String testOne_ = "leetcode";

    String[] testTwo = {"apple", "pen"};
    String testTwo_ = "applepenapple";

    String[] testThree = {"cats", "dog", "sand", "and", "cat"};
    String testThree_ = "catsandog";

    if (comparison(testOne, testOne_) == true &&
        comparison(testTwo, testTwo_) == true &&
        comparison(testThree, testThree_) == false)
        System.out.println("Tests pass: true");
    else System.out.println("Tests pass: false");
  }
}
