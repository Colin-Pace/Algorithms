/* 1. Main class
      A. List declaration
      B. Main method
   2. Linked list class
      A. Node class
          1. Node method
      B. Head and tail declarations
      C. Add node method
      D. Display method */


public class Main {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.display();
  }
}

class LinkedList {
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

  public void append(int data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  public void display() {
    Node current = head;
    if (head == null) System.out.print("Empty list");
    else {
      System.out.print("Nodes in list: ");
      while (current != null) {
        System.out.print(current.data + " ");
        current = current.next;
      }
      System.out.println();
    }
  }
}
