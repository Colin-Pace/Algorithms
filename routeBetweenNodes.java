import java.util.ArrayList;

public class Main {
  public Boolean routeBetweenNodes(Node start, Node end) {
    Queue queue = new Queue();
    ArrayList <Node> visited = new ArrayList <Node>();
    queue.enqueue(start);
    while (queue.head != null) {
      Node node = queue.dequeue().data;
      for (int i = 0; i < node.adj.size(); i++) {
        if (!visited.contains(node.adj.get(i))) {
          if (node.adj.get(i) == end) return true;
          queue.enqueue(node.adj.get(i));
          visited.add(node.adj.get(i));
        }
      }
      visited.add(node);
    }
    return false;
  }


  public static void main(String[] args) {
    Main search = new Main();

    Node first = new Node(1);
    Node second = new Node(2);
    Node third = new Node(3);
    Node fourth = new Node(4);
    Node fifth = new Node(5);

    first.adj.add(second);
    second.adj.add(first);
    second.adj.add(third);
    second.adj.add(fourth);
    third.adj.add(second);
    third.adj.add(fifth);
    fourth.adj.add(second);
    fourth.adj.add(fifth);
    fifth.adj.add(third);
    fifth.adj.add(fourth);

    System.out.print("Route between nodes exists: ");
    System.out.println(search.routeBetweenNodes(first, fifth));
  }
}




class Node {
  int data;
  ArrayList <Node> adj = new ArrayList <Node>();

  public Node(int data) {
    this.data = data;
    this.adj = adj;
  }
}




class Queue extends Main {
  class QueueNode {
    Node data;
    QueueNode next;

    public QueueNode(Node node) {
      this.data = node;
      this.next = null;
    }
  }

  public QueueNode head = null;
  public QueueNode tail = null;

  public void enqueue(Node node) {
    QueueNode queueNode = new QueueNode(node);
    if (head == null) {
      head = queueNode;
      tail = head;
    } else {
      tail.next = queueNode;
      tail = queueNode;
    }
  }

  public QueueNode dequeue() {
    QueueNode itr = head;
    if (head == null) return null;
    else if (head == tail) {
      head = null;
      tail = null;
      return itr;
    } else {
      head = head.next;
      return itr;
    }
  }
}
