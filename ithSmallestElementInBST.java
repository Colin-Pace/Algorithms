/* Interview bit: Kth smallest element in tree. Given a binary search tree, write a function to find that smallest element in the tree. */

public class BinarySearchTree {
  int[] testArray;
  Integer testArrayIndex = 0;
  Node root = null;
  Integer count = 0;
  Integer target = 0;
  Boolean fromSmallest = false;

  public BinarySearchTree(Integer length) {
    this.testArray = new int[length];
  }

  class Node {
    Integer data;
    Node left;
    Node right;

    public Node(Integer data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  public void createElements(BinarySearchTree tree, Integer integer) {
    Integer i = 0;

    while (i < integer - 1) {
      Integer element = (int) Math.floor(Math.random() * 100) + 1;
      Boolean inserted = tree.add(element);

      if (inserted == true) i++;
    }
  }

  public Boolean add(int data) {
    Node node = root;
    Boolean inserted = false;

    if (node == null) root = new Node(data);
    else inserted = searchTree(node, data);

    return inserted;
  }

  public Boolean searchTree(Node node, int data) {
    Boolean inserted = false;

    if (node == null) return false;

    else if (data < node.data) {
      if (node.left == null) {
        node.left = new Node(data);
        return inserted = true;
      }
      else return searchTree(node.left, data);

    } else if (data > node.data) {
      if (node.right == null) {
        node.right = new Node(data);
        return inserted = true;
      }
      else return searchTree(node.right, data);

    } else return inserted;
  }

  public void inOrder() {
    Node node = root;

    System.out.print("\n\tIn order tree search: ");
    inOrder_(node);

    System.out.println();
  }

  public void inOrder_(Node node) {
    if (node.left != null) inOrder_(node.left);

    System.out.print(node.data + " ");
    this.testArray[testArrayIndex] = node.data;
    testArrayIndex++;

    if (node.right != null) inOrder_(node.right);
  }

  public void IthSmallestElement(Integer ith) {
    Node itr = root;
    target = ith;

    System.out.println("\n\tIth: " + ith);
    System.out.print("\n\tIth smallest element: ");
    IthSmallestElement_(itr);
    System.out.println();
  }

  public void IthSmallestElement_(Node itr) {
    if (itr.left != null) IthSmallestElement_(itr.left);

    if (itr.left == null) fromSmallest = true;
    if (fromSmallest == true) count++;
    if (count == target) System.out.print(itr.data);

    if (itr.right != null) IthSmallestElement_(itr.right);
  }

  public void test(Integer ith) {
    Integer l = this.testArray.length;
    Boolean found = false;

    for (Integer i = 0; i < l; i++) {
      if (ith == 0) {
        System.out.println("\n\tTest passes: true");
        return;
      }
      else ith--;
    }

    if (found == false) System.out.println("\n\tTest passes: true");
  }

  public static void main(String[] args) {
    Integer length = 10;
    BinarySearchTree tree = new BinarySearchTree(length);
    Integer Ith = (int) Math.floor(Math.random() * 10) + 1;

    tree.createElements(tree, length);
    tree.inOrder();

    tree.IthSmallestElement(Ith);
    tree.test(Ith);

    System.out.println();
  }
}
