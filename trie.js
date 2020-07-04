// Implement a trie with add, search, and startsWith methods

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

  add(data) {
    if (!data) return null;
    const letters = data.split('');
    letters.push('*');
    const l = letters.length;
    let i = 0, marker = this.root;

    if (!this.root) this.root = new Node('root');
    marker = this.root;

    while (i < l) {
      const adj = marker.adj, l_ = adj.length;;
      if (!adj.length) {
        adj.push(new Node(letters[i]));
        marker = adj[0];

      } else {
        for (let j = 0; j < l_; j++) {
          if (adj[j].data === letters[i]) {
            marker = adj[j];
            break;

          } else if (j === l_ - 1) {
            adj.push(new Node(letters[i]));
            marker = adj[adj.length - 1];
          }
        }
      }

      i++;
    }
  }

  search(data) {
    if (!data || !this.root) return null;
    else {
      const letters = data.split('');
      letters.push('*');
      const l = letters.length;
      let i = 0, marker = this.root;

      while (i < l) {
        const adj = marker.adj, l_ = adj.length;
        for (let j = 0; j < l_; j++) {
          if (letters[i] === '*' && adj[j].data === '*') return true;
          else if (letters[i] === adj[j].data) {
            marker = adj[j];
            break;
          } else if (j === l_ - 1) return false;
        }

        i++;
      }
    }
  }

  startsWith(data) {
    if (!data || !this.root) return null;
    else {
      const letters = data.split('');
      const l = letters.length;
      let i = 0, marker = this.root;

      while (i < l) {
        const adj = marker.adj, l_ = adj.length;
        for (let j = 0; j < l_; j++) {
          if (i === l - 1 && letters[i] === adj[j].data) return true;
          else if (letters[i] === adj[j].data) {
            marker = adj[j];
            break;
          } else if (j === l_ - 1) return false;
        }

        i++;
      }
    }
  }
}

const alphabet = new Trie;

const dictionary = ['apple', 'apples', 'application', 'app', 'billiards', 'baskets', 'ballads', 'buckets', 'biscuits', 'cars', 'car', 'class', 'dogs', 'docks', 'doors', 'drapes', 'dramaturgy'];

dictionary.forEach(word => alphabet.add(word));

console.log(alphabet.search('apple'));
console.log(alphabet.search('application'));
console.log(alphabet.search('biscuits'));
console.log(alphabet.search('docks'));

console.log('\n');
console.log(alphabet.startsWith('ap'));
console.log(alphabet.startsWith('applicat'));
console.log(alphabet.startsWith('applicats'));
console.log(alphabet.startsWith('drama'));
