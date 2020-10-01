// Sort a linked list in place with heap sort


public class Main {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();
    list.add(1);
    list.add(5);
    list.add(4);
    list.add(3);

    System.out.print("\n\tNodes in list before heapsort: ");
    list.display();

    list.heapify();
    System.out.print("\n\tNodes in list after heapsort: ");
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

  public Node anotherHead = null;
  public Node head = null;
  public Node tail = null;

  public void add(int data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = head;
      anotherHead = head;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  public void heapify() {
    if (head == null) System.out.println("No nodes in list");
    else {
      Node fast = head;
      Node slow = head;
      int temp;
      int l = 1;
      int min = 10000;

      // Find the length of the list
      while (fast.next != null) {
        fast = fast.next;
        l++;
      }

      // Find the min element
      fast = head;
      while (fast != null) {
        if (fast.data < min) min = fast.data;
        fast = fast.next;
      }

      // Put the smallest element at the end of the list
      while (slow.data != min) slow = slow.next;
      fast = head;
      while (fast.next != null) fast = fast.next;
      temp = fast.data;
      fast.data = slow.data;
      slow.data = temp;

      // Move the smallest element to the first of the list
      slow = head;
      temp = fast.data;
      fast.data = slow.data;
      slow.data = temp;

      // Shift the largish element into the center of the list
      fast = head;
      int shift = (int) Math.floor(l / 2);
      for (int i = 0; i < shift; i++) fast = fast.next;

      // Recurse on the list from the second node to the end of the list
      if (head.next != null) {
        head = head.next;
        heapify();
      }
    }
  }

  public void display() {
    if (head == null) System.out.println("No nodes in list");
    else {
      Node itr = anotherHead;
      while (itr != null) {
        System.out.print(itr.data + " ");
        itr = itr.next;
      }
      System.out.print("\n\n");
    }
  }
}
