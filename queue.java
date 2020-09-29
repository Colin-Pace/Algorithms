public class Main {
  public static void main(String[] args) {
    Queue queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.display();
  }
}

class Queue {
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

  public void enqueue(int data) {
    Node node = new Node(data);
    if (head == null) {
      head = node;
      tail = head;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  public Node dequeue() {
    Node itr = head;
    if (head == null) return null;
    else if (head == tail) {
      head = null;
      tail = null;
      return itr;
    } else {
      head = head.next;
      System.out.println("Dequeued: " + itr.data);
      return itr;
    }
  }

  public void display() {
    Node itr = head;
    if (head == null) System.out.println("Empty queue");
    else {
      System.out.print("Nodes in queue: ");
      while (itr != null) {
        System.out.print(itr.data + " ");
        itr = itr.next;
      }
      System.out.println();
    }
  }
}
