/* Interview Bit: redundant braces. Given a string A denoting an expression. It contains the following operators ’+’, ‘-‘, ‘*’, ‘/’. Check whether A has redundant braces or not. Return 1 if A has redundant braces, else return 0. Note: A will be always a valid expression. For example, return true for "((a + b))" and false for "(a + (a + b))". */


public class Stack {
  class Node {
    String data;
    Node next;

    public Node(String data) {
      this.data = data;
      this.next = null;
    }
  }

  public Node head = null;
  public Node tail = null;

  public void push(String data) {
    Node node =  new Node(data);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      node.next = tail;
      tail = node;
    }
  }

  public Node pop() {
    Node itr;
    if (head == null) return null;
    else if (head == tail) {
      tail = null;
      return head = null;
    } else {
      itr = tail;
      tail = tail.next;
      itr.next = null;
      return itr = null;
    }
  }

  public String peek() {
    return tail.data;
  }

  public void display() {
    Node itr = tail;
    if (head == null) System.out.println("\tNo nodes in stack");
    else {
      System.out.print("\tNodes in stack from top to bottom: ");
      while (itr != null) {
        System.out.print(itr.data + " ");
        itr = itr.next;
      }
      System.out.println();
    }
  }

  public Boolean checkRedundancies(String expression, Stack stack) {
    Integer l = expression.length();
    for (int i = 0; i < l; i++) {
      String symbol = Character.toString(expression.charAt(i));

      if ( symbol.equals("(") || symbol.equals("+") || symbol.equals("-") ||
           symbol.equals("*") || symbol.equals("/") || symbol.equals("a") ||
           symbol.equals("b") ) stack.push(symbol);

      if (symbol.equals(")")) {
        Boolean redundant = true;
        while (!stack.peek().equals("(")) {
          stack.pop();
          redundant = false;
        }

        stack.pop();
        if (redundant == true) return true;
      }
    }

    return false;
  }

  public static void main(String[] args) {
    Stack stack = new Stack();

    Boolean testOne = stack.checkRedundancies("((a + b))", stack);
    System.out.print("\n\tTest passes: ");
    System.out.println(testOne == true);

    Boolean testTwo = stack.checkRedundancies("(a + (a + b))", stack);
    System.out.print("\n\tTest passes: ");
    System.out.println(testTwo == false);

    Boolean testThree = stack.checkRedundancies("(a (a + b))", stack);
    System.out.print("\n\tTest passes: ");
    System.out.print(testThree == false);

    System.out.println("\n");
  }
}
