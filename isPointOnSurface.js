/*
If the x-y coordinates of a rectangle or square and,
  those of a point are given,
then,
  write a function that returns,
    whether the point is contained in the rectangle or square;

For example,
  if,
    the rectangle or square were to have,
      the coordinates of [[0, 0], [5, 0], [5, 10], [0, 10]],
    and the point the coordinates of [3, 7],
  then,
    the function would return true;

So too,
  if,
    the rectangle or square were to have,
      the coordinates of [[0, 0], [5, 0], [5, 10], [0, 10]],
    and the point the coordinates of [12, 7],
  then,
    the function would return false
*/
let surfaceDimensions = [[0, 0], [0, 10], [5, 0], [10, 10]];
let onSurfacePoint = [3, 7];
let notOnSurfacePoint = [12, 7];
function isPointOnSurface(surfDim, pointCoords) {
  let xRange;
  let yRange;

  for (let i = 1; i < surfDim.length; i++) {
    if (surfDim[i-1][0] !== surfDim[i][0]) {
      xRange = [surfDim[i-1][0], surfDim[i][0]]
      break;
    }
  }
  for (let i = 1; i < surfDim.length; i++) {
    if (surfDim[i-1][1] !== surfDim[i][1]) {
      yRange = [surfDim[i-1][1], surfDim[i][1]]
      break;
    }
  }

  if (  pointCoords[0] > xRange[0] &&
        pointCoords[0] < xRange[1] ) {

    if (  pointCoords[1] > yRange[0] &&
          pointCoords[1] < yRange[1]) {
            return true;
    } else if (  pointCoords[1] < yRange[0] &&
                 pointCoords[1] > yRange[1]) {
                    return true;
    }
  } else if ( pointCoords[0] < xRange[0] &&
              pointCoords[0] > xRange[1]) {
    if ( pointCoords[1] > yRange[0] &&
         pointCoords[1] < yRange[1]) {
      return true;
    } else if ( pointCoords[1] < yRange[0] &&
                pointCoords[1] > yRange[1]) {
      return true;
    }
  }
  return false;
}
//console.log(isPointOnSurface(surfaceDimensions, onSurfacePoint));
//console.log(isPointOnSurface(surfaceDimensions, notOnSurfacePoint));
