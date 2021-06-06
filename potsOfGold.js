// Pots of gold game: https://www.techiedelight.com/pots-gold-game-dynamic-programming/

function findMaxCoinsRecursive(coins, i, j, lookup) {
  if (i === j) {
    return coins[i];
  }

  if (i + 1 === j) {
    return Math.max(coins[i], coins[j]);
  }

  if (lookup[i][j] === 0) {
    const start = coins[i] + 
                  Math.min(findMaxCoinsRecursive(coins, i + 2, j, lookup), 
                           findMaxCoinsRecursive(coins, i + 1, j - 1, lookup));
    const end = coins[j] +
                Math.min(findMaxCoinsRecursive(coins, i + 1, j - 1, lookup), 
                         findMaxCoinsRecursive(coins, i, j - 2, lookup));

    lookup[i][j] = Math.max(start, end);
  }

  return lookup[i][j];
}

function findMaxCoins(coins) {
  const calculate = function(table, i, j) {
    if (i <= j) {
      return table[i][j];
    }
    return 0;
  }

  const n = coins.length;
  if (n === 1) {
    return coins[0];
  } else if (n === 2) {
    return Math.max(coins[0], coins[1]);
  } else {
    const table = new Array(n).fill().map(() => new Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
      for (let j = 0, k = i; k < n; j++, k++) {
        const start = coins[j] + Math.min(calculate(table, j + 2, k),
                                           calculate(table, j + 1, k - 1));
        const end = coins[k] + Math.min(calculate(table, j + 1, k - 1),
                                        calculate(table, j, k - 2));
        table[j][k] = Math.max(start, end);
      }
    }

    return table[0][n - 1];
  }
}

const coins = [4, 6, 2, 3];
const lookup = new Array(coins.length).fill().map(() => new Array(coins.length).fill(0));
console.log(findMaxCoinsRecursive(coins, 0, coins.length - 1, lookup));
console.log(findMaxCoins(coins));