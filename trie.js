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
console.log('Trie');
console.time();
letters.insert('apple');
letters.insert('app');
letters.insert('application');
letters.insert('apples');
console.timeEnd();
console.log('\n');
// console.log(letters.search('apples'));
// console.log(letters.startsWith('ap'));




// Improvement of insertion asymptotic time complexity

class Trie_ {
  constructor() {
    this.root = null;
  }

  insert(data) {
    if (!data) return null;
    const letters = data.split('');
    letters.push('*');
    const l = letters.length;
    let i = 0, marker = this.root;

    while (i < l) {
      if (!this.root) {
        this.root = new Node(letters[0]);
        marker = this.root;
        i++;

      } else {
        const adj = marker.adj;
        if (adj.length === 0) {
          adj.push(new Node(letters[i]));
          i++;
          marker = adj[0];

        } else {
          if (i === 0) {
            if (letters[0] !== this.root.data) return null;
            else i = 1;
          }

          const len = adj.length;
          for (let j = 0; j < len; j++) {
            if (adj[j].data === letters[i]) {
              marker = adj[j];
              break;

            } else if (adj[j].data !== letters[i] && j === len - 1) {
              adj.push(new Node(letters[i]));
              marker = adj[len];
            }
          }
          i++;
        }
      }
    }
  }
}

const alphabet = new Trie_;
console.log('Trie_:');
console.time();
alphabet.insert('apple');
alphabet.insert('app');
alphabet.insert('application');
alphabet.insert('apples');
console.timeEnd();
console.log('\n');
//console.log(alphabet.root.adj[0]);
