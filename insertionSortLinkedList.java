public class InsertionSort {
  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    int[] array = new int[10];
    System.out.print("\n\tArray elements: ");
    for (int i = 0; i < 10; i++) {
      array[i] = (int) Math.floor(Math.random() * 100) + 1;
      System.out.print(array[i] + " ");
    }
    for (int i = 0; i < array.length; i++) list.add(array[i]);

    list.insertionSort();
    list.display();

    System.out.println("\n\tTest passes: " + list.test());

    System.out.println();
  }
}



class LinkedList {
  class Node {
    Integer data;
    Node next;
    Node prev;

    public Node(Integer data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

  public Node head = null;
  public Node tail = null;
  public Integer flag = 1;

  public void add(Integer data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
  }

  public void insertionSort() {
    Node fast = head;
    Node slow = head;
    Integer temp;

    // Check for list of one or two nodes and return
    if (head == null) System.out.println("No nodes in list");
    else if (head.next == null) return;
    else if (head.next.next == null) {
      if (head.data < head.next.data) return;
      else {
        temp = head.data;
        head.next.data = head.data;
        head.data = temp;
      }

    // If more than two nodes
    } else {
      while (fast != null) {
        if (fast.prev == null) fast = fast.next;
        while (slow.next != fast) slow = slow.next;
        while (fast.data >= slow.data && fast.next != null) {
          fast = fast.next;
          slow = fast.prev;
        }

        if (fast.next == null && fast.prev.data < fast.data) return;

        // Remove fast
        temp = fast.data;
        fast = fast.prev;
        if (fast.next.next == null) fast.next = null;
        else {
          fast.next = fast.next.next;
          fast.next.prev.prev = null;
          fast.next.prev.next = null;
          fast.next.prev = fast;
        }

        // Add temp by slow
        while (slow.data >= temp && slow.prev != null) slow = slow.prev;
        Node node = new Node(temp);
        if (temp < slow.data) {
          if (slow.prev == null) {
            slow.prev = node;
            node.next = slow;
            head = node;
          } else {
            node.next = slow;
            node.prev = slow.prev;
            node.next.prev = node;
            node.prev.next = node;
          }
        } else {
          if (slow.next == null) {
            slow.next = node;
            node.prev = slow;
          } else {
            node.next = slow.next;
            node.next.prev = node;
            slow.next = node;
            node.prev = slow;
          }
        }

        fast = fast.next;
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
    Node itr = head;
    if (head == null) System.out.println("\n\tNo nodes in list");
    else {
      System.out.print("\n\tNodes in list forward: ");
      while (itr != null) {
        System.out.print(itr.data + " ");
        itr = itr.next;
      }
      System.out.println();
    }
  }
}
