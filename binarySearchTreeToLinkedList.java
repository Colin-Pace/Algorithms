// Create a linked list out of a level order search of a binary search tree


public class Main {
  public static BinarySearchTree tree = new BinarySearchTree();
  public static LinkedList list = new LinkedList();
  public static void main(String[] args) {
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(8);
    tree.add(15);
    tree.add(12);
    tree.add(20);
    tree.levelOrder(list);
    list.display();
  }
}




class BinarySearchTree {
  class Node {
    int data;
    Node left;
    Node right;

    public Node(int data) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }

  public Node root = null;

  public void add(int data) {
    Node node = root;
    if (node == null) root = new Node(data);
    else searchTree(node, data);
  }

  public void searchTree(Node node, int data) {
    if (node == null) return;
    if (data < node.data) {
      if (node.left == null) node.left = new Node(data);
      else searchTree(node.left, data);
    } else if (data > node.data) {
      if (node.right == null) node.right = new Node(data);
      else searchTree(node.right, data);
    } else System.out.println("Data already in tree");
  }

  public void levelOrder(LinkedList list) {
    Queue queue = new Queue();
    Node node = root;
    queue.enqueue(node);
    while (queue.head != null) {
      node = queue.dequeue().data;
      list.append(node);
      if (node.left != null) queue.enqueue(node.left);
      if (node.right != null) queue.enqueue(node.right);
    }
  }
}




class Queue extends BinarySearchTree {
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




class LinkedList extends BinarySearchTree {
  class ListNode {
    Node data;
    ListNode next;

    public ListNode(Node node) {
      this.data = node;
      this.next = null;
    }
  }

  public ListNode head = null;
  public ListNode tail = null;

  public void append(Node node) {
    ListNode itr = new ListNode(node);
    if (head == null) {
      head = itr;
      tail = head;
    } else {
      tail.next = itr;
      tail = itr;
    }
  }

  public void display() {
    ListNode itr = head;
    if (head == null) System.out.print("Empty list");
    else {
      System.out.print("Nodes in list: ");
      while (itr != null) {
        System.out.print(itr.data.data + " ");
        itr = itr.next;
      }
      System.out.println();
    }
  }
}
