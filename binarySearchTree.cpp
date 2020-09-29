#include <iostream>
using namespace std;

class BST {
  struct node {
    int data;
    node* left;
    node* right;
  };

  public:
    node* root;

    BST() {
      root = NULL;
    }

    ~BST() {
      root = deleteTree(root);
    }

    void insert(int x) {
      root = insert(x, root);
    }

    void remove(int x) {
      root = remove(x, root);
    }

    void inOrder() {
      cout << "In order: ";
      inOrder_(root);
      cout << endl << endl;
    }

    void preOrder() {
      cout << "Pre order: ";
      preOrder_(root);
      cout << endl << endl;
    }

    void postOrder() {
      cout << "Post order: ";
      postOrder_(root);
      cout << endl << endl;
    }

    void levelOrder() {
      cout << "Level order: ";
      int level = 1;
      while (levelOrder_(root, level)) level++;
      cout << endl << endl;
    }

    void search(int x) {
      root = find(root, x);
      cout << "Found: " << root -> data;
      cout << endl << endl;
    }

    void findMin() {
      root = findMin_(root);
      cout << "Found: " << root -> data;
      cout << endl << endl;
    }


  node* insert(int x, node* itr) {
    if (itr == NULL) {
      itr = new node;
      itr -> data = x;
      itr -> left = itr -> right = NULL;
    } else if(x < itr -> data) itr -> left = insert(x, itr -> left);
    else if(x > itr -> data) itr -> right = insert(x, itr -> right);
    return itr;
  }

  node* remove(int x, node* itr) {
    node* temp;
    if (itr == NULL)  return NULL;
    else if (x < itr -> data) itr -> left = remove(x, itr -> left);
    else if (x > itr -> data) itr -> right = remove(x, itr -> right);
    else if (itr -> left && itr -> right) {
      temp = findMin_(itr -> right);
      itr -> data = temp -> data;
      itr -> right = remove(itr -> data, itr -> right);
    } else {
      temp = itr;
      if (itr -> left == NULL) itr = itr -> right;
      else if (itr -> right == NULL) itr = itr -> left;
      delete temp;
    }

    return itr;
  }

  node* deleteTree(node* itr) {
    if (itr == NULL) return NULL;
    deleteTree(itr -> left);
    deleteTree(itr -> right);
    delete itr;
    return NULL;
  }

  void inOrder_(node* itr) {
    if (itr == NULL) return;
    inOrder_(itr -> left);
    cout << itr -> data << " ";
    inOrder_(itr -> right);
  }

  void preOrder_(node* itr) {
    if (itr == NULL) return;
    cout << itr -> data << " ";
    inOrder_(itr -> left);
    inOrder_(itr -> right);
  }

  void postOrder_(node* itr) {
    if (itr == NULL) return;
    inOrder_(itr -> left);
    inOrder_(itr -> right);
    cout << itr -> data << " ";
  }

  bool levelOrder_(node* root, int level) {
  	if (root == nullptr) return false;
  	if (level == 1) {
  		cout << root -> data << " ";
  		return true;
  	}

  	bool left = levelOrder_(root -> left, level - 1);
  	bool right = levelOrder_(root -> right, level - 1);

  	return left || right;
  }

  node* find(node* itr, int x) {
    if (itr == NULL) return NULL;
    else if(x < itr -> data) return find(itr -> left, x);
    else if(x > itr -> data) return find(itr -> right, x);
    else return itr;
  }

  node* findMin_(node* itr) {
    if (itr == NULL) return NULL;
    else if (itr -> left == NULL)  return itr;
    else return findMin_(itr -> left);
  }

  node* findMax(node* itr) {
    if (itr == NULL)  return NULL;
    else if (itr -> right == NULL) return itr;
    else return findMax(itr -> right);
  }
};

int main() {
  BST tree;
  tree.insert(100);
  tree.insert(50);
  tree.insert(20);
  tree.insert(80);
  tree.insert(150);
  tree.insert(120);
  tree.insert(200);
  tree.remove(20);
  tree.remove(120);
  tree.remove(100);

  tree.inOrder();
  tree.preOrder();
  tree.postOrder();
  tree.levelOrder();

  //tree.search(80);
  tree.findMin();
  return 0;
}
