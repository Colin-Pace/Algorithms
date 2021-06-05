// Find if an unsorted integer array contains four elements who have a given sum

class Pair {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function hasQuadruplets(A, n, sum) {
  const map = {};
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const val = sum - (A[i] + A[j]);
      
      if (val in map) {
        for (let k = 0; k < map[val].length; k++) {
          const x = map[val][k].x;
          const y = map[val][k].y;
          if ((x !== i && x !== j) && (y !== i && y !== j)) {
            return A[i] + ", " + A[j] + ", " + A[x] + ", " + A[y];
          }
        }
      }

      map[A[i] + A[j]] = [];
      map[A[i] + A[j]].push(new Pair(i, j));
    }
  }

  return false;
}

const A = [2, 7, 4, 0, 9, 5, 1, 3];
const sum = 20;
console.log(hasQuadruplets(A, A.length, sum));