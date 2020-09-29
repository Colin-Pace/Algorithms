public class HashTable {
  Integer size = 200;
  LinkedList[] array = new LinkedList[200];

  public Integer hash(String str) {
    String result = "";
    Integer l = str.length();
    for (Integer i = 0; i < l; i++) result += Character.codePointAt(str, i);
    Integer res = Integer.parseInt(result);
    return res % this.size;
  }

  public void set(String key, Integer value) {
    Integer index = hash(key);
    if (array[index] == null) {
      LinkedList list = new LinkedList();
      list.append(key, value);
      array[index] = list;
    } else {
      LinkedList list = array[index];
      list.append(key, value);
    }
  }

  public void get(String key) {
    Integer index = hash(key);
    LinkedList list = array[index];
    Integer answer = list.find(key);
    System.out.println(key + ": " + answer);
  }

  public static void main(String[] args) {
    HashTable hashTable = new HashTable();

    hashTable.set("ab", 12);
    hashTable.get("ab");

    hashTable.set("ab", 34);
    hashTable.get("ab");

    hashTable.set("ef", 56);
    hashTable.get("ef");

    hashTable.set("gh", 78);
    hashTable.get("gh");
  }
}




class LinkedList {
  class Node {
    String key;
    Integer value;
    Node next;

    public Node(String key, Integer value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }

  public Node head = null;
  public Node tail = null;

  public void append(String key, Integer value) {
    Node node = new Node(key, value);
    if (head == null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }

  public Integer find(String key) {
    Node itr = head;
    while (key != itr.key) itr = itr.next;
    return itr.value;
  }
}
