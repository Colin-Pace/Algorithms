// Find a way out of the maze. If a location has an asterisk, it's non traversable

const maze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

// const maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];

const R = maze.length;
const C = maze[0].length;
const visited = {};
const mr = [-1, +1, 0, 0];
const mc = [0, 0, +1, -1];
const start = [0, 0];
const escape = [];
escape.push(start);
visited[start] = true;

const findPath = (r, c) => {
  for (let i = 0; i < 4; i++) {
    const rr = r + mr[i];
    const cc = c + mc[i];
    if ((rr < 0 || cc < 0) || (rr >= R || cc >= C) || (maze[rr][cc] === '*')) {
      continue;
    } else {
      if (maze[rr][cc] === 'e') {
        escape.push('e');
        return escape;
      }
      const pair = [rr, cc];
      if (pair in visited) continue;
      escape.push(pair);
      visited[pair] = true;
      findPath(rr, cc);
    }
  }
  return escape;
}
console.log(findPath(0, 0));
