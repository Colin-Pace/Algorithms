/* Rotate an N x N matrix by 90 degrees

Big O
1. Time: O(b ^ 2)
2. Space: O(b)         */


let matrix = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
]


function rotateMatrix(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) {
    return false;
  }

  const b = matrix.length;
  for (let layer = 0; layer < b / 2; layer++) {
    const first = layer;
    const last = b - 1 - layer;
    
    for (let i = first; i < last; i++) {
      const offset = i - first;
      const top = matrix[first][i];
      
      matrix[first][i] = matrix[last - offset][first];
      matrix[last - offset][first] = matrix[last][last - offset];
      matrix[last][last - offset] = matrix[i][last];
      matrix[i][last] = top;
    }
  }

  return matrix;
}


console.log(rotateMatrix(matrix));

/*

      Notes:
        1. First is equal to layer
        2. Last is equal to the length minus the layer
        3. The iterator i iterates along a layer from the beginning to the end
        4. Offset is equal to the iterator minus the layer
              1. Offset is used to iterate from the end of a layer to the beginning
              2. So offset is counterpart to the iterator i
        5. Top saves the value of the element at the iterator on the current layer
        6. The update pattern
              1. Top left by bottom left
              2. Bottom left by bottom right
              3. Bottom right by top right
              4. Top right by top left
                    1. Because the top left is the first to be updated,
                        the value of the element is saved in a variable
                    2. This is the only element that is saved in a variable,
                        and the other elements are moved

      iteration 1
        1. b = 4
        2. layer = 0
        3. first = 0
        4. last = 3
        
        iteration 1.1
            1. i = 0
            2. offset = 0
            3. top = 1

            [
              [13,  2,  3,  1],
              [5,   6,  7,  8],
              [9,  10, 11, 12],
              [16, 14, 15,  4]
            ]

        iteration 1.2
            1. i = 1
            2. offset = 1
            3. top = 2

            [
              [13,  9,  3,  1],
              [5,   6,  7,  2],
              [15,  10, 11, 12],
              [16,  14,  8,  4]
            ]

        iteration 1.3
        1. i = 2
        2. offset = 2
        3. top = 3

        [
          [13,   9,  5,  1],
          [14,   6,  7,  2],
          [15,  10, 11,  3],
          [16,  12,  8,  4]
        ]

      iteration 2
        1. b = 4
        2. layer = 1
        3. first = 1
        4. last = 2

        iteration 2.1
            1. i = 1
            2. offset = 0
            3. top = 6

            [
              [13,   9,  5,  1],
              [14,  10,  6,  2],
              [15,  11,  7,  3],
              [16,  12,  8,  4]
            ]

  */