// Implement a trie with insert, search, and startsWith methods.

class Node {
  constructor(data, adj) {
    this.data = data;
    this.adj = [];
  }
}

class Trie {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!data) return null;
    const letters = data.split('');
    letters.push('*');
    let i = 0;

    while (i < letters.length - 1) {
      if (!this.root) this.root = new Node(letters[0]);
      let index = 0;

      const searchTree = function(itr) {
        if (!itr.adj.length && itr.data !== '*') {
          return itr.adj.push(new Node(letters[index + 1]));
        } else {
          if (letters[index] === itr.data) {
            const l = itr.adj.length;
            for (let i = 0; i < l; i++) {
              if (letters[index + 1] === itr.adj[i].data) {
                index++;
                return searchTree(itr.adj[i]);
              } else if (i === l - 1) {
                return itr.adj.push(new Node(letters[index + 1]));
              }
            }
          }
        }
      }
      searchTree(this.root);
      i++;
    }
  }

  search(data) {
    if (!data || !this.root) return null;
    const letters = data.split('');
    letters.push('*');
    let i = 0;

    while (i < letters.length - 1) {
      if (!this.root) return null;
      let index = 0, found = false;

      const searchTree = function(itr) {
        if (letters[index] === itr.data) {
          const l = itr.adj.length;
          for (let i = 0; i < l; i++) {
            if (itr.adj[i].data === '*' && letters[index + 1] === '*') {
              found = true;
            } else if (letters[index + 1] === itr.adj[i].data) {
              index++;
              return searchTree(itr.adj[i]);
            }
          }
        }

      }
      searchTree(this.root);
      if (found === true) return true;
      i++;
    }

    return false;
  }

  startsWith(data) {
    if (!data || !this.root) return null;
    const letters = data.split('');
    let i = 0;

    while (i < letters.length - 1) {
      if (!this.root) return null;
      let index = 0, found = false;

      const searchTree = function(itr) {
        if (letters[index] === itr.data) {
          if (index === letters.length - 1) found = true;
          const l = itr.adj.length;
          for (let i = 0; i < l; i++) {
            if (letters[index + 1] === itr.adj[i].data ) {
              index++;
              return searchTree(itr.adj[i]);
            }
          }
        }
      }
      searchTree(this.root);
      if (found === true) return true;
      i++;
    }
    return false;
  }
}

const letters = new Trie;
letters.insert('apple');
letters.insert('app');
letters.insert('application');
console.log(letters.search('app'));
console.log(letters.startsWith('ap'));
