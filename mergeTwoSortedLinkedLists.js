// Create and merge two sorted linked lists

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.result = null;
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  merge(list, list_) {
    let fast, slow, runner;

    if (!list && !list_) return null;
    else if (!list && list_) return list_;
    else if (list && !list_) return list;
    else if (!list.head.next && !list_.head.next) {
      if (list.head.data === list_.head.data) {
        list.head.next = list_.head;
        list.tail = list_.head;
        this.result = list;
        return list;
      } else if (list.head.data < list_.head.data) {
        list.head.next = list_.head;
        list.tail = list_.head;
        this.result = list;
        return list;
      } else {
        list_.head.next = list.head;
        list_.tail = list.head;
        this.result = list_;
        return list_;
      }
    } else if (!list.head.next && list_.head.next) {
      fast = list.head;
      runner = list_.head;
      if (fast.data < runner.data) {
        fast.next = runner;
        list_.head = fast;
        this.result = list_;
        return list_;
      } else if (fast.data === runner.data) {
        fast.next = runner;
        list_.head = fast;
        this.result = list_;
        return list_;
      } else {
        while (runner.next && runner.next.data <= fast.data) {
          runner = runner.next;
        }
        if (!runner.next) {
          runner.next = fast;
          list_.tail = fast;
          this.result = list_;
          return list_;
        } else {
          fast.next = runner.next;
          runner.next = fast;
          this.result = list_;
          return list_;
        }
      }
    } else if (list.head.next && !list_.head.next) {
      fast = list.head;
      runner = list_.head;
      if (runner.data < fast.data) {
        runner.next = fast;
        list.head = runner;
        this.result = list;
        return list;
      } else if (runner.data === fast.data) {
        runner.next = fast;
        list.head = runner;
        this.result = list;
        return list;
      } else {
        while (fast.next && fast.next.data <= runner.data) {
          fast = fast.next;
        }
        if (!fast.next) {
          fast.next = runner;
          list.tail = runner;
          this.result = list;
          return list;
        } else {
          runner.next = fast.next;
          fast.next = runner;
          this.result = list;
          return list;
        }
      }
    } else {
      fast = list.head;
      runner = list_.head;
      if (list.tail.data <= list_.head.data) {
        list.tail.next = list_.head;
        list.tail = list_.tail;
        this.result = list;
        return list;
      } else if (list_.tail.data <= list.head.data) {
        list_.tail.next = list.head;
        list_.tail = list.tail;
        this.result = list_;
        return list_;
      } else {
        if (fast.data === runner.data) {
          while (runner) {
            while (fast.next && fast.next.data <= runner.data) {
              fast = fast.next;
            }
            const node = new Node(runner.data);
            node.next = fast.next;
            fast.next = node;
            runner = runner.next;
            fast = fast.next;
          }
          this.result = list;
          return list;
        } else {
          if (fast.data < runner.data) {
            while (runner) {
              while (fast.next && fast.next.data <= runner.data) {
                fast = fast.next;
              }
              const node = new Node(runner.data);
              node.next = fast.next;
              fast.next = node;
              runner = runner.next;
              fast = fast.next;
            }
            this.result = list;
            return list;
          } else {
            while (fast) {
              while (runner.next && runner.next.data <= fast.data) {
                runner = runner.next;
              }
              const node = new Node(fast.data);
              node.next = runner.next;
              runner.next = node;
              fast = fast.next;
              runner = runner.next;
            }
            this.result = list_;
            return list_;
          }
        }
      }
    }
  }

  mergeIntoNewList(list, list_) {
    let a = list.head, b = list_.head, c = null;
    const result = new LinkedList;

    while (a !== undefined && b !== undefined) {
      if (a.data < b.data || a.data === b.data) {
        result.add(a.data);
        a = a.next;
      } else {
        result.add(b.data);
        b = b.next;
      }
    }

    if (a === undefined && b !== undefined) {
      while (b !== undefined) {
        result.add(b.data);
        b = b.next;
      }
    } else if (b === undefined && a !== undefined) {
      while (a !== undefined) {
        result.add(a.data);
        a = a.next;
      }
    }

    return result;
  }


  collectNodalData(list) {
    const result = [];
    let runner = list.head;
    while (runner) {
      result.push(runner.data);
      runner = runner.next;
    }
    return result;
  }
}

const input = [1, 1, 2];
const input_ = [0, 1, 1, 2, 4];

// const input = [1, 1, 2, 5];
// const input_ = [0, 1, 1, 2, 4];

// const input = [-1, 1, 1, 2, 5];
// const input_ = [0, 1, 1, 2, 4];

// const input = [-1, 1, 1, 2, 5];
// const input_ = [0, 1, 1, 2, 4, 10];

// const input = [1, 1, 2, 5];
// const input_ = [1, 1, 2, 4];

// const input = [1, 1, 2];
// const input_ = [1, 2, 4, 6];

const linkedList = new LinkedList;
const linkedList_ = new LinkedList;

input.forEach(integer => linkedList.add(integer));
input_.forEach(integer => linkedList_.add(integer));

linkedList.merge(linkedList, linkedList_);
const resultList = linkedList.result;

//const resultList = linkedList.mergeIntoNewList(linkedList, linkedList_);

console.log(linkedList.collectNodalData(resultList));
