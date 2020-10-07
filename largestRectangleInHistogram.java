/* Interview bit: largest rectangle in histogram. Given an array of integers A of size N. A represents a histogram i.e A[i] denotes height of
the ith histogram’s bar. Width of each bar is 1. */

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

  public void push(Integer data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      node.next = tail;
      tail = node;
    }
  }

  public Integer pop() {
    Node itr;
    if (head == null) return null;
    else if (head == tail) {
      itr = head;
      head = null;
      tail = null;
      return itr.data;
    } else {
      itr = tail;
      tail = tail.next;
      return itr.data;
    }
  }

  public Integer peek() {
    if (head == null) return null;
    else return tail.data;
  }

  public Integer length() {
    if (head == null) return null;
    else {
      Node itr = tail;
      Integer count = 0;
      while (itr != null) {
        itr = itr.next;
        count++;
      }
      return count;
    }
  }

  public int[] createArray(Integer integer) {
    int[] array = new int[integer];
    System.out.print("\n\tHistogrammatical areas: ");
    for (int i = 0; i < integer; i++) {
      array[i] = (int) Math.floor(Math.random() * 10) + 1;
      System.out.print(array[i] + " ");
    }
    return array;
  }

  public Integer findLargest(Stack stack, Stack stack_, int[] integers) {
    Integer largest = 0;
    Integer l = integers.length;

    for (int i = 0; i < l; i++) stack.push(integers[i]);

    for (int i = 0; i < l; i++) {
      Integer largestForElement;
      Integer iterativeValue;
      Integer minHeight;
      Integer stackLength = stack.length();

      while (i != (stackLength - 1)) {
        stack_.push(stack.pop());
        stackLength--;
      }

      largestForElement = stack.peek();
      iterativeValue = stack.peek();
      minHeight = stack.peek();
      Integer popCount = 0;

      while (stack.head != null) {
        popCount++;

        if (stack.peek() < minHeight) minHeight = stack.peek();

        iterativeValue = minHeight * popCount;
        if (iterativeValue > largestForElement) {
          largestForElement = iterativeValue;
        }

        stack_.push(stack.pop());
      }

      if (largestForElement > largest) largest = largestForElement;

      while (stack_.head != null) stack.push(stack_.pop());
    }

    return largest;
  }

  public static void main(String[] args) {
    Stack stack = new Stack();
    Stack stack_ = new Stack();

    int[] integers = stack.createArray(5);
    Integer largest = stack.findLargest(stack, stack_, integers);

    System.out.println("\n\tArea of largest rectangle in histogram: " + largest);
  }
}
