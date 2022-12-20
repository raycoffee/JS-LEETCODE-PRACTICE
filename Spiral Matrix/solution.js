// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  let output = [];

  while (rowStart <= rowEnd && colStart <= colEnd) {
    //From top left to top right, traverse 1st row
    for (let i = colStart; i <= colEnd; i++) {
      output.push(matrix[rowStart][i]);
    }
    rowStart++;
    //From top right to bottom right, traverse last column
    for (let i = rowStart; i <= rowEnd; i++) {
      output.push(matrix[i][colEnd]);
    }

    colEnd--;

    //check if more blocks are left:

    if (rowStart <= rowEnd) {
      //traverse from bottom left to right, traverse last row
      for (let i = colEnd; i >= colStart; i--) {
        output.push(matrix[rowEnd][i]);
      }
    }

    rowEnd--;

    //check if more blocks are left
    if (colStart <= colEnd) {
      //travserse from bottom right to top, traverse first column
      for (let i = rowEnd; i >= rowStart; i--) {
        output.push(matrix[i][colStart]);
      }
    }
    colStart++;
  }
  return output;
};
