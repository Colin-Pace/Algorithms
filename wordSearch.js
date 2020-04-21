/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

E.g.,
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

let board =
[
  ['A','B','C','E'],
  ['S','F','C','T'],
  ['A','D','E','E'],
  ['A','B','C','E']
];
let wordOne = "ABCCED";
let wordTwo = "SEE";
let wordThree = "ABCB";
let wordFour = "ABCBCE";
let wordFive = "ECB";
let wordSix = "TEE";
let wordSeven = "EPCU";
let wordEight = "ABF";


function wordSearch(board, word) {
  let result = [];
	function firstCheck() {
		let letter = 0;
		let coordinates = [];

		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (board[i][j] === word[letter]) {
					coordinates = [i, j];
					horizontal(coordinates, letter);
				}
			}
		}
	}

	function horizontal(coordinates, letter) {
		// Word found
		if (letter === word.length - 1) {
			result.push(true);
		}

		// Board row is length one
		if (board[0].length === 1) {
			vertical(coordinates, letter);

		} else {
			// Check right
			if (coordinates[1] === 0) {
				let i = coordinates[0];
				let j = coordinates[1];
				let rightCheck = j;
				rightCheck++;
				let letterCheck = letter;
				letterCheck++;

				if (board[i][rightCheck] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[1] = rightCheck;
					horizontal(coordinates, letter);
				} else {
					vertical(coordinates, letter);
				}

			// Check left
			} else if (coordinates[1] === board[0].length - 1) {
				let i = coordinates[0];
				let j = coordinates[1];
				let leftCheck = j;
				leftCheck--;
				let letterCheck = letter;
				letterCheck++;

				if (board[i][leftCheck] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[1] = leftCheck;
					horizontal(coordinates, letter);
				} else {
					vertical(coordinates, letter)
				}

			// Check both
			} else {
				let i = coordinates[0];
				let j = coordinates[1];
				let rightCheck = j;
				rightCheck++;
				let leftCheck = j;
				leftCheck--;
				let letterCheck = letter;
				letterCheck++;

				if (board[i][rightCheck] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[1] = rightCheck;
					horizontal(coordinates, letter);
				} else if (board[i][leftCheck] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[1] = leftCheck;
					horizontal(coordinates, letter);
				} else {
					vertical(coordinates, letter);
				}
			}
		}
	}

	function vertical(coordinates, letter) {
		if (board.length === 1) {
			console.log("No vertical check");

		} else {
			// Check down
			if (coordinates[0] === 0) {
				let i = coordinates[0];
				let j = coordinates[1];
				let downCheck = i;
				downCheck++;
				let letterCheck = letter;
				letterCheck++;

				if (board[downCheck][j] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[0] = downCheck;
					horizontal(coordinates, letter);
				}

			// Check up
			} else if (coordinates[0] === board.length - 1) {
				let i = coordinates[0];
				let j = coordinates[1];
				let upCheck = i;
				upCheck--;
				let letterCheck = letter;
				letterCheck++;

				if (board[upCheck][j] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[0] = upCheck;
					horizontal(coordinates, letter);
				}

			// Check both
			} else {
				let i = coordinates[0];
				let j = coordinates[1];
				let downCheck = i;
				downCheck++;
				let upCheck = i;
				upCheck--;
				let letterCheck = letter;
				letterCheck++;

				if (board[downCheck][j] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[0] = downCheck;
					horizontal(coordinates, letter);
				} else if (board[upCheck][j] === word[letterCheck]) {
					letter = letterCheck;
					coordinates[0] = upCheck;
					horizontal(coordinates, letter);
				}
			}
		}
	}

	firstCheck();

	if (result.length > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(wordSearch(board, wordOne));
