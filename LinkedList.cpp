#include <iostream>
using namespace std;


struct node {
	int data;
	node *next;
};

class list {
	private:
	 node *head, *tail;

	public:
		list() {
			head = NULL;
			tail = NULL;
		}

	void append(int value) {
		node *itr = new node;
		itr -> data = value;
		itr -> next = NULL;

		if (head == NULL) {
			head = itr;
			tail = itr;
			itr = NULL;
		} else {
			tail -> next = itr;
			tail = itr;
		}
	}

	void insertFirst(int value) {
		node *itr = new node;
		itr -> data = value;
		itr -> next = head;
		head = itr;
	}

	void insertByPosition(int pos, int value) {
		node *pre = new node;
		node *cur = new node;
		node *itr = new node;
		cur = head;

		for (int i = 1; i < pos; i++) {
			pre = cur;
			cur = cur -> next;
		}

		itr -> data = value;
		pre -> next = itr;
		itr -> next = cur;
	}

	void deleteFirst() {
		node *itr = new node;
		itr = head;
		head = head -> next;
		delete itr;
	}

	void deleteLast() {
		node *current = new node;
		node *previous = new node;
		current = head;

		while (current -> next != NULL) {
			previous = current;
			current = current -> next;
		}

		tail = previous;
		previous -> next = NULL;
		delete current;
	}

	void deleteByPosition(int pos) {
		node *current = new node;
		node *previous = new node;
		current = head;

		for (int i = 1; i < pos; i++) {
			previous = current;
			current = current -> next;
		}

		previous -> next = current -> next;
	}

	void display() {
		node *itr = new node;
		itr = head;
		int count = 0;

		cout << "Nodes in list: ";
		while (itr != NULL) {
			cout << itr -> data <<" ";
			count++;
			itr = itr -> next;
		}

		cout << "\nNodal count: " << count << "\n\n";
	}

	void makeIntoCircle() {
		node *itr = new node;
		itr = head;

		while (itr -> next != NULL) itr = itr -> next;
		itr -> next = head;
	}

	void detectLoop() {
		node *fast = new node;
		node *slow = new node;

		fast = head;
		slow = head;

		while (fast != NULL && fast -> next != NULL) {
			fast = fast -> next -> next;
			slow = slow -> next;
			if (fast == slow) break;
		}

		if (fast == NULL || fast -> next == NULL) cout << "Null";
		else {
			fast = head;
			while (fast != slow) {
				fast = fast -> next;
				slow = slow -> next;
			}

			cout << "Loop starts at node: " << fast -> data;
		}
	}
};

int main() {
	list list;
	list.append(10);
	list.append(20);
	list.append(30);
	list.append(40);
	list.append(50);

	list.insertFirst(5);
	list.insertByPosition(2, 8);

	list.deleteFirst();
	list.deleteLast();
	list.deleteByPosition(2);

	list.display();

	list.makeIntoCircle();
	list.detectLoop();

	return 0;
}
