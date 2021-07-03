/* Robot in a grid

1. Prompt: the robot can move right or down from "s", and can move only 
            to indices with 0 and not 1; 
            find if there is a path from the top left to the bottom right   */


function robotInGrid(maze) {
  if (maze === null || maze.length === 0) {
    return null;
  
  } else {
    const path = [];
    //const failedPoints = {};

    if (getPath(maze, maze.length - 1, maze[0].length - 1, path)) {
      return path;
    }

    return null;
  }
}

function getPath(maze, row, col, path) {
  if (col < 0 || 
      row < 0 || 
      !maze[row][col] && maze[row][col] !== 0 ||
      maze[row][col] === 1) {
    return false;
  }

  const p = [row, col];
  // if (p in failedPoints) {
  //   return false;
  // }

  const isAtOrigin = (row === 0) && (col === 0);
  if (isAtOrigin || 
      getPath(maze, row, col - 1, path) ||
      getPath(maze, row - 1, col, path)) {
        path.push(p);
        return true;
      }

  //failedPoints[p] = true;
  return false;
}

const maze = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0]
];

console.log(robotInGrid(maze));