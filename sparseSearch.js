// Find the index of a string that is in an array of strings. The array of strings is interspersed with empty strings.

function search(strings, str, first, last) {
  if (strings === null || str === null || str === "") return -1;

  if (first >= last) return -1;
  let mid = Math.floor((last + first) / 2);

  if (!strings[mid].length) {
    let left = mid - 1;
    let right = mid + 1;
    while (true) {
      if (left < first && right > last) return -1;
      else if (right <= last && strings[right].length) {
        mid = right;
        break;
      } else if (left >= first && strings[left].length) {
        mid = left;
        break;
      }
      right++;
      left--;
    }
  }

  if (str === strings[mid]) return mid;
  else if (strings[mid].localeCompare(str) < 0) {
    return search(strings, str, mid + 1, last);
  } else return search(strings, str, first, mid - 1);
}

const withEmpty = ['at', '', 'ball', '', 'car', 'plaid'];
console.log(search(withEmpty, 'car', 0, withEmpty.length));
