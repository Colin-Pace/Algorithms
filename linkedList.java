public class Main {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);

    System.out.print("\nNodes in list: ");
    list.display();

    list.remove(1);
    list.prepend(1);
    list.rotate(2);
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

  public void prepend(int data) {
    if (head == null) {
      Node node = new Node(data);
      head = node;
      tail = node;
    } else {
      Node node = new Node(data);
      node.next = head;
      head = node;
      System.out.println("Prepended: " + node.data);
      System.out.print("Nodes in list after prepend: ");
      display();
      System.out.print("\n");
    }
  }

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
    if (head == null) System.out.println("No nodes in list");
    else {
      Node fast = head;
      Node slow = head;

      if (head == null) System.out.println("No nodes in list");
      else if (head.data == data) {
        fast = head;
        head = head.next;
        System.out.println("\nRemoved: " + fast.data);
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

      System.out.print("Nodes in list after removal: ");
      display();
      System.out.print("\n");
    }
  }

  public void rotate(int rotation) {
    if (head == null) System.out.println("No nodes in list");
    else {
      System.out.print("Nodal order before rotation: ");
      display();
      System.out.print("\nRotated list by: " + rotation + "\n");

      Node fast = head;
      Node slow = head;

      int l = 0;
      while (fast != null) {
        l++;
        fast = fast.next;
      }

      if (l == rotation) return;
      else {
        int count = -1;
        int fromArray = 0;
        int[] array = new int[l];
        int index = 0;

        if (rotation > l) rotation = rotation % l;
        fast = head;
        for (int i = 0; i < rotation; i++) fast = fast.next;

        while (index < l) {
          if (fast == null) fast = head;
          array[index] = fast.data;
          if (count < (rotation - 1)) {
            fast.data = slow.data;
            fast = fast.next;
            slow = slow.next;
            count++;
          } else {
            fast.data = array[fromArray];
            fast = fast.next;
            slow = slow.next;
            fromArray++;
          }
          index++;
        }

        System.out.print("Nodal order after rotation: ");
        display();
      }
    }
  }

  public void display() {
    if (head == null) System.out.println("No nodes in list");
    else {
      Node current = head;

      if (head == null) System.out.print("Empty list");
      else {
        while (current != null) {
          System.out.print(current.data + " ");
          current = current.next;
        }

        System.out.print("\n_____________\n");
      }
    }
  }
}
