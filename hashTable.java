// Without resolution of collisions

public class HashTable {
  Integer size;
  LinkedList[] array = new LinkedList[200];

  public LinkedList list = new LinkedList();

  public HashTable() {
    this.size = 200;
    this.array = array;
  }

  public Integer hash(String str) {
    String result = "";
    Integer l = str.length();
    for (Integer i = 0; i < l; i++) result += Character.codePointAt(str, i);
    Integer res = Integer.parseInt(result);
    return res % this.size;
  }

  public void set(String key, Integer value) {
    Integer index = hash(key);
    LinkedList list = new LinkedList();
    list.add(key);
    list.add_(value);
    this.array[index] = list;
  }

  public void get(String key) {
    Integer index = hash(key);
    LinkedList answer = new LinkedList();
    answer = this.array[index];
    System.out.println(answer.head.data + ", " + answer.tail.data);
  }

  public static void main(String[] args) {
    HashTable hashTable = new HashTable();

    hashTable.set("ab", 12);
    hashTable.get("ab");
    System.out.println();

    hashTable.set("ab", 34);
    hashTable.get("ab");
    System.out.println();

    hashTable.set("ef", 56);
    hashTable.get("ef");
    System.out.println();

    hashTable.set("gh", 78);
    hashTable.get("gh");
    System.out.println();
  }
}




class LinkedList {
  class Node {
    String data;
    Node_ next;

    public Node(String data) {
      this.data = data;
      this.next = next;
    }
  }

  class Node_ {
    Integer data;

    public Node_(Integer data) {
      this.data = data;
    }
  }

  public Node head = null;
  public Node_ tail = null;

  public void add(String data) {
    head = new Node(data);
  }

  public Node_ add_(Integer data) {
    tail = new Node_(data);
    head.next = tail;
    return tail;
  }
}
