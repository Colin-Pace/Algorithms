/* LeetCode word break: Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. The same word in the dictionary may be reused multiple times in the segmentation. You may assume the dictionary does not contain duplicate words. */

public class WordBreak {
  static Boolean comparison(String[] dictionary, String letters) {
    int l = letters.length();
    int i = 0;

    while (i < l) {
      int j = 0;
      int l_ = dictionary.length;
      int count = 0;
      Boolean found = false;

      for (int k = 0; k < l_; k++) {
        if (dictionary[k].charAt(j) == letters.charAt(i)) {
          int m = i;
          int len = dictionary[k].length();
          String word = dictionary[k];

          for (int n = 0; n < len; n++) {
            char letter = letters.charAt(m);
            char letter_ = word.charAt(n);

            if (letter != letter_) {
              count++;
              break;
            } else if (letter == letter_ && m == l - 1) return true;
            else if (letter == letter_ && n == len - 1) {
              found = true;
              break;
            }

            m++;
          }

          if (found == true) {
            i = m;
            break;
          }
        } else {
          if (count == l_ - 1) return false;
          else count++;
        }
      }

      i++;
    }

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
