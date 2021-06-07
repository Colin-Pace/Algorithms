/* Box stacking
1. https://www.techiedelight.com/box-stacking-problem/  */

class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
}

function createAllRotations(boxes) {
  const rotations = [];
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    rotations.push(box);
    rotations.push(new Box(Math.max(box.length, box.height), Math.min(box.length, box.height), box.width));
    rotations.push(new Box(Math.max(box.width, box.height), Math.min(box.width, box.height), box.length));
  }

  return rotations;
}

function findMaxHeight(boxes) {
  const rotations = createAllRotations(boxes);
  rotations.sort((a, b) => {
    return (b.length * b.width) - (a.length * a.width);
  });

  let max_height = new Array(rotations.length).fill(0);
  for (let i = 0; i < rotations.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rotations[i].length < rotations[j].length &&
          rotations[i].width < rotations[j].width) {
            max_height[i] = Math.max(max_height[i], max_height[j]);
          }
    }

    max_height[i] += rotations[i].height;
  }

  let result = 0;
  for (let i = 0; i < max_height.length; i++) {
    if (max_height[i] > result) {
      result = max_height[i];
    }
  }
  return result;
}

const boxes = [
  new Box(4, 2, 5),
  new Box(3, 1, 6),
  new Box(3, 2, 1),
  new Box(6, 3, 8)
];
console.log(findMaxHeight(boxes));