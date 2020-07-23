// Implement a trie with add, search, and startsWith methods

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

  stringPreparation(sentence_) {
    const len = sentence_.length;
    let lowerCase = "";
    for (let i = 0; i < len; i++) {
      lowerCase += sentence_[i].toLowerCase();
    }

    let temp = "";
    for (let i = 0; i < lowerCase.length; i++) {
      const integer = lowerCase.charCodeAt(i)
      if (65 <= integer && integer <= 90) {
        temp += lowerCase[i];
      } else if (97 <= integer && integer <= 122) {
        temp += lowerCase[i];
      } else if (integer === 32) {
        temp += lowerCase[i];
      } else if (integer === 39) {
        temp += lowerCase[i];
      } else if (integer === 45) {
        temp += lowerCase[i];
      }
    }

    const result = temp.split(" ");
    return result;
  }

  add(data) {
    if (!data) return null;
    const letters = data.split('');
    letters.push('*');
    const len = letters.length;
    let i = 0, marker = this.root;

    if (!this.root) this.root = new Node('root');
    marker = this.root;

    while (i < len) {
      const adj = marker.adj, len_ = adj.length;;
      if (!adj.length) {
        adj.push(new Node(letters[i]));
        marker = adj[0];

      } else {
        for (let j = 0; j < len_; j++) {
          if (adj[j].data === letters[i]) {
            marker = adj[j];
            break;

          } else if (j === len_ - 1) {
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
      const len = letters.length;
      let i = 0, marker = this.root;

      while (i < len) {
        const adj = marker.adj, len_ = adj.length;
        for (let j = 0; j < len_; j++) {
          if (letters[i] === '*' && adj[j].data === '*') return true;
          else if (letters[i] === adj[j].data) {
            marker = adj[j];
            break;
          } else if (j === len_ - 1) return false;
        }

        i++;
      }
    }
  }

  startsWith(data) {
    if (!data || !this.root) return null;
    else {
      const letters = data.split('');
      const len = letters.length;
      let i = 0, marker = this.root;

      while (i < len) {
        const adj = marker.adj, len_ = adj.length;
        for (let j = 0; j < len_; j++) {
          if (i === len - 1 && letters[i] === adj[j].data) return true;
          else if (letters[i] === adj[j].data) {
            marker = adj[j];
            break;
          } else if (j === len_ - 1) return false;
        }

        i++;
      }
    }
  }
}

const trie = new Trie;

let sentence = "Immediately, and according to custom, the ramparts of Fort Saint-Jean were covered with spectators; it is always an event at Marseilles for a ship to come into port, especially when this ship, like the Pharaon, has been built, rigged, and laden at the old Phocee docks, and belongs to an owner of the city.";

const sentence_ = trie.stringPreparation(sentence);

sentence_.forEach(word => trie.add(word));

console.log(trie.search(''));
console.log(trie.search('immediately'));
console.log(trie.search('ship'));
console.log(trie.search('city'));
console.log(trie.search('and'));
console.log(trie.search('saint-jean'));

console.log('\n');
console.log(trie.startsWith('alway'));
console.log(trie.startsWith('rig'));
console.log(trie.startsWith('own'));
console.log(trie.startsWith('even'));
console.log(trie.startsWith('incorrect'));

console.log(trie.root.adj[0].adj);
