#include <iostream>
using namespace std;

class Stack {
	struct node {
		int data;
		node *next;
	};

  private:
    node *head, *tail;

  public:
    Stack() {
      head = NULL;
      tail = NULL;
    }

  void push(int data) {
    if (!head) {
      head = new node;
			head -> data = data;
      head -> next = NULL;
			tail = new node;
      tail = head;
    } else {
			node *itr = new node;
      itr -> data = data;
			itr -> next = tail;
			tail = itr;
		}
  }

  void pop() {
    node *itr = new node;
  	if (head == tail) {
      itr = head;
      itr -> data = head -> data;
      head = NULL;
      tail = NULL;
			delete itr;
    } else {
      itr = tail;
      tail = tail -> next;
			cout << "Pop: " << itr -> data << endl << endl;
			delete itr;
    }
  }

  void display() {
		node *itr = new node;
		itr = tail;
		cout << "Nodes in stack from top to bottom: ";
		while (itr != NULL) {
			cout << itr -> data <<" ";
			itr = itr -> next;
		}
		cout << endl << endl;
	}
};

int main() {
  Stack stack;
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
	stack.display();

	stack.pop();
  stack.display();

	stack.pop();
	stack.display();

	stack.pop();
	stack.display();

  return 0;
}
