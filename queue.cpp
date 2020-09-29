#include <iostream>
using namespace std;

class Queue {
	struct node {
		int data;
		node *next;
	};

  private:
    node *head, *tail;

  public:
    Queue() {
      head = NULL;
      tail = NULL;
    }

  void enqueue(int data) {
    if (!head) {
      head = new node;
			head -> data = data;
      head -> next = NULL;
			tail = new node;
      tail = head;
    } else {
			node *itr = new node;
      itr -> data = data;
      itr -> next = NULL;
			tail -> next = itr;
			tail = itr;
    }
  }

  void dequeue() {
    node *itr = new node;
  	if (head == tail) {
      itr = head;
      itr -> data = head -> data;
      head = NULL;
      tail = NULL;
    } else {
      itr = head;
      head = head -> next;
			cout << "Dequeue: " << itr -> data << endl << endl;
    }
  }

  void display() {
		node *itr = new node;
		itr = head;
		cout << "Nodes in queue from bottom to top: ";
		while (itr != NULL) {
			cout << itr -> data <<" ";
			itr = itr -> next;
		}
		cout << endl << endl;
	}
};

int main() {
  Queue queue;
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
	queue.display();

	queue.dequeue();
  queue.display();

	queue.dequeue();
	queue.display();

	queue.dequeue();
	queue.display();

  return 0;
}
