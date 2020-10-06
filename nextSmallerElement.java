/* Interview Bit: nearest smaller element. Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i. */

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

  public int[] createArray(Integer integer) {
    int[] array = new int[integer];
    for (int i = 0; i < integer; i++) {
      array[i] = (int) Math.floor(Math.random() * 100) + 1;
    }
    return array;
  }

  public void push(Integer data) {
    if (head == null) {
      head = new Node(data);
      tail = head;
    } else {
      Node node = new Node(data);
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

  public int[] findElements(Stack stack, Stack stack_, int[] integers) {
    Integer l = integers.length;
    int[] answer = new int[l];

    for (int i = 0; i < l; i++) {
      if (i == 0) answer[i] = -1;
      else {
        while (stack.head != null && stack.peek() >= integers[i]) {
          stack_.push(stack.pop());
        }

        if (stack.head == null) {
          answer[i] = -1;
          while (stack_.head != null) stack.push(stack_.pop());

        } else {
          answer[i] = stack.peek();
          while (stack_.head != null) stack.push(stack_.pop());
        }
      }

      stack.push(integers[i]);
    }

    return answer;
  }

  public Boolean test(int[] input, int[] output) {
    Integer l = input.length;
    for (int i = 0; i < l; i++) {
      if (i == 0) if (output[i] != -1) return false;

      else {
        Integer itr = i - 1;

        while (itr > -1) {
          if (input[itr] < input[i]) {
            if (output[i] != input[itr]) return false;
          } else itr--;
        }

        if (itr < 0) {
          if (output[i] != -1) return false;
        }
      }
    }

    return true;
  }

  public static void main(String[] args) {
    Stack stack = new Stack();
    Stack stack_ = new Stack();

    int[] integers = stack.createArray(10);
    Integer l = integers.length;
    int[] smallerIntegers = stack.findElements(stack, stack_, integers);
    Boolean answer = stack.test(integers, smallerIntegers);

    System.out.println("\n\tTest passes: " + answer);
  }
}
