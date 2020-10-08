/* Interview bit: sliding window maximum. Given an array of integers A. There is a sliding window of size B which is moving from the very left of the array to the very right. You can only see the w numbers in the window. Each time the sliding window moves rightwards by one position. You have to find the maximum for each window.*/

public class Stack {
  class Node {
    Integer data;
    Node next;

    public Node(Integer data) {
      this.data = data;
      this.next = null;
    }
  }

  public Node head = null;
  public Node tail = null;

  public void push(Integer integer) {
    Node node = new Node(integer);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      node.next = tail;
      tail = node;
    }
  }

  public Integer pop() {
    Node itr = tail;
    if (head == null) return null;
    else if (head == tail) {
      itr = head;
      head = null;
      tail = null;
      return itr.data;
    } else {
      tail = tail.next;
      return itr.data;
    }
  }

  public int[] createArray(Integer integer) {
    int[] array = new int[integer];
    System.out.print("\n\tIntegers: ");
    for (int i = 0; i < integer; i++) {
      array[i] = (int) Math.floor(Math.random() * 10) + 1;
      System.out.print(array[i] + " ");
    }
    return array;
  }

  public int[] findMax(Stack stack, int[] array, Integer length) {
    int[] result = new int[length - 2];

    for (int i = 0; i < length - 2; i++) {
      Integer firstComparison = Math.max(array[i], array[i + 1]);
      Integer secondComparison = Math.max(firstComparison, array[i + 2]);
      stack.push(secondComparison);
    }

    Integer count = 0;
    Node itr = tail;
    while (itr != null) {
      result[length - 3] = itr.data;
      length--;
      itr = itr.next;
    }

    return result;
  }

  public Boolean test(int[] array, int[] result) {
    Integer l = array.length - 2;

    for (int i = 0; i < l; i++) {
      Integer firstComparison = Math.max(array[i], array[i + 1]);
      Integer secondComparison = Math.max(firstComparison, array[i + 2]);

      if (secondComparison == array[i]) {
        if (secondComparison < array[i] || secondComparison < array[i + 2]) {
          return false;
        }
      } else if (secondComparison == array[i + 1]) {
        if (secondComparison < array[i] || secondComparison < array[i + 2]) {
          return false;
        }
      } else {
        if (secondComparison < array[i] || secondComparison < array[i + 1]) {
          return false;
        }
      }
    }

    return true;
  }

  public static void main(String[] args) {
    Stack stack = new Stack();
    Integer length = 10;

    int[] array = stack.createArray(length);
    int[] result = stack.findMax(stack, array, length);

    System.out.print("\n\n\tSliding window max: ");
    for (int i = 0; i < length - 2; i++) System.out.print(result[i] + " ");

    System.out.print("\n\n\tTest passes: " + stack.test(array, result));

    System.out.println("\n");
  }
}
