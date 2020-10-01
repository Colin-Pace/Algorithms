public class Main {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);

    System.out.print("\n\tNodes in list: ");
    list.display();
    System.out.println("\n\t_________");

    list.remove(1);
    System.out.println("\n\t_________");
    list.prepend(1);
    System.out.println("\n\t_________");
    list.rotate(2);
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

  public Node head = null;
  public Node tail = null;

  public void prepend(int data) {
    if (head == null) {
      Node node = new Node(data);
      head = node;
      tail = node;
      System.out.println("\n\tPrepended: " + node.data);
      System.out.print("\tNodes in list after prepend: ");
      display();
      System.out.print("\n");
    } else {
      Node node = new Node(data);
      node.next = head;
      head = node;
      System.out.println("\n\tPrepended: " + node.data);
      System.out.print("\tNodes in list after prepend: ");
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
    Node fast = head;
    Node slow = head;

    if (head == null) System.out.println("\tNo nodes in list");
    else if (head.data == data) {
      fast = head;
      head = head.next;
      System.out.println("\n\tRemoved: " + fast.data);
      System.out.print("\tNodes in list after removal: ");
      display();
      System.out.print("\n");
    } else {
      while (data != fast.data) fast = fast.next;

      if (fast == null) System.out.println("\tData not in list");
      else {
        while (slow.next != fast) slow = slow.next;

        if (fast.next == null) {
          slow.next = null;
          System.out.println("\n\tRemoved: " + fast.data);
          System.out.print("\tNodes in list after removal: ");
          display();
          System.out.print("\n");
        } else {
          slow.next = fast.next;
          System.out.println("\n\tRemoved: " + fast.data);
          System.out.print("\tNodes in list after removal: ");
          display();
          System.out.print("\n");
        }
      }
    }
  }

  public void rotate(int rotation) {
    if (head == null) System.out.println("\tNo nodes in list");
    else {
      System.out.print("\n\tNodal order before rotation: ");
      display();
      System.out.print("\n\tRotated list by: " + rotation + "\n");

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

        System.out.print("\tNodal order after rotation: ");
        display();
        System.out.println();
      }
    }
  }

  public void display() {
    if (head == null) System.out.println("\tNo nodes in list");
    else {
      Node current = head;

      while (current != null) {
        System.out.print(current.data + " ");
        current = current.next;
      }
    }
  }
}
