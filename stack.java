public class Main {
  public static void main(String[] args) {
    Stack stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    stack.display();
  }
}

class Stack {
  class Node {
    int data;
    Node next;

    public Node(int data) {
      this.data = data;
      this.next = null;
    }
  }

  public Node head = null;
  public Node tail = null;

  public void push(int data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      node.next = tail;
      tail = node;
    }
  }

  public Node pop() {
    Node itr = tail;
    if (tail == null) return null;
    else if (head == tail) {
      head = null;
      tail = null;
      return tail;
    } else {
      tail = tail.next;
      System.out.println("Popped: " + itr.data);
      return itr;
    }
  }

  public void display() {
    Node itr = tail;
    if (head == null) System.out.print("Empty stack");
    else {
      System.out.print("Nodes in stack: ");
      while (itr != null) {
        System.out.print(itr.data + " ");
        itr = itr.next;
      }
      System.out.println();
    }
  }
}
