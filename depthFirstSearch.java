import java.util.ArrayList;

public class Main {
  public ArrayList <Node> visited = new ArrayList <Node>();
  public ArrayList <Integer> order = new ArrayList <Integer>();

  public ArrayList depthFirstSearch(Node node) {
    if (visited.contains(node)) return null;
    else {
      visited.add(node);
      order.add(node.data);
      for (int i = 0; i < node.adj.size(); i++) {
        if (!visited.contains(node.adj.get(i))) {
          depthFirstSearch(node.adj.get(i));
        }
      }
      return order;
    }
  }


  public static void main(String[] args) {
    Main arrayList = new Main();

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

    System.out.print("Depth first search: ");
    System.out.println(arrayList.depthFirstSearch(first));
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
