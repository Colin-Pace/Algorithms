public class BinarySearch {
  public int search(int start, int end, int x, int[] array) {
    if (start > end) return -1;
    else {
      int mid = (int) Math.floor((start + end) / 2);
      if (array[mid] == x) return mid;
      else if (array[mid] > x) return search(start, mid - 1, x, array);
      else return search(mid + 1, end, x, array);
    }
  }

  public static void main(String[] args) {
    BinarySearch instance = new BinarySearch();
    int[] input = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int start = 0;
    int end = input.length;
    int x = 4;
    int answer = instance.search(start, end, x, input);
    System.out.println("Search element at index: " + answer);
  }
}
