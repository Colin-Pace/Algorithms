public class Main {
  public static void main(String[] args) {
    BinarySearchTree tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(8);
    tree.add(15);
    tree.add(12);
    tree.add(20);
    tree.inOrder();
    tree.preOrder();
    tree.postOrder();
    tree.levelOrder();
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

  public void inOrder() {
    Node node = root;
    System.out.print("In order: ");
    inOrder_(node);
    System.out.println();
  }

  public void inOrder_(Node node) {
    if (node.left != null) inOrder_(node.left);
    System.out.print(node.data + " ");
    if (node.right != null) inOrder_(node.right);
  }

  public void preOrder() {
    Node node = root;
    System.out.print("Pre order: ");
    preOrder_(node);
    System.out.println();
  }

  public void preOrder_(Node node) {
    System.out.print(node.data + " ");
    if (node.left != null) preOrder_(node.left);
    if (node.right != null) preOrder_(node.right);
  }

  public void postOrder() {
    Node node = root;
    System.out.print("Post order: ");
    postOrder_(node);
    System.out.println();
  }

  public void postOrder_(Node node) {
    if (node.left != null) postOrder_(node.left);
    if (node.right != null) postOrder_(node.right);
    System.out.print(node.data + " ");
  }

  public void levelOrder() {
    Queue queue = new Queue();
    Node node = root;
    queue.enqueue(node);
    System.out.print("Level order: ");
    while (queue.head != null) {
      node = queue.dequeue().data;
      System.out.print(node.data + " ");
      if (node.left != null) queue.enqueue(node.left);
      if (node.right != null) queue.enqueue(node.right);
    }
    System.out.println();
  }
}
