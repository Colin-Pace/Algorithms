// Add and remove from singly and doubly linked lists

class S_Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(head) {
    this.head = head;
  }

  addFirst(data) {
    if (!this.head) {
      this.head = new S_Node(data);
    } else {
      const node = new S_Node(data, this.head);
      this.head = node;
    }
  }

  add(data) {
    if (!this.head) {
      this.addFirst(data);
    } else {
      let runner = this.head;
      while (runner.next !== undefined) {
        runner = runner.next;
      }
      runner.next = new S_Node(data);
    }
  }

  // An improvement in asymptotic time complexity
  add_(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.runner = this.head;
    } else {
      let node = new Node(data);
      this.runner.next = node;
      this.runner = this.runner.next;
    }
  }

  remove(data) {
    if (!this.head) {
      throw "No nodes in list.";
    } else {
      let runner = this.head;
      if (runner.data == data) {
        let node = this.head;
        this.head = this.head.next;
        node, node.next = null;
      } else {
        while (runner.next.data !== data) {
          if (runner.next === undefined) {
            throw "Data not in list.";
          }
          runner = runner.next;
        }
        let node = runner.next;
        if (runner.next.next === undefined) {
          runner.next = null;
        } else {
          runner.next = runner.next.next;
        }
        node = null;
      }
    }
  }
}



class D_Node {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  addFirst(data) {
    if (!this.head) {
      this.head = new D_Node(data);
      this.tail = this.head;
    } else {
      let node = new D_Node(data, this.head);
      this.head.previous = node;
      this.head = node;
      this.tail = this.head.next;
      node = null;
    }
  }

  add(data) {
    if (!this.head) {
      this.addFirst(data);
    } else {
      let runner = this.head;
      while (runner.next !== undefined) {
        runner = runner.next;
      }
      runner.next = new D_Node(data);
      runner.next.previous = runner;
      this.tail = runner.next;
    }
  }

  // An improvement in asymptotic time complexity
  add_(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.runner = this.head;
    } else {
      let node = new Node(data);
      this.runner.next = node;
      node.prev = this.runner;
      this.runner = node;
    }
  }


  remove(data) {
    if (!this.head) {
      throw "No nodes in list.";
    } else {
      let runner = this.head;
      if (runner.data === data) {
        let node = this.head;
        this.head = this.head.next;
        this.head.previous = undefined;
        node = null;
      } else {
        while (runner.data !== data) {
          if (runner.next === undefined) {
            throw "Data not in list.";
          } else {
            runner = runner.next;
          }
        }
        if (runner.next === undefined) {
          runner.previous.next = undefined;
          this.tail = runner.previous;
          runner.previous = undefined;
          runner = null;
        } else {
          runner.previous.next = runner.next;
          runner.next.previous = runner.previous;
          runner = null;
        }
      }
    }
  }

  // An improvement in asymptotic time complexity
  remove_() {
    let node = this.runner;
    this.runner = this.runner.prev;
    node.prev = null;
    return node;
  }
}


const numeric = new SinglyLinkedList;
numeric.addFirst(1);
numeric.add(2);
numeric.add(3);
numeric.add(4);
numeric.add(5);
numeric.remove(4);
//console.log(numeric.head.data);

const alphabetical = new DoublyLinkedList;
alphabetical.addFirst("a");
alphabetical.add("b");
alphabetical.add("c");
alphabetical.add("d");
alphabetical.add("e");
alphabetical.remove("b");
//console.log(alphabetical.head.data);
