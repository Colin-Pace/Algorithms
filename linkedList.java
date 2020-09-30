public class Main {
  public static LinkedList list = new LinkedList();
  public static void main(String[] args) {
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.remove(1);
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

  public void remove(int data) {
    Node fast = head;
    Node slow = head;
    if (head == null) System.out.println("No nodes in list");
    else if (head.data == data) {
      fast = head;
      head = head.next;
      System.out.println("Removed: " + fast.data);
    } else {
      while (data != fast.data) fast = fast.next;
      if (fast == null) System.out.println("Data not in list");
      else {
        while (slow.next != fast) slow = slow.next;
        if (fast.next == null) slow.next = null;
        else {
          slow.next = fast.next;
          System.out.println("Removed: " + fast.data);
        }
      }
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
