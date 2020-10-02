public class HeapSort {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    int[] array = new int[10];
    System.out.print("\n\tNodes in list before heapsort: ");
    for (int i = 0; i < 10; i++) {
      array[i] = (int) Math.floor(Math.random() * 100) + 1;
      System.out.print(array[i] + " ");
    }
    for (int i = 0; i < array.length; i++) list.add(array[i]);

    list.heapify();
    System.out.print("\n\tNodes in list after heapsort: ");
    list.display();

    System.out.println("\tTest passes: " + list.test());

    System.out.println();
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

  public Boolean test() {
    Node itr = head;
    if (head == null) {
      System.out.println("No nodes in list");
      return false;
    } else {
      Integer data = head.data;
      while (itr.next != null) {
        itr = itr.next;
        if (data > itr.data) return false;
        data = itr.data;
      }
      if (data > itr.data) return false;
      else return true;
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
